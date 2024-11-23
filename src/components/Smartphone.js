import React, { useEffect, useState } from "react";
import TechStack, { AboutProfile, Certificates } from "./TechStack";
import { Projects } from "./Projects";
import { ProjectsData } from "./Constant";
import im from "../assets/img/swiggy1.webp";
import im2 from "../assets/img/youtube.webp";
import splitwiseLogo from "../assets/img/splitwiseLogo.png";
import walleLogo from "../assets/img/walleLogo.png";
import playnextLogo from "../assets/img/playnextLogo.png";
import infinityLogo from "../assets/img/infinityLogo.png";
import {
  AboutIcon,
  CertificateIcon,
  HomeIcon,
  ProjectIcon,
  SearchIcon,
  TechStackIcon,
} from "./Icon";
import Project, { TechStackD } from "./Project";
import AboutMy from "./AboutMy";
import Certificate from "./Certificate";
import Tech from "./Tech";
import Search from "./Search";

const Sidebar = (props) => {
  return (
    <>
      <div className="h-[70px] md:h-[100svh] lg:h-[100svh] w-full md:w-[60px] lg:w-[60px] flex md:flex-col lg:flex-col justify-evenly md:justify-center lg:justify-center items-center fixed left-0 bottom-0 bg-gradient-to-b from-[#ffffffce] to-[#ffffff] backdrop-blur-2xl  z-30 border-r-none md:border-r lg:border-r border-[#ededed]">
        {/* <div className=" flex justify-center items-center my-[0px] md:my-[10px] lg:my-[10px] "></div> */}
        <div
          className={
            " flex justify-center items-center my-[0px] md:my-[15px] lg:my-[15px] cursor-pointer" +
            (props?.section == "about" ? " text-[black]" : " text-[#6161619e]")
          }
          onClick={() => {
            props?.setSection("about");
            props?.setIndex(0);
          }}
        >
          <HomeIcon />
        </div>
        <div
          className={
            " flex justify-center items-center my-[0px] md:my-[15px] lg:my-[15px] cursor-pointer" +
            (props?.section == "project"
              ? " text-[black]"
              : " text-[#6161619e]")
          }
          onClick={() => {
            props?.setSection("project");
            if (props?.section != "project") {
              props?.setIndex(0);
            }
          }}
        >
          <ProjectIcon />
        </div>
        <div
          className={
            " flex justify-center items-center my-[0px] md:my-[15px] lg:my-[15px] cursor-pointer" +
            (props?.section == "aboutme"
              ? " text-[black]"
              : " text-[#6161619e]")
          }
          onClick={() => {
            props?.setSection("aboutme");
            // if (props?.section != "project") {
            props?.setIndex(0);
            // }
          }}
        >
          <AboutIcon />
        </div>
        <div
          className={
            " flex justify-center items-center my-[0px] md:my-[15px] lg:my-[15px] cursor-pointer" +
            (props?.section == "certificate"
              ? " text-[black]"
              : " text-[#6161619e]")
          }
          onClick={() => {
            props?.setSection("certificate");
            if (props?.section != "certificate") {
              props?.setIndex(0);
            }
          }}
        >
          <CertificateIcon />
        </div>
        <div
          className={
            " flex justify-center items-center my-[0px] md:my-[15px] lg:my-[15px] cursor-pointer" +
            (props?.section == "techstack"
              ? " text-[black]"
              : " text-[#6161619e]")
          }
          onClick={() => {
            props?.setSection("techstack");
            // if(props?.section != "project"){
            props?.setIndex(0);
            // }
          }}
        >
          <TechStackIcon />
        </div>
        <div
          className={
            " flex justify-center items-center my-[0px] md:my-[15px] lg:my-[15px] cursor-pointer" +
            (props?.searchModal ? " text-[black]" : " text-[#6161619e]")
          }
          onClick={() => {
            props?.setSearchModal(!props?.searchModal);
            // if(props?.section != "project"){
            props?.setIndex(0);
            // }
          }}
        >
          <SearchIcon />
        </div>
      </div>
    </>
  );
};

