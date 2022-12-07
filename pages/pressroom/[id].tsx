import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../../components/general/header";
import { getPost, ServiceResponse } from "../../services/api";
import { Post } from "../../services/types";
import { mediaBaseUrl } from "../../strapi/strapi";

export default function PostDetails(props: ServiceResponse<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <title>AI Medical | Pressroom </title>
        <meta name="description" content="News and blog from AI Medical" />
      </Head>
      <Header
        text="Blog post"
        imageUrl={mediaBaseUrl + post?.images[0].url || "/images/header.png"}
      />
      <main className="max-w-5xl ml-auto mr-auto px-6">
        <h2 className="text-blue-100 text-2xl mt-24 mb-10">{post?.title}</h2>
        <p className="text-2xl font-medium mb-10">{post?.ingress}</p>
        <p>{post?.content}</p>
      </main>
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
