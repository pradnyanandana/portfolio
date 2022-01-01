import { FaTimes } from "react-icons/fa";

const ProjectPopup = ({popupActive, setPopupActive}) => {
    return (
        (popupActive && 
        <div id="project-popup" className="fixed bg-white top-2/4 left-2/4 w-5/6 -translate-x-2/4">
            <div className="popup-header">
                <FaTimes className="text-xl" onClick={e => setPopupActive(false)}/>
            </div>
        </div>)
    );
};

export default ProjectPopup;
