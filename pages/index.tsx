import { Fragment } from "react";
import HomeTop from "../components/home/home-top";
import HomeAbout from "../components/home/home-about";
import HomeMenu from "../components/home/home-menu";
import HomeAccess from "../components/home/home-access";

export default function Home() {
  return (
    <Fragment>
      <HomeTop />
      <HomeAbout />
      <HomeMenu />
      <HomeAccess />
    </Fragment>
  );
}
