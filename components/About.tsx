import React from "react";
import Logo from "./logo";
import "./about.module.css";

function About() {
  return (
    <main className={"about flex flex-row items-center w-full"}>
      <div className="hero min-h-screen w-full">
        <div className="hero-content text-center">
          <div className="max-w-md main-text">
          <div className="logos flex">
            <Logo height={100} /> <p className={"span-logo-plus"}>+</p>{" "}
            <Logo height={100} />
          </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
