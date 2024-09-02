import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
const Sidebar = () => {
  return (
    <>
      <div className="w-[300px] fixed h-[100svh] p-[20px] hidden md:flex lg:flex flex-col ">
        {/* <div className="w-full h-[60px]  flex justify-start items-center ">
          <div className="w-[16px] h-[16px] rounded-full bg-[#ff9030] "></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#e6cd2f] ml-[8px]"></div>
          <div className="w-[16px] h-[16px] rounded-full bg-[#2bd576] ml-[8px]"></div>
        </div> */}
        <div className="w-full h-[calc(100%)] rounded-3xl bg-gradient-to-br from-[#1f201d] to-[#0e0f0c] flex flex-col justify-center text-[#888888] px-[40px] py-[40px] font-[lato] text-[15px] font-thin">
          {/* <span className="text-[18px] font-medium text-white">Socials</span> */}
          <span className="flex justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576] text-[17px] font-[mukta] font-medium text-[#888888] leading-[16px] mt-[4px]">
            <a
              className="flex justify-start items-center"
              href="https://www.instagram.com/himadri.1/"
            >
              <FaInstagram className="mr-[10px] text-[22px] " /> Instagram
            </a>
          </span>
          <span className="flex justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576] text-[17px] font-[mukta] font-medium text-[#888888] leading-[16px] mt-[4px]">
            <a
              className="flex  justify-start items-center"
              href="https://www.facebook.com/Himadri.Artist"
            >
              <FaFacebookF className="mr-[10px] text-[22px] " /> Facebook
            </a>
          </span>
          <span className="flex justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576] text-[17px] font-[mukta] font-medium text-[#888888] leading-[16px] mt-[4px]">
            <a
              className="flex  justify-start items-center"
              href="https://github.com/WRATH2002"
            >
              <FaGithub className="mr-[10px] text-[22px] " /> Github
            </a>
          </span>
          <span className="flex justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576] text-[17px] font-[mukta] font-medium text-[#888888] leading-[16px] mt-[4px]">
            <a
              className="flex  justify-start items-center"
              href="https://www.linkedin.com/in/himadri-purkait-315193272/"
            >
              <FaLinkedinIn className="mr-[10px] text-[22px] " /> Linkedin
            </a>
          </span>
          <span className="flex justify-start items-center h-[40px]  my-[6px] hover:text-[#2bd576] text-[17px] font-[mukta] font-medium text-[#888888] leading-[16px] mt-[4px]">
            <a
              className="flex  justify-start items-center"
              href="https://twitter.com/himadri_02"
            >
              <FaXTwitter className="mr-[10px] text-[22px] " /> Twitter
            </a>
          </span>
        </div>
      </div>
      <div className="w-[300px] h-[100svh] p-[20px] pt-0 hidden md:flex lg:flex flex-col "></div>
    </>
  );
};

export default Sidebar;
