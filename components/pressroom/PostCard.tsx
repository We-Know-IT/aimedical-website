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
    <div className="group flex h-full max-w-xl flex-col bg-white rounded-lg duration-200 hover:shadow-md">
      {/* Image at the top */}
      <div className="w-full h-48 bg-gray-100 rounded-lg overflow-hidden">
        {post?.listingImage ? (
          <Image
            className="w-full h-full object-cover"
            src={post.listingImage?.url || ""}
            width={post.listingImage?.width}
            height={post.listingImage?.height}
            alt={post.listingImage?.alternativeText || ""}
            placeholder="blur"
            blurDataURL="/images/blur.jpg"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            {!post && <Skeleton height={192} width="100%" />}
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="flex font-robotoFlex flex-col p-6 space-y-0">
        {/* Content type indicator */}
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-cyan rounded-full"></div>
          <span className="text-sm font-light text-darkblue">
            {post ? (
              post.postType === "news" ? "Press release" : "Article"
            ) : (
              <Skeleton width={80} />
            )}
          </span>
        </div>

        {/* Date */}
        <Typography variant="p" className="text-sm font-light text-darkblue-page-active !mb-4">
          {post ? (
            getDateString(new Date(post.publishedAt))
          ) : (
            <Skeleton width={80} />
          )}
        </Typography>

        {/* Title */}
        <Typography variant="h3" className="text-sm font-light text-darkblue line-clamp-3 transition-colors">
          {post?.title || <Skeleton count={2} />}
        </Typography>
      </div>
    </div>
  );
}
