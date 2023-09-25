import { useRef, useState } from "react";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
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
  return (
    <>
      <div
        className="fixed bg-white font-semibold w-full flex h-[75px] items-center justify-between text-[18px] drop-shadow-md shadow-sm"
        style={{ zIndex: "5" }}
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
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(home)}
          >
            Home
          </span>
          <span
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(about)}
          >
            About
          </span>
          <span
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(projects)}
          >
            Projects
          </span>
          <span
            className=" md:flex lg:flex justify-center items-center text-[12px] lg:text-[18px] md:text-[18px] mx-[10px] lg:mx-[15px] md:mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(contact)}
          >
            Contact
          </span>
        </div>
      </div>

      {/* <div className="w-full  h-[75px]"></div> */}
      {sidebar === true ? (
        <>
          <div
            className="lg:hidden md:hidden fixed bg-white w-[200px] h-[calc(100vh-75px)] mt-[75px] px-[30px] flex flex-col justify-start items-start"
            style={{ zIndex: "5", transition: ".3s" }}
          >
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
          </div>
        </>
      ) : (
        <>
          <div
            className="lg:hidden md:hidden fixed bg-slate-100 w-0 h-[calc(100vh-75px)] mt-[75px] px-0 flex flex-col justify-start items-start"
            style={{ zIndex: "5", transition: ".3s" }}
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
        </>
      )}
      <div className="w-full" ref={home}>
        <Home />
      </div>
      <div className="w-full" ref={about}>
        <About />
      </div>
      <div className="w-full" ref={projects}>
        <Projects />
      </div>
      <div className="w-full" ref={contact}>
        <Contact />
      </div>

      <Footer />
    </>
  );
};

export default Navbar;
