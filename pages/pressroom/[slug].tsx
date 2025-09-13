import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../../components/general/Header";
import { getPostBySlug, getPosts } from "../../services/api";
import { Post, ServiceResponse } from "../../services/types";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";
import { useCookieConsent } from "../../context/cookieConsent";
import MetaTags from "../../components/general/seo/MetaTags";
import remarkGfm from "remark-gfm";
import Typography from "../../components/common/Typography";
import VideoPlaceholder from "../../components/general/cookie-consent/VideoPlaceholder";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const isYoutubeLink = (content: string) => {
  if (content.toLowerCase().includes("youtube")) {
    return true;
  }
  if (content.toLowerCase().includes("youtu.be")) {
    return true;
  }
  return false;
};

const isVideoLink = (content: string) => {
  return content.toLowerCase().includes("video");
};

function safeNumber(value: string): number | undefined {
  const parsedValue = parseInt(value);
  return isNaN(parsedValue) ? undefined : parsedValue;
}

const getEmbedYoutubeLink = (url: string) => {
  const regExp =
    /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/|shorts\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
  const match = url.match(regExp);
  const videoId = match ? match[1] : "";
  return `https://www.youtube.com/embed/${videoId}`;
};

export default function PostDetails(props: ServiceResponse<Post>) {
  const post = props.data;

  const { cookieConsent, setConsent } = useCookieConsent();
  return (
    <>
      <Head>
        <title>AI Medical | Pressroom </title>
        {post && (
          <MetaTags
            title={post?.seo?.metaTitle || post.title}
            description={post?.seo?.metaDescription || post.ingress}
            image={post?.seo?.shareImage?.url || post.headerImage?.url}
            keywords={post?.seo?.keywords}
            preventIndexing={post?.seo?.preventIndexing}
          />
        )}
      </Head>
      <Header
        title={capitalizeFirstLetter(post?.postType || "Blog") + " post"}
        imageUrl={post?.headerImage?.url || ""}
      />
      <main className="my-12 ml-auto mr-auto max-w-5xl px-6">
        {post && (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // map the headings in content that starts from "#/h1" to match structure on page where the "main heading" of the post should be h3 since h1 and h2 is added previously on page.
              h1: (props) => {
                return (
                  <>
                    <Typography variant="h2" className="mt-6">
                      {props.children[0]}
                    </Typography>
                    {/* Could add the ingress after the main title, however, might be counter intuitive */}
                    {/* <p className="mb-6 text-lg font-medium">{post.ingress}</p> */}
                  </>
                );
              },
              h2: (props) => {
                return (
                  <Typography variant="h3" className="mt-4">
                    {props.children[0]}
                  </Typography>
                );
              },
              h3: (props) => {
                return (
                  <Typography variant="h4" className="mt-4">
                    {props.children[0]}
                  </Typography>
                );
              },
              h4: (props) => {
                return (
                  <Typography variant="h5" className="mt-4">
                    {props.children[0]}
                  </Typography>
                );
              },

              img: (props) => {
                const width = props.title;
                const widthValue = width ? safeNumber(width) : 600;
                return (
                  <div className="relative my-10 flex h-auto items-center justify-center">
                    <Image
                      src={props.src || ""}
                      alt={props.alt || ""}
                      width={widthValue}
                      height={0}
                      className="rounded-md object-cover"
                    />
                  </div>
                );
              },

              p: (props) => {
                // links are rendered inside <p></p> tags and we don't want the <video> element to be inside a p tag since it is invalid HTML syntax.
                // The <a> element is valid to put inside <p> tags but the markdown parser is right now wrapping a single <a> inside <p> so we can remove that to!

                if (
                  props.node.children[0].type === "text" ||
                  (props.node.children[0].type === "element" &&
                    props.node.children[0].tagName === "strong") ||
                  (props.node.children[0].type === "element" &&
                    props.node.children[0].tagName === "em")
                ) {
                  return (
                    <Typography
                      variant="p"
                      className="my-2 whitespace-pre-wrap">
                      {props.children}
                    </Typography>
                  );
                } else {
                  return <>{props.children[0]}</>;
                }
              },

              strong: (props) => {
                return <strong>{props.children}</strong>;
              },

              a: (props) => {
                // suggested solution for linking videos in strapi is to check if the address is a youtube video and then render <iframe> and also check if
                // the word "video" is included and in that case render a <video> element. A limitation here is that the user must add the word video in the link name or address if
                // they upload local videos
                const width = props.title;
                const widthValue = width ? safeNumber(width) : 600;
                const linkName = props.children[0];
                const linkAddress = props.href;
                if (!linkName || !linkAddress) return null;
                if (
                  isVideoLink(linkName.toString()) ||
                  isVideoLink(linkAddress)
                ) {
                  return (
                    <video
                      controls
                      className="mb-4 aspect-video max-w-full"
                      width={widthValue}>
                      <source src={props.href} type="video/mp4" />
                    </video>
                  );
                } else if (
                  isYoutubeLink(linkAddress.toString()) &&
                  cookieConsent
                ) {
                  return (
                    <iframe
                      className="mx-auto mb-4 aspect-video max-w-full"
                      width={widthValue}
                      title={linkName?.toString() || ""}
                      src={getEmbedYoutubeLink(linkAddress.toString())}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
                  );
                } else if (
                  isYoutubeLink(linkAddress.toString()) &&
                  !cookieConsent
                ) {
                  return <VideoPlaceholder width={width} />;
                } else {
                  return (
                    <Link
                      className="font-semibold text-primary visited:text-primary-hover hover:text-primary-hover focus:text-primary-hover active:text-primary"
                      href={linkAddress}>
                      {linkName}
                    </Link>
                  );
                }
              },
              ul: (props) => {
                return (
                  <ul className="mb-2 list-inside list-disc">
                    {props.children}
                  </ul>
                );
              },
              li: (props) => {
                return (
                  <li>
                    <Typography variant="p" className="inline-block">
                      {props.children}
                    </Typography>
                  </li>
                );
              },
              ol: (props) => {
                return (
                  <ol className="mb-2 list-inside list-decimal">
                    {props.children}
                  </ol>
                );
              },
              blockquote: (props) => {
                return (
                  <blockquote className="my-4 rounded-md bg-gray-100 px-4 py-1  text-lg italic text-on-bg-primary">
                    {props.children}
                  </blockquote>
                );
              },
            }}>
            {post.content}
          </ReactMarkdown>
        )}
      </main>
    </>
  );
}

export const getStaticProps: GetServerSideProps<{
  data: Post | null;
  error: string | null;
}> = async (context) => {
  const postSlug = context.params?.slug;
  if (!postSlug) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  if (Array.isArray(postSlug)) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  const res = await getPostBySlug(postSlug);

  if (res.error) {
    if (res.error === "Not Found") {
      return {
        notFound: true,
        revalidate: 10,
      };
    }

    // Redirects to 500.tsx page but only in production mode!
    // run 'npm run build' and 'npm run start' to test.
    throw res.error;
  }

  return { props: res, revalidate: 10 };
};

export async function getStaticPaths() {
  const res = await getPosts({
    filterBy: ["blog", "news"],
  });
  if (res.error || !res.data) {
    throw new Error(res.error);
  }

  const posts = res.data.posts;

  const paths = posts.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}
