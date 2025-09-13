import { Post } from "../../services/types";
import Image from "next/image";
import Tag from "../general/Tag";
import { getDateString } from "../../utils/date";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Typography from "../common/Typography";

type Props = {
  post?: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <div className="group flex h-full max-w-xl flex-col justify-between rounded-xl bg-surface-primary p-9 shadow-lg duration-200 hover:-translate-y-1 hover:shadow-2xl">
      <div className="my-2 mb-2 flex flex-col space-y-2">
        <Typography variant="h2" className="group-hover:underline">
          {post?.title || <Skeleton />}
        </Typography>
        <Typography variant="p" className="line-clamp-3 ">
          {post?.ingress || <Skeleton count={3} />}
        </Typography>
      </div>
      <div className="flex flex-col">
        {post?.listingImage && (
          <Image
            className="mb-2 max-h-64 w-auto rounded object-cover"
            src={post.listingImage?.url || ""}
            width={post.listingImage?.width}
            height={post.listingImage?.height}
            alt={post.listingImage?.alternativeText || ""}
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
          />
        )}
        {!post && <Skeleton height={200} />}

        <div className="flex flex-row items-center justify-between">
          <Typography variant="p" className="flex text-on-surface-primary">
            {post ? (
              getDateString(new Date(post.publishedAt))
            ) : (
              <Skeleton width={60} />
            )}
          </Typography>
          {post ? (
            <Tag text={post.postType} />
          ) : (
            <Skeleton width={80} height={25} borderRadius={100} />
          )}
        </div>
      </div>
    </div>
  );
}
