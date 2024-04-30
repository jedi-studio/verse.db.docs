import React from "react";
import Logo from "./logo"

const Blog = () => {
  return (
    <div className="hero min-h-screen w-full">
      <div className="hero-content text-center">
        <div className="max-w-md main-text flex flex-col justify-center">
          <Logo height={"120"} />
          <br />
          <h1 className="text-5xl tracking-tighter font-extrabold">COMING SOON</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
