import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../../components/general/button";
import PostCard from "../../components/pressroom/post";
import { PostType } from "../../services/types";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/general/header";
import { usePosts } from "../../hooks/usePosts";

const threeColsXLWidth = true;
const pageSize = 6;

const initialFilters = new Set<PostType>(["blog", "news"]);

export default function PressRoom() {
  const [filters, setFilters] = useState<Set<PostType>>(initialFilters);

  const {
    posts,
    morePostsToLoad,
    loadingPosts,
    loadingNextPosts,
    awaitingNextPosts,
    error,
    loadMorePosts,
    initPosts,
  } = usePosts(filters, pageSize);

  const showSkeletons = loadingPosts || awaitingNextPosts;

  const toggleBlogsFilter = () => {
    toggleEntryInFilters("blog");
  };

  const togglePressReleasesFilter = () => {
    toggleEntryInFilters("news");
  };

  const toggleEntryInFilters = (entry: PostType) => {
    const _filters = new Set(filters);
    if (_filters.has(entry)) {
      _filters.delete(entry);
    } else {
      _filters.add(entry);
    }
    if (_filters.size >= 0) initPosts(_filters);
    else initPosts(initialFilters);
    setFilters(_filters);
  };

  const onLoadMore = async () => {
    loadMorePosts();
  };

  const tryAgain = () => {
    initPosts(filters);
  };

  return (
    <>
      <Head>
        <title>AI Medical | Pressroom </title>
        <meta name="description" content="News and blog from AI Medical" />
      </Head>
      <Header
        imageUrl="/images/header.jpg"
        title="Pressroom"
        text="In our pressroom you can find our blog and press releases"
      />
      <main className="container my-10">
        <section className="ml-auto mr-auto flex flex-row items-center justify-center gap-x-4 md:gap-x-8 ">
          <p className="hidden text-xl font-bold text-primary md:block">
            Filter posts:
          </p>
          <Button
            isBlue={filters.has("blog")}
            onClick={toggleBlogsFilter}
            disabled={error ? true : false}>
            <>
              Blogs
              {filters.has("blog") ? (
                <Image
                  className="ml-1 h-auto w-4 "
                  src="/images/cancel_icon.png"
                  alt="cancel icon"
                  width={16}
                  height={16}
                />
              ) : (
                <div className="ml-1 h-4 w-4"></div>
              )}
            </>
          </Button>
          <Button
            isBlue={filters.has("news")}
            onClick={togglePressReleasesFilter}
            disabled={error ? true : false}>
            <>
              News
              {filters.has("news") ? (
                <Image
                  className="ml-1  h-auto w-4"
                  src="/images/cancel_icon.png"
                  alt="cancel icon"
                  width={16}
                  height={16}
                />
              ) : (
                <div className="ml-1 h-4 w-4"></div>
              )}
            </>
          </Button>
        </section>
        <section className="py-12">
          {/* If there is an error, show a message. */}
          {error && (
            <div className="mb-8 flex flex-col items-center gap-14">
              <p className="text-center text-xl font-bold text-error-dark">
                {error}
              </p>
              <Button onClick={tryAgain} isBlue>
                Try again
              </Button>
            </div>
          )}
          {/* If there are no posts to show, show a message. */}
          {posts.length === 0 && !error && !loadingPosts && (
            <p className="text-center text-xl font-bold text-primary">
              Looks like there are no posts to show.
            </p>
          )}
          {/* If there are posts to show, show them. */}
          <ul
            className={
              "flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-14" +
              (threeColsXLWidth ? " xl:grid-cols-3" : "")
            }>
            {/* Iterates over all the posts and returns UI components for each 
            if they have a postType included in current filters or if there are no filters active.  */}
            {posts.map((p) => {
              if (filters.has(p.postType) || filters.size === 0) {
                return (
                  <li key={p.id} className="w-full">
                    <Link href={"/pressroom/" + p.id}>
                      <PostCard post={p} />
                    </Link>
                  </li>
                );
              }
            })}
            {showSkeletons &&
              [...Array(pageSize)].map((x, i) => {
                return <PostCard key={`skeleton-${i}`} />;
              })}
          </ul>
          {(morePostsToLoad || (loadingNextPosts && !error)) &&
            !awaitingNextPosts && (
              <div className="mt-12 flex flex-col items-center">
                <Button onClick={onLoadMore} isBlue>
                  Load more
                </Button>
              </div>
            )}
        </section>
      </main>
    </>
  );
}
