import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../../components/general/header";
import { getPost, ServiceResponse } from "../../services/api";
import { Post } from "../../services/types";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function PostDetails(props: ServiceResponse<Post>) {
  const post = props.data;
  return (
    <>
      <Head>
        <title>AI Medical | Pressroom </title>
        <meta name="description" content="News and blog from AI Medical" />
      </Head>
      <Header
        title={capitalizeFirstLetter(post?.postType || "Blog") + " post"}
        imageUrl={post?.images[0]?.url || "/images/header.png"}
      />
      <main className="ml-auto mr-auto max-w-5xl px-6">
        <h3 className="mt-24 mb-10 text-4xl text-blue-100">{post?.title}</h3>
        <p className="mb-10 text-xl font-medium">{post?.ingress}</p>
        <p className="whitespace-pre-wrap text-base">{post?.content}</p>
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

  if (res.error) {
    if (res.error === "Not Found") {
      return {
        notFound: true,
      };
    }

    // Redirects to 500.tsx page but only in production mode!
    // run 'npm run build' and 'npm run start' to test.
    throw res.error;
  }

  return { props: res };
};
