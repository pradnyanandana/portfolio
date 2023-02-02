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
                <div ref={wrapperRef} className="fixed transform top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 max-h-80% w-5/6 p-10 rounded-3xl bg-white overflow-scroll">
                    <div className="popup-header">
                        <FaTimes className="text-xl cursor-pointer ml-auto" onClick={(e) => setPopupActive(false)} />
                    </div>
                    <div className="popup-body">
                        <span className="inline-block text-xs mb-3 py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">{popupActive.filter}</span>
                        <h3 className="mb-3 font-bold font-heading text-2xl font-rubik">{popupActive.title}</h3>
                        <p className="text-sm text-blueGray-400 font-roboto mb-5 text-gray-500">{popupActive.description}</p>
                        {popupActive.techStacks && <p className="text-sm text-blueGray-400 font-roboto mb-5 text-gray-500">Tech Stacks: {popupActive.techStacks}</p>}
                        {popupActive.url && <p className="text-sm text-blueGray-400 font-roboto mb-5 text-gray-500">URL: <a target="_blank" href={popupActive.url}>{popupActive.url}</a></p>}
                        <img className="h-full w-full object-scale-down mb-5" src={popupActive.image} alt="" />
                    </div>
                </div>
            </div>
        )
    );
};

export default ProjectPopup;
