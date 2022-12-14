import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../../components/general/header";
import { getPost, ServiceResponse } from "../../services/api";
import { Post } from "../../services/types";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function PostDetails(props: ServiceResponse<Post>) {
  const post = props.data;

  const isVideoLink = (content: string) => {
    return content.toLowerCase().includes("video");
  };

  const isYoutubeLink = (content: string) => {
    return content.toLowerCase().includes("youtube");
  };

  return (
    <>
      <Head>
        <title>AI Medical | Pressroom </title>
        <meta name="description" content="News and blog from AI Medical" />
      </Head>
      <Header
        title={capitalizeFirstLetter(post?.postType || "Blog") + " post"}
        imageUrl={post?.headerImage?.url || ""}
      />
      <main className="max-w-5xl ml-auto mr-auto px-6 my-12">
        {post && (
          <ReactMarkdown
            components={{
              // map the headings in content that starts from "#/h1" to match structure on page where the "main heading" of the post should be h3 since h1 and h2 is added previously on page.
              h1: (props) => {
                return (
                  <>
                    <h3 className="text-4xl font-bold text-blue-100 my-6">
                      {props.children[0]}
                    </h3>
                    <p className="text-lg font-medium mb-6">{post.ingress}</p>
                  </>
                );
              },
              h2: (props) => {
                return (
                  <h4 className="text-xl font-bold text-color-on-primary my-4">
                    {props.children[0]}
                  </h4>
                );
              },
              h3: (props) => {
                return (
                  <h5 className="text-lg font-bold text-color-on-primary my-4">
                    {props.children[0]}
                  </h5>
                );
              },
              h4: (props) => {
                return (
                  <h6 className="text-lg text-color-on-primary my-4">
                    {props.children[0]}
                  </h6>
                );
              },

              img: (props) => {
                return (
                  <div className="relative w-full aspect-video my-4">
                    <Image
                      src={props.src || ""}
                      alt={props.alt || ""}
                      fill
                      className="object-cover"
                    />
                  </div>
                );
              },
              p: (props) => {
                // links are rendered inside <p></p> tags and we don't want the <video> element to be inside a p tag since it is invalid HTML syntax.
                // The <a> element is valid to put inside <p> tags but the markdown parser is right now wrapping a single <a> inside <p> so we can remove that to!
                if (props.node.children[0].type === "text") {
                  return (
                    <p className="text-lg text-color-on-primary whitespace-pre-wrap my-4">
                      {props.children[0]}
                    </p>
                  );
                } else {
                  return <>{props.children[0]}</>;
                }
              },

              a: (props) => {
                // suggested solution for linking videos in strapi is to check if the address is a youtube video and then render <iframe> and also check if
                // the word "video" is included and in that case render a <video> element. A limitation here is that the user must add the word video in the link name or address if
                // they upload local videos

                const linkName = props.children[0];
                const linkAddress = props.href;
                if (
                  (linkName && isVideoLink(linkName.toString())) ||
                  (linkAddress && isVideoLink(linkAddress))
                ) {
                  return (
                    <video controls className="aspect-video mb-4" width="100%">
                      <source src={props.href} type="video/mp4" />
                    </video>
                  );
                } else if (
                  linkAddress &&
                  isYoutubeLink(linkAddress.toString())
                ) {
                  return (
                    <iframe
                      className="aspect-video mb-4"
                      width="100%"
                      title={linkName?.toString() || ""}
                      src={linkAddress}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen></iframe>
                  );
                } else {
                  return (
                    <a
                      className="active:text-blue-100 focus:text-blue-hover visited:text-blue-hover link:text-blue-100 hover:text-blue-hover"
                      href={linkAddress}>
                      {linkName}
                    </a>
                  );
                }
              },
            }}>
            {post.content}
          </ReactMarkdown>
        )}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<{
  data: Post | null;
  error: string | null;
}> = async (context) => {
  const postId = parseInt(context.params?.id as string);
  const res = await getPost(postId);

  if (res.error) {
    if (res.error === "Not Found") {
      return {
        notFound: true,
      };
    }

    // Redirects to 500.tsx page but only in production mode!
    // run 'npm run build' and 'npm run start' to test.
    throw res.error;
  }

  return { props: res };
};
