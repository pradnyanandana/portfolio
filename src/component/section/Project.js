import React from "react";

const Project = (props) => {
    return (
        <section id="service" className="pt-16 pb-20">
            <div className="container px-2 md:px-4 mx-auto text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center mb-8">
                    <div className="w-full sm:w-4/12 lg:w-3/12">
                        <span class="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">Portfolio</span>
                        <h2 class="mx-auto mb-4 text-3xl xl:text-4xl font-rubik my-3 font-bold font-heading wow animate__ animate__fadeInUp animated animated visible">
                            <span>Some of My Latest Projects</span>
                        </h2>
                    </div>
                    <div className="w-full sm:w-8/12 lg:w-9/12 sm:ml-12">
                        <p class="mx-auto text-lg text-blueGray-400 font-roboto wow animate__ animate__fadeInUp animated animated visible">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                    </div>
                </div>
                <div className="project-filters text-center mb-8 rounded-full md:p-3 md:bg-blue-500-transparent">
                    <ul className="filters block md:flex md:flex-wrap md:justify-between">
                        <li className="btn inline-block rounded-xl">
                            <a className="block text-base text-center font-semibold font-roboto rounded-3xl py-2 px-4 text-white bg-orange-500 hover:bg-yellow-600">All</a>
                        </li>
                        <li className="btn inline-block rounded-xl">
                            <a className="block text-base text-center font-semibold font-roboto rounded-3xl py-2 px-4">Web Development</a>
                        </li>
                        <li className="btn inline-block rounded-xl">
                            <a className="block text-base text-center font-semibold font-roboto rounded-3xl py-2 px-4">Backend Development</a>
                        </li>
                        <li className="btn inline-block rounded-xl">
                            <a className="block text-base text-center font-semibold font-roboto rounded-3xl py-2 px-4">WordPress Plugins</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Project;