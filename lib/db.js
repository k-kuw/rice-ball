import serverlessMysql from "serverless-mysql";

// MySQLとの接続
export const db = serverlessMysql({
  config: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
  },
});

// MySQLのitemsテーブルデータ取得
export async function getItemSOL() {
  const results = await db.query("SELECT * FROM items");
  await db.end();
  return results
}
