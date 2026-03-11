"use client";

import { useEffect, useCallback } from "react";

interface Photo {
  src: string;
  width: number;
  height: number;
  caption?: string;
}

interface GalleryViewerProps {
  photos: Photo[];
  currentImage: number;
  viewerIsOpen: boolean;
  onOpen: (event: React.MouseEvent, { index }: { photo: object; index: number }) => void;
  onClose: () => void;
}

interface LightboxProps {
  photos: Photo[];
  currentImage: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ photos, currentImage, onClose, onPrev, onNext }: LightboxProps) {
  const photo = photos[currentImage];

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl leading-none hover:text-gray-300"
          aria-label="Close"
        >
          &times;
        </button>
        {currentImage > 0 && (
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-white text-4xl leading-none hover:text-gray-300"
            aria-label="Previous"
          >
            &#8249;
          </button>
        )}
        {currentImage < photos.length - 1 && (
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-white text-4xl leading-none hover:text-gray-300"
            aria-label="Next"
          >
            &#8250;
          </button>
        )}
        <img
          src={photo.src}
          alt={photo.caption ?? ""}
          style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px" }}
        />
        {photo.caption && (
          <p className="text-center text-white text-sm mt-3">{photo.caption}</p>
        )}
      </div>
    </div>
  );
}

export default function GalleryViewer({
  photos,
  currentImage,
  viewerIsOpen,
  onOpen,
  onClose,
}: GalleryViewerProps) {
  const onPrev = useCallback(() => {
    onOpen({} as React.MouseEvent, { photo: photos[currentImage - 1], index: currentImage - 1 });
  }, [currentImage, onOpen, photos]);

  const onNext = useCallback(() => {
    onOpen({} as React.MouseEvent, { photo: photos[currentImage + 1], index: currentImage + 1 });
  }, [currentImage, onOpen, photos]);

  if (!photos.length) return null;

  return (
    <div className="gallery mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div
            key={photo.src}
            onClick={(e) => onOpen(e, { photo, index })}
            className="cursor-pointer overflow-hidden rounded"
          >
            <img
              src={photo.src}
              alt={photo.caption ?? ""}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        ))}
      </div>
      {viewerIsOpen && (
        <Lightbox
          photos={photos}
          currentImage={currentImage}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </div>
  );
}
