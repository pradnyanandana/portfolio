"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { RiArrowLeftLine, RiTimeLine, RiCodeSSlashLine, RiExternalLinkLine } from "react-icons/ri";
import type { Project } from "@/lib/db/projects";
import { BASE_PATH } from "@/lib/basePath";

const GalleryViewer = dynamic(() => import("./GalleryViewer"), { ssr: false });

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const gallery = project.gallery.map((x) => ({
    ...x,
    src: `${BASE_PATH}/images/project/${project.id}/${x.path}.png`,
  }));

  const meta = [
    { icon: <RiTimeLine size={16} />, label: "Timeline", value: project.timeline },
    { icon: <RiCodeSSlashLine size={16} />, label: "Tech Stack", value: project.techStacks },
    ...(project.url
      ? [{ icon: <RiExternalLinkLine size={16} />, label: "Live URL", value: project.url, href: project.url }]
      : []),
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-32 pb-16 border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium font-inter text-gray-400 hover:text-orange-500 transition-colors duration-200 mb-8"
          >
            <RiArrowLeftLine size={16} />
            Back to Portfolio
          </Link>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-orange-600 font-inter">{project.filter}</span>
            </div>
            <h1 className="text-4xl xl:text-6xl font-extrabold font-worksans text-gray-900 leading-tight tracking-tight mb-8">
              {project.title}
            </h1>

            {/* Meta cards */}
            <div className="flex flex-wrap gap-4">
              {meta.map((m) => (
                <div key={m.label} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-4 min-w-[160px]">
                  <span className="text-orange-500 mt-0.5">{m.icon}</span>
                  <div>
                    <div className="text-xs font-medium text-gray-400 font-inter mb-1">{m.label}</div>
                    {m.href ? (
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium font-inter text-orange-500 hover:underline break-all"
                      >
                        {m.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium font-inter text-gray-700">{m.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-2xl xl:text-3xl font-bold font-worksans text-gray-900 mb-8">
            Overview
          </h2>
          <div
            className="prose prose-gray max-w-none font-inter text-gray-600 leading-relaxed [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:pl-6 [&_ul]:list-disc [&_li]:mb-1"
            dangerouslySetInnerHTML={{ __html: project.overview }}
          />

          {gallery.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl xl:text-3xl font-bold font-worksans text-gray-900 mb-8">
                Gallery
              </h2>
              <GalleryViewer photos={gallery} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
