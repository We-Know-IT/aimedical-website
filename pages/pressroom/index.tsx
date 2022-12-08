import { GetServerSideProps } from "next";
import Head from "next/head";
import { getPosts } from "../../services/api";
import { Post } from "../../services/types";

// bloggs and news! not sure what to call it

export default function PressRoom() {
  return (
    <>
      <Head>
        <title>AI Medical | Pressroom </title>
        <meta name="description" content="News and blog from AI Medical" />
      </Head>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: Post[] | null;
  error: string | null;
}> = async () => {
  const res = await getPosts();
  return { props: res };
};
