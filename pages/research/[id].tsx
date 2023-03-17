import { GetServerSideProps } from "next";
import { getPost, getPosts } from "../../services/api";
import { Post } from "../../services/types";
import PostDetails from "../pressroom/[id]";

export default PostDetails;

export const getStaticProps: GetServerSideProps<{
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

  return { props: res, revalidate: 10 };
};

export async function getStaticPaths() {
  const res = await getPosts({
    filterBy: ["research"],
  });
  if (res.error || !res.data) throw new Error(res.error);

  const posts = res.data.posts;

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
