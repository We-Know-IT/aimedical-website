import { Post } from "../../services/types";
import Image from "next/image";
import Tag from "../general/tag";
import { mediaBaseUrl } from "../../strapi/strapi";
import { waitUntilSymbol } from "next/dist/server/web/spec-extension/fetch-event";
import { getDateString } from "../../utils/date";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  console.dir(post);
  return (
    <div className="rounded-2xl shadow-md p-9 background max-w-xl h-full flex flex-col justify-between border-2 border-transparent hover:border-blue-100 ">
      <div className="my-2 mb-2 flex flex-col space-y-2">
        <h3 className="text-blue-100 text-xl">{post.title}</h3>
        <p className="text-base line-clamp-3 ">{post.ingress}</p>
      </div>

      {post.images[0] && (
        <Image
          className="mb-2 max-h-64 w-auto object-cover rounded"
          src={mediaBaseUrl + post.images[0].url}
          width={post.images[0].width}
          height={post.images[0].height}
          alt={post.images[0].alternativeText || ""}
        />
      )}

      <div className="flex flex-row items-center justify-between">
        <p className="text-color-on-primary text-sm flex">
          {getDateString(new Date(post.publishedAt))}
        </p>
        <Tag text={post.postType} />
      </div>
    </div>
  );
}
