import { Post } from "../../services/types";
import Image from "next/image";
import Tag from "../general/tag";
import { mediaBaseUrl } from "../../strapi/strapi";

type Props = {
  post: Post;
};

const months = [
  "jan",
  "feb",
  "mars",
  "apr",
  "maj",
  "june",
  "july",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

export default function PostCard({ post }: Props) {
  const getDateString = (date: Date) => {
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };
  return (
    <div className="rounded-2xl shadow-md p-9 background">
      <h3 className="text-blue-100 text-xl my-2">{post.title}</h3>
      <p className="text-base line-clamp-3 mb-2">{post.ingress}</p>

      {post.images[0] && (
        <Image
          className="mb-2 mx-auto"
          src={mediaBaseUrl + post.images[0].url}
          width={post.images[0].width}
          height={post.images[0].height}
          alt={post.images[0].alternativeText}
        />
      )}

      <div className="flex flex-row content-center justify-between">
        <p className="text-color-on-primary text-sm">
          {getDateString(new Date(post.publishedAt))}
        </p>
        <Tag text={post.postType} />
      </div>
    </div>
  );
}
