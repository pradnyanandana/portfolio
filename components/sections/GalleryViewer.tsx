"use client";

import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

interface Photo {
  src: string;
  width: number;
  height: number;
  caption?: string;
}

interface GalleryViewerProps {
  photos: Photo[];
}

export default function GalleryViewer({ photos }: GalleryViewerProps) {
  if (!photos.length) return null;

  return (
    <LightGallery
      speed={300}
      plugins={[lgZoom, lgThumbnail]}
      elementClassNames="grid grid-cols-2 md:grid-cols-3 gap-4"
    >
      {photos.map((photo) => (
        <a
          key={photo.src}
          href={photo.src}
          data-sub-html={photo.caption ? `<p>${photo.caption}</p>` : undefined}
          className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-100 aspect-video block"
        >
          <img
            src={photo.src}
            alt={photo.caption ?? ""}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <svg
              className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
              />
            </svg>
          </div>
        </a>
      ))}
    </LightGallery>
  );
}
