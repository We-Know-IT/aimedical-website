import Head from "next/head";
import Header from "../components/general/header";
import ResearchPostCard from "../components/research/research-post-card";
import { usePosts } from "../hooks/usePosts";
import { PostType } from "../services/types";

const researchSet = new Set<PostType>(["research"]);

export default function Research() {
  const { posts, morePostsToLoad, loadingPosts, loadMorePosts, initPosts } =
    usePosts(researchSet, 6);
  console.log("posts", posts);

  return (
    <>
      <Head>
        <title>AI Medical | Research</title>
        <meta
          name="description"
          content="Information about AI medical research"
        />
      </Head>
      <Header
        imageUrl="/images/research-header.png"
        title="Research"
        text="A collection of our research and third party research relevant to us"
      />
      <main className="container">
        <div className="my-10">
          {posts.map((post) => {
            return <ResearchPostCard post={post} key={post.id} />;
          })}
        </div>
      </main>
    </>
  );
}
