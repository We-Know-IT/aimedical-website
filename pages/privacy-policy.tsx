import Head from "next/head";
import React from "react";
import Header from "../components/general/Header";
import PrivacyPolicyContent from "../components/privacy-policy/PrivacyPolicyContent";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>AI Medical | Privacy Policy </title>
        <meta name="description" content="Privacy Policy" />
      </Head>
      <Header imageUrl="/images/header.jpg" title="Privacy Policy" />
      <main className="container ml-auto mr-auto max-w-3xl px-6 ">
        <PrivacyPolicyContent />
      </main>
    </>
  );
}
