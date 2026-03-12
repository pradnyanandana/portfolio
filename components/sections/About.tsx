"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { BASE_PATH } from "@/lib/basePath";

const techs = [
  { name: "HTML", file: "html" },
  { name: "CSS", file: "css" },
  { name: "JavaScript", file: "javascript" },
  { name: "TypeScript", file: "typescript" },
  { name: "React", file: "react" },
  { name: "Next.js", file: "nextjs" },
  { name: "Tailwind", file: "tailwind" },
  { name: "WordPress", file: "wordpress" },
];

const stats = [
  { value: `${new Date().getFullYear() - 2020}+`, label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
];

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>("#about .text-heading");
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: "#about",
      start: "-104px",
      scrub: 2,
      onUpdate: () => {
        el.classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
      },
      onLeave: () => {
        el.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
      },
      onLeaveBack: () => {
        el.classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
      },
    });

    return () => { st.kill(); };
  }, []);

  return (
    <section id="about" className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left — Tech Stack */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-4 gap-4">
              {techs.map((t) => (
                <div
                  key={t.name}
                  className="group flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-white hover:border-gray-200 hover:shadow-md transition-all duration-200 cursor-default"
                >
                  <img
                    src={`${BASE_PATH}/images/icons/${t.file}.svg`}
                    alt={t.name}
                    style={{ width: 40, height: 40 }}
                  />
                  <span className="text-xs font-medium font-inter text-gray-500 group-hover:text-gray-700 transition-colors">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-orange-600 font-inter">About Me</span>
            </div>

            <h2 className="text-3xl xl:text-5xl font-bold font-worksans text-gray-900 leading-tight tracking-tight mb-6">
              <span className="text-heading">
                {new Date().getFullYear() - 2020}+ Years of Experience
              </span>
              <br />
              <span className="text-gray-500">in Web Development</span>
            </h2>

            <p className="text-base lg:text-lg text-gray-500 font-inter leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              A software developer focused on web and frontend development. My main expertise is building responsive and performant web applications using modern JavaScript frameworks. I&apos;m an eager learner and adaptive to the latest technologies.
            </p>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-8 mb-10">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-3xl font-extrabold font-worksans text-gray-900">{s.value}</div>
                  <div className="text-sm text-gray-400 font-inter mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1dYBRYeBNoTVCmgHYCoIxWLvEAheJMgGO/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold font-inter rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-orange-100 hover:-translate-y-0.5"
            >
              Download My CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
