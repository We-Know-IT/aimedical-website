import { useState, useEffect } from "react";
import { getPosts, setAbortSignal } from "../services/api";
import { PostType, Post } from "../services/types";

let abortController = new AbortController();

const usePosts = (filters: Set<PostType>, pageSize: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [hasNextPosts, setHasNextPosts] = useState(true);

  useEffect(() => {
    abortController.abort();
    abortController = new AbortController();
    setAbortSignal(abortController.signal);

    initPosts();
  }, [filters]);

  /**
   * Logs the error to the console and sets the error state
   * @param error The error message to log to the console and set as the error state
   */
  const handleError = (error: string) => {
    if (error === "canceled") return;
    console.error(error);
    setError("Whoops! Looks like there was an error fetching the posts.");
  };

  /**
   * Fetches and appends the posts to the posts list and sets the error state if there was an error. Does not append the posts if the request was canceled.
   * @param start The start index of the posts to fetch
   * @param limit The number of posts to fetch
   * @param filterBy The post types to filter by
   * @returns The posts fetched
   */
  const loadPostsAndSetError = async (
    start: number,
    limit: number,
    filterBy: Set<PostType>,
    posts: Post[]
  ): Promise<void> => {
    setLoadingPosts(true);
    const res = await getPosts({
      pagination: {
        start,
        limit,
      },
      filterBy: Array.from(filterBy),
    });
    if (res.error === "canceled") {
      console.error(res.error);
      return;
    }
    if (res.error || !res.data) {
      handleError(res.error);
      return;
    }
    setError("");
    const total = res.data.meta.pagination?.total || Infinity;
    setHasNextPosts(posts.length + res.data.posts.length < total);
    setPosts([...posts, ...res.data.posts]);
    setLoadingPosts(false);
  };

  /**
   * Initializes the posts state with the first page of posts and sets the page state to 1.
   * Is called when the filters state changes.
   */
  const initPosts = async () => {
    setPosts([]);
    loadPostsAndSetError(0, pageSize, filters, []);
    setPage(1);
  };

  /**
   * Loads the next page of posts and appends them to the posts state.
   * @param page The page number to load
   */
  const loadPosts = async (page: number) => {
    await loadPostsAndSetError(page * pageSize, pageSize, filters, posts);
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
