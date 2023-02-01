import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../lib/db";
import type { MysqlError, OkPacket } from "mysql";

// フロントへ送信するデータ型定義
type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // リクエストがPOSTの時、MySQLにデータ送信
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "無効な入力です" });
    }

    const sql = `INSERT INTO contacts (name, email, message) VALUES ("${name}", "${email}", "${message}");`;

    db.query(sql, (error: MysqlError, response: OkPacket) => {
      if (error) throw error;
    });
    res.status(201).json({ message: "成功しました!" });
  }
}
