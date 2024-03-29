import React from "react";
import Lottie from "react-lottie";
import animationData from "../../lottie/hero.json";
import TextLoop from "react-text-loop";
import {BsChevronDoubleDown} from "react-icons/bs";
import {Link} from 'react-scroll';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const rotatingText = ["Web", "Backend", "WordPress"]

const Hero = (props) => {
    return (
        <section id="hero" className="hero-3 h-screen relative bg-gray-900">
            <div className="container h-full px-2 md:px-4 mx-auto">
                <div className="flex h-full flex-col-reverse justify-center sm:flex-row items-center -mx-3">
                    <div className="w-full sm:w-2/5 px-3">
                        <div className="sm:mx-0 sm:mb-8 text-center sm:text-left">
                            <h2 className="text-3xl text-gray-100 xl:text-6xl leading-tight xl:leading-tight font-extrabold font-worksans wow animate__ animate__fadeIn animated visible">
                                Hi, I'm Pradnya. <br/>A Professional <TextLoop>{rotatingText.map((text, index) => (<span key={`rotating-text-${index}`} className="bg-orange-500 font-bold rounded-xl text-white px-3">{text}</span>))}</TextLoop> Developer.
                            </h2>
                        </div>
                    </div>
                    <div className="relative group w-full sm:w-3/5 px-3 mb-12 sm:mb-0">
                        <div className="flex items-center justify-end mx-5">
                            <Lottie 
                                options={defaultOptions}
                                height={"auto"}
                                width={"100%"}
                                style={{marginLeft: "auto", marginRight: 0}}
                            />
                        </div>
                        {/* <p className="absolute transform bottom-0 left-1/2 -translate-x-2/4 hidden group-hover:block text-center">Animation by <a className="text-orange-500 hover:text-gray-500 cursor-pointer" href="#" target="_blank">John Doe</a></p> */}
                    </div>
                </div>
            </div>
            <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                className="block w-full absolute bottom-5 left-0 text-lg text-gray-100 hover:text-gray-500 cursor-pointer animate-bounce">
                <div class="icon-scroll"></div>
            </Link>
        </section>
    );
};

export default Hero;
