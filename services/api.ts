import {
  Post,
  PostsRequestParams,
  PostsResponse,
  ServiceResponse,
} from "./types";
import { strapi } from "../strapi/strapi";
import {
  getStrapiErrorResponse,
  parseStrapiMetaData,
  parseStrapiPostData,
} from "./strapi.utils";

async function getPosts({
  sort = "publishedAt:desc",
  pagination,
  filterBy = ["blog", "news", "research"],
}: PostsRequestParams = {}): Promise<ServiceResponse<PostsResponse>> {
  const options = {
    sort,
    populate: ["listingImage"],
    pagination,
    filters: {
      postType: filterBy,
    },
  };

  try {
    const response = await strapi.find("posts", options);
    if (Array.isArray(response.data))
      return {
        data: {
          posts: response.data.map(parseStrapiPostData),
          meta: parseStrapiMetaData(response.meta),
        },
        error: null,
      };
    return { data: { posts: [], meta: {} }, error: null };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

async function getPostById(id: number): Promise<ServiceResponse<Post>> {
  try {
    const response = await strapi.findOne("posts", id, {
      populate: ["headerImage", "seo", "seo.shareImage"],
    });
    return { data: parseStrapiPostData(response.data), error: null };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

async function getPostBySlug(slug: string): Promise<ServiceResponse<Post>> {
  try {
    const response = await strapi.find("posts", {
      filters: { slug },
      populate: ["headerImage", "seo", "seo.shareImage"],
    });
    if (Array.isArray(response.data) && response.data.length > 0)
      return { data: parseStrapiPostData(response.data[0]), error: null };
    return { data: null, error: `Could not find the post with slug: ${slug}` };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

function setAbortSignal(signal: AbortSignal) {
  strapi.axios.defaults.signal = signal;
}

export { getPosts, getPostById, setAbortSignal, getPostBySlug };
