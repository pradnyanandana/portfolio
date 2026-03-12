"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import type { Project } from "@/lib/db/projects";
import { BASE_PATH } from "@/lib/basePath";

const Filter = [
  { key: "all", text: "All" },
  { key: "web", text: "Web" },
  { key: "backend", text: "Frontend" },
  { key: "wordpress", text: "WordPress" },
  { key: "other", text: "Others" },
];

interface ProjectProps {
  initialProjects: Project[];
}

export default function ProjectSection({ initialProjects }: ProjectProps) {
  gsap.registerPlugin(ScrollTrigger);

  const [active, setActive] = useState("all");
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
    <section id="project" className="bg-white py-20 lg:py-32">
      <div className="container px-4 md:px-8 mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-orange-600 font-inter">Portfolio</span>
            </div>
            <h2 className="text-3xl xl:text-5xl font-bold font-worksans tracking-tight text-gray-900 leading-tight">
              Some of My <br />
              <span className="text-heading">Projects</span>
            </h2>
          </div>
          <p className="max-w-md text-base lg:text-lg font-inter text-gray-500 leading-relaxed lg:text-right">
            A selection of projects I&apos;ve built across web, frontend, and WordPress development.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {Filter.map((val) => (
            <button
              key={val.key}
              onClick={() => setActive(val.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium font-inter transition-all duration-200 ${
                val.key === active
                  ? "bg-orange-500 text-white shadow-sm"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200"
              }`}
            >
              {val.text}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((val, i) => (
            <Link key={`list-${i}`} href={`/projects/${val.id}`}>
              <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-50">
                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={`${BASE_PATH}/images/project/${val.id}/thumbnail.png`}
                    alt={val.title}
                  />
                  {/* Category badge on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium font-inter bg-white/90 text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {val.filter}
                  </span>
                </div>
                {/* Title */}
                <div className="px-5 py-4">
                  <h3 className="font-semibold font-inter text-gray-900 group-hover:text-orange-500 transition-colors duration-200">
                    {val.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
