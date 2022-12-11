export type PostType = "news" | "blog";

export interface Post {
  id: number;
  title: string;
  ingress: string;
  content: string;
  updatedAt: string;
  publishedAt: string;
  images: [Image];
  videos: [Video];
  author?: string;
  postType: PostType;
}

export interface Image {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

export interface Video {
  url: string;
}
