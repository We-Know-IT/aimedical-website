import { Post, PostType, Image } from "./types";
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

export type ServiceResponse<T> = DataResponse<T> | ErrorResponse;

async function getPosts(): Promise<ServiceResponse<Post[]>> {
  try {
    const response = await strapi.find("posts", {
      sort: "publishedAt:desc",
      populate: ["listingImage"],
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

function parseStrapiPostData(post: any): Post {
  const parsedPost: Post = {
    id: post.id,
    title: post.attributes.title,
    ingress: post.attributes.ingress,
    content: post.attributes.content,
    updatedAt: post.attributes.updatedAt,
    publishedAt: post.attributes.publishedAt,
    postType: post.attributes.postType as PostType,
  };

  if (post.attributes.listingImage) {
    parsedPost.listingImage = parseStrapiImageData(
      post.attributes.listingImage.data
    );
  }

  if (post.attributes.headerImage) {
    parsedPost.headerImage = parseStrapiImageData(
      post.attributes.headerImage.data
    );
  }

  if (post.attributes.author) {
    parsedPost.author = post.attributes.author;
  }
  return parsedPost;
}

function parseStrapiImageData(image: any) {
  const parsedImage: Image = {
    alternativeText: image.attributes.alternativeText,
    width: image.attributes.width,
    height: image.attributes.height,
    url: image.attributes.url,
  };

  return parsedImage;
}

function getStrapiErrorResponse(e: any): ErrorResponse {
  return { error: (e as StrapiError).error?.message || "error", data: null };
}

export { getPosts, getPost };