const About = (props) => {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setAnime(false);
    setTimeout(() => {
      setAnime(true);
    }, 10);
  }, []);
  return (
    <>
      <span
        className={
          "text-[30px] ml-[0px] md:ml-[80px] lg:ml-[80px] w-full md:w-[calc(100%-80px)] lg:w-[calc(100%-80px)] flex justify-center items-center mb-[10px] font-[sky2] font-semibold tracking-wider " +
          (anime
            ? " mt-[30px] md:mt-[40px] lg:mt-[40px] opacity-100"
            : " mt-[40px] md:mt-[50px] lg:mt-[50px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".2s" : "0s",
        }}
      >
        himadri purkait
      </span>
      <span
        className={
          "text-[22px] ml-[0px] md:ml-[80px] lg:ml-[80px] w-full md:w-[calc(100%-80px)] lg:w-[calc(100%-80px)] flex justify-center items-center mt-[-8px] text-[#707070] " +
          (anime ? " mt-[-20px] opacity-100" : " mt-[-10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".3s" : "0s",
        }}
      >
        Web Developer
      </span>
      <span
        className={
          "font-[geist] ml-[0px] md:ml-[80px] lg:ml-[80px] w-full md:w-[calc(100%-80px)] lg:w-[calc(100%-80px)] flex justify-center items-center text-[15px] text-[#6161619e] my-[10px]" +
          (anime ? " mt-[10px] opacity-100" : " mt-[20px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".4s" : "0s",
        }}
      >
        <div className=" mr-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </div>
        West Bengal, India
      </span>
      {/* <span className="flex justify-center items-center mt-[20px] font-[mono] text-[15px]">
        <span class="relative flex h-2 w-2 mr-[10px]">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
        </span>
        Available for new opportunities
      </span> */}
      <div
        className={
          "mt-[20px] ml-[0px] md:ml-[80px] lg:ml-[80px] w-full md:w-[calc(100%-80px)] lg:w-[calc(100%-80px)] flex justify-center items-center  " +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".5s" : "0s",
        }}
      >
        <a
          href="https://github.com/WRATH2002"
          target="_blank"
          className="h-[35px] px-[10px] flex justify-center items-center rounded-xl  cursor-pointer text-[#6161619e] hover:text-[#000000]"
          style={{ transition: ".4s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/himadri.1/"
          target="_blank"
          className="h-[35px] px-[10px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer text-[#6161619e] hover:text-[#000000]"
          style={{ transition: ".4s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
        <a
          href="https://x.com/himadri_02"
          target="_blank"
          className="h-[35px] px-[10px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer text-[#6161619e] hover:text-[#000000]"
          style={{ transition: ".4s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/himadri-purkait-315193272/"
          target="_blank"
          className="h-[35px] px-[10px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer text-[#6161619e] hover:text-[#000000]"
          style={{ transition: ".4s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/Himadri.Artist"
          target="_blank"
          className="h-[35px] px-[10px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer text-[#6161619e] hover:text-[#000000]"
          style={{ transition: ".4s" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
      </div>
      {/* <div className="py-[7px] px-[15px] rounded-xl bg-white flex justify-center items-center text-[14px]">
        Email
      </div> */}
      {/* <span>purkaithimadricollege@gmail.com</span> */}

      <div
        className={
          "w-full text-[15px] mt-[30px] flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".7s" : "0s",
        }}
      >
        <div className="w-[80px]  justify-end text-[#6161619e] hidden md:flex lg:flex ">
          About
        </div>
        <div className="w-full md:w-[calc(100%-110px)] lg:w-[calc(100%-110px)] ml-0 md:ml-[30px] lg:ml-[30px] flex flex-col justify-start items-start flex-wrap text-[#404040]">
          {/* <div className="text-[13px] px-[8px] py-[4px] rounded-md mb-[10px] text-[] bg-[#F5F5F5]">
            About
          </div> */}
          <div className="w-full flex flex-wrap">
            I'm Himadri Purkait, a passionate frontend web developer and B.Tech
            CSE undergraduate based in Kolkata, West Bengal.
          </div>
          <div className="w-full flex flex-wrap mt-[25px]">
            As a fresher, I've built a strong foundation in coding and design
            principles, continuously learning and adapting to the latest trends
            in the tech world. My commitment to growth drives me to take on new
            challenges and contribute to meaningful projects.
          </div>
          <div className="w-full flex flex-wrap mt-[25px]">
            Eager to make an impact, I'm ready to bring my skills and fresh
            perspectives to a dynamic organization. My goal is to collaborate,
            innovate, and grow, making a significant contribution to the tech
            industry.
          </div>
          {/* I'm Dean Smith, a multidisciplinary designer based in New York City.
            With over 15 years of experience in the field, I take pride in
            delivering visually stunning and user-friendly designs that exceed
            client expectations. Whether it's collaborating with
            cross-functional teams or leading design projects, my attention to
            detail and dedication to excellence has earned me a reputation for
            delivering exceptional results. */}
        </div>
      </div>
      <div
        className={
          "w-full  flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start " +
          (anime ? " mt-[50px] opacity-100" : " mt-[60px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".9s" : "0s",
        }}
      >
        <div className="w-[80px]  justify-end text-[#6161619e] hidden md:flex lg:flex ">
          Projects
        </div>
        <div className="w-full md:w-[calc(100%-110px)] lg:w-[calc(100%-110px)] ml-[0px] md:ml-[30px] lg:ml-[30px] flex flex-col justify-start items-start text-[#404040]">
          <div
            className="group w-full h-[300px] rounded-xl hover:bg-[#F1F1F1] flex flex-col justify-start items-start flex-wrap text-[#404040] border border-[#ededed] p-[7px] pt-[0px] cursor-pointer"
            style={{ transition: ".3s" }}
            onClick={() => {
              props?.setSection("project");
              props?.setIndex(0);
            }}
          >
            <div className="w-full h-[45px] flex justify-start items-center">
              <div className="mr-[7px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-folder-root"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  <circle cx="12" cy="13" r="2" />
                  <path d="M12 15v5" />
                </svg>
              </div>
              Splitwise
            </div>
            <div className="w-full h-[calc(100%-45px)] bg-[#ff9393] overflow-hidden rounded-[8px]">
              <img
                className="w-full h-full bg-[#ff9393] object-cover rounded-[8px] group-hover:scale-110"
                src={splitwiseLogo}
                style={{ transition: ".3s" }}
              ></img>
            </div>
          </div>
          <div
            className="group w-full h-[300px] rounded-xl hover:bg-[#F1F1F1] flex flex-col justify-start items-start flex-wrap text-[#404040] border border-[#ededed] p-[7px] pt-[0px] mt-[15px] cursor-pointer"
            style={{ transition: ".3s" }}
            onClick={() => {
              props?.setSection("project");
              props?.setIndex(1);
            }}
          >
            <div className="w-full h-[45px] flex justify-start items-center">
              <div className="mr-[7px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-folder-root"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  <circle cx="12" cy="13" r="2" />
                  <path d="M12 15v5" />
                </svg>
              </div>
              Infinity
            </div>
            <div className="w-full h-[calc(100%-45px)] bg-[#ff9393] overflow-hidden rounded-[8px]">
              <img
                className="w-full h-full bg-[#ff9393] object-cover rounded-[8px] group-hover:scale-110"
                src={infinityLogo}
                style={{ transition: ".3s" }}
              ></img>
            </div>
          </div>
          <div
            className="group w-full h-[300px] rounded-xl hover:bg-[#F1F1F1] flex flex-col justify-start items-start flex-wrap text-[#404040] border border-[#ededed] p-[7px] pt-[0px] mt-[15px] cursor-pointer"
            style={{ transition: ".3s" }}
            onClick={() => {
              props?.setSection("project");
              props?.setIndex(2);
            }}
          >
            <div className="w-full h-[45px] flex justify-start items-center">
              <div className="mr-[7px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-folder-root"
                >
                  <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
                  <circle cx="12" cy="13" r="2" />
                  <path d="M12 15v5" />
                </svg>
              </div>
              PlayNext
            </div>
            <div className="w-full h-[calc(100%-45px)] bg-[#ff9393] overflow-hidden rounded-[8px]">
              <img
                className="w-full h-full bg-[#ff9393] object-cover rounded-[8px] group-hover:scale-110"
                src={playnextLogo}
                style={{ transition: ".3s" }}
              ></img>
            </div>
          </div>
          <div
            className="w-full h-[50px] mb-[60px] flex justify-center items-center rounded-xl border border-[#ededed] hover:bg-[#F1F1F1] mt-[15px] cursor-pointer"
            onClick={() => {
              props?.setSection("project");
            }}
            style={{ transition: ".3s" }}
          >
            View All{" "}
            <div className="ml-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-right"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Smartphone = () => {
  const [section, setSection] = useState("about");
  const [searchModal, setSearchModal] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, []);
  return (
    <div
      className={
        "w-full  top-0 right-0 h-[100svh] flex flex-col justify-start items-center overflow-y-scroll font-[geist] " +
        (section == "about" || section == "techstack" || section == "aboutme"
          ? " md:w-[calc(100%-0px)] lg:w-[calc(100%-0px)] fixed"
          : " md:w-[calc(100%-410px)] lg:w-[calc(100%-410px)] fixed")
      }
    >
      {searchModal ? (
        <>
          <Search
            setIndex={setIndex}
            setSection={setSection}
            setSearchModal={setSearchModal}
            searchModal={searchModal}
          />
        </>
      ) : (
        <></>
      )}
      <Sidebar
        setSection={setSection}
        section={section}
        setSearchModal={setSearchModal}
        searchModal={searchModal}
        setIndex={setIndex}
      />
      <div className="w-full md:w-[600px] lg:w-[600px] h-[100%-70px] md:h-full lg:h-full flex justify-start items-center flex-col p-[20px] md:p-[0px] lg:p-[0px] overflow-y-scroll">
        {section == "about" ? (
          <>
            <About setSection={setSection} setIndex={setIndex} />
          </>
        ) : section == "project" ? (
          <>
            <Project index={index} />
          </>
        ) : section == "techstack" ? (
          <>
            {/* <TechStackD /> */}
            <Tech />
          </>
        ) : section == "aboutme" ? (
          <>
            <AboutMy />
          </>
        ) : (
          <>
            <Certificate index={index} />
          </>
        )}
      </div>
      {/* <span
        className="font-[schabo] font-thin tracking-widest text-[150px] stroke-black stroke-[3px] text-transparent"
        // style={{ fontStretch: "expanded" }}
      >
        PORTFOLIO
      </span> */}
      {/* <div className="w-[610px] h-auto flex flex-col justify-center items-center drop-shadow-md">
        <div className="w-full flex justify-start items-center">Welcome to</div>
        <svg
          // className="tracking-widest"
          height="180"
          stroke="#000000"
          stroke-width="2"
          class="text-line"
          width="100%"
        >
          <text x="50%" dominant-baseline="middle" text-anchor="middle" y="50%">
            PORTFOLIO
          </text>
        </svg>
        <div className="w-full flex justify-end items-center">
          by Himadri Purkait
        </div>
      </div> */}
      {/* <svg viewbox="0 0 100 20">
        <defs>
          <linearGradient id="gradient">
            <stop color="#000" />
          </linearGradient>
          <pattern
            id="wave"
            x="0"
            y="-0.5"
            width="100%"
            height="100%"
            patternUnits="userSpaceOnUse"
          >
            <path
              id="wavePath"
              d="M-40 9 Q-30 7 -20 9 T0 9 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 V20 H-40z"
              mask="url(#mask)"
              fill="url(#gradient)"
            >
              <animateTransform
                attributeName="transform"
                begin="0s"
                dur="1.5s"
                type="translate"
                from="0,0"
                to="40,0"
                repeatCount="indefinite"
              />
            </path>
          </pattern>
        </defs>
        <text
          text-anchor="middle"
          x="50"
          y="15"
          font-size="150"
          fill="white"
          fill-opacity="0.1"
        >
          PORTFOLIO
        </text>
        <text
          text-anchor="middle"
          x="50"
          y="15"
          font-size="150"
          fill="url(#wave)"
          fill-opacity="1"
        >
          PORTFOLIO
        </text>
      </svg> */}
    </div>
  );
};
export default Smartphone;
