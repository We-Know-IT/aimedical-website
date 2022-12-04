import { Post, PostType } from "./types";
import { strapi } from "../strapi/strapi";
import { StrapiError } from "strapi-sdk-js";

type DataResponse<T> = {
  data: T;
  error: null;
};

type ErrorResponse = {
  error: string;
  data: null;
};

type ServiceResponse<T> = DataResponse<T> | ErrorResponse;

async function getPosts(): Promise<ServiceResponse<Post[]>> {
  try {
    const response = await strapi.find("posts");
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
    const response = await strapi.findOne("posts", id);
    return { data: parseStrapiPostData(response.data), error: null };
  } catch (e) {
    return getStrapiErrorResponse(e);
  }
}

function parseStrapiPostData(post: any): Post {
  const parsedPost: Post = {
    id: post.id,
    title: post.attributes.title,
    ingress: post.attributes.ingress,
    content: post.attributes.content,
    updatedAt: post.attributes.updatedAt,
    publishedAt: post.attributes.publishedAt,
    images: post.attributes.images,
    videos: post.attributes.videos,
    links: post.attributes.links,
    postType: post.attributes.postType as PostType,
  };
  if (post.attributes.author) {
    parsedPost.author = post.attributes.author;
  }
  return parsedPost;
}

function getStrapiErrorResponse(e: any): ErrorResponse {
  return { error: (e as StrapiError).error.message, data: null };
}

export { getPosts, getPost };
