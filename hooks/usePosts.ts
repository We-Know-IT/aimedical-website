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

  /**
   * Loads the next page of posts and sets the nextPosts state with the result of the fetch call and sets the loadingNextPosts state to true while the fetch is in progress and false when it is done
   * @param page The page number to load the posts for
   * @param filters The post types to filter by
   */
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

  /**
   * Initializes the posts state with the first page of posts and sets the loadingPosts state to true while the fetch is in progress and false when it is done.
   * Also loads the next page of posts and sets the page state to 1
   * @param filters The post types to filter by
   *
   */
  const initPosts = async (filters: Set<PostType>) => {
    setLoadingPosts(true);
    const posts = await getPostsAndSetError(0, pageSize, filters);
    setPosts(posts);
    setLoadingPosts(false);

    loadNextPosts(1, filters);

    setPage(1);
  };

  /**
   * Updates the posts state with the nextPosts state and sets the page state to the next page number.
   * Also loads the next page of posts if there are more posts to load.
   */
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
    if (!loadingNextPosts && awaitingNextPosts) {
      setAwaitingNextPosts(false);
      loadMorePosts();
    }
  }, [awaitingNextPosts, loadingNextPosts]);

  /**
   * Makes sure the loadingNextPosts state is set to true when the nextPosts state changes,
   * removing this useEffect will cause the loadMorePosts function to not work properly and sometimes produce duplicate posts
   */
  useEffect(() => {
    if (nextPosts.length > 0 && loadingNextPosts) {
      setLoadingNextPosts(true);
    }
  }, [nextPosts]);

  useEffect(() => {
    initPosts(filters);
  }, [filters]);

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
