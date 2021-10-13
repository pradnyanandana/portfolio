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
        <section id="hero" className="hero-3 h-screen relative">
            <div className="container h-full px-2 md:px-4 mx-auto">
                <div className="flex h-full flex-wrap flex-col-reverse justify-center lg:flex-row items-center -mx-3">
                    <div className="w-full lg:w-2/5 px-3">
                        <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                            <h2 className="text-4xl lg:text-6xl mb-4 lg:leading-tight font-bold font-rubik wow animate__ animate__fadeIn animated visible">
                                Hi, I'm Pradnya. <br/>a <TextLoop>{rotatingText.map((text, index) => (<span key={`rotating-text-${index}`} className="bg-orange-500 rounded-xl text-white px-3">{text}</span>))}</TextLoop> Developer.
                            </h2>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 px-3 mb-12 lg:mb-0">
                        <div className="flex items-center justify-end">
                            <Lottie 
                                options={defaultOptions}
                                height={"auto"}
                                width={"100%"}
                                style={{marginLeft: "auto", marginRight: 0}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Link 
                to="about" 
                spy={true} 
                smooth={true} 
                className="absolute bottom-8 left-2/4 transform text-lg cursor-pointer animate-bounce" 
                style={{"--tw-translate-x": "-50%"}}>
                <BsChevronDoubleDown size={24}/>
            </Link>
        </section>
    );
};

export default Hero;
