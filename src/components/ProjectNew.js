import React, { useEffect, useRef, useState } from "react";
// import chatgpt from "../assets/img/chtagpt.jpg";
// import swiggy from "../assets/img/swiggy.jpg";
// import chat from "../assets/img/chat.jpg";
// import youtube from "../assets/img/youtube.webp";
import { VscVscode } from "react-icons/vsc";
import im from "../assets/img/walleLogo.png";
import brainwaveLogo from "../assets/img/Groupzilla_new.png";
import splitwiseLogo from "../assets/img/Splitwise_ss.png";
import walleLogo from "../assets/img/Walle_New.png";
import playnextLogo from "../assets/img/playnext_ss.png";
import infinityLogo from "../assets/img/Infinity_ss.png";
import vitalcareLogo from "../assets/img/check_new.png";
import SudokuLogo from "../assets/img/Sudoku_New.png";
import jsonLogo from "../assets/img/JSON_New.png";
import Aurora from "../assets/img/Aurora_new.png";

import sound from "../assets/music/1.mp3";
import {
  ProjectsData,
  ProjectsDataTemp1,
  ProjectsDataTemp2,
  ProjectsDataTemp3,
} from "./Constant";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import react from "../assets/img/react.png";
import javascript from "../assets/img/javascript.png";
import c from "../assets/img/c.png";
import blender from "../assets/img/blender.png";
import github from "../assets/img/github.png";
import tailwind from "../assets/img/tailwind.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import python from "../assets/img/python.png";
import firebase from "../assets/img/firebase.png";
import ExtraProjects from "./ExtraProjects";
import {
  ChevronsLeftRight,
  MoveLeft,
  MoveRight,
  OctagonAlert,
} from "lucide-react";
import user from "../assets/img/a4.jpg";

const arr = [
  jsonLogo,
  vitalcareLogo,
  splitwiseLogo,
  SudokuLogo,

  playnextLogo,
  infinityLogo,
  walleLogo,
  //   brainwaveLogo,
  //   Aurora,
];

const arr2 = [brainwaveLogo, Aurora, Aurora, Aurora];

const arr3 = [Aurora, brainwaveLogo];

