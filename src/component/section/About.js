import React, { useEffect } from "react";
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
        <section id="about" className="skewed-bottom-right h-screen">
            <div className="bg-indigo-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
                <div className="container mx-auto px-2 md:px-4 h-full">
                    <div className="flex flex-col lg:flex-row -mx-4 h-full">
                        <div className="relative w-full lg:w-1/2 px-4 mb-0 flex items-center overflow-hidden">{window.screen.width >= 1280 && <TechStack techs={techs} />}</div>
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                            <div className="w-full text-center lg:text-left">
                                <div className="mx-auto mb-6 lg:mx-0">
                                    <span className="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">About Me</span>
                                    <h2 className="mx-auto text-3xl xl:text-4xl my-4 font-bold font-rubik wow animate__ animate__fadeInUp animated animated visible">
                                        <span className="text-heading">
                                            3+ Years Experiences <br />
                                        </span>
                                        <span>in Software Development</span>
                                    </h2>
                                    <p className="text-lg font-roboto wow animate__ animate__fadeInUp animated animated visible text-gray-500">I'm a software developer who has built many web application. Currently, I work as web developer who responsible to create and maintain WordPress themes and plugins. Has succeeded to develop plugin that has received many positive reviews on WordPress directory.</p>
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
                                        <a href="https://drive.google.com/file/d/1H0bhGFEqcYsEUaZxMv5ZZ66B1A1LhR5l/view?usp=sharing" target={"_blank"} className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-base text-white text-center font-semibold font-roboto leading-none bg-orange-500 hover:bg-yellow-600 uppercase rounded-xl wow animate__ animate__fadeInUp animated visible">
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
        svg.setAttribute("style", "width: 120px; height: auto;");
    };

    useEffect(() => {
        const timelineLogo = gsap.timeline();

        techs.map((t) => {
            timelineLogo.fromTo(
                "#about .logo-" + t,
                {
                    xPercent: 100,
                    yPercent: -50,
                    opacity: 0,
                    scale: 0.5,
                },
                {
                    xPercent: -50,
                    yPercent: -50,
                    opacity: 1,
                    scale: 2,
                    duration: 0.1,
                    onUpdate: () => {
                        document.querySelector("#about .text-" + t).classList.remove("opacity-0");
                    },
                    onReverseComplete: () => {
                        document.querySelector("#about .text-" + t).classList.add("opacity-0");
                    },
                }
            );

            timelineLogo.fromTo(
                "#about .logo-" + t,
                {
                    xPercent: -50,
                    yPercent: -50,
                    opacity: 1,
                    scale: 2,
                },
                {
                    xPercent: -200,
                    yPercent: -50,
                    opacity: 0,
                    scale: 0.5,
                    delay: 0.2,
                    duration: 0.1,
                    onUpdate: () => {
                        document.querySelector("#about .text-" + t).classList.remove("opacity-0");
                    },
                    onComplete: () => {
                        document.querySelector("#about .text-" + t).classList.add("opacity-0");
                    },
                }
            );

            setTimeout(() => {
                document.querySelector("#about .text-" + t).classList.add("opacity-0");
            }, 1);
        });

        ScrollTrigger.create({
            pin: "#about",
            trigger: "#about",
            start: "-104px",
            end: "15000px",
            scrub: 2,
            animation: timelineLogo,
        });

        ScrollTrigger.create({
            trigger: "#about",
            start: "-104px",
            end: "15000px",
            scrub: 2,
            onUpdate: () => {
                document.querySelector("#about .text-heading").classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            },
            onLeave: () => {
                document.querySelector("#about .text-heading").classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            },
            onLeaveBack: () => {
                document.querySelector("#about .text-heading").classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            },
        });
    }, []);

    return (
        <>
            <h3 className={`absolute text-1xl xl:text-2xl font-bold font-rubik uppercase tracking-widest transform rotate-270 text-gray-500`}>Tech Stacks</h3>
            {techs.map((t) => (
                <>
                    <div className={`logo-${t} absolute transform top-1/2 left-1/2 -translate-x-2/4`}>
                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/" + t.toLowerCase() + ".svg"} beforeInjection={svgStyle} />
                    </div>
                    <h4 className={`text-${t} absolute transform bottom-0 left-1/2 -translate-x-2/4 text-1xl xl:text-2xl font-bold font-rubik opacity-0 text-gray-500`}>{t}</h4>
                </>
            ))}
        </>
    );
};

export default About;
