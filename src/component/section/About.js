import React from "react";
import { ReactSVG } from "react-svg";
// import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const About = (props) => {
    gsap.registerPlugin(ScrollTrigger);

    const svgStyle = (svg) => {
        svg.setAttribute("style", "width: 30px; height: auto;");
    };

    const techs = ["Python", "Javascript", "PHP", "MySQL", "PostgreSQL", "Laravel", "Express", "Django", "Docker", "React", "WordPress"];

    return (
        <section id="about" className="skewed-bottom-right">
            <div className="bg-indigo-50 pt-20 lg:pt-40 pb-20 radius-for-skewed">
                <div className="container mx-auto px-2 md:px-4">
                    <div className="flex flex-col lg:flex-row -mx-4">
                        <div className="relative w-full lg:w-1/2 px-4 mb-0 flex items-center">{window.screen.width >= 1024 && <TechStack techs={techs} />}</div>
                        <div className="w-full lg:w-1/2 px-4 mb-0 flex items-center">
                            <div className="w-full text-center lg:text-left">
                                <div className="mx-auto mb-6 lg:mx-0">
                                <span className="inline-block text-xs py-1 px-3 text-blue-500 font-inter bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">About Me</span>
                                    <h2 className="mx-auto text-3xl xl:text-4xl my-4 font-bold font-worksans wow animate__ animate__fadeInUp animated animated visible text-gray-900">
                                        <span className="text-heading">
                                            3+ Years of Experience <br />
                                        </span>
                                        <span>in Software Development</span>
                                    </h2>
                                    <p className="text-base font-inter wow animate__ animate__fadeInUp animated animated visible text-gray-900">As a software developer with focus on PHP, JavaScript, and Python. My main expertise is creating apps, especially web apps. I'm also an eager learner and adaptive to the latest technologies.</p>
                                </div>
                                <div className="mx-auto mb-6 lg:mx-0">
                                    <div className="mt-3 flex flex-wrap items-center justify-center gap-3 lg:hidden">
                                        {techs.map((t) => (
                                            <ReactSVG key={t} src={process.env.PUBLIC_URL + "/images/icons/" + t.toLowerCase() + ".svg"} beforeInjection={svgStyle} />
                                        ))}
                                    </div>
                                </div>
                                <div className="mx-auto lg:mx-0">
                                    <div className="text-center lg:text-left">
                                        <a href="https://drive.google.com/file/d/1H0bhGFEqcYsEUaZxMv5ZZ66B1A1LhR5l/view?usp=sharing" target={"_blank"} className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-base text-white text-center font-inter leading-none bg-orange-500 hover:bg-yellow-600 rounded-full wow animate__ animate__fadeInUp animated visible" rel="noreferrer">
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
                <svg className="h-8 md:h-12 lg:h-20 w-full text-indigo-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
                </svg>
            </div>
        </section>
    );
};

const TechStack = ({ techs }) => {
    const svgStyle = (svg) => {
        svg.setAttribute("style", "width: 40px; height: auto;");
    };

    return (
        <div className="grid w-full grid-cols-4 gap-y-10">
            {techs.map((t) => (
                <div className="group relative bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center w-min p-5">
                    <ReactSVG key={t} src={process.env.PUBLIC_URL + "/images/icons/" + t.toLowerCase() + ".svg"} beforeInjection={svgStyle} />
                    <span className="absolute top-full mt-2 text-base font-worksans opacity-0 group-hover:opacity-100">{t}</span>
                </div>
            ))}
        </div>
    );
};

export default About;
