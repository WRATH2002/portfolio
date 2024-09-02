import React from "react";
import photo from "../assets/img/phh.jpg";
import Project from "./Project";
import { IoReorderThree } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import chatgpt from "../assets/img/chtagpt.jpg";
import swiggy from "../assets/img/swiggy1.webp";
import chat from "../assets/img/ca1.png";
import g1 from "../assets/img/g1.jpg";
import g2 from "../assets/img/g2.jpg";
import g3 from "../assets/img/g3.jpg";
import bm from "../assets/img/bomb.png";
import youtube from "../assets/img/pn3.png";
import ph from "../assets/img/pl.png";
import Qualification from "./Qualification";
import { FiUser } from "react-icons/fi";
import Footer from "./Footer";
import { useRef, useState, ref } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaCaretLeft } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
const Banner = (props) => {
  const contact = useRef(null);
  const [pos, setPos] = useState(1);

  const scrollToSection = (elementRef) => {
    // window.scrollTo({
    //   top: elementRef.current.offsetTop,
    //   behavior: "smooth",
    // });
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full md:w-[calc(100%-320px)] lg:w-[calc(100%-320px)] h-[100svh] py-[20px] rounded-3xl">
      {/* <div className="w-full md:w-[calc(100%-320px)] lg:w-[calc(100%-320px)] fixed bg-[#14131a] h-[60px]  flex justify-between md:justify-end lg:justify-end items-center z-30 ">
        <IoReorderThreeOutline
          className="flex md:hidden lg:hidden text-[white] text-[40px] ml-[10px]"
          onClick={() => {
            props.data2(!props.data1);
          }}
        />
        <div
          className="text-[white] mr-[20px] text-[14px] font-[mukta] cursor-pointer flex justify-center items-center h-[35px] rounded-lg px-[10px] bg-[#207448] hover:bg-[#32995f] select-none"
          onClick={() => {
            scrollToSection(contact);
            console.log("clicked");
          }}
        >
          Contact Me <FiUser className="ml-[5px] " />
        </div>
      </div> */}
      {/* <div className="w-full h-[60px]  flex justify-start items-center "></div> */}
      {/* bannerBg */}
      <div className="w-full h-[160px] bg-gradient-to-br from-[#1f201d] to-[#0e0f0c]  rounded-3xl z-50">
        <div className="w-[100%] h-full z-50  flex justify-center items-center px-[35px] rounded-3xl bg-transparent">
          <div className="group w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#232422] to-[#171914] flex justify-center items-center p-[3px] z-50">
            <img
              className="w-full h-full object-cover rounded-full"
              src={photo}
            ></img>
          </div>
          <div className="w-[calc(100%-130px)] h-full flex justify-between items-center z-50">
            <div className="flex flex-col text-[white] pl-[30px] font-[lato] ">
              <span className="font-bold font-[mukt] text-[24px] h-[30px] flex justify-start items-center">
                <Typewriter
                  words={["Himadri Purkait", "Web Developer"]}
                  cursor="true"
                  typeSpeed={100}
                  deleteSpeed={100}
                  loop="0"
                  // cursorBlinking={false}
                />
              </span>
              <span className="text-[15px] font-[mukta] text-[#bfbfbf]">
                @himadri.1
              </span>
            </div>
            <div className="w-auto px-[20px] h-[40px] hidden md:flex lg:flex justify-center items-center rounded-lg bg-[#1c1b23] text-[14px] text-[#bababa] font-[mukta]">
              <a
                className="w-full h-full flex justify-center items-center"
                href="https://www.instagram.com/himadri.1/"
              >
                <FaInstagram className="mr-[10px] text-[22px]  text-[#bababa]" />
                Follow me on Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-[160px] mt-[-160px] z-0 text-[140px] text-[#292929] flex justify-center items-center">
          <span className="w-full h-full flex justify-center items-start whitespace-nowrap mt-[-100px]">
            Web Developer
          </span>
        </div>
      </div>
      <div className="w-[400px] h-[400px] rounded-3xl bg-gradient-to-br from-[#1f201d] to-[#0e0f0c] p-[20px] flex justify-start items-start ">
        <div className="w-full h-[200px] rounded-2xl bg-slate-800"></div>
      </div>
    </div>
  );
};

export default Banner;
