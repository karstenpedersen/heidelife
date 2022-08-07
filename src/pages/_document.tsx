import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta name="theme-color" content="#18181b" />

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
