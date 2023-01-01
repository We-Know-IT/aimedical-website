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
  pagination = { start: 0, limit: 10 },
  filterBy = ["blog", "news", "research"],
}: PostsRequestParams = {}): Promise<ServiceResponse<PostsResponse>> {
  try {
    const response = await strapi.find("posts", {
      sort,
      populate: ["listingImage"],
      pagination,
      filters: {
        postType: filterBy,
      },
    });
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

async function getPost(id: number): Promise<ServiceResponse<Post>> {
  try {
    const response = await strapi.findOne("posts", id, {
      populate: ["headerImage"],
    });
    return { data: parseStrapiPostData(response.data), error: null };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

export { getPosts, getPost };
