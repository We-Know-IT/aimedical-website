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
        <ul className="my-10 flex flex-col">
          {posts.map((post) => {
            return (
              <li className="mb-12" key={post.id}>
                <ResearchPostCard post={post} />
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}
