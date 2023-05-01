import React, { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { Spin as Hamburger } from "hamburger-react";
import { useLocation } from "react-router-dom";

const SocialShare = [
    { Social: <FaLinkedinIn size={20} />, link: "https://www.linkedin.com/in/pradnyanandana/" },
    { Social: <FaGithub size={20} />, link: "https://github.com/pradnyanandana" },
];

const Menu = [
    { link: "hero", text: "Home" },
    { link: "about", text: "About" },
    { link: "service", text: "Service" },
    { link: "project", text: "Portfolio" },
    { link: "contact", text: "Contact" },
];

const CurrentMenuAfterClass = "after:content after:w-full after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-orange-500";

const Header = (props) => {
    const { pathname } = useLocation();
    const [openMenu, setOpenMenu] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    const ToggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const backHome = () => (window.location.href = process.env.PUBLIC_URL);

    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () => {
                setIsScroll(window.pageYOffset > 0);
            });
        }
    }, []);

    return (
        <header id="header" className={`header-area fixed z-50 top-0 bloc w-full transition-all ${isScroll ? "bg-white" : "bg-transparent"}`} style={{ maxWidth: "100vw" }}>
            <div className="header-wrapper container mx-auto px-2 md:px-4 py-3 xl:py-5 flex justify-between items-center flex-wrap">
                <div className="header-left flex items-center">
                    <div className="header-logo block cursor-pointer" onClick={backHome}>
                        <img src={process.env.PUBLIC_URL + (isScroll ? "/images/logo/logo-light-name192.png" : "/images/logo/logo-dark-name192.png")} className="h-10 xl:h-16" />
                    </div>
                    <nav className="main-menu-nav absolute xl:relative ml-20 xl:block">
                        <ul className={`main-menu block fixed top-0 ${openMenu ? "left-0" : "-left-full"} xl:left-auto h-screen w-4/6 z-40 py-10 px-8 bg-gray-900 xl:w-auto xl:h-auto xl:bg-transparent xl:p-0 xl:m-0 xl:flex xl:flex-wrap xl:justify-end xl:relative xl:right-0 xl:flex transition-all duration-300`} style={{ maxWidth: "66.666667vw" }}>
                            {pathname === "/portfolio/home" &&
                                Menu.map((e) => (
                                    <li key={e.link} className="py-2 table xl:block xl:py-0 xl:mx-3 relative cursor-pointer">
                                        <Link to={e.link} spy={true} smooth={true} activeClass={CurrentMenuAfterClass} className={`relative ${isScroll ? "text-gray-900" : "text-gray-100"} hover:text-orange-500 font-inter p-0 xl:py-3 text-xl xl:text-lg`}>
                                            {e.text}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </nav>
                </div>
                <div className="header-right flex items-center flex-wrap">
                    <div className="social-share-inner mr-3 xl:m-0">
                        <ul className="social-share flex justify-start p-0 -m-3">
                            {SocialShare.map((val, i) => (
                                <li key={i} className={`m-2 text-xl ${isScroll ? "text-gray-900" : "text-gray-100"} hover:text-orange-500 xl:m-3`}>
                                    <a href={`${val.link}`} target="_blank">
                                        {val.Social}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="header-button ml-0 xl:ml-10">
                        <a className={`rn-button hidden ${pathname === "/portfolio/home" ? "xl:block" : "xl:flex items-center"} px-5 h-10 ${isScroll ? "bg-gray-900" : "bg-orange-500"} inline-block leading-10 rounded-full relative text-base text-gray-100 font-medium font-inter cursor-pointer`}>
                            {pathname === "/portfolio/home" ? (
                                <Link to={"footer"} spy={true} smooth={true}>
                                    <span>Contact Me</span>
                                </Link>
                            ) : (
                                <RiArrowGoBackLine size={20} onClick={backHome} />
                            )}
                        </a>
                    </div>
                    <div className={`hamburger-menu block xl:hidden ${isScroll ? "bg-gray-900" : "bg-orange-500"} rounded-xl ml-3 xs:ml-5`} onClick={ToggleMenu} style={pathname === "/portfolio/home" ? {} : { height: "48px", width: "48px" }}>
                        <span className={`text-lg text-white ${pathname !== "/portfolio/home" && "flex h-full justify-center items-center"}`}>{pathname === "/portfolio/home" ? <Hamburger size={20} distance="sm" toggled={openMenu} /> : <RiArrowGoBackLine size={20} onClick={backHome} />}</span>
                    </div>
                    {/* <div className={`close-menu fixed top-5 right-9 z-50 ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"} block text-white xl:hidden`} onClick={CloseMenu}>
                        <span>
                            <FiX size={24}/>
                        </span>
                    </div> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
