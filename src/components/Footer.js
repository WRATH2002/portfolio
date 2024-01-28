import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div
        // ref={props.data}
        className="w-full h-[300px] bg-[#1c1b23] flex justify-center items-center mt-[20px] flex-col"
      >
        <div className="text-[26px] font-[mukt] text-[#2bd576] font-bold ">
          Web Developer
        </div>
        <div className="text-[13px] font-[mukt] mt-[20px] text-[#999999] ">
          Hey this is my portfolio website,
        </div>
        <div className="text-[14px] tracking-[.4px] font-[mukt] text-[#999999] ">
          here you will know about my{" "}
          <span className="text-[#2bd576]">works, </span>
          <span className="text-[#2bd576]">projects </span>
          and my <span className="text-[#2bd576]">skills</span>.
        </div>
        <div className="text-[15px] font-[mukt] mt-[15px] text-[#999999] ">
          Follow me on
        </div>
        <div className="text-[14px] font-[mukt] mt-[7px] text-[#999999] flex justify-center items-center ">
          <a href="https://www.instagram.com/himadri.1/">
            <FaInstagram className="text-[20px] mx-[10px] cursor-pointer hover:text-[#2bd576]" />
          </a>
          <div className="text-[15px] text-[#515151] cursor-default">|</div>
          <a href="https://www.facebook.com/Himadri.Artist">
            <FaFacebookF className="text-[20px] mx-[10px] cursor-pointer hover:text-[#2bd576]" />
          </a>
          <div className="text-[15px] text-[#515151] cursor-default">|</div>
          <a href="https://github.com/WRATH2002">
            <FaGithub className="text-[20px] mx-[10px] cursor-pointer hover:text-[#2bd576]" />
          </a>
          <div className="text-[15px] text-[#515151] cursor-default">|</div>
          <a href="https://www.linkedin.com/in/himadri-purkait-315193272/">
            <FaLinkedinIn className="text-[20px] mx-[10px] cursor-pointer hover:text-[#2bd576]" />
          </a>
          <div className="text-[15px] text-[#515151] cursor-default">|</div>
          <a href="https://twitter.com/himadri_02">
            <FaXTwitter className="text-[20px] mx-[10px] cursor-pointer hover:text-[#2bd576]" />
          </a>
        </div>
        <div className="text-[14px] tracking-[.4px] font-[mukt] mt-[40px] text-[#606063] ">
          Copyright © 2023. All rights are reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
