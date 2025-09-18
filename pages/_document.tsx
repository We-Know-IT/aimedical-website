import { Html, Head, Main, NextScript } from "next/document";

/*
A custom Document can update the <html> and <body> tags used to render a Page. 
This file is only rendered on the server, so event handlers like onClick cannot be used in _document.
*/
export default function Document() {
  return (
    <Html>
      <Head>
        {/* Preload critical Haas Grotesk fonts */}
        <link
          rel="preload"
          href="/fonts/haas-grotesk/neuehaasgrotdisp-45light-trial.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/haas-grotesk/neuehaasgrotdisp-55roman-trial.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/haas-grotesk/neuehaasgrotdisp-65medium-trial.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/x-icon" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
