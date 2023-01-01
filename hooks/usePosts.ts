import { useState, useEffect } from "react";
import { getPosts } from "../services/api";
import { PostType, Post } from "../services/types";

const usePosts = (filters: Set<PostType>, pageSize: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [hasNextPosts, setHasNextPosts] = useState(true);

  useEffect(() => {
    initPosts();
  }, [filters]);

  /**
   * Logs the error to the console and sets the error state
   * @param error The error message to log to the console and set as the error state
   */
  const handleError = (error: string) => {
    console.error(error);
    setError("Whoops! Looks like there was an error fetching the posts.");
  };

  /**
   * Fetches posts and sets the error state if there was an error
   * @param start The start index of the posts to fetch
   * @param limit The number of posts to fetch
   * @param filterBy The post types to filter by
   * @returns The posts fetched
   */
  const getPostsAndSetError = async (
    start: number,
    limit: number,
    filterBy: Set<PostType>
  ): Promise<Post[]> => {
    await new Promise((resolve) => setTimeout(resolve, 100));
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
    const total = posts.data.meta.pagination?.total || 0;
    setHasNextPosts(total > start + limit);
    return posts.data.posts;
  };

  /**
   * Initializes the posts state with the first page of posts and sets the page state to 1.
   * Is called when the filters state changes.
   */
  const initPosts = async () => {
    if (loadingPosts) return;
    setPosts([]);
    setLoadingPosts(true);
    const newPosts = await getPostsAndSetError(0, pageSize, filters);
    setPosts(newPosts);
    setLoadingPosts(false);
    setPage(1);
  };

  /**
   * Loads the next page of posts and appends them to the posts state.
   * @param page The page number to load
   */
  const loadPosts = async (page: number) => {
    setLoadingPosts(true);
    const newPosts = await getPostsAndSetError(
      page * pageSize,
      pageSize,
      filters
    );
    setPosts([...posts, ...newPosts]);
    setLoadingPosts(false);
  };

  /**
   * Loads the next page of posts and increments the page state.
   */
  const loadMorePosts = async () => {
    loadPosts(page);
    setPage((page) => page + 1);
  };

  return {
    posts,
    hasNextPosts,
    loadingPosts,
    error,
    loadMorePosts,
    initPosts,
  };
};

export { usePosts };
