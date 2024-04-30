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
              verse.db isn't just a database, it's your universal data bridge.
              Designed for unmatched flexibility, security, and performance,
              verse.db empowers you to manage your data with ease.
            </p>
            <div className="devs">
              <div className="title font-bold text-2xl">
                <h2>Developers</h2>
              </div>
              <div className="descri">
                <p className="" style={{ opacity: "0.5" }}>
                  JavaScript Experienced Developers International.
                </p>
              </div>
              <div className="about-cards flex flex-col items-center">

                <div className="card w-85 bg-base-100 shadow-xl card-side" style={{ width: "450px" }} >
                  <figure style={{ width: "250px", height: "180px" }}>
                    <img
                      src="https://marco5dev.site/assets/mark-img1-f8981f4a.jpg"
                      alt="Mark Maher"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Mark Maher</h2>
                    <p style={{ textAlign: "left" }}>Full Stack Developer</p>
                    <div className="card-actions flex justify-end font-bold">
                      <a href="https://facebook.com/marco5dev" className="badge badge-info hover:badge-outline" target="_blank" >{"Facebook"}</a>
                      <a href="https://instagram.com/marco5dev" className="badge badge-secondary hover:badge-outline" target="_blank" >{"Instagram"}</a>
                      <a href="https://github.com/ANAS799" className="badge badge-ghost hover:badge-outline" target="_blank" >{"Github"}</a>
                      <a href="https://twitter.com/mark5dev" className="badge badge-ghost hover:badge-outline" target="_blank" >{"X"}</a>
                    </div>
                  </div>
                </div>

                <div className="card w-85 bg-base-100 shadow-xl card-side" style={{ width: "450px" }} >
                  <figure style={{ width: "180px", height: "180px" }}>
                    <img
                      src="https://media.discordapp.net/attachments/1153369478860648548/1234722757753966635/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg?ex=6631c4ad&is=6630732d&hm=9981acd73269cdb1ef93392d279c630ce3df357cd78821c887109625e6dbf1c6&=&format=webp&width=592&height=592"
                      alt="Anas Khlaid"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Anas Khalid</h2>
                    <p style={{ textAlign: "left" }}>Backend Developer</p>
                    <div className="card-actions flex justify-end font-bold">
                      <a href="https://github.com/ANAS799" className="badge badge-ghost hover:badge-outline" target="_blank" >{"Github"}</a>
                      <a href="https://twitter.com/an79_ii" className="badge badge-ghost hover:badge-outline" target="_blank" >{"X"}</a>
                    </div>
                  </div>
                </div>

                <div className="card w-85 bg-base-100 shadow-xl card-side" style={{ width: "450px" }} >
                  <figure style={{ width: "180px", height: "180px" }}>
                    <img
                      src="https://media.discordapp.net/attachments/1153369478860648548/1234722757753966635/shadow-boy-white-eyes-unique-cool-pfp-nft-13yuypusuweug9xn.jpg?ex=6631c4ad&is=6630732d&hm=9981acd73269cdb1ef93392d279c630ce3df357cd78821c887109625e6dbf1c6&=&format=webp&width=592&height=592"
                      alt="Karem"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Karem</h2>
                    <p style={{ textAlign: "left" }}>Full Stack Web Developer</p>
                    <div className="card-actions flex justify-end font-bold">
                      <a href="https://github.com/kmoshax" className="badge badge-ghost hover:badge-outline" target="_blank" >{"Github"}</a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
