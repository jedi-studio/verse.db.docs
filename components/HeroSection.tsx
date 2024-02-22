import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl tracking-tighter font-extrabold">
            JsonVerse
          </h1>
          <p className="py-6">
            jsonVerse is a lightweight JSON-based database package for Node.js.
            It provides a simple interface to store, retrieve, and manage data
            using JSON files.
          </p>
          <Link className="btn btn-primary" href="#">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
