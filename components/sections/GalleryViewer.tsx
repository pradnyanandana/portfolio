"use client";

import Gallery from "react-photo-gallery";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { default: Carousel, Modal, ModalGateway } = require("react-images");

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

export default function GalleryViewer({
  photos,
  currentImage,
  viewerIsOpen,
  onOpen,
  onClose,
}: GalleryViewerProps) {
  return (
    <div className="gallery mt-8" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
      <Gallery photos={photos} margin={15} onClick={onOpen} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={onClose}>
            <Carousel currentIndex={currentImage} views={photos} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
