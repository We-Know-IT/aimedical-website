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
    slug: post.attributes.slug,
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

  if (post.attributes.seo) {
    parsedPost.seo = post.attributes.seo;
    if (
      post.attributes.seo.shareImage &&
      parsedPost.seo?.shareImage &&
      post.attributes.seo.shareImage.data &&
      post.attributes.seo.shareImage.data.attributes
    ) {
      parsedPost.seo.shareImage = parseStrapiImageData(
        post.attributes.seo.shareImage.data
      );
    } else {
      if (parsedPost.seo?.shareImage) delete parsedPost.seo.shareImage;
    }
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
  if (e == undefined) {
    return { error: "error", data: null };
  }
  return { error: (e as StrapiError).error?.message || "error", data: null };
}

function parseStrapiMetaData(meta: any) {
  return {
    pagination: {
      start: meta.pagination.start || 0,
      limit: meta.pagination.limit || 0,
      total: meta.pagination.total || 0,
    },
  };
}

export {
  parseStrapiPostData,
  parseStrapiImageData,
  getStrapiErrorResponse,
  parseStrapiMetaData,
};
