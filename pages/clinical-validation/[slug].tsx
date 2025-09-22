import { GetServerSideProps } from "next";
import Head from "next/head";
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
import ResearchPostCard from "../../components/research/ResearchPostCard";
import { getDateString } from "../../utils/date";

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

export default function ClinicalStudyDetails(props: ServiceResponse<Post> & { relatedStudies?: Post[] }) {
  const post = props.data;
  const relatedStudies = props.relatedStudies || [];

  const { cookieConsent, setConsent } = useCookieConsent();
  return (
    <>
      <Head>
        <title>AI Medical | Clinical Validation</title>
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
      
      <main className="min-h-screen bg-white">
      {post && (post.headerImage?.url || post.listingImage?.url) && (
        <header
          className="relative h-[70vh] max-h-[55vh] w-full pt-32 pb-12"
          id="header">
          <div className="container flex h-full justify-center">
            <div className="relative w-full overflow-hidden rounded-xl xl:container xl:max-w-none">
              <Image
                src={post.headerImage?.url || post.listingImage?.url || "/images/clinical-validation/header.jpg"}
                alt={post.headerImage?.alternativeText || post.listingImage?.alternativeText || "Clinical study header image"}
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
                placeholder="blur"
                blurDataURL="/images/blur.jpg"
              />
            </div>
          </div>
        </header>
      )}
        <div className="container mx-auto py-8 relative">
          {/* Back Button - Hidden on mobile */}
          <div className="hidden md:block absolute left-5 xl:left-8 2xl:left-16">
            <Link 
              href="/clinical-validation" 
              className="text-primary hover:text-darkblue font-haasGrotDisplay font-normal transition-colors flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </Link>
          </div>

          {/* Study Content */}
          <div className="max-w-2xl mx-auto">
            <article className="prose prose-lg mb-12">
              {/* Study Title */}
              <Typography variant="h3" className="text-lg md:text-xl font-haasGrotDisplay font-medium text-primary mb-4 leading-tight">
                {post?.title}
              </Typography>
              
              {/* Study Metadata */}
              <div className="flex flex-col items-start mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan rounded-full"></div>
                  <span className="text-sm font-medium text-gray-600">
                    Clinical Study
                  </span>
                </div>
                <Typography variant="p" className="text-sm font-light text-darkblue-page-active">
                  {post && getDateString(new Date(post.publishedAt))}
                </Typography>
              </div>

            {post && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
              // Study content headings - hide H1 since we already have the title
              h1: (props) => {
                return null;
              },
              h2: (props) => {
                return (
                  <Typography variant="h3" className="mt-4 text-base md:text-base font-haasGrotDisplay font-medium text-primary">
                    {props.children[0]}
                  </Typography>
                );
              },
              h3: (props) => {
                return (
                  <Typography variant="h4" className="mt-4 text-base md:text-base font-haasGrotDisplay font-medium text-primary">
                    {props.children[0]}
                  </Typography>
                );
              },
              h4: (props) => {
                return (
                  <Typography variant="h5" className="mt-4 text-base md:text-base font-haasGrotDisplay font-medium text-primary">
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
                      className="my-4 text-darkblue font-haasGrotDisplay font-light leading-relaxed">
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
                      className="text-primary underline visited:text-primary-hover hover:text-primary-hover focus:text-primary-hover active:text-primary"
                      href={linkAddress}>
                      {linkName}
                    </Link>
                  );
                }
              },
              ul: (props) => {
                return (
                  <ul className="mb-2 list-outside list-disc text-cyan pl-6">
                    {props.children}
                  </ul>
                );
              },
              li: (props) => {
                return (
                  <li>
                    <Typography variant="p" className="inline">
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
                  <blockquote className="my-4 rounded-md bg-gray-100 px-4 py-1 text-lg italic text-on-bg-primary">
                    {props.children}
                  </blockquote>
                );
              },
            }}>
            {post.content}
          </ReactMarkdown>
        )}
          </article>
          </div>

          {/* More like this section */}
          {relatedStudies.length > 0 && (
            <section className="mt-16">
              <Typography variant="h3" className="text-xl font-haasGrotDisplay font-medium text-primary mb-8">
                More studies
              </Typography>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedStudies.slice(0, 3).map((relatedStudy) => (
                  <Link key={relatedStudy.id} href={`/clinical-validation/${relatedStudy.slug}`}>
                    <ResearchPostCard post={relatedStudy} />
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetServerSideProps<{
  data: Post | null;
  error: string | null;
  relatedStudies?: Post[];
}> = async (context) => {
  const studySlug = context.params?.slug;
  if (!studySlug) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  if (Array.isArray(studySlug)) {
    return {
      notFound: true,
      revalidate: 10,
    };
  }
  const res = await getPostBySlug(studySlug);

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

  // Fetch related studies (excluding current study)
  let relatedStudies: Post[] = [];
  try {
    const relatedRes = await getPosts({
      filterBy: ["clinical-studies"],
      pagination: { start: 0, limit: 4 }
    });
    
    if (relatedRes.data) {
      relatedStudies = relatedRes.data.posts.filter(post => post.slug !== studySlug).slice(0, 3);
    }
  } catch (error) {
    console.error("Error fetching related studies:", error);
  }

  return { 
    props: { 
      ...res, 
      relatedStudies 
    }, 
    revalidate: 10 
  };
};

export async function getStaticPaths() {
  const res = await getPosts({
    filterBy: ["clinical-studies"],
  });
  if (res.error || !res.data) {
    throw new Error(res.error);
  }

  const studies = res.data.posts;

  const paths = studies.map((study) => {
    return {
      params: { slug: study.slug },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: 'blocking' } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths, fallback: "blocking" };
}