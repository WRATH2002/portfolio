import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <div
        className="w-[100%] h-[100vh] bg-[#14131a] flex overflow-y-scroll"
        style={{ transition: ".3s" }}
      >
        <Sidebar />
        {toggleSidebar == true ? (
          <>
            <div
              className="w-[300px] h-[100vh] bg-[#1c1b23] fixed z-40"
              style={{ transition: ".3s" }}
            >
              <div
                className="w-full h-[60px]  flex justify-start items-center "
                style={{ transition: ".3s" }}
              >
                <RxCross2
                  className="flex md:hidden lg:hidden text-[white] text-[22px] ml-[20px]"
                  onClick={() => {
                    setToggleSidebar(false);
                  }}
                />
              </div>
              <div
                className="w-full h-[calc(100%-60px)] mt-[-60px] rounded-lg bg-[#1c1b23] flex flex-col justify-center text-[#888888] px-[60px] py-[40px]"
                style={{ transition: ".3s" }}
              >
                <span
                  className="flex opacity-100 justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576]"
                  style={{ transition: ".9s", transitionDelay: ".4s" }}
                >
                  <a
                    className="flex"
                    href="https://www.instagram.com/himadri.1/"
                  >
                    <FaInstagram className="mr-[10px] text-[22px] " /> Instagram
                  </a>
                </span>
                <span
                  className="flex opacity-100 justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576]"
                  style={{ transition: ".9s", transitionDelay: ".5s" }}
                >
                  <a
                    className="flex"
                    href="https://www.facebook.com/Himadri.Artist"
                  >
                    <FaFacebookF className="mr-[10px] text-[22px] " /> Facebook
                  </a>
                </span>
                <span
                  className="flex opacity-100 justify-start items-center h-[40px] my-[6px] hover:text-[#2bd576]"
                  style={{ transition: ".9s", transitionDelay: ".6s" }}
                >
                  <a className="flex" href="https://github.com/WRATH2002">
                    <FaGithub className="mr-[10px] text-[22px] " /> Github
                  </a>
                </span>
                <span
                  className="flex opacity-100 justify-start items-center h-[40px] my-[6px] hover:text-[#2bd576]"
                  style={{ transition: ".9s", transitionDelay: ".7s" }}
                >
                  <a
                    className="flex"
                    href="https://www.linkedin.com/in/himadri-purkait-315193272/"
                  >
                    <FaLinkedinIn className="mr-[10px] text-[22px] " /> Linkedin
                  </a>
                </span>
                <span
                  className="flex opacity-100 justify-start items-center h-[40px] my-[6px] hover:text-[#2bd576]"
                  style={{ transition: ".9s", transitionDelay: ".8s" }}
                >
                  <a className="flex" href="https://twitter.com/himadri_02">
                    <FaXTwitter className="mr-[10px] text-[22px] " /> Twitter
                  </a>
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              className="w-[0] h-[100vh] bg-[#1c1b23] fixed z-40"
              style={{ transition: ".3s" }}
            >
              <div
                className="w-0 h-[60px]  flex justify-start items-center "
                style={{ transition: ".3s" }}
              >
                <RxCross2
                  className="flex md:hidden lg:hidden text-[white] text-[22px] ml-[20px]"
                  onClick={() => {
                    setToggleSidebar(false);
                  }}
                />
              </div>
              <div
                className="w-0 overflow-hidden h-[calc(100%-60px)] mt-[-60px] rounded-lg bg-[#1c1b23] flex flex-col justify-center text-[#888888] px-[0] py-[40px]"
                style={{ transition: ".3s" }}
              >
                <span className="flex opacity-0 justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576]">
                  <a
                    className="flex"
                    href="https://www.instagram.com/himadri.1/"
                  >
                    <FaInstagram className="mr-[10px] text-[22px] " /> Instagram
                  </a>
                </span>
                <span className="flex opacity-0 justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576]">
                  <a
                    className="flex"
                    href="https://www.facebook.com/Himadri.Artist"
                  >
                    <FaFacebookF className="mr-[10px] text-[22px] " /> Facebook
                  </a>
                </span>
                <span className="flex opacity-0 justify-start items-center h-[40px] my-[6px] hover:text-[#2bd576]">
                  <a className="flex" href="https://github.com/WRATH2002">
                    <FaGithub className="mr-[10px] text-[22px] " /> Github
                  </a>
                </span>
                <span className="flex opacity-0 justify-start items-center h-[40px] my-[6px] hover:text-[#2bd576]">
                  <a
                    className="flex"
                    href="https://www.linkedin.com/in/himadri-purkait-315193272/"
                  >
                    <FaLinkedinIn className="mr-[10px] text-[22px] " /> Linkedin
                  </a>
                </span>
                <span className="flex opacity-0 justify-start items-center h-[40px] my-[6px] hover:text-[#2bd576]">
                  <a className="flex" href="https://twitter.com/himadri_02">
                    <FaXTwitter className="mr-[10px] text-[22px] " /> Twitter
                  </a>
                </span>
              </div>
            </div>
          </>
        )}
        <Banner data1={toggleSidebar} data2={setToggleSidebar} />
      </div>
    </>
  );
}

export default App;
