export type PostType = "news" | "blog";

export interface Post {
  id: number;
  title: string;
  ingress: string;
  content: string;
  updatedAt: string;
  publishedAt: string;
  images: [string];
  videos: [string];
  links: [string];
  author?: string;
  postType: PostType;
}
