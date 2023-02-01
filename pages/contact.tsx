import Head from "next/head";
import { Fragment } from "react";
import BackHome from "../components/back-home";
import ContactForm from "../components/contact-form";
import PageTitle from "../components/page-title";

// Contactページ
export default function Contact() {
  return (
    <Fragment>
    <Head>
    <title>Contact</title>
      <meta name="description" content="Contact" />
    </Head>
    <div>
      <BackHome>CONTACT</BackHome>
      <PageTitle>CONTACT</PageTitle>
      <ContactForm />
    </div>
    </Fragment>
  );
}
