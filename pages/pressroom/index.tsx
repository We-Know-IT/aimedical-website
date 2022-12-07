import { GetServerSideProps, GetServerSidePropsResult } from "next";
import Head from "next/head";
import { CSSProperties, useEffect, useState } from "react";
import Button from "../../components/general/button";
import PostCard from "../../components/pressroom/post";
import { getPosts, ServiceResponse } from "../../services/api";
import { Post } from "../../services/types";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/general/header";

export default function PressRoom(props: ServiceResponse<Post[]>) {
  const [posts, _] = useState<Post[]>(props.data || []);

  const [filters, setFilters] = useState<Set<string>>(new Set());

  useEffect(() => {
    const filters = new Set<string>();
    filters.add("blog");
    filters.add("news");
    setFilters(filters);
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

    console.dir(_filters);
  };

  return (
    <>
      <Head>
        <title>AI Medical | Pressroom </title>
        <meta name="description" content="News and blog from AI Medical" />
      </Head>
      <Header
        imageUrl="/images/header.png"
        title="Pressroom"
        text="In our pressroom you can find our blog and press releases"
      />
      <main className="max-w-5xl ml-auto mr-auto">
        <section className="flex flex-row items-center justify-center ml-auto mr-auto my-10">
          <p className="text-blue-100 font-bold text-2xl mr-10 hidden md:block">
            Filter posts:
          </p>
          <Button
            isBlue={filters.has("blog")}
            classes=" mr-4 md:mr-10"
            onClick={toggleBlogsFilter}>
            <>
              Blogs
              {filters.has("blog") ? (
                <Image
                  className="ml-1  w-4 h-auto"
                  src="/images/cancel_icon.png"
                  alt="cancel icon"
                  width={16}
                  height={16}
                />
              ) : (
                <div className="w-4 h-4 ml-1"></div>
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
                  className="ml-1  w-4 h-auto"
                  src="/images/cancel_icon.png"
                  alt="cancel icon"
                  width={16}
                  height={16}
                />
              ) : (
                <div className="w-4 h-4 ml-1"></div>
              )}
            </>
          </Button>
        </section>
        <section className="ml-auto mr-auto p-6">
          <ul className="md:grid md:grid-cols-2 gap-14">
            {posts.map((p) => {
              if (filters.has(p.postType)) {
                return (
                  <li key={p.id}>
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
