"use client";

import { useEffect } from "react";
import { FaWordpressSimple } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { RiLayoutMasonryLine } from "react-icons/ri";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const services = [
  {
    icon: <MdComputer size={28} />,
    iconBg: "bg-orange-50 text-orange-500",
    title: "Web Development",
    description:
      "With a strong background in HTML, CSS, JavaScript, and modern frameworks, I build high-quality, responsive websites that look great on any device.",
  },
  {
    icon: <RiLayoutMasonryLine size={28} />,
    iconBg: "bg-blue-50 text-blue-500",
    title: "Frontend Development",
    description:
      "Strong expertise in modern JavaScript frameworks and UI technologies. I build performant, accessible, and visually polished user interfaces.",
  },
  {
    icon: <FaWordpressSimple size={28} />,
    iconBg: "bg-purple-50 text-purple-500",
    title: "WordPress Development",
    description:
      "WordPress developer with experience building premium themes and plugins, sold on Themeforest or available in the WordPress directory.",
  },
];

export default function Service() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const el = document.querySelector<HTMLElement>("#service .text-heading");
    if (!el) return;

    const st = ScrollTrigger.create({
      trigger: "#service",
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
    <section id="service" className="bg-gray-50 py-20 lg:py-32">
      <div className="container px-4 md:px-8 mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm font-medium text-orange-600 font-inter">What I Do</span>
          </div>
          <h2 className="text-3xl xl:text-5xl font-bold font-worksans tracking-tight text-gray-900">
            <span className="text-heading">My Services</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${s.iconBg}`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold font-worksans text-gray-900 mb-3">{s.title}</h3>
              <p className="text-base font-inter text-gray-500 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
