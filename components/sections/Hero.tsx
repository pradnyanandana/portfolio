"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Link } from "react-scroll";
import animationData from "../../src/lottie/hero.json";

const Lottie = dynamic(() => import("react-lottie").then((mod) => mod.default ?? mod), { ssr: false });

const rotatingText = ["Web", "Backend", "WordPress"];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
};

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingText.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="hero-3 h-screen relative bg-gray-900">
      <div className="container h-full px-2 md:px-4 mx-auto">
        <div className="flex h-full flex-col-reverse justify-center sm:flex-row items-center -mx-3">
          <div className="w-full sm:w-2/5 px-3">
            <div className="sm:mx-0 sm:mb-8 text-center sm:text-left">
              <h2 className="text-3xl text-gray-100 xl:text-6xl leading-tight xl:leading-tight font-extrabold font-worksans">
                Hi, I&apos;m Pradnya. <br />A Professional{" "}
                <span className="inline-block bg-orange-500 font-bold rounded-xl text-white px-3 transition-all duration-300">
                  {rotatingText[textIndex]}
                </span>{" "}
                Developer.
              </h2>
            </div>
          </div>
          <div className="relative group w-full sm:w-3/5 px-3 mb-12 sm:mb-0">
            <div className="flex items-center justify-end mx-5">
              <Lottie
                options={defaultOptions}
                height={"auto"}
                width={"100%"}
                style={{ marginLeft: "auto", marginRight: 0 }}
              />
            </div>
          </div>
        </div>
      </div>
      <Link
        to="about"
        spy={true}
        smooth={true}
        className="block w-full absolute bottom-5 left-0 text-lg text-gray-100 hover:text-gray-500 cursor-pointer animate-bounce"
      >
        <div className="icon-scroll"></div>
      </Link>
    </section>
  );
}
