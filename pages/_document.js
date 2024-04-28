import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SkipNavLink } from "nextra-theme-docs";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <SkipNavLink styled />
          <Main />
          <NextScript />
          <Analytics />
          <SpeedInsights/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
