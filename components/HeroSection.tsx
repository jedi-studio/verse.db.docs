import Link from "next/link";
import React from "react";
import Logo from "./logo"

const HeroSection = () => {
  let Styleing = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  };
  return (
    <div className="hero min-h-screen full">
      <div className="hero-content text-center">
        <div className="max-w-md main-text">
          <Logo height={"120"} />
          <h1 className="text-5xl tracking-tighter font-extrabold">VERSE.DB</h1>
          <p className="py-6">
            verse.db isn't just a database, it's your universal data bridge.
            Designed for unmatched flexibility, security, and performance,
            verse.db empowers you to manage your data with ease.
          </p>
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
