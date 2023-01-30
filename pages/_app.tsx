import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Fragment } from "react";
import Layout from "../components/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Rice Ball</title>
        <meta name="description" content="rice ball app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
