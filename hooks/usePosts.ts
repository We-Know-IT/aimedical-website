import { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import { PostType, Post } from "../services/types";

const usePosts = (filters: Set<PostType>, pageSize: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [nextPosts, setNextPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [loadingNextPosts, setLoadingNextPosts] = useState(false);
  const [awaitingNextPosts, setAwaitingNextPosts] = useState(false);

  const hasNextPosts = nextPosts.length > 0;

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
    if (!loadingNextPosts && awaitingNextPosts) {
      setAwaitingNextPosts(false);
      loadMorePosts();
    }
  }, [awaitingNextPosts, loadingNextPosts]);

  const loadMorePosts = () => {
    if (loadingNextPosts) {
      setAwaitingNextPosts(true);
      return;
    }
    setAwaitingNextPosts(false);
    setPosts([...posts, ...nextPosts]);
    const nextPage = page + 1;
    setPage(nextPage);

    if (nextPosts.length < pageSize) {
      // Means there is no more posts to load
      setNextPosts([]);
      return;
    }
    loadNextPosts(nextPage, filters);
  };

  useEffect(() => {
    initPosts(filters);
  }, []);

  return {
    posts,
    hasNextPosts,
    loadingPosts,
    loadingNextPosts,
    awaitingNextPosts,
    error,
    loadMorePosts,
    initPosts,
  };
};

export { usePosts };
