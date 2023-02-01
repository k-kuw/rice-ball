import Head from "next/head";
import { Fragment } from "react";
import AccessMap from "../components/access-map";
import BackHome from "../components/back-home";
import PageTitle from "../components/page-title";

// Accessページ
export default function Access() {
  return (
    <Fragment>
    <Head>
    <title>Access</title>
      <meta name="description" content="Access" />
    </Head>
    <div>
      <BackHome>ACCESS</BackHome>
      <PageTitle>ACCESS</PageTitle>
      <div className="ml-6 mr-6">
        <AccessMap />
        <div className="has-text-centered mb-6">
          <p className="is-size-3 m-4">
            住所：〒000-0000 東京都新宿区新宿0-0-0
          </p>
          <p className="is-size-3 m-4">電話番号：00-0000-0000</p>
        </div>
      </div>
    </div>
    </Fragment>
  );
}
