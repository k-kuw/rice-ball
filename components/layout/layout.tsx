import { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";
import classes from "./layout.module.css"

const Layout = (props: any) => {
  return (
    <Fragment>
      <Header />
      <hr className={`${classes.border} m-0 p-0`} />
      <main>{props.children}</main>
      <hr className={`${classes.border} m-0 p-0`} />

      <Footer />
    </Fragment>
  );
};

export default Layout;
