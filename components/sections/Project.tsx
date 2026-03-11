"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import type { Project } from "@/lib/db/projects";
import { BASE_PATH } from "@/lib/basePath";

const ActiveClass = "text-white bg-orange-500";

const Filter = [
  { key: "all", text: "All" },
  { key: "web", text: "Web Development" },
  { key: "backend", text: "Frontend Development" },
  { key: "wordpress", text: "WordPress Development" },
  { key: "other", text: "Others" },
];

const Background: Record<string, string> = {
  web: "bg-blue-100-transparent",
  backend: "bg-yellow-100-transparent",
  wordpress: "bg-orange-100-transparent",
  other: "bg-purple-100-transparent",
};

interface ProjectProps {
  initialProjects: Project[];
}

export default function ProjectSection({ initialProjects }: ProjectProps) {
  gsap.registerPlugin(ScrollTrigger);

  const [active, setActive] = useState("all");
  // Projects are pre-fetched server-side; optionally re-fetch from API client-side
  const [projects] = useState<Project[]>(initialProjects);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>("#project .text-heading");
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: "#project",
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

  const filtered = projects.filter(
    (p) => active === "all" || p.filter.toLowerCase() === active
  );

  return (
    <section id="project" className="pt-16 pb-20">
      <div className="container px-2 md:px-4 mx-auto text-center sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center mb-8">
          <div className="w-full w-4/12">
            <span className="inline-block text-xs py-1 px-3 text-blue-500 font-inter bg-blue-100 rounded-xl">
              Portfolio
            </span>
            <h2 className="mx-auto text-3xl xl:text-4xl font-worksans my-4 font-bold">
              <span>Some of <br /></span>
              <span className="text-heading">My Projects</span>
            </h2>
          </div>
          <div className="w-full w-8/12 sm:ml-12">
            <p className="mx-auto text-base lg:text-lg font-inter text-gray-900">
              These are some sample projects that I have successfully developed; made with various languages and types of applications.
            </p>
          </div>
        </div>
        <div className="project-filters text-center mb-12 rounded-xl md:p-3 md:bg-blue-300-transparent">
          <ul className="filters block md:flex md:flex-wrap md:justify-around">
            {Filter.map((val) => (
              <li key={val.key} className="btn inline-block rounded-full cursor-pointer">
                <button
                  className={`block text-base text-center font-inter rounded-3xl py-2 px-4 ${
                    val.key === active ? ActiveClass : ""
                  }`}
                  onClick={() => setActive(val.key)}
                >
                  {val.text}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap -mx-6 -mb-12">
          {filtered.map((val, i) => (
            <div key={`list-${i}`} className="relative w-full lg:w-1/3 px-6 mb-12 transition-all">
              <Link href={`/projects/${val.id}`}>
                <div className="relative group border border-gray-300 transition duration-500 overflow-hidden cursor-pointer">
                  <span className="absolute z-10 top-6 left-6 inline-block opacity-0 group-hover:opacity-100 text-xs mb-3 py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl">
                    {val.filter}
                  </span>
                  <div className={`relative h-96 ${Background[val.filter.toLowerCase()] ?? ""}`}>
                    <img
                      className="h-full w-full object-cover"
                      src={`${BASE_PATH}/images/project/${val.id}/thumbnail.png`}
                      alt={val.title}
                    />
                  </div>
                </div>
                <h3 className="mt-3 font-bold font-heading text-base text-center font-inter cursor-pointer hover:text-orange-500">
                  {val.title}
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
