import Head from "next/head";
import { useState } from "react";
import Button from "../../components/general/button";
import PostCard from "../../components/pressroom/post";
import { PostType } from "../../services/types";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/general/header";
import { usePosts } from "../../hooks/usePosts";

const threeColsXLWidth = false;
const pageSize = 6;

const initialFilters = new Set<PostType>(["blog", "news"]);

export default function PressRoom() {
  const [filters, setFilters] = useState<Set<PostType>>(initialFilters);
  const [displayFilters, setDisplayFilters] =
    useState<Set<PostType>>(initialFilters);

  const { posts, hasNextPosts, loadingPosts, error, loadMorePosts, initPosts } =
    usePosts(filters, pageSize);

  const showSkeletons = loadingPosts;

  const toggleBlogsFilter = () => {
    toggleEntryInFilters("blog");
  };

  const togglePressReleasesFilter = () => {
    toggleEntryInFilters("news");
  };

  const toggleEntryInFilters = (entry: PostType) => {
    const _filters = new Set(displayFilters);
    if (_filters.has(entry)) {
      _filters.delete(entry);
    } else {
      _filters.add(entry);
    }
    setDisplayFilters(_filters);
    if (_filters.size > 0) {
      setFilters(_filters);
    } else setFilters(initialFilters);
  };

  const onLoadMore = async () => {
    loadMorePosts();
  };

  const tryAgain = () => {
    initPosts();
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
      <main className="bg-background-secondary">
        <div className="container py-10">
          <section className="ml-auto mr-auto flex flex-row items-center justify-center gap-x-4 md:gap-x-8 ">
            <p className="hidden text-xl font-bold text-primary md:block">
              Filter posts:
            </p>
            <Button
              isPrimary={displayFilters.has("blog")}
              onClick={toggleBlogsFilter}
              disabled={error ? true : false}>
              <>
                Blogs
                {displayFilters.has("blog") ? (
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
              isPrimary={displayFilters.has("news")}
              onClick={togglePressReleasesFilter}
              disabled={error ? true : false}>
              <>
                News
                {displayFilters.has("news") ? (
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
                <Button onClick={tryAgain} isPrimary>
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
            if they have a postType included in current displayFilters or if there are no displayFilters active.  */}
              {posts.map((p) => {
                return (
                  <li key={p.id} className="w-full">
                    <Link href={"/pressroom/" + p.id}>
                      <PostCard post={p} />
                    </Link>
                  </li>
                );
              })}
              {showSkeletons &&
                [...Array(pageSize)].map((x, i) => {
                  return <PostCard key={`skeleton-${i}`} />;
                })}
            </ul>
            {hasNextPosts && !error && !loadingPosts && (
              <div className="mt-12 flex flex-col items-center">
                <Button onClick={onLoadMore} isPrimary>
                  Load more
                </Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
