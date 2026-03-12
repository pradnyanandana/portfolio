"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Link } from "react-scroll";
import { RiArrowDownLine } from "react-icons/ri";
import animationData from "../../public/lottie/hero.json";

const Lottie = dynamic(() => import("react-lottie").then((mod) => mod.default ?? mod), { ssr: false });

const rotatingText = ["Web", "Frontend", "WordPress"];
const skills = ["React", "Next.js", "TypeScript", "WordPress", "Tailwind CSS"];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
};

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % rotatingText.length);
        setVisible(true);
      }, 200);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen relative bg-white overflow-hidden">
      {/* Subtle warm gradient tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_-10%,#fff7ed,transparent)] pointer-events-none" />
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #374151 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="container relative min-h-screen px-4 md:px-8 mx-auto flex items-center">
        <div className="flex w-full flex-col lg:flex-row items-center gap-12 py-24">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            {/* Available badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-sm font-medium text-orange-600 font-inter">Available for work</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold font-worksans leading-[1.1] tracking-tight text-gray-900 mb-3">
              Hi, I&apos;m <span className="text-orange-500">Pradnya</span>.
            </h1>
            <h2 className="text-4xl lg:text-6xl font-extrabold font-worksans leading-[1.1] tracking-tight text-gray-900 mb-6">
              A{" "}
              <span
                className="text-orange-500 inline-block transition-all duration-200"
                style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(-6px)" }}
              >
                {rotatingText[textIndex]}
              </span>{" "}
              Developer.
            </h2>

            <p className="text-lg text-gray-500 font-inter leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
              Building responsive, performant web experiences with modern JavaScript frameworks.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="contact" spy smooth
                className="cursor-pointer inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold font-inter rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
              <Link
                to="project" spy smooth
                className="cursor-pointer inline-flex items-center px-8 py-4 bg-white border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold font-inter rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                View Projects
              </Link>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {skills.map((s) => (
                <span key={s} className="px-3 py-1 text-xs font-medium font-inter text-gray-500 bg-gray-100 rounded-full">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Lottie */}
          <div className="flex-1 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <Lottie options={defaultOptions} height="auto" width="100%" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Link
        to="about" spy smooth duration={500} offset={-80}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors duration-200"
      >
        <span className="text-xs font-medium font-inter tracking-widest uppercase">Scroll</span>
        <RiArrowDownLine size={18} className="animate-bounce" />
      </Link>
    </section>
  );
}
