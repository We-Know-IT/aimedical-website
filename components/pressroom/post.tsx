import { Post } from "../../services/types";
import Image from "next/image";
import Tag from "../general/tag";
import { getDateString } from "../../utils/date";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="rounded-2xl shadow-md p-9 background max-w-xl h-full flex flex-col justify-between border-2 border-transparent hover:border-blue-100 duration-200">
      <div className="my-2 mb-2 flex flex-col space-y-2">
        <h3 className="text-blue-100 text-xl">{post.title}</h3>
        <p className="text-base line-clamp-3 ">{post.ingress}</p>
      </div>

      <Image
        className="mb-2 max-h-64 w-auto object-cover rounded"
        src={post.listingImage?.url || ""}
        width={post.listingImage?.width}
        height={post.listingImage?.height}
        alt={post.listingImage?.alternativeText || ""}
      />

      <div className="flex flex-row items-center justify-between">
        <p className="text-color-on-primary text-sm flex">
          {getDateString(new Date(post.publishedAt))}
        </p>
        <Tag text={post.postType} />
      </div>
    </div>
  );
}
