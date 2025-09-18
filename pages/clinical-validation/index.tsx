import Head from "next/head";
import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/general/Button";
import PostCard from "../../components/pressroom/PostCard";
import { PostType } from "../../services/types";
import Image from "next/image";
import Link from "next/link";
import Header from "../../components/general/Header";
import { usePosts } from "../../hooks/usePosts";
import MetaTags from "../../components/general/seo/MetaTags";
import Typography from "../../components/common/Typography";

const threeColsXLWidth = false;
const pageSize = 6;

const initialFilters = new Set<PostType>(["clinical-studies"]);

export default function ClinicalValidation() {
  const { posts, hasNextPosts, loadingPosts, error, loadMorePosts, initPosts } =
    usePosts(initialFilters, pageSize);

  const showSkeletons = loadingPosts && !error;
  const [newPostsCount, setNewPostsCount] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const previousPostsLength = useRef(posts.length);

  // Track when new posts are loaded
  useEffect(() => {
    if (posts.length > previousPostsLength.current) {
      const newCount = posts.length - previousPostsLength.current;
      setNewPostsCount(newCount);
      setIsLoadingMore(false);
      
      // Reset after animation completes
      setTimeout(() => {
        setNewPostsCount(0);
      }, 600);
    }
    previousPostsLength.current = posts.length;
  }, [posts.length]);

  const onLoadMore = async () => {
    setIsLoadingMore(true);
    loadMorePosts();
  };

  const tryAgain = () => {
    initPosts();
  };

  return (
    <>
      <Head>
        <title>AI Medical | Clinical Validation</title>
        <meta name="description" content="Clinical validation studies for Dermalyser" />
        <MetaTags
          image="/images/clinical-validation/header.jpg"
          title="Clinical Validation"
          description="Clinical validation studies for Dermalyser"
        />
      </Head>
      <main className="pt-32">
        <div className="container pt-10">
          <h3 className="text-darkblue font-haasGrotDisplay font-normal text-3xl">Clinical Studies</h3>
          <section className="py-10">
            {/* If there is an error, show a message. */}
            {error && (
              <div className="mb-8 flex flex-col items-center gap-14">
                <Typography
                  variant="h2"
                  className="text-center text-error-dark">
                  {error}
                </Typography>
                <Button onClick={tryAgain}>Try again</Button>
              </div>
            )}
            {/* If there are no posts to show, show a message. */}
            {posts.length === 0 && !error && !loadingPosts && (
              <Typography variant="h2" className="text-center">
                No clinical studies available.
              </Typography>
            )}
            {/* If there are posts to show, show them. */}
            <ul
              className={
                "flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-x-4" +
                (threeColsXLWidth ? " xl:grid-cols-3" : "")
              }>
              {/* Iterates over all the posts and returns UI components for each 
            if they have a postType included in current displayFilters or if there are no displayFilters active.  */}
              {posts.map((p, index) => {
                // Only animate the newly loaded posts
                const shouldAnimate = newPostsCount > 0 && index >= posts.length - newPostsCount;
                
                return (
                  <li 
                    key={p.id} 
                    className={`w-full ${shouldAnimate ? 'animate-fade-in-up' : ''}`}
                    style={shouldAnimate ? {
                      animationDelay: `${(index - (posts.length - newPostsCount)) * 0.1}s`,
                      animationFillMode: 'both'
                    } : undefined}
                  >
                    <Link href={"/clinical-validation/" + p.slug}>
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
              <div className="mt-8 flex flex-col items-center">
                <Button onClick={onLoadMore}>Load more</Button>
              </div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
