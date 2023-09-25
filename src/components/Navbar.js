import { useRef, useState } from "react";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { PiMoonStarsFill } from "react-icons/pi";
import { PiSunDimFill } from "react-icons/pi";

const Navbar = () => {
  const [darkmode, setDarkmode] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  function toggleSidebar() {
    setSidebar(!sidebar);
  }

  function togglemode() {
    setDarkmode(!darkmode);
    var navbar = document.getElementById("navbar");
    // var sidebarr = document.getElementById("sidebarr");
    navbar.classList.toggle("dark");
    // sidebarr.classList.toggle("dark");
  }
  return (
    <>
      <div
        id="navbar"
        className="fixed bg-white font-semibold w-full flex h-[75px] items-center justify-between text-[18px] drop-shadow-md shadow-sm"
        style={{ zIndex: "5", transition: ".3s" }}
      >
        <span className="block lg:hidden md:hidden ">
          {sidebar === true ? (
            <RxCross2
              className=" ml-[25px] cursor-pointer text-[25px]"
              style={{ zIndex: "5" }}
              onClick={() => toggleSidebar()}
            />
          ) : (
            <RxHamburgerMenu
              className=" ml-[25px] cursor-pointer text-[25px]"
              style={{ zIndex: "5" }}
              onClick={() => toggleSidebar()}
            />
          )}
        </span>

        <span className="font-bold text-[17px] lg:text-[18px] md:text-[18px] ml-[25px] mr-[25px] drop-shadow-lg">
          HIMADRI.dev
        </span>
        <div className="hidden md:flex lg:flex mr-[25px] drop-shadow-lg">
          <span
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px]  cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(home)}
          >
            Home
          </span>
          <span
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px]  cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(about)}
          >
            About
          </span>
          <span
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px]  cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(projects)}
          >
            Projects
          </span>
          <span
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px]  cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(contact)}
          >
            Contact
          </span>
          <div>
            {/* <button>Mode</button> */}
            {darkmode === true ? (
              <>
                <div className="ml-[20px] flex justify-center items-center">
                  <div
                    className="h-[22px] w-[22px] ml-[4px] bg-white rounded-full flex justify-center items-center cursor-pointer drop-shadow-md"
                    style={{ transition: ".3s" }}
                    onClick={() => togglemode()}
                  >
                    <PiMoonStarsFill className="text-black " />
                    {/* <PiSunDimFill  className="text-white  "/> */}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="ml-[20px] flex justify-center items-center">
                  <div
                    className="h-[22px] w-[22px] ml-[4px] bg-black rounded-full flex justify-center items-center cursor-pointer drop-shadow-md"
                    style={{ transition: ".3s" }}
                    onClick={() => togglemode()}
                  >
                    {/* <PiMoonStarsFill className="text-white " /> */}
                    <PiSunDimFill className="text-white  " />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* <div className="w-full  h-[75px]"></div> */}
      {darkmode === true ? (
        <>
          {sidebar === true ? (
            <>
              <div
                // id="sidebarr"
                className="lg:hidden md:hidden fixed bg-black text-white w-[200px] h-[calc(100vh-75px)] mt-[75px] px-[30px] flex flex-col justify-start items-start"
                style={{ zIndex: "5", transition: ".3s" }}
              >
                <div className="w-full flex justify-center items-center">
                  {/* <button>Mode</button> */}
                  {darkmode === true ? (
                    <>
                      <div className="flex justify-center items-center">
                        <div
                          className="h-[22px] w-[22px] ml-[4px] bg-white rounded-full flex justify-center items-center cursor-pointer drop-shadow-md"
                          style={{ transition: ".3s" }}
                          onClick={() => togglemode()}
                        >
                          <PiMoonStarsFill className="text-black " />
                          {/* <PiSunDimFill  className="text-white  "/> */}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-center items-center">
                        <div
                          className="h-[22px] w-[22px] ml-[4px] bg-black rounded-full flex justify-center items-center cursor-pointer drop-shadow-md"
                          style={{ transition: ".3s" }}
                          onClick={() => togglemode()}
                        >
                          {/* <PiMoonStarsFill className="text-white " /> */}
                          <PiSunDimFill className="text-white  " />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[50px]  drop-shadow-lg "
                  onClick={() => scrollToSection(home)}
                >
                  Home
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[20px]  drop-shadow-lg"
                  onClick={() => scrollToSection(about)}
                >
                  About
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[20px]  drop-shadow-lg"
                  onClick={() => scrollToSection(projects)}
                >
                  Projects
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[20px]  drop-shadow-lg"
                  onClick={() => scrollToSection(contact)}
                >
                  Contact
                </div>
                <div
                  className="text-[22px] font-semibold w-full flex justify-center items-center mt-[100px]  drop-shadow-lg"
                  // onClick={() => scrollToSection(contact)}
                >
                  <a
                    href="https://www.instagram.com/himadri.1/"
                    target="_blank"
                  >
                    <BiLogoInstagram className="mx-[10px]" />
                  </a>
                  <a
                    href="https://www.facebook.com/Himadri.Artist/"
                    target="_blank"
                  >
                    <BiLogoFacebook className="mx-[10px]" />
                  </a>
                  <a href="">
                    <BiLogoTwitter className="mx-[10px]" />
                  </a>
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[30px]  drop-shadow-lg"
                  onClick={() => scrollToSection(contact)}
                >
                  <div className="border border-white w-[40px]"></div>
                </div>
              </div>
              <div
                className="fixed w-full h-[calc(100vh-75px)] mt-[75px] bg-[#00000026]"
                style={{ zIndex: "4", transition: ".3s" }}
              ></div>
            </>
          ) : (
            <>
              <div
                className="lg:hidden md:hidden fixed bg-black text-white w-0 h-[calc(100vh-75px)] mt-[75px] px-0 flex flex-col justify-start items-start"
                style={{ zIndex: "5", transition: ".3" }}
              >
                <div className="hidden justify-center items-center mt-[50px] ">
                  Home
                </div>
                <div className="hidden justify-center items-center mt-[20px]">
                  About
                </div>
                <div className="hidden justify-center items-center mt-[20px]">
                  Projects
                </div>
                <div className="hidden justify-center items-center mt-[20px]">
                  Contact
                </div>
              </div>
              <div
                className="fixed w-full hidden h-[calc(100vh-75px)] mt-[75px] bg-slate-100"
                style={{ zIndex: "4", transition: ".3s" }}
              ></div>
            </>
          )}
        </>
      ) : (
        <>
          {sidebar === true ? (
            <>
              <div
                // id="sidebarr"
                className="lg:hidden md:hidden fixed bg-white w-[200px] h-[calc(100vh-75px)] mt-[75px] px-[30px] flex flex-col justify-start items-start"
                style={{ zIndex: "5", transition: ".3s" }}
              >
                <div className="w-full flex justify-center items-center">
                  {/* <button>Mode</button> */}
                  {darkmode === true ? (
                    <>
                      <div className=" flex justify-center items-center">
                        <div
                          className="h-[22px] w-[22px] ml-[4px] bg-white rounded-full flex justify-center items-center cursor-pointer drop-shadow-md"
                          style={{ transition: ".3s" }}
                          onClick={() => togglemode()}
                        >
                          <PiMoonStarsFill className="text-black " />
                          {/* <PiSunDimFill  className="text-white  "/> */}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className=" flex justify-center items-center">
                        <div
                          className="h-[22px] w-[22px] ml-[4px] bg-black rounded-full flex justify-center items-center cursor-pointer drop-shadow-md"
                          style={{ transition: ".3s" }}
                          onClick={() => togglemode()}
                        >
                          {/* <PiMoonStarsFill className="text-white " /> */}
                          <PiSunDimFill className="text-white  " />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[50px]  drop-shadow-lg "
                  onClick={() => scrollToSection(home)}
                >
                  Home
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[20px]  drop-shadow-lg"
                  onClick={() => scrollToSection(about)}
                >
                  About
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[20px]  drop-shadow-lg"
                  onClick={() => scrollToSection(projects)}
                >
                  Projects
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[20px]  drop-shadow-lg"
                  onClick={() => scrollToSection(contact)}
                >
                  Contact
                </div>
                <div
                  className="text-[22px] font-semibold w-full flex justify-center items-center mt-[100px]  drop-shadow-lg"
                  // onClick={() => scrollToSection(contact)}
                >
                  <a
                    href="https://www.instagram.com/himadri.1/"
                    target="_blank"
                  >
                    <BiLogoInstagram className="mx-[10px]" />
                  </a>
                  <a
                    href="https://www.facebook.com/Himadri.Artist/"
                    target="_blank"
                  >
                    <BiLogoFacebook className="mx-[10px]" />
                  </a>
                  <a href="">
                    <BiLogoTwitter className="mx-[10px]" />
                  </a>
                </div>
                <div
                  className="text-[14px] font-semibold w-full flex justify-center items-center mt-[30px]  drop-shadow-lg"
                  onClick={() => scrollToSection(contact)}
                >
                  <div className="border border-black w-[40px]"></div>
                </div>
              </div>
              <div
                className="fixed w-full h-[calc(100vh-75px)] mt-[75px] bg-[#00000026]"
                style={{ zIndex: "4", transition: ".3s" }}
              ></div>
            </>
          ) : (
            <>
              <div
                className="lg:hidden md:hidden fixed bg-slate-100 w-0 h-[calc(100vh-75px)] mt-[75px] px-0 flex flex-col justify-start items-start"
                style={{ zIndex: "5", transition: ".3" }}
              >
                <div className="hidden justify-center items-center mt-[50px] ">
                  Home
                </div>
                <div className="hidden justify-center items-center mt-[20px]">
                  About
                </div>
                <div className="hidden justify-center items-center mt-[20px]">
                  Projects
                </div>
                <div className="hidden justify-center items-center mt-[20px]">
                  Contact
                </div>
              </div>
              <div
                className="fixed w-full hidden h-[calc(100vh-75px)] mt-[75px] bg-slate-100"
                style={{ zIndex: "4", transition: ".3s" }}
              ></div>
            </>
          )}
        </>
      )}
      <div className="w-full" ref={home}>
        <Home data={darkmode} />
      </div>
      <div className="w-full" ref={about}>
        <About data={darkmode} />
      </div>
      <div className="w-full" ref={projects}>
        <Projects data={darkmode} />
      </div>
      <div className="w-full" ref={contact}>
        <Contact data={darkmode} />
      </div>

      <Footer />
    </>
  );
};

export default Navbar;
