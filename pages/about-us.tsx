import Head from "next/head";
import { Fragment } from "react";
import AboutUsItem from "../components/about-us-item";
import BackHome from "../components/back-home";
import PageTitle from "../components/page-title";

// AboutUsページ
export default function AboutUs() {
  return (
    <Fragment>
      <Head>
      <title>About Us</title>
        <meta name="description" content="About us" />
      </Head>
    <div className="pb-6">
      <BackHome>ABOUT US</BackHome>
      <PageTitle>ABOUT US</PageTitle>
      <ul className="pt-6">
        <AboutUsItem title="にぎりたて" image="home-about" addClass="">
          にぎりたてを提供できるようにしています
        </AboutUsItem>
        <AboutUsItem
          title="魚沼産コシヒカリ使用"
          image="home-about"
          addClass="is-flex-direction-row-reverse"
        >
          魚沼産コシヒカリを使用しています
        </AboutUsItem>
        <AboutUsItem title="国産原料のみ使用" image="home-about" addClass="">
          具材も国産原料にこだわっています
        </AboutUsItem>
      </ul>
    </div>
    </Fragment>
  );
}
