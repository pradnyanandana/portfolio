import React from "react";

const Service = (props) => {
    return (
        <section className="pt-16 pb-20" id="key-features">
            <div className="container px-4 mx-auto">
                <div class="text-center mb-8">
                    <span class="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">What I Offer</span>
                    <h2 class="max-w-lg mx-auto mb-4 text-4xl font-rubik my-3 font-bold font-heading wow animate__ animate__fadeInUp animated animated visible">
                        <span>App Solutions</span>
                    </h2>
                    <p class="max-w-xl mx-auto text-lg text-blueGray-400 font-roboto wow animate__ animate__fadeInUp animated animated visible">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                </div>
                <div className="flex flex-wrap -mx-3 -mb-6">
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-yellow-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-yellow-700-transparent inline-block rounded-full mb-4 bg-white">
                                <svg className="w-14 h-14 mx-auto p-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">Web Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-blue-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-blue-700-transparent inline-block rounded-full mx-auto mb-4 bg-white">
                                <svg className="w-14 h-14 mx-auto p-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                </svg>
                            </div>
                            <h3 className="mb-2 font-bold font-heading text-2xl font-rubik">Backend Development</h3>
                            <p className="text-sm text-blueGray-400 font-roboto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 px-3 mb-6">
                        <div className="pt-8 px-6 pb-6 bg-purple-500-transparent rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible">
                            <div className="text-purple-700-transparent inline-block rounded-full mx-auto mb-4 bg-white">
                                <svg className="w-14 h-14 mx-auto p-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
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