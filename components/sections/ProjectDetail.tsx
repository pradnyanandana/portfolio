"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import type { Project } from "@/lib/db/projects";

const GalleryViewer = dynamic(() => import("./GalleryViewer"), { ssr: false });

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const gallery = project.gallery.map((x) => ({
    ...x,
    src: `/images/project/${project.id}/${x.path}.png`,
  }));

  const openLightbox = useCallback(
    (_event: React.MouseEvent, { index }: { photo: object; index: number }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    },
    []
  );

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <section id="project-detail-header" className="md:pt-48 md:pb-36 pt-28 pb-16 bg-gray-900">
        <div className="container mx-auto text-center text-gray-100">
          <h2 className="text-3xl text-gray-100 xl:text-6xl leading-tight xl:leading-tight font-bold font-worksans">
            {project.title}
          </h2>
        </div>
      </section>
      <section id="project-detail-body" className="md:py-36 py-16">
        <div className="container mx-auto md:px-4 text-left text-gray-900">
          <div className="flex flex-wrap items-start xl:gap-x-24 gap-x-16 gap-y-8 mb-16 overflow-hidden">
            <div className="timeline">
              <h4 className="font-bold text-base font-inter text-gray-900">Timeline</h4>
              <p className="text-base font-inter text-gray-900">{project.timeline}</p>
            </div>
            <div className="tech-stacks">
              <h4 className="font-bold text-base font-inter text-gray-900">Tech Stacks</h4>
              <p className="text-base font-inter text-gray-900">{project.techStacks}</p>
            </div>
            {project.url && (
              <div className="URL">
                <h4 className="font-bold text-base font-inter text-gray-900">URL</h4>
                <p className="text-base font-inter text-gray-900">
                  <a target="_blank" href={project.url} rel="noreferrer">
                    {project.url}
                  </a>
                </p>
              </div>
            )}
          </div>
          <div className="overview child-p:mb-4">
            <h3 className="text-2xl text-gray-900 xl:text-4xl leading-tight xl:leading-tight font-bold font-rubik mb-8">
              Overview
            </h3>
            <div dangerouslySetInnerHTML={{ __html: project.overview }} />
            {gallery.length > 0 && (
              <GalleryViewer
                photos={gallery}
                currentImage={currentImage}
                viewerIsOpen={viewerIsOpen}
                onOpen={openLightbox}
                onClose={closeLightbox}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
