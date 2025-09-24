import Head from "next/head";
import Header from "../components/general/Header";

const actionButton = {
  children: "Go back home",
  href: "/",
};

export default function NotFound() {
  return (
    <>
      <Head>
        <title>AI Medical</title>
      </Head>
      <Header
        imageUrl="/images/header.png"
        title="404 Not found"
        text="Looks like you got lost, but don't worry we can help you get back home."
        fullHeight
        actionButton={actionButton}
      />
    </>
  );
}
