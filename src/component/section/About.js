import React, { useEffect } from "react";
import { ReactSVG } from "react-svg";
// import { Tween } from "react-gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const About = (props) => {
    const svgStyle = (svg) => {
        svg.setAttribute("style", "width: 30px; height: auto; margin-right: 0.75rem");
    };

    return (
        <section id="about" className="skewed-bottom-right h-screen">
            <div className="bg-indigo-50 pt-12 lg:pt-20 pb-20 radius-for-skewed">
                <div className="container mx-auto px-2 md:px-4 h-full">
                    <div className="flex flex-col lg:flex-row -mx-4 h-full">
                        <div className="relative w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center overflow-hidden">
                            <TechStack />
                        </div>
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0 flex items-center">
                            <div className="w-full text-center lg:text-left">
                                <div className="mx-auto mb-6 lg:mx-0">
                                    <span className="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">About Me</span>
                                    <h2 className="mx-auto text-3xl xl:text-4xl my-4 font-bold font-rubik wow animate__ animate__fadeInUp animated animated visible">
                                        <span>3+ Years Experiences in Software Development</span>
                                    </h2>
                                    <p className="text-lg font-roboto wow animate__ animate__fadeInUp animated animated visible">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                                </div>
                                <div className="mx-auto mb-6 lg:mx-0">
                                    <div className="mt-3 flex flex-wrap items-center justify-center lg:hidden">
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/javascript.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/php.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/mysql.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/postgresql.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/laravel.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/express.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/django.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/docker.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/react.svg"} beforeInjection={svgStyle} />
                                        <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/wordpress.svg"} beforeInjection={svgStyle} />
                                    </div>
                                </div>
                                <div className="mx-auto lg:mx-0">
                                    <div className="text-center lg:text-left">
                                        <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-base text-white text-center font-semibold font-roboto leading-none bg-orange-500 hover:bg-yellow-600 uppercase rounded-xl wow animate__ animate__fadeInUp animated visible" href="#key-features">
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

const TechStack = () => {
    const svgStyle = (svg) => {
        svg.setAttribute("style", "width: 120px; height: auto; margin-right: 0.75rem");
    };

    useEffect(() => {
        const timeline1 = gsap.timeline();
        const timeline2 = gsap.timeline();
        const timeline3 = gsap.timeline();

        timeline1.fromTo("#about .logo-1", { xPercent: 100, yPercent: -50, opacity: 0, scale: 0.5 }, { xPercent: -50, yPercent: -50, opacity: 1, scale: 2, duration: 0.1 })
        timeline1.fromTo("#about .logo-1", { xPercent: -50, yPercent: -50, opacity: 1, scale: 2 }, { xPercent: -200, yPercent: -50, opacity: 0, scale: 0.5, delay: 0.2, duration: 0.1 })
        timeline1.to("#about .logo-1", { delay: 0.3, duration: 0.7 })

        timeline2.fromTo("#about .logo-2", { xPercent: 100, yPercent: -50, opacity: 0, scale: 0.5 }, { xPercent: 100, yPercent: -50, opacity: 0, scale: 0.5, duration: 0.3 })
        timeline2.fromTo("#about .logo-2", { xPercent: 100, yPercent: -50, opacity: 0, scale: 0.5 }, { xPercent: -50, yPercent: -50, opacity: 1, scale: 2, delay: 0.3, duration: 0.1 })
        timeline2.fromTo("#about .logo-2", { xPercent: -50, yPercent: -50, opacity: 1, scale: 2 }, { xPercent: -200, yPercent: -50, opacity: 0, scale: 0.5, delay: 0.4, duration: 0.1 })
        timeline2.to("#about .logo-2", { delay: 0.5, duration: 0.5 })

        timeline3.fromTo("#about .logo-3", { xPercent: 100, yPercent: -50, opacity: 0, scale: 0.5 }, { xPercent: 100, yPercent: -50, opacity: 0, scale: 0.5, duration: 0.5 })
        timeline3.fromTo("#about .logo-3", { xPercent: 100, yPercent: -50, opacity: 0, scale: 0.5 }, { xPercent: -50, yPercent: -50, opacity: 1, scale: 2, delay: 0.5, duration: 0.1 })
        timeline3.fromTo("#about .logo-3", { xPercent: -50, yPercent: -50, opacity: 1, scale: 2 }, { xPercent: -200, yPercent: -50, opacity: 0, scale: 0.5, delay: 0.6, duration: 0.1 })
        timeline3.to("#about .logo-3", { delay: 0.7, duration: 0.3 })

        ScrollTrigger.create({
            pin: "#about",
            trigger: "#about",
            start: "-140px",
            end: "10000px",
            scrub: 2,
            animation: timeline1,
        });

        ScrollTrigger.create({
            trigger: "#about",
            start: "-140px",
            end: "10000px",
            scrub: 2,
            animation: timeline2,
        });

        // ScrollTrigger.create({
        //     trigger: "#about",
        //     start: "-140px",
        //     end: "10000px",
        //     scrub: 2,
        //     animation: timeline3,
        // });

        // ScrollTrigger.create({
        //     trigger: "#about",
        //     start: "-140px",
        //     end: "4860px",
        //     scrub: 2,
        //     animation: timeline1,
        // });

        // ScrollTrigger.create({
        //     trigger: "#about",
        //     start: "5000px",
        //     end: "10000px",
        //     scrub: 2,
        //     animation: gsap.fromTo("#about .logo-2", { xPercent: 100, yPercent: -50, opacity: 0 }, { xPercent: -100, yPercent: -50, opacity: 1 }),
        // });
    }, []);

    return (
        <>
            <div className="logo-1 absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/python.svg"} beforeInjection={svgStyle} />
            </div>
            <div className="logo-2 absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/javascript.svg"} beforeInjection={svgStyle} />
            </div>
            <div className="logo-3 absolute transform top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4">
                <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/php.svg"} beforeInjection={svgStyle} />
            </div>
            {/* <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/javascript.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/php.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/mysql.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/postgresql.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/laravel.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/express.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/django.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/docker.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/react.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween>
            <Tween
                to={{
                    x: "300px",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "-104px",
                        scrub: 2,
                    },
                }}
            >
                <div className="square">
                    <ReactSVG src={process.env.PUBLIC_URL + "/images/icons/wordpress.svg"} beforeInjection={svgStyle} />
                </div>
            </Tween> */}
        </>
    );
};

export default About;