const ProjectNew = (props) => {
  const [expand, setExpand] = useState(false);
  const [indexPro, setIndexPro] = useState(props?.index);
  const [anime, setAnime] = useState(false);
  const [anime2, setAnime2] = useState(false);
  const [extra, setExtra] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [section, setSection] = useState(0);
  const contentRef = useRef(null);
  const soundRef = useRef(null);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  const handleScroll = () => {
    if (contentRef.current) {
      const scrollTop = contentRef.current.scrollTop;
      const scrollHeight = contentRef.current.scrollHeight;
      const clientHeight = contentRef.current.clientHeight;

      // Calculate the scroll percentage
      const percentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercentage(Math.round(percentage)); // Rounded to nearest whole number
    }
  };

  useEffect(() => {
    setAnime(false);
    setAnime2(false);
    setTimeout(() => {
      setAnime(true);
      setAnime2(true);
    }, 10);
  }, [indexPro]);

  //   useEffect(() => {
  //     setAnime2(false);
  //     setTimeout(() => {
  //       setAnime2(true);
  //     }, 50);
  //   }, [expand]);

  return (
    <>
      {/* <div className="w-full h-[100svh] flex justify-start items-start ">
        <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)] h-[100svh] overflow-y-scroll overflow-x-visible flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[60px] lg:pt-[60px] text-[#313131] px-[20px]">
        
          <div className="w-full min-h-[40px] flex md:hidden lg:hidden"></div>
          {extra ? (
            <>
              <div
                className="w-full h-[calc(100%-40px)] md:h-full lg:h-full pt-[20px] md:pt-[50px] lg:pt-[50px] flex flex-col justify-start items-start overflow-y-scroll text-[#313131] px-[20px] md:px-[0px] lg:px-[0px]"
                ref={contentRef}
                onScroll={handleScroll}
              >
                <div
                  className={
                    "text-[35px] font-[DMSr] tracking-tight leading-[45px] ml-[0px]  mb-[30px] text-[black] " +
                    (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
                  }
                  style={{
                    transition: anime ? ".4s" : "none",
                    transitionDelay: anime ? ".3s" : "0s",
                  }}
                >
                  Here are few additional projects that reflect my curiosity,
                  hands-on learning, and growing interest in software
                  development.
                </div>
                <div className=" mb-[140px] w-full text-[19px] font-[DMSr] tracking-tight leading-[29px] text-[#5b5b5b]">
                  These were some of my very first projects, built with the goal
                  of gaining foundational knowledge and practical experience
                  through real implementation.
                </div>
                <div className="w-full text-[12px] justify-start text-[#525252] font-[jetm] tracking-wider uppercase flex">
                  Extra Projects
                </div>
                <div className="w-full mt-[30px] text-[18px] font-[DMSm] leading-[25px] ">
                  Mineit
                </div>
                <div className="w-full mt-[6px] leading-[25px]">
                  Mine It – a thrilling block-finding game where players must
                  uncover diamond blocks while avoiding hidden bombs. Test your
                  skills across easy, medium, and hard difficulty levels.
                </div>
                <div className="w-full text-[18px] font-[DMSm] leading-[25px] mt-[30px] ">
                  Getweather
                </div>
                <div className="w-full mt-[6px] leading-[25px]">
                  GetWeather – a global weather forecasting website providing
                  real-time weather details with a configurable UI. Access
                  accurate weather data anywhere in the world on a responsive
                  platform.
                </div>
                <div className="w-full text-[18px] font-[DMSm] leading-[25px] mt-[30px] ">
                  Tic Tac Toe
                </div>
                <div className="w-full mt-[6px] leading-[25px] mb-[200px]">
                  Tic Tac Toe - a classic Tic Tac Toe game, built for seamless
                  play on any device. Enjoy strategic gameplay with a responsive
                  design for both smartphones and PCs.
                </div>
              </div>

              
            </>
          ) : (
            <>
              <div
                className="w-full h-[calc(100%-40px)] md:h-full lg:h-full pt-[20px] md:pt-[50px] lg:pt-[50px] flex flex-col justify-start items-start overflow-y-scroll text-[#313131] px-[20px] md:px-[0px] lg:px-[0px]"
                ref={contentRef}
                onScroll={handleScroll}
              >
                {ProjectsData[indexPro]?.ongoing ? (
                  <>
                    <div
                      className={
                        "min-h-[30px] px-[10px]  ml-[5px] mb-[-35px] z-10 flex justify-center items-center border-[1.5px] border-[#ffffff3e] bg-[#ffffffbf] text-[black] rounded-lg font-[DMSr] " +
                        (anime
                          ? " mt-[5px] opacity-100"
                          : " mt-[15px] opacity-0")
                      }
                      style={{
                        transition: anime ? ".4s" : "none",
                        transitionDelay: anime ? ".3s" : "0s",
                      }}
                    >
                      <OctagonAlert
                        width={18}
                        height={18}
                        strokeWidth={1.7}
                        className="mr-[7px] text-[red]"
                      />
                      Under Development
                    </div>
                  </>
                ) : (
                  <></>
                )}
                <img
                  src={arr[indexPro]}
                  // src="https://drive.google.com/drive/u/4/folders/18WIKc9rYMs8J8L8jQpNQsHiW6x7Rbr9J"
                  className={
                    "w-full h-[250px] rounded-xl object-cover" +
                    (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
                  }
                  style={{
                    transition: anime ? ".4s" : "none",
                    transitionDelay: anime ? ".2s" : "0s",
                  }}
                ></img>
               
                <div
                  className={
                    "w-full flex flex-col justify-start items-start text-[#313131] text-[15px] font-[DMSr] " +
                    (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
                  }
                  style={{
                    transition: anime ? ".4s" : "none",
                    transitionDelay: anime ? ".4s" : "0s",
                  }}
                >
                  <div className="text-[black] text-[26px] mt-[27px] font-[DMSm]">
                    {ProjectsData[indexPro].name}
                  </div>

                  <div className="flex justify-start items-start font-[DMSr]">
                    {ProjectsData[indexPro]?.ongoing ? (
                      <div
                        className="px-[11px] h-[30px] text-[14px] rounded-lg mt-[5px] text-[#6161619e] border  border-[#e4e3e3] flex justify-center items-center cursor-not-allowed"
                        // href={ProjectsData[indexPro]?.websiteLink}
                        // target="_blank"
                      >
                        <div className="mr-[7px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-link-2"
                          >
                            <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                            <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                            <line x1="8" x2="16" y1="12" y2="12" />
                          </svg>
                        </div>
                        Live Demo
                      </div>
                    ) : (
                      <a
                        className="px-[11px] h-[30px] text-[14px] rounded-lg mt-[5px] text-[#6161619e] border  border-[#e4e3e3] hover:text-black flex justify-center items-center"
                        href={ProjectsData[indexPro]?.websiteLink}
                        target="_blank"
                      >
                        <div className="mr-[7px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-link-2"
                          >
                            <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                            <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                            <line x1="8" x2="16" y1="12" y2="12" />
                          </svg>
                        </div>
                        Live Demo
                      </a>
                    )}
                    {ProjectsData[indexPro]?.ongoing ? (
                      <div
                        className="px-[11px] h-[30px] text-[14px] ml-[8px] rounded-lg mt-[5px] text-[#6161619e] border cursor-not-allowed  border-[#e4e3e3] flex justify-center items-center"
                        // href={ProjectsData[indexPro]?.githubLink}
                        // target="_blank"
                      >
                        <div className="mr-[7px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-github"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </div>
                        GitHub Repo
                      </div>
                    ) : (
                      <a
                        className="px-[11px] h-[30px] text-[14px] ml-[8px] rounded-lg mt-[5px] text-[#6161619e] border hover:text-black   border-[#e4e3e3] flex justify-center items-center"
                        href={ProjectsData[indexPro]?.githubLink}
                        target="_blank"
                      >
                        <div className="mr-[7px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-github"
                          >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </svg>
                        </div>
                        GitHub Repo
                      </a>
                    )}
                  </div>

                  <div className="w-full flex justify-start items-start mt-[25px]">
                    <div className="w-[100px] flex justify-start text-[#6161619e]">
                      Type
                    </div>
                    <div className="w-[calc(100%-100px)] flex justify-start flex-wrap">
                      {ProjectsData[indexPro].type}
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start mt-[7px]">
                    <div className="w-[100px] flex justify-start text-[#6161619e]">
                      Timeline
                    </div>
                    <div className="w-[calc(100%-100px)] flex justify-start flex-wrap">
                      {ProjectsData[indexPro].timeline}
                    </div>
                  </div>

                  <div className="w-full flex justify-start items-start mt-[7px] ">
                    <div className="w-[100px] flex justify-start text-[#6161619e]">
                      Tech Stack
                    </div>
                    <div className="w-[calc(100%-100px)] flex justify-start flex-wrap">
                      {ProjectsData[indexPro].techStack}
                    </div>
                  </div>

                  <pre className="w-full mt-[30px] mb-[30px] flex-wrap text-[15px] leading-[25px] font-[DMSr] whitespace-pre-wrap">
                    {ProjectsData[indexPro].about}
                  </pre>
                  <span className="mb-[7px] mt-[30px] leading-[25px] font-[DMSm] text-[black]">
                    Key Features :{" "}
                  </span>
                  {ProjectsData[indexPro].points?.map((data, index) => {
                    return (
                      <div
                        className="flex justify-start items-start leading-[25px] font-[DMSr]"
                        key={index}
                      >
                        <span className="text-[20px] mr-[15px]">•</span>
                        {data}
                      </div>
                    );
                  })}
                  <pre className="w-full mt-[30px] flex-wrap leading-[25px] font-[DMSr] whitespace-pre-wrap">
                    {ProjectsData[indexPro].keyFeatures}
                  </pre>

                  <div className="w-full h-[40px] mt-[80px] flex justify-end items-center">
                    {indexPro == 0 ? (
                      <></>
                    ) : (
                      <div
                        className="px-[15px] h-full flex justify-center items-center ml-[15px] bg-[black] rounded-[20px] cursor-pointer font-[DMSr] text-[#ffffff]"
                        onClick={() => {
                          if (indexPro != 0) {
                            setAnime(false);
                            scrollToTop();
                            setIndexPro(indexPro - 1);
                          }
                          console.log(indexPro);
                        }}
                      >
                        <MoveLeft
                          width={16}
                          height={16}
                          strokeWidth={2.2}
                          className="mr-[10px]"
                        />{" "}
                        Prev
                     
                      </div>
                    )}
                    {indexPro == ProjectsData.length - 1 ? (
                      <></>
                    ) : (
                      <div
                        className="px-[15px] h-full flex justify-center items-center ml-[15px] bg-[black] rounded-[20px] cursor-pointer font-[DMSr] text-[#ffffff]"
                        onClick={() => {
                          if (indexPro != ProjectsData.length - 1) {
                            setAnime(false);
                            scrollToTop();
                            setIndexPro(indexPro + 1);
                          }
                          console.log(indexPro);
                        }}
                      >
                        Next{" "}
                        <MoveRight
                          width={16}
                          height={16}
                          strokeWidth={2.2}
                          className="ml-[10px]"
                        />
                      
                      </div>
                    )}
                  </div>
                  <div className="mb-[70px]"></div>
                </div>
              </div>
            </>
          )}
          
        </div>
      </div> */}
      <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)] h-[100svh] overflow-y-scroll overflow-x-visible flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[60px] lg:pt-[60px] text-[#313131] px-[20px]">
        <div
          className={
            "w-full flex justify-start items-center mb-[50px]" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".2s" : "0s",
          }}
        >
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              className="w-[40px] h-[40px] rounded-full  object-cover transform scale-110"
              src={user}
            ></img>
          </div>
          <div className="ml-[20px] flex flex-col justify-center items-start text-[15px]">
            <div className="font-[DMSm] text-[#000000]">Himadri Purkait</div>
            {/* <div className="font-[DMSr]">Software Developer</div> */}
            <div className="font-[DMSr] flex justify-start items-center">
              <div className=" mr-[5px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
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
            </div>
          </div>
        </div>
        <div
          className={
            "text-[35px] font-[DMSr] tracking-tight leading-[45px] ml-[0px] text-[black] " +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".3s" : "0s",
          }}
        >
          Showcasing projects that reflect my creativity, problem-solving, and
          attention to detail
        </div>
        <div
          className={
            " mb-[140px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#5d5d5d]" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".4s" : "0s",
          }}
        >
          Explore how I approach complex user challenges, craft intuitive
          interfaces, and deliver impactful solutions.
        </div>
        <div
          className={
            "w-full text-[12px] justify-start text-[#525252] font-[jetm] tracking-wider uppercase flex mb-[30px]" +
            (anime2 ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime2 ? ".4s" : "none",
            transitionDelay: anime2 ? ".5s" : "0s",
          }}
        >
          {section == 0 ? (
            <>Projects</>
          ) : section == 1 ? (
            <>Extra Projects</>
          ) : (
            <>Upcoming Projects</>
          )}{" "}
          <ChevronsLeftRight
            width="16"
            height="16"
            strokeWidth="2"
            className="ml-[10px] rotate-90 cursor-pointer hover:text-[black]"
            onClick={() => {
              if (section + 1 == 3) {
                setSection(0);
                setAnime2((anime2) => false);
                setTimeout(() => {
                  setAnime2(true);
                }, 5);
              } else {
                setSection((section) => section + 1);
                setAnime2((anime2) => false);
                setTimeout(() => {
                  setAnime2(true);
                }, 5);
              }
            }}
          />
        </div>
        <div
          className={
            "" + (anime2 ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime2 ? ".4s" : "none",
            transitionDelay: anime2 ? ".5s" : "0s",
          }}
        >
          {section == 0 ? (
            <>
              {ProjectsDataTemp1?.map((data, index) => {
                return (
                  <>
                    <a
                      target="_blank"
                      href={data?.websiteLink}
                      key={index}
                      className="w-full flex flex-col justify-start items-start font-[DMSm] mb-[80px] text-[18px] text-[#7b7b7b] cursor-pointer"
                    >
                      <span>{data?.name}</span>
                      <div className="mt-[20px] w-full">
                        <img
                          className="w-full aspect-video rounded-xl object-fill border-[1.5px] border-[#e6e6e6]"
                          src={arr[index]}
                        ></img>
                      </div>
                      <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-[white] to-[80%] mt-[-100px]"></div>
                      <div className=" mb-[40px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#000000]">
                        {data?.about}
                      </div>
                    </a>
                  </>
                );
              })}
            </>
          ) : section == 1 ? (
            <>
              {ProjectsDataTemp2?.map((data, index) => {
                return (
                  <>
                    <a
                      target="_blank"
                      href={data?.websiteLink}
                      key={index}
                      className="w-full flex flex-col justify-start items-start font-[DMSm] mb-[80px] text-[18px] text-[#7b7b7b] cursor-pointer"
                    >
                      <span>{data?.name}</span>
                      <div className="mt-[20px] w-full">
                        <img
                          className="w-full aspect-video rounded-xl object-fill border-[1.5px] border-[#e6e6e6]"
                          src={arr2[index]}
                        ></img>
                      </div>
                      <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-[white] to-[80%] mt-[-100px]"></div>
                      <div className=" mb-[40px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#000000]">
                        {data?.about}
                      </div>
                    </a>
                  </>
                );
              })}
            </>
          ) : (
            <>
              {ProjectsDataTemp3?.map((data, index) => {
                return (
                  <>
                    <a
                      target="_blank"
                      href={data?.websiteLink}
                      key={index}
                      className="w-full flex flex-col justify-start items-start font-[DMSm] mb-[80px] text-[18px] text-[#7b7b7b] cursor-pointer"
                    >
                      <span>{data?.name}</span>
                      <div className="mt-[20px] w-full">
                        <img
                          className="w-full aspect-video rounded-xl object-fill border-[1.5px] border-[#e6e6e6]"
                          src={arr3[index]}
                        ></img>
                      </div>
                      <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-[white] to-[80%] mt-[-100px]"></div>
                      <div className=" mb-[40px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#000000]">
                        {data?.about}
                      </div>
                    </a>
                  </>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectNew;
