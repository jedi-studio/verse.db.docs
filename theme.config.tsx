import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logo from "./src/components/logo";
import Npm from "./src/components/npm";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "VERSE.DB | %s",
    };
  },
  logo: () => {
    return (
      <>
        <Logo height={24} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={`verse.db Logo`}
        >
          VERSE.DB
        </span>
      </>
    );
  },
  project: {
    link: "https://github.com/jedi-studio/verse.db",
  },
  navbar: {
    extraContent: <Npm />
  },
  docsRepositoryBase:
    "https://github.com/jedi-studio/verse.db.docs/tree/master/",
  chat: {
    link: "https://discord.gg/EurnFWMweW",
  },
  banner: {
    key: '2.1-release',
    text: (
      <a href="https://versedb.jedi-studio.com/blog" target="_blank">
        🎉 Blog is released. Read more →
      </a>
    )
  },
  primaryHue: { dark: 230, light: 230 },
  primarySaturation: { dark: 45, light: 100 },
  sidebar: {
    toggleButton: true,
  },
  head: () => {
    const { route, locale } = useRouter();
    const router = useRouter();
    const { frontMatter, title } = useConfig();

    const imageUrl = new URL(
      "https://og.jedi-studio.com/api/og/versedb?type=DOCUMENTATION&title=VERSE%2EDB&description=description%2Etest"
    );
    const ogTitle = title ? `VERSE.DB | ${title}` : `VERSE.DB`;
    const adapterTitle = frontMatter.adapter ? `${frontMatter.adapter} ${title}` : `${title}`;
    const ogDescription = frontMatter.description
      ? frontMatter.description
      : `verse.db isn't just a database, it's your universal data bridge. Designed for unmatched flexibility, security, and performance, verse.db empowers you to manage your data with ease.`;
    
      if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", adapterTitle);
      imageUrl.searchParams.set("description", ogDescription);
    }

    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        {/* Favicons, meta */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://i.ibb.co/wRxVjYf/verse-db-circle.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://i.ibb.co/wRxVjYf/verse-db-circle.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://i.ibb.co/wRxVjYf/verse-db-circle.png"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="https://i.ibb.co/wRxVjYf/verse-db-circle.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="https://i.ibb.co/wRxVjYf/verse-db-circle.png"
          color="#000000"
        />
        {/* META DATA */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="apple-mobile-web-app-title" content="VERSE.DB" />
        <meta name="msapplication-TileColor" content="#0a192f" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="apple-mobile-web-app-title" content="VERSE.DB" />
        <meta property="msapplication-TileColor" content="#0a192f" />
        <meta property="twitter:card" content="summary_large_image" />

        {/*  MAIN META TAGS  */}
        <meta
          name="keywords"
          content="jedi, studio, verse.db, verse, db, json, sql, yaml, schema, schema-less, docs, data, database, data bridge,"
        />
        <meta name="title" content={ogTitle} />
        <meta name="description" content={ogDescription} />
        <meta name="copyright" content="JEDI Studio." />
        <meta name="language" content="EN" />
        <meta name="author" content="JEDI Studio." />
        <meta name="designer" content="JEDI Studio." />
        <meta name="copyright" content="JEDI Studio." />
        <meta name="reply-to" content="support@jedi-studio.com" />
        <meta name="owner" content="JEDI Studio." />
        <meta name="url" content={`http://jedi-studio.com${router.pathname}`} />

        {/*  MAIN META TAGS  */}
        <meta
          property="keywords"
          content="jedi, studio, verse.db, verse, db, json, sql, yaml, schema, schema-less, docs, data, database, data bridge,"
        />
        <meta property="title" content={ogTitle} />
        <meta property="description" content={ogDescription} />
        <meta property="copyright" content="JEDI Studio." />
        <meta property="language" content="EN" />
        <meta
          property="author"
          content="JEDI Studio."
        />
        <meta property="designer" content="JEDI Studio." />
        <meta property="copyright" content="JEDI Studio." />
        <meta property="reply-to" content="support@jedi-studio.com" />
        <meta property="owner" content="JEDI Studio." />
        <meta property="url" content={`http://jedi-studio.com${router.pathname}`} />

        {/*  OG META TAGS WITH NAME*/}
        <meta name="og:title" content={ogTitle} />
        <meta name="og:type" content="database" />
        <meta name="og:url" content={`http://jedi-studio.com${router.pathname}`} />
        <meta name="og:image" content={ogImage} />
        <meta name="og:site_name" content="JEDI Studio." />
        <meta name="og:description" content={ogDescription} />
        <meta name="fb:page_id" content="JEDI Studio." />
        <meta name="og:email" content="support@jedi-studio.com" />
        <meta name="og:author" content="JEDI Studio." />

        {/*  OG META TAGS WITH NAME*/}

        <meta property="og:title" content={ogTitle} />
        <meta property="og:type" content="database" />
        <meta property="og:url" content={`http://jedi-studio.com${router.pathname}`} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="JEDI Studio." />
        <meta property="og:description" content={ogDescription} />
        <meta property="fb:page_id" content="JEDI Studio." />
        <meta property="og:email" content="support@jedi-studio.com" />
        <meta property="og:author" content="JEDI Studio." />

        {/* TWITTER OG */}
        <meta property="twitter:image" content={ogImage} />
        <meta property="twitter:title" content={ogTitle} />
        <meta property="twitter:description" content={ogDescription} />
        {/* TITLE */}
        <title>{ogTitle}</title>
      </>
    );
  },
  footer: {
    text: "VERSE.DB. Powered by JEDI Studio.",
  },
};

export default config;
