// pages/_document.js

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import toast, { Toaster } from 'react-hot-toast';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="zh-cn">
        <Head>
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          {CssBaseline.flush()}
          <link rel="stylesheet" href="/swiper/css/idangerous.swiper.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Toaster />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
