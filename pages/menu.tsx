import BackHome from "../components/back-home";
import Item from "../components/item";
import PageTitle from "../components/page-title";
import getMySOL from "../lib/db";

export default function Menu(props: any) {
  const items = props.data;
  if (!items) {
    return <p>Loading...</p>;
  }
  if (items.length === 0) {
    return <p>商品なし</p>;
  }

  return (
    <div>
      <BackHome>MENU</BackHome>
      <PageTitle>MENU</PageTitle>
      <Item items={items} />
    </div>
  );
}

export async function getStaticProps() {
  const mysqlData = await getMySOL();
  const dataObject = await JSON.parse(JSON.stringify(mysqlData));
  return {
    props: { data: dataObject },
    revalidate: 600,
  };
}
