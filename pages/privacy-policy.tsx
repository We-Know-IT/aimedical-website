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
      <main className="container font-robotoFlex font-normal ml-auto mr-auto max-w-3xl px-6 ">
        <PrivacyPolicyContent />
      </main>
    </>
  );
}
