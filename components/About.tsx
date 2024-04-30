import React from "react";
import Logo from "./logo";
import JEDILogo from "./jedi-logo";
import "./about.module.css";

function About() {
  return (
    <main className={"about flex flex-row items-center w-full"}>
      <div className="hero min-h-screen w-full">
        <div className="hero-content text-center">
          <div className="max-w-md main-text">
            <div className="logos flex">
              <div className="logo-hover logo-padding">
                <Logo height={100} />
              </div>
              <p className={"span-logo-plus logo-padding"}>{"|"}</p>{" "}
              <div className="logo-hover logo-padding">
                <JEDILogo height={100} />
              </div>
            </div>
            <p className="text-2xl font-bold">
              VERSE.DB <span className="text-base font-normal">by</span> JEDI
              Studio.
            </p>
            <p className="py-6" style={{ opacity: "0.5" }}>
              <span className="font-bold">JEDI Studio</span>: We're more than
              just a team; we're a close-knit family of passionate individuals.
              Our mission? To showcase our diverse skills and tackle the
              seemingly impossible. With code as our weapon, we're committed to
              making the world a better place. Welcome to{" "}
              <span className="font-bold">
                JavaScript Experienced Developers International Studios
              </span>{" "}
              (JEDI Studio). 🚀🌟
            </p>
            <a
              className="btn btn-outline btn-error"
              href="https://jedi-studio.com"
            >
              Team Website
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
