interface Props {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
  preventIndexing?: boolean;
  url?: string;
}

import React from "react";

export default function MetaTags({
  title,
  description,
  image,
  keywords,
  preventIndexing,
  url,
}: Props) {
  return (
    <>
      {description && (
        <meta name="description" content={description} key="description" />
      )}
      {keywords && <meta name="keywords" content={keywords} />}
      {image && (
        <meta
          name="twitter:card"
          content="summary_large_image"
          key="twitter:card"
        />
      )}
      {url && <meta property="og:url" content={url} key="og:url" />}
      {title && <meta property="og:title" content={title} key="og:title" />}
      {description && (
        <meta
          property="og:description"
          content={description}
          key="og:description"
        />
      )}
      {image && <meta property="og:image" content={image} key="og:image" />}
      {url && <link rel="canonical" href={url} />}

      {preventIndexing && (
        <>
          <meta name="robots" content="noindex"></meta>
          <meta name="googlebot" content="noindex"></meta>
        </>
      )}
    </>
  );
}
