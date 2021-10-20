import React, {Fragment, useState} from "react";
import {CgArrowLongRight} from "react-icons/cg";

const ActiveClass =  'text-white bg-orange-500';

const Filter = [
    {key: 'all', text: 'All'},
    {key: 'web', text: 'Web Development'},
    {key: 'backend', text: 'Backend Development'},
    {key: 'wordpress', text: 'WordPress Development'},
];

const ProjectList = [
    {
        filter: 'WordPress',
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'images/placeholder-1.jpeg'
    },
    {
        filter: 'WordPress',
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'images/placeholder-1.jpeg'
    },
    {
        filter: 'WordPress',
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'images/placeholder-1.jpeg'
    },
    {
        filter: 'Web',
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'images/placeholder-1.jpeg'
    },
    {
        filter: 'Backend',
        title: 'Lorem Ipsum',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        image: 'images/placeholder-1.jpeg'
    }
]

const Project = (props) => {
    const [active, setActive] = useState('all');

    const ChangeFilter = (key) => {
        setActive(key);
    }

    return (
        <section id="project" className="pt-16 pb-20">
            <div className="container px-2 md:px-4 mx-auto text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center mb-8">
                    <div className="w-full sm:w-4/12 lg:w-3/12">
                        <span className="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">Portfolio</span>
                        <h2 className="mx-auto mb-4 text-3xl xl:text-4xl font-rubik my-3 font-bold font-heading wow animate__ animate__fadeInUp animated animated visible">
                            <span>Some of My Latest Projects</span>
                        </h2>
                    </div>
                    <div className="w-full sm:w-8/12 lg:w-9/12 sm:ml-12">
                        <p className="mx-auto text-lg text-blueGray-400 font-roboto wow animate__ animate__fadeInUp animated animated visible">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque efficitur nisl sodales egestas lobortis.</p>
                    </div>
                </div>
                <div className="project-filters text-center mb-8 rounded-full md:p-3 md:bg-blue-300-transparent">
                    <ul className="filters block md:flex md:flex-wrap md:justify-around">
                        {Filter.map((val) => (
                            <li key={val.key} className="btn inline-block rounded-xl cursor-pointer">
                                <a className={`block text-base text-center font-semibold font-roboto rounded-3xl py-2 px-4 ${val.key === active ? ActiveClass : ''}`} onClick={e => ChangeFilter(val.key.toLowerCase())}>{val.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap -mx-3 -mb-6">
                    <List active={active}/>
                </div>
            </div>
        </section>
    )
}

const List = ({active}) => {
    return (
        <Fragment>
            {ProjectList.map((val, i) => (
                (active === 'all' || val.filter.toLowerCase() === active) &&
                <div key={`list-${i}`} className="w-full lg:w-1/3 px-3 mb-6 transition-all">
                    <div className=" group rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible overflow-hidden">
                        <div className="relative h-96">
                            <img className="h-full w-full object-cover" src={val.image} alt=""/>
                            <div className="transition-all duration-300 absolute rounded-3xl text-left p-8 m-8 w-[calc(100%-4rem)] left-0 -bottom-full bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-0">
                                <span className="inline-block text-xs mb-3 py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">{val.filter}</span>
                                <h3 className="mb-3 font-bold font-heading text-2xl font-rubik">{val.title}</h3>
                                <p className="text-sm text-blueGray-400 font-roboto mb-5">{val.description}</p>
                                <a className="text-sm text-blueGray-400 font-roboto flex items-center text-yellow-500 cursor-pointer">
                                    Detail <CgArrowLongRight className="ml-2"></CgArrowLongRight>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}

export default Project;