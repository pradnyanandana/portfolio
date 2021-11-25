import React from "react";
import {BsSkype} from "react-icons/bs";
import {MdEmail, MdLocationPin} from "react-icons/md";

const Contact = (props) => {
    return (
        <section id="contact" className="skewed-bottom-right">
            <div className="bg-indigo-50 py-12 lg:py-20">
                <div className="container mx-auto px-2 md:px-4">
                    <div className="flex flex-col lg:flex-row -mx-4">
                        <div className="w-full lg:w-1/2 px-4 mb-12 md:mb-20 lg:mb-0">
                            <h2 className="mb-4 text-3xl xl:text-4xl font-rubik my-3 font-bold font-heading wow animate__ animate__fadeInUp animated animated visible">
                                <span>Get In Touch</span>
                            </h2>
                            <p className="text-lg text-blueGray-400 mb-4 font-roboto wow animate__ animate__fadeInUp animated animated visible">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                            <div className="contact-information">
                                <span className="flex items-center">
                                    <BsSkype className="mr-1 text-orange-500"/>
                                    pradnyanandana
                                </span>
                                <span className="flex items-center">
                                    <MdEmail className="mr-1 text-orange-500"/>
                                    pradnyanandana@gmail.com
                                </span>
                                <span className="flex items-center">
                                    <MdLocationPin className="mr-1 text-orange-500"/>
                                    I live in Bali, Indonesia
                                </span>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 lg:mb-0">
                            <div className="mb-3 pt-0">
                                <input type="text" placeholder="Your Name"
                                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative text-sm border-b border-gray-300 bg-transparent outline-none focus:outline-none w-full" />
                            </div>
                            <div className="mb-3 pt-0">
                                <input type="text" placeholder="Your Email"
                                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative text-sm border-b border-gray-300 bg-transparent outline-none focus:outline-none w-full" />
                            </div>
                            <div className="mb-6 pt-0">
                                <textarea rows="4" placeholder="Your Text"
                                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative text-sm border-b border-gray-300 bg-transparent outline-none focus:outline-none w-full"></textarea>
                            </div>
                            <div className="text-center lg:text-left">
                                <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 sm:mb-0 sm:mr-3 text-base text-white text-center font-semibold font-roboto leading-none bg-orange-500 hover:bg-yellow-600 uppercase rounded-xl wow animate__ animate__fadeInUp animated visible" href="#key-features">Send Request</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;