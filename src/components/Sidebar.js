import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <>
      <div className="w-[300px] fixed h-[100svh] p-[20px] pt-0 hidden md:flex lg:flex flex-col ">
        <div className="w-full h-[60px]  flex justify-start items-center ">
          <div className="w-[16px] h-[16px] rounded-full bg-[#2bd576] "></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#2bd576] ml-[8px]"></div>
        </div>
        <div className="w-full h-[calc(100%-60px)] rounded-lg bg-[#1c1b23] flex flex-col text-[#888888] px-[40px] py-[40px] font-[lato] text-[15px] font-thin">
          <span className="text-[18px] font-medium text-white">Socials</span>
          <span className="flex justify-start items-center h-[40px]  my-[6px]">
            <FaInstagram className="mr-[10px] text-[22px] text-[#c627e6]" />{" "}
            Instagram
          </span>
          <span className="flex justify-start items-center h-[40px]  my-[6px]">
            <FaFacebookF className="mr-[10px] text-[22px] text-[#18b6ff]" />{" "}
            Facebook
          </span>
          <span className="flex justify-start items-center h-[40px] my-[6px]">
            <FaGithub className="mr-[10px] text-[22px] text-[#16c421]" /> Github
          </span>
          <span className="flex justify-start items-center h-[40px] my-[6px]">
            <FaLinkedinIn className="mr-[10px] text-[22px] text-[#1b67ff]" />{" "}
            Linkedin
          </span>
        </div>
      </div>
      <div className="w-[300px] h-[100svh] p-[20px] pt-0 hidden md:flex lg:flex flex-col "></div>
    </>
  );
};

export default Sidebar;
