import Head from "next/head";
import { Fragment } from "react";
import BackHome from "../components/back-home";
import Item from "../components/item";
import PageTitle from "../components/page-title";
import { getItemSOL } from "../lib/db";

// 商品情報型定義
type Item = {
  id: number;
  name: string;
  price: number;
};

// Menuページ
export default function Menu(props: { data: Item[] }) {
  const items = props.data;
  if (!items) {
    return <p>Loading...</p>;
  }
  if (items.length === 0) {
    return <p>商品なし</p>;
  }

  return (
    <Fragment>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Menu" />
      </Head>
      <BackHome>MENU</BackHome>
      <PageTitle>MENU</PageTitle>
      <Item items={items} />
    </Fragment>
  );
}

// MySQLの商品情報取得(サーバーサイド)
export async function getStaticProps() {
  const mysqlData = await getItemSOL();
  const dataObject = await JSON.parse(JSON.stringify(mysqlData));
  return {
    props: { data: dataObject },
    revalidate: 600,
  };
}
