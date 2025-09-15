import Head from "next/head";
import { Button } from "../../components/general/Button";
import Header from "../../components/general/Header";
import ResearchPostCard from "../../components/research/ResearchPostCard";
import { usePosts } from "../../hooks/usePosts";
import { PostType } from "../../services/types";

const researchSet = new Set<PostType>(["research"]);
const pageSize = 5;

export default function Research() {
  const { posts, hasNextPosts, loadingPosts, error, loadMorePosts, initPosts } =
    usePosts(researchSet, pageSize);

  const showSkeletons = loadingPosts && !error;

  const onLoadMore = () => {
    loadMorePosts();
  };

  const tryAgain = () => {
    initPosts();
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
        imageUrl="/images/research/header.png"
        title="Research"
        text="A collection of our research and third party research relevant to us"
      />
      <main className="container my-12">
        {posts.length > 0 && (
          <ul className="flex flex-col space-y-12">
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
        )}

        {/* If there are no posts to show, show a message. */}
        {posts.length === 0 && !error && !loadingPosts && (
          <p className="text-center text-xl font-bold text-primary">
            No research posts available.
          </p>
        )}
        {/* If there is an error, show a message. */}
        {error && (
          <div className="mb-8 flex flex-col items-center gap-14">
            <p className="text-center text-xl font-bold text-error-dark">
              {error}
            </p>
            <Button onClick={tryAgain} intent="primary">
              Try again
            </Button>
          </div>
        )}
        {hasNextPosts && !error && !loadingPosts && (
          <div className="my-12 flex flex-col items-center">
            <Button onClick={onLoadMore} intent="primary">
              Load more
            </Button>
          </div>
        )}
      </main>
    </>
  );
}

export function getStaticProps() {
  return {
    // Set this to false or remove the function to enable/display the page.
    notFound: true,
  };
}
