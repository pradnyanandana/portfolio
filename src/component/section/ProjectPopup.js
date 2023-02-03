import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";

const ProjectPopup = ({ popupActive, setPopupActive }) => {
    const wrapperRef = useRef();

    const closePopup = (e) => {
        if (wrapperRef && !wrapperRef.current.contains(e.target)) {
            setPopupActive(false);
        }
    };

    return (
        popupActive && (
            <div id="project-popup" className="fixed top-0 left-0 filter backdrop-filter bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg z-50 w-full h-full" onClick={closePopup}>
                <div ref={wrapperRef} className="fixed transform top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-80% w-5/6 max-w-3xl p-10 rounded-3xl bg-white overflow-y-scroll">
                    <div className="popup-header">
                        <FaTimes className="text-xl cursor-pointer ml-auto" onClick={(e) => setPopupActive(false)} />
                    </div>
                    <div className="popup-body pt-10">
                        <img className="h-full w-full object-scale-down mb-5 max-w-lg mx-auto mb-10" src={popupActive.image} alt="" />
                        <span className="inline-block text-xs mb-3 py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">{popupActive.filter}</span>
                        <h3 className="mb-3 font-bold font-heading text-2xl font-rubik">{popupActive.title}</h3>
                        <p className="text-sm text-blueGray-400 font-roboto mb-5 pb-5 text-gray-500 border-b border-gray-300">{popupActive.description}</p>
                        {popupActive.techStacks && <p className="text-sm text-blueGray-400 font-roboto mb-5 pb-5 text-gray-500 border-b border-gray-300"><strong>Tech Stacks</strong>: {popupActive.techStacks}</p>}
                        {popupActive.url && (
                            <p className="text-sm text-blueGray-400 font-roboto pb-5 text-gray-500 border-b border-gray-300">
                                <strong>URL</strong>: {" "}
                                <a target="_blank" href={popupActive.url} rel="noreferrer">
                                    {popupActive.url}
                                </a>
                            </p>
                        )}
                    </div>
                </div>
            </div>
        )
    );
};

export default ProjectPopup;
