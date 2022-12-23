import Head from "next/head";
import Button from "../components/general/button";
import Header from "../components/general/header";
import ResearchPostCard from "../components/research/research-post-card";
import { usePosts } from "../hooks/usePosts";
import { PostType } from "../services/types";

const researchSet = new Set<PostType>(["research"]);
const pageSize = 3;

export default function Research() {
  const {
    posts,
    hasNextPosts,
    loadingPosts,
    error,
    loadingNextPosts,
    awaitingNextPosts,
    loadMorePosts,
  } = usePosts(researchSet, pageSize);

  const showSkeletons = loadingPosts || awaitingNextPosts;

  const onLoadMore = () => {
    loadMorePosts();
  };

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
        <ul className="my-10 flex flex-col space-y-12">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <ResearchPostCard post={post} />
              </li>
            );
          })}
          {showSkeletons &&
            [...Array(pageSize)].map((x, i) => {
              return <ResearchPostCard key={`skeleton-${i}`} />;
            })}
        </ul>
        {(hasNextPosts || (loadingNextPosts && !error)) &&
          !awaitingNextPosts && (
            <div className="my-12 flex flex-col items-center">
              <Button onClick={onLoadMore} isBlue>
                Load more
              </Button>
            </div>
          )}
      </main>
    </>
  );
}
