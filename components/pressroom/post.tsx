import { Post } from "../../services/types";
import Image from "next/image";
import Tag from "../general/tag";
import { getDateString } from "../../utils/date";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  post?: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="background flex h-full max-w-xl flex-col justify-between rounded-2xl border-2 border-transparent p-9 shadow-md duration-200 hover:border-primary">
      <div className="my-2 mb-2 flex flex-col space-y-2">
        <h3 className="text-xl text-primary">{post?.title || <Skeleton />}</h3>
        <p className="text-base line-clamp-3 ">
          {post?.ingress || <Skeleton count={3} />}
        </p>
      </div>
      {post?.listingImage && (
        <Image
          className="mb-2 max-h-64 w-auto rounded object-cover"
          src={post.listingImage?.url || ""}
          width={post.listingImage?.width}
          height={post.listingImage?.height}
          alt={post.listingImage?.alternativeText || ""}
        />
      )}
      {!post && <Skeleton height={200} />}

      <div className="flex flex-row items-center justify-between">
        <p className="flex text-sm text-on-primary">
          {post ? (
            getDateString(new Date(post?.publishedAt))
          ) : (
            <Skeleton width={60} />
          )}
        </p>
        {post ? (
          <Tag text={post.postType} />
        ) : (
          <Skeleton width={80} height={25} borderRadius={100} />
        )}
      </div>
    </div>
  );
}
