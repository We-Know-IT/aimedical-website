import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../../components/general/button";
import PostCard from "../../components/pressroom/post";
import { getPosts, ServiceResponse } from "../../services/api";
import { Post, PostType } from "../../services/types";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/general/header";

const threeColsXLWidth = true;
const pageSize = 6;

export default function PressRoom(props: ServiceResponse<Post[]>) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filters, setFilters] = useState<Set<PostType>>(new Set());
  const [nextPosts, setNextPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");

  const initFilters = () => {
    const filters = new Set<PostType>();
    filters.add("blog");
    filters.add("news");
    setFilters(filters);
  };

  const checkServerError = () => {
    if (props.error) {
      setError("Server error: " + props.error);
    }
  };

  const loadNextPosts = async (page: number) => {
    const newPosts = await getPosts({
      pagination: {
        start: page * pageSize,
        limit: pageSize,
      },
      filterBy: Array.from(filters),
    });
    if (newPosts.error || !newPosts.data) {
      setError("Server error: " + newPosts.error);
      return;
    }
    setNextPosts(newPosts.data);
  };

  const initPosts = async (filters: PostType[]) => {
    console.log(filters);
    const posts = await getPosts({
      pagination: {
        start: 0,
        limit: pageSize,
      },
      filterBy: filters,
    });
    if (posts.error || !posts.data) {
      setError("Server error: " + posts.error);
      return;
    }
    setError("");
    setPosts(posts.data);

    const nextPosts = await getPosts({
      pagination: {
        start: 1 * pageSize,
        limit: pageSize,
      },
      filterBy: filters,
    });
    if (nextPosts.error || !nextPosts.data) {
      setError("Server error: " + nextPosts.error);
      return;
    }
    setError("");
    setNextPosts(nextPosts.data);
    setPage(1);
  };

  useEffect(() => {
    initFilters();
    checkServerError();
    initPosts(["blog", "news"]);
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
    if (_filters.size >= 0) initPosts(Array.from(_filters));
    else initPosts(["blog", "news"]);
    setFilters(_filters);
  };

  const loadMorePosts = async () => {
    setPosts([...posts, ...nextPosts]);
    const currentPage = page;
    setPage(currentPage + 1);

    if (nextPosts.length < pageSize) {
      setNextPosts([]); // Means there is no more posts to load
      return;
    }
    loadNextPosts(currentPage + 1);
  };

  const tryAgain = () => {
    initPosts(Array.from(filters));
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
          </ul>
          {nextPosts.length > 0 && (
            <div className="mt-12 flex flex-col items-center">
              <Button onClick={loadMorePosts} isBlue>
                Load more
              </Button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: Post[] | null;
  error: string | null;
}> = async () => {
  const res = await getPosts({ pagination: { start: 0, limit: pageSize } });
  return { props: res };
};
