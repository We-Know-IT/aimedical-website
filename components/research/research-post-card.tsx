import React from "react";
import Image from "next/image";
import { Post } from "../../services/types";
import Skeleton from "react-loading-skeleton";
import Button from "../general/button";
import Link from "next/link";
import "react-loading-skeleton/dist/skeleton.css";

type Props = {
  post?: Post;
};

export default function researchPostCard({ post }: Props) {
  return (
    <div className="flex h-full flex-col rounded-2xl shadow-md duration-200 md:h-80 md:w-full md:flex-row lg:h-96">
      {post?.listingImage && (
        <Image
          alt={post.listingImage.alternativeText || "Research post image"}
          className="clip-path-b md:clip-path-r h-64 w-full rounded-2xl object-cover md:h-80 md:w-5/12"
          src={post.listingImage?.url || ""}
          width={post.listingImage?.width}
          height={post.listingImage?.height}
        />
      )}
      {!post && (
        <Skeleton
          className="clip-path-b md:clip-path-r h-full rounded-2xl p-10"
          containerClassName="md:w-5/12 w-full h-64 md:h-full"
        />
      )}
      <div className="flex flex-col items-center justify-center md:w-7/12">
        <div className="mb-6 mt-2 flex w-full max-w-lg flex-col items-center justify-center space-y-4 px-6 md:items-end">
          <h3 className="text-xl text-primary md:w-full md:text-start">
            {post?.title || <Skeleton />}
          </h3>
          <p className="w-full text-start text-base line-clamp-5">
            {post?.ingress || <Skeleton count={4} />}
          </p>
          {post ? (
            <Link href={`/research/${post.id}`}>
              <Button isPrimary className="py-3 px-10">
                Read more
              </Button>
            </Link>
          ) : (
            <Skeleton borderRadius={100} height={40} width={160} />
          )}
        </div>
      </div>
    </div>
  );
}
