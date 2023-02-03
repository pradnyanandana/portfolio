import React, { useEffect } from "react";
import { FaWordpressSimple } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { CgDatabase } from "react-icons/cg";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const Service = (props) => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#service",
            start: "-104px",
            scrub: 2,
            onUpdate: () => {
                document.querySelector("#service .text-heading").classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            },
            onLeave: () => {
                document.querySelector("#service .text-heading").classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            },
            onLeaveBack: () => {
                document.querySelector("#service .text-heading").classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            }
        });
    }, []);

    return (
        <section id="service" className="pt-16 pb-20">
            <div className="container px-2 md:px-4 mx-auto">
                <div className="text-center mb-8">
                    <span className="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">What I Do</span>
                    <h2 className="max-w-lg mx-auto my-4 text-3xl xl:text-4xl font-rubik font-bold font-heading wow animate__ animate__fadeInUp animated animated visible">
                        <span className="text-heading">App Solutions</span>
                    </h2>
                    <p className="max-w-4xl mx-auto text-base lg:text-lg text-blueGray-400 font-roboto wow animate__ animate__fadeInUp animated animated visible text-gray-500">During my journey as a software developer, I did a lot of application development work. Either it is self-developed project or colaborate with others as a team. The following is a brief overview of what I do.</p>
                </div>
                <div className="flex flex-wrap -mx-3 -mb-6">
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="h-full py-12 px-8 bg-yellow-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-yellow-700-transparent inline-block rounded-full mb-4 bg-white">
                                <MdComputer className="w-14 h-14 mx-auto p-3" size={32} />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">Web Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto text-gray-500">With a strong background in HTML, CSS, JavaScript, and their frameworks, I have a proven track record of building high-quality and responsive websites that look great on any device.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="h-full py-12 px-8 bg-blue-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-blue-700-transparent inline-block rounded-full mx-auto mb-4 bg-white">
                                <CgDatabase className="w-14 h-14 mx-auto p-3" size={32} />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">Backend Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto text-gray-500">As a backend developer who has background in server-side programming languages such as PHP, Node.js, and Python. I've build services such as API and data scrapper.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="h-full py-12 px-8 bg-purple-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-purple-700-transparent inline-block rounded-full mx-auto mb-4 bg-white">
                                <FaWordpressSimple className="w-14 h-14 mx-auto p-3" size={32} />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">WordPress Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto text-gray-500">WordPress developer is my main job at the moment. As WordPress developer, I've created some premium themes and plugins which are sold at Themeforest or for free at the WordPress directory.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
