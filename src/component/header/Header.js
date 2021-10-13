import React, {useState, useEffect} from "react";
import {FaTwitter ,FaInstagram ,FaFacebookF , FaLinkedinIn } from "react-icons/fa";
import {FiAlignRight, FiX} from "react-icons/fi";
import {Link} from 'react-scroll';

const SocialShare = [
    {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
    {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
    {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    {Social: <FaTwitter /> , link: 'https://twitter.com/'},
];

const CurentMenuAfterClass = "after:content after:w-full after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-orange-500";

const Header = (props) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [headerBgOpacity, setHeaderBgOpacity] = useState("0");

    const OpenMenu = () => {
        setOpenMenu(true);
    }

    const CloseMenu = () => {
        setOpenMenu(false);
    }

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                let opacity = (window.pageYOffset / 500).toFixed(2);
                opacity = opacity > 1 ? 1 : opacity;
                setHeaderBgOpacity(opacity.toString())
            });
        }
    }, []);

    return (
        <header className={`header-area fixed z-50 top-0 bloc w-full transition-all bg-white`} style={{"--tw-bg-opacity": headerBgOpacity}}>
            <div className="header-wrapper container mx-auto px-2 md:px-4 py-3 xl:py-5 flex justify-between items-center flex-wrap">
                <div className="header-left flex items-center">
                    <div className="header-logo block">
                        <img src="logo-header512.png" className="h-10 xl:h-16"/>
                    </div>
                    <nav className="main-menu-nav absolute xl:relative ml-20 xl:block">
                        <ul className={`main-menu block fixed top-0 ${openMenu ? "right-0" : "-right-full"} h-full w-4/6 z-40 py-10 px-8 bg-gray-900 xl:w-auto xl:h-auto xl:bg-transparent xl:p-0 xl:m-0 xl:flex xl:flex-wrap xl:justify-end xl:relative xl:right-0 xl:flex transition-all`}>
                            <li className="py-2 xl:py-0 xl:ml-0 xl:mr-5 relative font-rubik cursor-pointer"><a data-content=" " className={`relative text-white xl:text-gray-900 font-semibold p-0 xl:py-5 text-xl xl:text-lg ${CurentMenuAfterClass}`} href="#home">Home</a></li>
                            <li className="py-2 xl:py-0 xl:mx-3 relative font-rubik cursor-pointer"><Link to="about" spy={true} smooth={true} className="relative text-white xl:text-gray-700 xl:hover:text-gray-900 font-semibold p-0 xl:py-5 text-xl xl:text-lg">About</Link></li>
                            <li className="py-2 xl:py-0 xl:mx-3 relative font-rubik cursor-pointer"><Link to="service" spy={true} smooth={true} className="relative text-white xl:text-gray-700 xl:hover:text-gray-900 font-semibold p-0 xl:py-5 text-xl xl:text-lg">Service</Link></li>
                            <li className="py-2 xl:py-0 xl:mx-3 relative font-rubik cursor-pointer"><a data-content=" " className="relative text-white xl:text-gray-700 xl:hover:text-gray-900 font-semibold p-0 xl:py-5 text-xl xl:text-lg" href="#portfolio">Portfolio</a></li>
                            <li className="py-2 xl:py-0 xl:mx-3 relative font-rubik cursor-pointer"><a data-content=" " className="relative text-white xl:text-gray-700 xl:hover:text-gray-900 font-semibold p-0 xl:py-5 text-xl xl:text-lg" href="#blog">Blog</a></li>
                            <li className="py-2 xl:py-0 xl:mx-3 relative font-rubik cursor-pointer"><a data-content=" " className="relative text-white xl:text-gray-700 xl:hover:text-gray-900 font-semibold p-0 xl:py-5 text-xl xl:text-lg" href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right flex items-center flex-wrap">
                    <div className="social-share-inner mr-3 xl:m-0">
                        <ul className="social-share flex justify-start p-0 -m-3">
                            {SocialShare.map((val , i) => (
                                <li key={i} className="m-2 text-xl text-gray-700 hover:text-gray-900 xl:m-3"><a href={`${val.link}`}>{val.Social}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="header-button ml-0 xl:ml-10">
                        <a className="rn-button hidden xl:block px-5 h-10 bg-gray-900 inline-block leading-10 rounded-xl relative text-base text-white font-normal uppercase font-roboto" href="#">
                            <span>Hire Me</span>
                        </a>
                    </div>
                    <div className="hamburger-menu block xl:hidden pl-3 xs:pl-6" onClick={OpenMenu}>
                        <span className="text-lg">
                            <FiAlignRight size={24}/>
                        </span>
                    </div>
                    <div className={`close-menu fixed top-5 right-9 z-50 ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"} block text-white xl:hidden`} onClick={CloseMenu}>
                        <span>
                            <FiX size={24}/>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
