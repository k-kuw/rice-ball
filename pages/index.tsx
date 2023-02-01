import { Fragment } from "react";
import HomeTop from "../components/home/home-top";
import HomeAbout from "../components/home/home-about";
import HomeMenu from "../components/home/home-menu";
import HomeAccess from "../components/home/home-access";
import Head from "next/head";

// Homeページ
export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <HomeTop />
      <HomeAbout />
      <HomeMenu />
      <HomeAccess />
    </Fragment>
  );
}
