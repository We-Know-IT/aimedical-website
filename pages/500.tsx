import Head from "next/head";
import Header from "../components/general/Header";
const actionButton = {
  children: "Go back home",
  href: "/",
};

export default function Error() {
  return (
    <>
      <Head>
        <title>AI Medical</title>
      </Head>
      <Header
        imageUrl="/images/header.png"
        title="500 Server error"
        text="It seems there was an issue connecting to the server, please try again later."
        fullHeight
        actionButton={actionButton}
      />
    </>
  );
}
