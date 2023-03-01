import React, {Fragment, useEffect, useState} from "react";
import {CgArrowLongRight} from "react-icons/cg";
import ProjectPopup from "./ProjectPopup";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";

const ActiveClass =  'text-white bg-orange-500';

const Filter = [
    {key: 'all', text: 'All'},
    {key: 'web', text: 'Web Development'},
    {key: 'backend', text: 'Backend Development'},
    {key: 'wordpress', text: 'WordPress Development'},
    {key: 'other', text: 'Others'},
];

const Background = {
    web: 'bg-blue-100-transparent',
    backend: 'bg-yellow-100-transparent',
    wordpress: 'bg-orange-100-transparent',
    other: 'bg-purple-100-transparent',
}

const ProjectList = [
    {
        filter: 'WordPress',
        title: 'Gutenverse',
        description: 'Gutenverse is a WordPress plugin to extend the functionalities of Full Site Editor. It has a lot of blocks that can be used in building content. Also, it has a form management system included in plugin features.',
        image: process.env.PUBLIC_URL + "/images/gutenverse.png",
        techStacks: "WordPress, PHP, Javascript, React, MySQL",
        url: "https://wordpress.org/plugins/gutenverse/"
    },
    {
        filter: 'WordPress',
        title: 'JNews',
        description: 'JNews is a premium news and magazine theme for WordPress. In this project, my task is developing various features.',
        image: process.env.PUBLIC_URL + "/images/jnews.png",
        techStacks: "WordPress, PHP, Javascript, MySQL",
        url: "https://jnews.io/"
    },
    {
        filter: 'Web',
        title: 'Toga MBA Consulting',
        description: 'A refreshment website for Toga MBA Consulting. This website is built using WordPress and Gutenverse plugin.',
        image: process.env.PUBLIC_URL + "/images/togamba.png",
        techStacks: "WordPress, PHP, Javascript, MySQL",
        url: "https://togambaconsulting.com/"
    },
    {
        filter: 'Web',
        title: 'Megaya Store',
        description: 'Create some features, such as social login, DHL shipping cost, pinterest pin image, color and size variation option.',
        image: process.env.PUBLIC_URL + "/images/megayastore.png",
        techStacks: "WordPress, PHP, Javascript, MySQL",
        url: "https://megayastore.com/"
    },
    {
        filter: 'Web',
        title: 'Gradient Picker',
        description: 'A tool to generate gradient CSS code. It has some color pickers to add new colors to the gradient.',
        image: process.env.PUBLIC_URL + "/images/gradient-picker.png",
        techStacks: "Javascript, Vue",
        url: "https://pradnyanandana.github.io/gradient-picker/"
    },
    {
        filter: 'Backend',
        title: 'Jegauto Telegram BOT',
        description: 'A Telegram BOT that sends notification about car prices and some other details.',
        image: process.env.PUBLIC_URL + "/images/jegauto.png",
        techStacks: "Javascript, NodeJS, Express"
    },
    {
        filter: 'Other',
        title: 'House Price Prediction in Denpasar, Bali, Indonesia',
        description: 'Analyze features that affect house prices and make a regression model using the Multi Layer Perceptron.',
        image: process.env.PUBLIC_URL + "/images/dts-harga-rumah.png",
        techStacks: "Python",
        url: "https://github.com/pradnyanandana/dtshargarumah/"
    },
    {
        filter: 'Other',
        title: 'Filmy',
        description: 'This is the final project for Indonesia Android Kejar Intermediate. Movies are retrieved using IMDB API.',
        image: process.env.PUBLIC_URL + "/images/filmy.png",
        techStacks: "Java, Android",
        url: "https://github.com/pradnyanandana/PopularMoviesIAK",
    },
]

const Project = (props) => {
    gsap.registerPlugin(ScrollTrigger);

    const [active, setActive] = useState('all');
    const [popupActive, setPopupActive] = useState(false);

    const ChangeFilter = (key) => {
        setActive(key);
    }

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#project",
            start: "-104px",
            scrub: 2,
            onUpdate: () => {
                document.querySelector("#project .text-heading").classList.add("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            },
            onLeave: () => {
                document.querySelector("#project .text-heading").classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            },
            onLeaveBack: () => {
                document.querySelector("#project .text-heading").classList.remove("text-transparent", "bg-clip-text", "bg-gradient-to-r", "from-gray-700", "via-orange-500", "to-black");
            }
        });
    }, []);

    return (
        <section id="project" className="pt-16 pb-20">
            <div className="container px-2 md:px-4 mx-auto text-center sm:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center mb-8">
                    <div className="w-full w-4/12">
                        <span className="inline-block text-xs py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">Portfolio</span>
                        <h2 className="mx-auto text-3xl xl:text-4xl font-rubik my-4 font-bold font-heading wow animate__ animate__fadeInUp animated animated visible">
                            <span>Some of <br/></span>
                            <span className="text-heading">My Latest Projects</span>
                        </h2>
                    </div>
                    <div className="w-full w-8/12 sm:ml-12">
                        <p className="mx-auto text-base lg:text-lg text-blueGray-400 font-roboto wow animate__ animate__fadeInUp animated animated visible text-gray-500">These are some sample projects that I have successfully developed; made with various languages and types of applications.</p>
                    </div>
                </div>
                <div className="project-filters text-center mb-12 rounded-full md:p-3 md:bg-blue-300-transparent">
                    <ul className="filters block md:flex md:flex-wrap md:justify-around">
                        {Filter.map((val) => (
                            <li key={val.key} className="btn inline-block rounded-xl cursor-pointer">
                                <a className={`block text-base text-center font-semibold font-roboto rounded-3xl py-2 px-4 ${val.key === active ? ActiveClass : ''}`} onClick={e => ChangeFilter(val.key.toLowerCase())}>{val.text}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-wrap -mx-3 -mb-6">
                    <List 
                        active={active}
                        setPopupActive={setPopupActive}
                    />
                </div>
            </div>
            <ProjectPopup
                popupActive={popupActive}
                setPopupActive={setPopupActive}
            />
        </section>
    )
}

const List = ({active, setPopupActive}) => {
    return (
        <Fragment>
            {ProjectList.map((val, i) => (
                (active === 'all' || val.filter.toLowerCase() === active) &&
                <div key={`list-${i}`} className="w-full lg:w-1/3 px-3 mb-6 transition-all">
                    <div className="group rounded-3xl transition duration-500 wow animate__ animate__fadeInUp animated visible overflow-hidden">
                        <div className={`relative h-96 ${Background[val.filter.toLowerCase()]}`}>
                            <img className="h-full w-full object-cover" src={val.image} alt=""/>
                            <div className="transition-all duration-300 absolute rounded-3xl text-left p-8 m-8 w-[calc(100%-4rem)] left-0 -bottom-full bg-white opacity-0 group-hover:opacity-100 group-hover:bottom-0 overflow-y-auto" style={{maxHeight: "calc(100% - 64px)"}}>
                                <span className="inline-block text-xs mb-3 py-1 px-3 text-blue-500 font-semibold font-roboto bg-blue-100 rounded-xl wow animate__ animate__fadeInUp animated visible">{val.filter}</span>
                                <h3 className="mb-3 font-bold font-heading text-2xl font-rubik">{val.title}</h3>
                                <p className="text-sm text-blueGray-400 font-roboto mb-5 text-gray-500">{val.description}</p>
                                <a className="text-sm text-blueGray-400 font-roboto flex items-center text-yellow-500 cursor-pointer" onClick={e => setPopupActive(val)}>
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