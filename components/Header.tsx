"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Spin as Hamburger } from "hamburger-react";
import { BASE_PATH } from "@/lib/basePath";

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

const CurrentMenuAfterClass =
  "after:content after:w-full after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-orange-500";

export default function Header() {
  const pathname = usePathname();
  const isProjectPage = pathname.startsWith("/projects/");
  const [openMenu, setOpenMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.pageYOffset > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header-area fixed z-50 top-0 bloc w-full transition-all ${
        isScroll ? "bg-white" : "bg-transparent"
      }`}
      style={{ maxWidth: "100vw" }}
    >
      <div className="header-wrapper container mx-auto px-2 md:px-4 py-3 xl:py-5 flex justify-between items-center flex-wrap">
        <div className="header-left flex items-center">
          <div className="header-logo block cursor-pointer">
            <Link href="/">
              <img
                src={`${BASE_PATH}/images/logo/logo-light192.png`}
                className="h-8 xl:h-10"
                alt="Pradnyanandana"
              />
            </Link>
          </div>
          <nav className="main-menu-nav absolute xl:relative ml-20 xl:block">
            <ul
              className={`main-menu block fixed top-0 ${
                openMenu ? "left-0" : "-left-full"
              } xl:left-auto h-screen w-4/6 z-40 py-10 px-8 bg-gray-900 xl:w-auto xl:h-auto xl:bg-transparent xl:p-0 xl:m-0 xl:flex xl:flex-wrap xl:justify-end xl:relative xl:right-0 xl:flex transition-all duration-300`}
              style={{ maxWidth: "66.666667vw" }}
            >
              {!isProjectPage &&
                Menu.map((e) => (
                  <li
                    key={e.link}
                    className="py-2 table xl:block xl:py-0 xl:mx-3 relative cursor-pointer"
                  >
                    <ScrollLink
                      to={e.link}
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      activeClass={CurrentMenuAfterClass}
                      className={`relative xl:text-gray-900 text-gray-100 hover:text-orange-500 font-inter p-0 xl:py-3 text-xl xl:text-lg`}
                      onClick={() => setOpenMenu(false)}
                    >
                      {e.text}
                    </ScrollLink>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
        <div className="header-right flex items-center flex-wrap">
          <div className="social-share-inner mr-3 xl:m-0">
            <ul className="social-share flex justify-start p-0 -m-3">
              {SocialShare.map((val, i) => (
                <li
                  key={i}
                  className={`m-2 text-xl text-gray-900 hover:text-orange-500 xl:m-3`}
                >
                  <a href={val.link} target="_blank" rel="noreferrer">
                    {val.Social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-button ml-0 xl:ml-10">
            {isProjectPage ? (
              <Link
                href="/"
                className={`rn-button hidden xl:flex items-center px-5 h-10 ${
                  isScroll ? "bg-gray-900" : "bg-orange-500"
                } leading-10 rounded-full relative text-base text-gray-100 font-medium font-inter cursor-pointer`}
              >
                <RiArrowGoBackLine size={20} />
              </Link>
            ) : (
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                className={`rn-button hidden xl:block px-5 h-10 ${
                  isScroll ? "bg-gray-900" : "bg-orange-500"
                } inline-block leading-10 rounded-full relative text-base text-gray-100 font-medium font-inter cursor-pointer`}
              >
                <span>Contact Me</span>
              </ScrollLink>
            )}
          </div>
          <div
            className={`hamburger-menu block xl:hidden ${
              isScroll ? "bg-gray-900" : "bg-orange-500"
            } rounded-xl ml-3 xs:ml-5`}
            onClick={() => setOpenMenu(!openMenu)}
            style={isProjectPage ? { height: "48px", width: "48px" } : {}}
          >
            <span
              className={`text-lg text-white ${
                !!isProjectPage && "flex h-full justify-center items-center"
              }`}
            >
              {isProjectPage ? (
                <Link href="/">
                  <RiArrowGoBackLine size={20} />
                </Link>
              ) : (
                <Hamburger size={20} distance="sm" toggled={openMenu} />
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
