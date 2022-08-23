import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="da">
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#0f163a" />
          <meta name="apple-mobile-web-app-status-bar" content="#0f163a" />
          <link rel="apple-touch-icon" href="/logos/logo-96x96.png" />
          {/* Generel */}
          <meta
            name="no-email-collection"
            content="http://www.unspam.com/noemailcollection/"
          />
          <meta name="distribution" content="web" />
          <meta name="Classification" content="Business" />
          <meta name="target" content="all" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="MobileOptimized" content="320" />
          <meta name="theme-color" content="#0f163a" />

          {/* Information */}
          <meta name="subject" content="Heidelife Minecarft Server" />
          <meta
            name="keywords"
            content="minecraft, discord, dansk, danish, public, server"
          />
          <meta name="abstract" content="Heidelife Minecraft Server" />
          <meta name="summary" content="Heidelife Minecraft Server" />
          <meta name="topic" content="Minecraft Server" />
          <meta name="copyright" content="Heidelife.dk 2022" />

          {/* Language */}
          <meta name="language" content="DA" />
          <meta name="country" content="Denmark" />
          <meta name="distribution" content="global" />

          {/* Authors */}
          <meta
            name="author"
            content="Karsten F. Pedersen, karstenfp.all@gmail.com"
          />
          <meta name="designer" content="Karsten F. Pedersen" />
          <meta name="publisher" content="Heidelife.dk" />
          <meta name="web_author" content="Karsten F. Pedersen" />
          <meta name="reply-to" content="email@hotmail.com" />
          <meta name="owner" content="" />

          {/* OpenGraph */}
          <meta name="og:title" content="Heidelife.dk" />
          <meta name="og:type" content="website" />
          <meta name="og:locale" content="da_DK" />
          <meta name="og:site_name" content="Heidelife.dk" />
          <meta name="og:image" content="/images/logos/logo.png" />
          <meta name="og:image:alt" content="Heidelife.dk logo" />
          <meta name="og:image:type" content="image/png" />
          <meta name="og:image:width" content="300" />
          <meta name="og:image:height" content="300" />
          <meta name="og:email" content="karstenfp.all@gmail.com" />
          <meta name="og:region" content="DK" />
          <meta name="og:country-name" content="Denmark" />

          {/* Robots */}
          <meta name="robots" content="index,follow" />

          {/* Apple */}
          <meta name="apple-mobile-web-app-title" content="Heidelife.dk" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-touch-fullscreen" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black" />
          <meta name="format-detection" content="telephone=no" />

          {/* Google */}
          <meta
            name="news_keywords"
            content="Minecraft, Server, Heidelife, Heidelife.dk, Dansk"
          />
        </Head>
        <body className="min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
