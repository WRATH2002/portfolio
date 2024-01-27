import React from "react";
import photo from "../assets/img/dp.jpeg";
import Project from "./Project";
import { IoReorderThree } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import chatgpt from "../assets/img/chtagpt.jpg";
import swiggy from "../assets/img/swiggy1.webp";
import chat from "../assets/img/chat.jpg";
import youtube from "../assets/img/youtube.webp";
import Qualification from "./Qualification";
import { FiUser } from "react-icons/fi";
import Footer from "./Footer";

const Banner = (props) => {
  return (
    <div className="w-full md:w-[calc(100%-320px)] lg:w-[calc(100%-320px)] h-[100svh] ">
      <div className="w-full md:w-[calc(100%-320px)] lg:w-[calc(100%-320px)] fixed bg-[#14131a] h-[60px]  flex justify-between md:justify-end lg:justify-end items-center z-30 ">
        <IoReorderThreeOutline
          className="flex md:hidden lg:hidden text-[white] text-[40px] ml-[10px]"
          onClick={() => {
            props.data2(!props.data1);
          }}
        />
        <div className="text-[white] mr-[20px] text-[14px] font-[lato] cursor-pointer flex justify-center items-center h-[35px] rounded-lg px-[10px] bg-[#207448]">
          Contact Me <FiUser className="ml-[5px] " />
        </div>
      </div>
      <div className="w-full h-[60px]  flex justify-start items-center "></div>
      <div className="w-full h-[160px]  bannerBg rounded-lg">
        <div className="w-[100%] h-full backdrop-blur-[8px] flex justify-center items-center px-[35px] rounded-lg">
          <div className="w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#4f5dd7] to-[#00c1cb] flex justify-center items-center p-[3px]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={photo}
            ></img>
          </div>
          <div className="w-[calc(100%-130px)] h-full flex justify-between items-center">
            <div className="flex flex-col text-[white] pl-[30px] font-[lato] ">
              <span className="font-bold text-[24px]">Himadri Purkait</span>
              <span className="text-[15px] text-[#bfbfbf]">
                West Bengal, India
              </span>
            </div>
            <div className="w-auto px-[20px] h-[40px] hidden md:flex lg:flex justify-center items-center rounded-lg bg-[#0000009c] text-[14px] text-[#bababa] font-[lato]">
              <FaInstagram className="mr-[10px] text-[22px] text-[#bababa]" />
              Follow me on Instagram
            </div>
          </div>
        </div>
        <div className="text-[white] my-[30px] mt-[40px] font-[lato] text-[20px] font-semibold ml-[20px]">
          Projects
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center px-[20px]">
          <div className="w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a className="w-fullh-full  " href="https://walleio.netlify.app/">
              <div className="w-full h-[60%]">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={chatgpt}
                ></img>
              </div>
              <div className="w-full h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start ">
                <span className="text-[15px] font-bold ">ChatGpt CLone</span>
                <span className="text-[13px] text-[#656565] leading-[15px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, Firebase
                </span>
              </div>
            </a>
          </div>
          <div className="w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a
              className="w-fullh-full  "
              href="https://infinityio.netlify.app/"
            >
              <div className="w-full h-[60%]">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={chat}
                ></img>
              </div>
              <div className="w-full h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start ">
                <span className="text-[15px] font-bold ">
                  Infinity - Chatting App
                </span>
                <span className="text-[13px] text-[#656565] leading-[15px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, Firebase
                </span>
              </div>
            </a>
          </div>
          <div className="w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a className="w-fullh-full  " href="https://playynext.netlify.app/">
              <div className="w-full h-[60%]">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={youtube}
                ></img>
              </div>
              <div className="w-full h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start ">
                <span className="text-[15px] font-bold ">YouTube Clone</span>
                <span className="text-[13px] text-[#656565] leading-[15px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, YouTube API
                </span>
              </div>
            </a>
          </div>
          <div className="w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a className="w-fullh-full  " href="https://foodfave.netlify.app/">
              <div className="w-full h-[60%]">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={swiggy}
                ></img>
              </div>
              <div className="w-full h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start ">
                <span className="text-[15px] font-bold ">Swiggy Clone</span>
                <span className="text-[13px] text-[#656565] leading-[15px] mt-[4px]">
                  React JS, JavaScript, CSS, Swiggy API
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="text-[white] my-[30px] mt-[40px] font-[lato] text-[20px] font-semibold ml-[20px]">
          What I know
        </div>
        <Qualification />
        <Footer />
      </div>
    </div>
  );
};

export default Banner;
