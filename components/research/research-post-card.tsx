import React from "react";
import Image from "next/image";
import { Post } from "../../services/types";
import Skeleton from "react-loading-skeleton";
import Button from "../general/button";
import Link from "next/link";

type Props = {
  post?: Post;
};

export default function researchPostCard({ post }: Props) {
  const onReadMoreClick = () => {};

  return (
    <div className="flex h-full max-w-xl flex-col justify-between rounded-2xl shadow-md duration-200 md:h-80 md:w-full md:max-w-none md:flex-row">
      {post?.listingImage && (
        <Image
          alt={post.listingImage.alternativeText}
          className="clip-path-b md:clip-path-r mb-2 w-full rounded-t-2xl object-cover"
          src={post.listingImage?.url || ""}
          width={post.listingImage?.width}
          height={post.listingImage?.height}
        />
      )}
      <div className="mb-6 flex flex-col items-center justify-center space-y-4 px-6 md:items-end">
        <h3 className="text-xl text-primary md:w-full md:text-start">
          {post?.title || <Skeleton />}
        </h3>
        <p className="w-full text-start text-base">
          {post?.ingress || <Skeleton count={3} />}
        </p>
        {post ? (
          <Link href={`/pressroom/${post.id}`}>
            <Button onClick={onReadMoreClick} isBlue className="py-3 px-10">
              Read more
            </Button>
          </Link>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
}
