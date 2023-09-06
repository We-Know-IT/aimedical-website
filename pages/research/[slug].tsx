import { GetServerSideProps } from "next";
import { getPostBySlug, getPosts } from "../../services/api";
import { Post } from "../../services/types";
import PostDetails from "../pressroom/[slug]";

export default PostDetails;

export const getStaticProps: GetServerSideProps<{
  data: Post | null;
  error: string | null;
}> = async (context) => {
  // Remove this line  and uncomment the code below. if you want to use this page
  return { notFound: true };

  /* ------Uncomment this-------
  const postSlug = context.params?.slug;
  if (!postSlug) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  if (Array.isArray(postSlug)) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  const res = await getPostBySlug(postSlug);

  if (res.error) {
    if (res.error === "Not Found") {
      return {
        notFound: true,
        revalidate: 10,
      };
    }

    // Redirects to 500.tsx page but only in production mode!
    // run 'npm run build' and 'npm run start' to test.
    throw res.error;
  }

  return { props: res, revalidate: 10 };
  */
};

export async function getStaticPaths() {
  const res = await getPosts({
    filterBy: ["research"],
  });
  if (res.error || !res.data) {
    throw res.error;
  }

  const posts = res.data.posts;

  const paths = posts.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
