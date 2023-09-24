import { useRef } from "react";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

const Navbar = () => {
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
  return (
    <>
      <div
        className="fixed bg-white font-semibold w-full flex h-[75px] items-center justify-between text-[18px] drop-shadow-md shadow-sm"
        style={{ zIndex: "3" }}
      >
        <span className="font-bold ml-[25px]">HIMADRI.dev</span>
        <div className="flex mr-[25px]">
          <span
            className="flex justify-center items-center mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(home)}
          >
            Home
          </span>
          <span
            className="flex justify-center items-center mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(about)}
          >
            About
          </span>
          <span
            className="flex justify-center items-center mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(projects)}
          >
            Projects
          </span>
          <span
            className="flex justify-center items-center mx-[15px] text-black cursor-pointer hover:text[#808080]"
            onClick={() => scrollToSection(contact)}
          >
            Contact
          </span>
        </div>
      </div>
      <div className="w-full  h-[75px]"></div>
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
