import React from "react";
import Logo from "./logo"
import BlogContainer from "./blog/container"

const Blog = () => {
  return (
    <div >
      <div >
        {/* <div className="max-w-md main-text flex flex-col justify-center">
          <Logo height={"120"} />
          <br />
          <h1 className="text-5xl tracking-tighter font-extrabold">COMING SOON</h1>
        </div> */}
        <BlogContainer />
      </div>
    </div>
  );
};

export default Blog;
