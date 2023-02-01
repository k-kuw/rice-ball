import Link from "next/link";
import { useEffect, useState } from "react";

// 各ページからのHOME画面への遷移リンク
function BackHome(props: { children: React.ReactNode }) {
  return (
    <div className="is-family-code is-size-5 m-3">
      <Link href="/">HOME</Link>
      <span>{` < ${props.children}`}</span>
    </div>
  );
}

export default BackHome;
