import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
// import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      {/* <Navbar /> */}
      <div
        className="w-[100%] h-[100svh] bg-[#14131a] flex overflow-y-scroll"
        // style={{ transition: ".3s" }}
      >
        <Sidebar />
        {toggleSidebar == true ? (
          <>
            <div
              className="w-[300px] h-[100svh] bg-[#1c1b23] fixed z-40"
              style={{ transition: ".3s" }}
            >
              <div className="w-full h-[60px]  flex justify-start items-center ">
                <RxCross2
                  className="flex md:hidden lg:hidden text-[white] text-[22px] ml-[20px]"
                  onClick={() => {
                    setToggleSidebar(false);
                  }}
                />
              </div>
              <div className="w-full h-[calc(100%-60px)] rounded-lg bg-[#1c1b23] flex flex-col text-[#888888] px-[60px] py-[40px]">
                <span className="text-[18px] font-medium text-white">
                  Socials
                </span>
                <span className="flex justify-start items-center h-[40px] my-[6px] ">
                  <FaInstagram className="mr-[10px] text-[22px]  text-[#c627e6]" />{" "}
                  Instagram
                </span>
                <span className="flex justify-start items-center h-[40px] my-[6px] ">
                  <FaFacebookF className="mr-[10px] text-[22px]  text-[#18b6ff]" />{" "}
                  Facebook
                </span>
                <span className="flex justify-start items-center h-[40px] my-[6px]">
                  <FaGithub className="mr-[10px] text-[22px]  text-[#16c421]" />{" "}
                  Github
                </span>
                <span className="flex justify-start items-center h-[40px] my-[6px]">
                  <FaLinkedinIn className="mr-[10px] text-[22px]  text-[#1b67ff]" />{" "}
                  Linkedin
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="w-[0] h-[100svh] bg-[#1c1b23] fixed z-40"
              style={{ transition: ".3s" }}
            >
              <div className="w-full h-[60px]  flex justify-start items-center ">
                <RxCross2
                  className="flex md:hidden lg:hidden text-[white] text-[22px] ml-[20px]"
                  onClick={() => {
                    setToggleSidebar(false);
                  }}
                />
              </div>
              <div></div>
            </div>
          </>
        )}
        <Banner data1={toggleSidebar} data2={setToggleSidebar} />
      </div>

      {/* <Home />
      <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
