import React from "react";
import { ReactSVG } from "react-svg";

const About = (props) => {
    const svgStyle = (svg) => {
        svg.setAttribute(
            "style",
            "width: 30px; height: auto; margin-right: 0.75rem"
        );
    }

    return (
        <section id="about" className="skewed-bottom-right">
            <div className="bg-indigo-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
                <div className="container mx-auto px-2 md:px-4">
                    <div className="flex flex-col lg:flex-row -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                            <div className="w-full text-center">
                                <div className="lg:h-128 flex items-center justify-center">
                                    <img
                                        className="lg:max-w-lg"
                                        src="images/placeholder-2.png"
                                        alt=""
                                    />
                                </div>
                                {/* <a href="https://www.freepik.com/vectors/people">
                                    People vector creted by syarifahbrit -
                                    www.freepik.com
                                </a> */}
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                            <div className="w-full text-center lg:text-left">
                                <div className="mx-auto mb-6 lg:mx-0">
                                    <span className="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">
                                        About Me
                                    </span>
                                    <h2 className="mx-auto text-3xl xl:text-4xl my-4 font-bold font-rubik wow animate__ animate__fadeInUp animated animated visible">
                                        <span>
                                            2+ Years Experiences in Software
                                            Development
                                        </span>
                                    </h2>
                                    <p className="text-lg font-roboto wow animate__ animate__fadeInUp animated animated visible">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Pellentesque efficitur
                                        nisl sodales egestas lobortis.
                                    </p>
                                </div>
                                <div className="mx-auto mb-6 lg:mx-0">
                                    <span className="text-base font-roboto wow animate__ animate__fadeInUp animated animated visible font-bold">
                                        My Tech Skills
                                    </span>
                                    <div className="mt-3 flex flex-wrap items-center justify-center lg:justify-start">
                                        <ReactSVG
                                            src="images/icons/python.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/javascript.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/php.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/mysql.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/postgresql.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/laravel.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/express.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/django.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/docker.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/react.svg"
                                            beforeInjection={svgStyle}
                                        />
                                        <ReactSVG
                                            src="images/icons/wordpress.svg"
                                            beforeInjection={svgStyle}
                                        />
                                    </div>
                                </div>
                                <div className="mx-auto lg:mx-0">
                                    <div className="text-center lg:text-left">
                                        <a
                                            className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-base text-white text-center font-semibold font-roboto leading-none bg-orange-500 hover:bg-yellow-600 uppercase rounded-xl wow animate__ animate__fadeInUp animated visible"
                                            href="#key-features"
                                        >
                                            Download My CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mr-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-indigo-50"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon
                        fill="currentColor"
                        points="0 0 10 0 0 10"
                    ></polygon>
                </svg>
            </div>
        </section>
    );
};

export default About;
