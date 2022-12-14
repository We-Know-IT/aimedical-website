export type PostType = "news" | "blog" | "research";

export interface Post {
  id: number;
  title: string;
  ingress: string;
  content: string;
  updatedAt: string;
  publishedAt: string;
  headerImage?: Image;
  listingImage?: Image;
  author?: string;
  postType: PostType;
}

export interface Image {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}
