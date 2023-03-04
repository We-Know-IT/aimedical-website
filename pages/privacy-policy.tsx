import Head from "next/head";
import React, { isValidElement } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Header from "../components/general/header";
import remarkGfm from "remark-gfm";
import privacyPolicy from "../texts/privacy-policy.md";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>AI Medical | Privacy Policy </title>
        <meta name="description" content="Privacy Policy" />
      </Head>
      <Header imageUrl="/images/header.jpg" title="Privacy Policy" />
      <main className="my-12 ml-auto mr-auto max-w-5xl px-6">
        <ReactMarkdown
          components={{
            h1: (props) => {
              return (
                <h3 className="my-6 text-4xl font-bold text-primary">
                  {props.children[0]}
                </h3>
              );
            },
            p: (props) => {
              return (
                <p className="text-md mt-4 whitespace-pre-wrap text-on-bg-primary">
                  {props.children}
                </p>
              );
            },
            li: (props) => {
              // The markdown is being parsed differently. When the length is one, it seems to be a string.
              // When the length is two, it seems to be an array with the first element being a new line "\n" and the second element being the element itself (<p> tag)
              // This is a hacky way to get around this issue.
              if (props.children.length === 1) {
                return (
                  <li>
                    <p className="text-md whitespace-pre-wrap text-on-bg-primary">
                      {props.children[0]}
                    </p>
                  </li>
                );
              }
              if (isValidElement(props.children[1])) {
                return (
                  <li>
                    <p className="text-md whitespace-pre-wrap text-on-bg-primary">
                      {props.children[1].props.children[0]}
                    </p>
                  </li>
                );
              }
              return <li>{props.children}</li>;
            },
            ul: (props) => {
              return <ul className="ml-4 list-disc">{props.children}</ul>;
            },
          }}
          remarkPlugins={[remarkGfm]}>
          {privacyPolicy}
        </ReactMarkdown>
        <p className="my-4 whitespace-pre-wrap text-lg text-on-bg-primary"></p>
      </main>
    </>
  );
}
