import { Post, PostsRequestParams, ServiceResponse } from "./types";
import { strapi } from "../strapi/strapi";
import { getStrapiErrorResponse, parseStrapiPostData } from "./strapi.utils";

async function getPosts({
  sort = "publishedAt:desc",
  pagination = { start: 0, limit: 10 },
  filterBy = ["blog", "news", "research"],
}: PostsRequestParams = {}): Promise<ServiceResponse<Post[]>> {
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
        data: response.data.map(parseStrapiPostData),
        error: null,
      };
    return { data: [], error: null };
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
