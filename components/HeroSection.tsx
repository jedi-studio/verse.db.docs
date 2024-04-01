import Link from "next/link";
import React from "react";

const HeroSection = () => {

  let badgeDevStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    paddingBottom: "20px"
  }
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl tracking-tighter font-extrabold">
            verse.db
          </h1>
          <p className="py-6">
            verse.db isn't just a database, it's your universal data bridge. Designed for unmatched flexibility, security, and performance, verse.db empowers you to manage your data with ease.
          </p>
          <div className="badges" style={badgeDevStyle}>
            <img alt="Periodic testing of the Verse.db" src="https://github.com/Marco5dev/verse.db/actions/workflows/code-test.yml/badge.svg" />
            <img alt="NPM Version" src="https://img.shields.io/npm/v/verse.db" />
            <img alt="NPM downloads" src="https://img.shields.io/npm/dt/verse.db.svg" />
          </div>
          <Link className="btn btn-primary" href="docs/introduction/installation">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
