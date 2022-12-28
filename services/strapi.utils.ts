import { StrapiError } from "strapi-sdk-js";
import { Post, PostType, Image } from "./types";

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
  if (process.env.NODE_ENV === "development") {
    parsedImage.url = "http://localhost:1337" + parsedImage.url;
  }

  return parsedImage;
}

function getStrapiErrorResponse(e: any) {
  return { error: (e as StrapiError).error?.message || "error", data: null };
}

export { parseStrapiPostData, parseStrapiImageData, getStrapiErrorResponse };
