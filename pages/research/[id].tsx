import { GetServerSideProps } from "next";
import { getPost } from "../../services/api";
import { Post } from "../../services/types";
import PostDetails from "../pressroom/[id]";

export default PostDetails;

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
