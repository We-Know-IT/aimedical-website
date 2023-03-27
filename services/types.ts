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
  seo?: SEO;
  slug: string;
}

export interface PostsMetaInformation {
  pagination?: {
    start: number;
    limit: number;
    total: number;
  };
}

export interface PostsResponse {
  posts: Post[];
  meta: PostsMetaInformation;
}

export interface Image {
  alternativeText: string;
  width: number;
  height: number;
  url: string;
}

type DataResponse<T> = {
  data: T;
  error: null;
};

type ErrorResponse = {
  error: string;
  data: null;
};

export type ServiceResponse<T> = DataResponse<T> | ErrorResponse;

type PaginationByOffset = {
  start: number;
  limit: number;
  withCount?: boolean;
};

type PaginationByPage = {
  page: number;
  pageSize: number;
  withCount?: boolean;
};

export interface PostsRequestParams {
  sort?: string;
  pagination?: PaginationByOffset | PaginationByPage;
  filters?: Record<string, unknown>;
  filterBy?: PostType[];
}

export interface SEO {
  id: number;
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: Image;
  keywords?: string;
  preventIndexing?: boolean;
}
