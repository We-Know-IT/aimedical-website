import { Post } from "../../services/types";
import Image from "next/image";
import Tag from "../general/tag";
import { getDateString } from "../../utils/date";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="background flex h-full max-w-xl flex-col justify-between rounded-2xl border-2 border-transparent p-9 shadow-md duration-200 hover:border-primary">
      <div className="my-2 mb-2 flex flex-col space-y-2">
        <h3 className="text-xl text-primary">{post.title}</h3>
        <p className="text-base line-clamp-3 ">{post.ingress}</p>
      </div>

      <Image
        className="mb-2 max-h-64 w-auto rounded object-cover"
        src={post.listingImage?.url || ""}
        width={post.listingImage?.width}
        height={post.listingImage?.height}
        alt={post.listingImage?.alternativeText || ""}
      />

      <div className="flex flex-row items-center justify-between">
        <p className="flex text-sm text-on-primary">
          {getDateString(new Date(post.publishedAt))}
        </p>
        <Tag text={post.postType} />
      </div>
    </div>
  );
}
