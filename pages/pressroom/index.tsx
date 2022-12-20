import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../../components/general/button";
import PostCard from "../../components/pressroom/post";
import { getPosts } from "../../services/api";
import { Post, PostType, ServiceResponse } from "../../services/types";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/general/header";

const threeColsXLWidth = true;
const pageSize = 6;

const getFullPostTypeSet = (): Set<PostType> => {
  const filters = new Set<PostType>();
  filters.add("blog");
  filters.add("news");
  return filters;
};

export default function PressRoom(props: ServiceResponse<Post[]>) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filters, setFilters] = useState<Set<PostType>>(new Set());
  const [nextPosts, setNextPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [loadingNextPosts, setLoadingNextPosts] = useState(false);
  const [awaitingNextPosts, setAwaitingNextPosts] = useState(false);

  const showSkeletons = loadingPosts || awaitingNextPosts;

  const initFilters = () => {
    setFilters(getFullPostTypeSet());
  };

  const checkServerError = () => {
    if (props.error) {
      handleError(props.error);
    }
  };

  const handleError = (error: string) => {
    console.error(error);
    setError("Whoops! Looks like there was an error fetching the posts.");
  };

  const getPostsAndSetError = async (
    start: number,
    limit: number,
    filterBy: Set<PostType>
  ): Promise<Post[]> => {
    const posts = await getPosts({
      pagination: {
        start,
        limit,
      },
      filterBy: Array.from(filterBy),
    });
    if (posts.error || !posts.data) {
      handleError(posts.error);
      return [];
    }
    setError("");
    return posts.data;
  };

  const loadNextPosts = async (page: number, filters: Set<PostType>) => {
    setLoadingNextPosts(true);
    const newPosts = await getPostsAndSetError(
      page * pageSize,
      pageSize,
      filters
    );
    setNextPosts(newPosts);
    setLoadingNextPosts(false);
  };

  const initPosts = async (filters: Set<PostType>) => {
    setLoadingPosts(true);
    const posts = await getPostsAndSetError(0, pageSize, filters);
    setPosts(posts);
    setLoadingPosts(false);

    loadNextPosts(1, filters);

    setPage(1);
  };

  useEffect(() => {
    initFilters();
    checkServerError();
    initPosts(getFullPostTypeSet());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    else initPosts(getFullPostTypeSet());
    setFilters(_filters);
  };

  useEffect(() => {
    if (!loadingNextPosts && awaitingNextPosts) {
      setAwaitingNextPosts(false);
      loadMorePosts();
    }
  }, [awaitingNextPosts, loadingNextPosts]);

  const loadMorePosts = () => {
    setPosts([...posts, ...nextPosts]);
    const currentPage = page;
    setPage(currentPage + 1);

    if (nextPosts.length < pageSize) {
      // Means there is no more posts to load
      setNextPosts([]);
      return;
    }
    loadNextPosts(currentPage + 1, filters);
  };

  const onLoadMore = async () => {
    if (loadingNextPosts) {
      setAwaitingNextPosts(true);
      return;
    }

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
            <div className="flex flex-col items-center gap-14">
              <p className="text-center text-xl font-bold text-error-dark">
                {error}
              </p>
              <Button onClick={tryAgain} isBlue>
                Try again
              </Button>
            </div>
          )}
          {/* If there are no posts to show, show a message. */}
          {posts.length === 0 && !error && (
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
          {(nextPosts.length > 0 || loadingNextPosts) && !awaitingNextPosts && (
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
