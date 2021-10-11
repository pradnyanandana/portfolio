import React from "react";

const Hero = (props) => {
    return (
        <section className="hero-3 pt-32 pb-12 lg:pb-40 lg:pt-48">
            <div className="container px-4 mx-auto">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full lg:w-2/5 px-3">
                        <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                            <h2 className="text-3xl lg:text-6xl mb-4 lg:leading-tight font-bold font-rubik wow animate__ animate__fadeIn animated visible">
                                Hi, I'm Pradnya <br/>
                                a Software Developer
                            </h2>
                        </div>
                        <div className="text-center lg:text-left">
                            <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-base text-white text-center font-semibold font-roboto leading-none bg-orange-500 hover:bg-yellow-600 uppercase rounded-xl wow animate__ animate__fadeInUp animated visible" href="#key-features">About Me</a>
                        </div>
                    </div>
                    <div className="w-full lg:w-3/5 px-3 my-12 lg:my-0">
                        <div className="flex items-center justify-end">
                            <img className="lg:max-w-lg" src="images/placeholder-1.jpeg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
