import { GetServerSideProps } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Button from "../../components/general/button";
import PostCard from "../../components/pressroom/post";
import { getPosts, ServiceResponse } from "../../services/api";
import { Post } from "../../services/types";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/general/header";

const threeColsXLWidth = true;

export default function PressRoom(props: ServiceResponse<Post[]>) {
  const [posts] = useState<Post[]>(props.data || []);

  const [filters, setFilters] = useState<Set<string>>(new Set());

  const initFilters = () => {
    const filters = new Set<string>();
    filters.add("blog");
    filters.add("news");
    setFilters(filters);
  };

  const checkServerError = () => {
    if (props.error) {
      alert("Server error: " + props.error);
    }
  };

  useEffect(() => {
    initFilters();
    checkServerError();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleBlogsFilter = () => {
    toggleEntryInFilters("blog");
  };

  const togglePressReleasesFilter = () => {
    toggleEntryInFilters("news");
  };

  const toggleEntryInFilters = (entry: string) => {
    const _filters = new Set(filters);
    if (_filters.has(entry)) {
      _filters.delete(entry);
    } else {
      _filters.add(entry);
    }

    setFilters(_filters);
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
          <p className="hidden text-xl font-bold text-blue-100 md:block">
            Filter posts:
          </p>
          <Button isBlue={filters.has("blog")} onClick={toggleBlogsFilter}>
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
            onClick={togglePressReleasesFilter}>
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
          <ul
            className={
              "gap-14 md:grid md:grid-cols-2" +
              (threeColsXLWidth ? " xl:grid-cols-3" : "")
            }>
            {/* Iterates over all the posts and returns UI components for each 
            if they have a postType included in current filters or if there are no filters active.  */}
            {posts.map((p) => {
              if (filters.has(p.postType) || filters.size === 0) {
                return (
                  <li key={p.id} className="w-fit">
                    <Link href={"/pressroom/" + p.id}>
                      <PostCard post={p} />
                    </Link>
                  </li>
                );
              }
            })}
          </ul>
        </section>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: Post[] | null;
  error: string | null;
}> = async () => {
  const res = await getPosts();
  return { props: res };
};
