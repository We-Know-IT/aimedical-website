import Head from "next/head";
import Header from "../components/general/header";

const actionButton = {
  text: "Go back home",
  href: "/",
};

export default function NotFound() {
  return (
    <>
      <Head>
        <title>AI Medical</title>
      </Head>
      <Header
        imageUrl="/images/header.jpg"
        title="404 Not found"
        text="Wow looks like you got lost, but don't worry we can help you get back home."
        fullHeight
        actionButton={actionButton}
      />
    </>
  );
}
