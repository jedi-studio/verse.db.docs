import Link from "next/link";
import React from "react";

const HeroSection = () => {
  let badgeDevStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 100px)",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    paddingBottom: "20px",
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl tracking-tighter font-extrabold">verse.db</h1>
          <p className="py-6">
            verse.db isn't just a database, it's your universal data bridge.
            Designed for unmatched flexibility, security, and performance,
            verse.db empowers you to manage your data with ease.
          </p>
          <div className="badges" style={badgeDevStyle}>
            <img
              src="https://img.shields.io/github/deployments/jedi-studio/verse.db/Tests"
              alt="Tests deployments"
            />
            <img
              src="https://img.shields.io/npm/v/verse.db.svg"
              alt="NPM Version"
            />
            <img
              src="https://img.shields.io/npm/dt/verse.db.svg"
              alt="NPM Downloads"
            />
            <img
              src="https://img.shields.io/npm/l/verse.db.svg"
              alt="LICENSE"
            />
            <img
              src="https://img.shields.io/github/contributors/jedi-studio/verse.db.svg"
              alt="Contributors"
            />
            <img
              src="https://img.shields.io/github/last-commit/jedi-studio/verse.db.svg"
              alt="Commit"
            />
          </div>
          <Link
            className="btn btn-primary"
            href="docs/introduction/installation"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
