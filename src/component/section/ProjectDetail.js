import React, { useCallback, useState } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useParams } from "react-router-dom";
import { projects } from "../data/project";

const ProjectDetail = (props) => {
    const { projectId } = useParams();
    const project = projects.find((r) => r.id === projectId);

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    const gallery = project.gallery.map((x) => ({
        ...x,
        src: `${process.env.PUBLIC_URL}/images/project/${project.id}/${x.path}.png`,
    }));

    return (
        <>
            <section id="project-detail-header" className="md:pt-48 md:pb-36 pt-28 pb-16 bg-gray-900">
                <div className="container mx-auto text-center text-gray-100">
                    <h2 className="text-3xl text-gray-100 xl:text-6xl leading-tight xl:leading-tight font-bold font-worksans wow animate__ animate__fadeIn animated visible">{project.title}</h2>
                </div>
            </section>
            <section id="project-detail-body" className="md:py-36 py-16">
                <div className="container mx-auto md:px-4 text-left text-gray-900">
                    <div className="flex flex-wrap items-start xl:gap-x-24 gap-x-16 gap-y-8 mb-16">
                        <div className="timeline">
                            <h4 className="font-bold text-base font-inter text-gray-900">Timeline</h4>
                            <p className="text-base font-inter text-gray-900">{project.timeline}</p>
                        </div>
                        <div className="tech-stacks">
                            <h4 className="font-bold text-base font-inter text-gray-900">Tech Stacks</h4>
                            <p className="text-base font-inter text-gray-900">{project.techStacks}</p>
                        </div>
                        <div className="URL">
                            <h4 className="font-bold text-base font-inter text-gray-900">URL</h4>
                            <p className="text-base font-inter text-gray-900">
                                <a target="_blank" href={project.url} rel="noreferrer">
                                    {project.url}
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* <div className="image mb-16">
                        <img className="w-full" src={`${process.env.PUBLIC_URL}/images/project/${project.id}/hero.png`} alt="" />
                    </div> */}
                    <div className="overview child-p:mb-4">
                        <h3 className="text-2xl text-gray-900 xl:text-4xl leading-tight xl:leading-tight font-bold font-rubik wow animate__ animate__fadeIn animated visible mb-8">Overview</h3>
                        {project.overview}
                        {gallery.length > 0 && (
                            <div className="gallery mt-8" style={{ marginLeft: "-15px", marginRight: "-15px" }}>
                                <Gallery photos={gallery} margin={15} onClick={openLightbox} />
                                <ModalGateway>
                                    {viewerIsOpen ? (
                                        <Modal onClose={closeLightbox}>
                                            <Carousel currentIndex={currentImage} views={gallery} />
                                        </Modal>
                                    ) : null}
                                </ModalGateway>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectDetail;
