import React from "react";
import {FaWordpressSimple} from "react-icons/fa";
import {MdComputer} from "react-icons/md";
import {CgDatabase} from "react-icons/cg";

const Service = (props) => {
    return (
        <section id="service" className="pt-16 pb-20" id="key-features">
            <div className="container px-2 md:px-4 mx-auto">
                <div class="text-center mb-8">
                    <span class="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">What I Offer</span>
                    <h2 class="max-w-lg mx-auto mb-4 text-4xl font-rubik my-3 font-bold font-heading wow animate__ animate__fadeInUp animated animated visible">
                        <span>App Solutions</span>
                    </h2>
                    <p class="max-w-xl mx-auto text-lg text-blueGray-400 font-roboto wow animate__ animate__fadeInUp animated animated visible">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                </div>
                <div className="flex flex-wrap -mx-3 -mb-6">
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="py-12 px-8 bg-yellow-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-yellow-700-transparent inline-block rounded-full mb-4 bg-white">
                                <MdComputer className="w-14 h-14 mx-auto p-3" size={32} />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">Web Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="py-12 px-8 bg-blue-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-blue-700-transparent inline-block rounded-full mx-auto mb-4 bg-white">
                                <CgDatabase className="w-14 h-14 mx-auto p-3" size={32} />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">Backend Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="py-12 px-8 bg-purple-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-purple-700-transparent inline-block rounded-full mx-auto mb-4 bg-white">
                                <FaWordpressSimple className="w-14 h-14 mx-auto p-3" size={32} />
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">WordPress Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;