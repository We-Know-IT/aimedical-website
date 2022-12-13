import { Post } from "../../services/types";
import Image from "next/image";
import Tag from "../general/tag";
import { getDateString } from "../../utils/date";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="background flex h-full max-w-xl flex-col justify-between rounded-2xl border-2 border-transparent p-9 shadow-md hover:border-blue-100 ">
      <div className="my-2 mb-2 flex flex-col space-y-2">
        <h3 className="text-xl text-blue-100">{post.title}</h3>
        <p className="text-base line-clamp-3 ">{post.ingress}</p>
      </div>

      {post.images[0] && (
        <Image
          className="mb-2 max-h-64 w-auto rounded object-cover"
          src={post.images[0].url}
          width={post.images[0].width}
          height={post.images[0].height}
          alt={post.images[0].alternativeText || ""}
        />
      )}

      <div className="flex flex-row items-center justify-between">
        <p className="flex text-sm text-color-on-primary">
          {getDateString(new Date(post.publishedAt))}
        </p>
        <Tag text={post.postType} />
      </div>
    </div>
  );
}
