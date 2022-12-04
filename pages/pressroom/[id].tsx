import { GetServerSideProps } from "next";
import Head from "next/head";
import { getPost } from "../../services/api";
import { Post } from "../../services/types";

export default function PostDetails() {
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
  data: Post | null;
  error: string | null;
}> = async (context) => {
  const postId = parseInt(context.params?.id as string);
  const res = await getPost(postId);

  if (res.error == "Not Found") {
    return {
      notFound: true,
    };
  }

  return { props: res };
};
