import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logo from "./components/logo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: () => {
    return (
      <>
        <Logo height={24} />
        <span
          className="mx-2 font-extrabold hidden md:inline select-none"
          title={`verse.db Logo`}
        >
          verse.db
        </span>
      </>
    );
  },
  project: {
    link: "https://github.com/Marco5dev/verse.db",
  },
  docsRepositoryBase: "https://github.com/Marco5dev/verse.db.docs/tree/master/",
  chat: {
    link: "https://discord.gg/EurnFWMweW",
  },
  head: () => {
    const { route, locale } = useRouter();
    const { frontMatter, title } = useConfig();

    const imageUrl = new URL("https://og.jedi-studio.com/api/og/jsonverse?title=verse%2Edb");

    if (!/\/index\.+/.test(route)) {
      imageUrl.searchParams.set("title", title);
    }

    const ogTitle = title ? `${title} - verse.db` : `verse.db`;
    const ogDescription = frontMatter.description;
    const ogImage = frontMatter.image || imageUrl.toString();

    return (
      <>
        {/* Favicons, meta */}
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
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="apple-mobile-web-app-title" content="SWR" />
        <meta name="description" content={ogDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kmoshax" />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:locale" content={locale} />
        <title>
          {title ? `${title} | VERSE.DB` : `VERSE.DB`}
        </title>
      </>
    );
  },
  footer: {
    text: "verse.db Powered by JEDI Studio.",
  },
};

export default config;
