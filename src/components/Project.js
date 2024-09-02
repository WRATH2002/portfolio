import React, { useEffect, useRef, useState } from "react";
// import chatgpt from "../assets/img/chtagpt.jpg";
// import swiggy from "../assets/img/swiggy.jpg";
// import chat from "../assets/img/chat.jpg";
// import youtube from "../assets/img/youtube.webp";
import { VscVscode } from "react-icons/vsc";
import im from "../assets/img/walleLogo.png";
import splitwiseLogo from "../assets/img/splitwiseLogo.png";
import walleLogo from "../assets/img/walleLogo.png";
import playnextLogo from "../assets/img/playnextLogo.png";
import infinityLogo from "../assets/img/infinityLogo.png";

import sound from "../assets/music/1.mp3";
import { ProjectsData } from "./Constant";
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

const arr = [splitwiseLogo, infinityLogo, playnextLogo, im, walleLogo];

const Project = (props) => {
  const [expand, setExpand] = useState(false);
  const [indexPro, setIndexPro] = useState(props?.index);
  const [anime, setAnime] = useState(false);
  const [anime2, setAnime2] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
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
    setTimeout(() => {
      setAnime(true);
    }, 10);
  }, [indexPro]);

  useEffect(() => {
    setAnime2(false);
    setTimeout(() => {
      setAnime2(true);
    }, 50);
  }, [expand]);

  return (
    <div className="w-full md:w-[calc(100%-70px)] lg:w-[calc(100%-70px)] flex flex-col justify-start items-center h-full font-[geist] text-[#404040] text-[15px]">
      <div className="h-[100svh] w-[350px] bg-white left-[60px] top-0 fixed z-50 hidden md:flex lg:flex flex-col justify-start items-start p-[15px] border-r border-[#ededed]">
        <div
          className={
            "w-full h-auto flex-col justify-start items-start" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".2s" : "0s",
          }}
        >
          <div className="mt-[30px] mb-[10px] pl-[15px] text-[#6161619e]">
            Now viewing
          </div>
          <div className="w-full flex flex-col justify-center items-start bg-[#f5f5f5] rounded-2xl p-[15px] py-[12px] h-auto">
            <span className="text-black">{ProjectsData[indexPro]?.name}</span>
            <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] ">
              {ProjectsData[indexPro]?.keyFeatures}
            </span>
          </div>
          <div className="mt-[30px] mb-[10px] pl-[15px] text-[#6161619e]">
            Up next
          </div>
          {ProjectsData?.map((data, index) => {
            return (
              <>
                {index > indexPro ? (
                  <div
                    className="w-full flex flex-col cursor-pointer mb-[8px] justify-center items-start hover:bg-[#f5f5f5] rounded-2xl p-[15px] py-[12px] h-auto"
                    onClick={() => {
                      setIndexPro(index);
                    }}
                    // style={{ transition: ".3s" }}
                  >
                    <span className="text-black">
                      {ProjectsData[index]?.name}
                    </span>
                    <span className="overflow-hidden  text-ellipsis line-clamp-2 w-full text-[#707070] ">
                      {ProjectsData[index]?.keyFeatures}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
          <div className="w-full mt-[20px] h-[50px] rounded-xl bg-[#f5f5f5] flex justify-between  items-center px-[15px] cursor-pointer">
            <span>Extra Projects</span>
            <span className="flex justify-end items-center">
              View All{" "}
              <span className="ml-[5px]">
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
                  class="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          "w-full h-[100svh] top-0 left-0 bg-[#eeeeee96] z-40 fixed backdrop-blur-sm" +
          (expand ? " flex" : " hidden")
        }
      ></div>
      <div
        className={
          "h-[100svh] w-[350px] bg-white left-0 top-0 fixed z-50 flex flex-col justify-start items-end p-[15px] " +
          (expand ? " ml-[0px]" : " ml-[-400px]")
        }
        style={{ transition: ".3s" }}
      >
        <div
          className="z-50"
          onClick={() => {
            setExpand(false);
            setAnime2(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <div
          className={
            "w-full h-auto flex-col justify-start items-start " +
            (anime2 ? " mt-[-30px] opacity-100" : " mt-[-20px] opacity-0")
          }
          style={{
            transition: anime2 ? ".4s" : "none",
            transitionDelay: anime2 ? ".2s" : "0s",
          }}
        >
          <div className="mt-[40px] mb-[10px] pl-[15px] text-[#6161619e]">
            Now viewing
          </div>
          <div className="w-full flex flex-col justify-center items-start bg-[#f5f5f5] rounded-2xl p-[15px] py-[12px] h-auto">
            <span className="text-black">{ProjectsData[indexPro]?.name}</span>
            <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] ">
              {ProjectsData[indexPro]?.keyFeatures}
            </span>
          </div>
          <div className="mt-[30px] mb-[10px] pl-[15px] text-[#6161619e]">
            Up next
          </div>
          {ProjectsData?.map((data, index) => {
            return (
              <>
                {index > indexPro ? (
                  <div
                    className="w-full flex flex-col cursor-pointer mb-[8px] justify-center items-start hover:bg-[#f5f5f5] rounded-2xl p-[15px] py-[12px] h-auto"
                    onClick={() => {
                      setIndexPro(index);
                      setExpand(false);
                    }}
                    // style={{ transition: ".3s" }}
                  >
                    <span className="text-black">
                      {ProjectsData[index]?.name}
                    </span>
                    <span className="overflow-hidden  text-ellipsis line-clamp-2 w-full text-[#707070] ">
                      {ProjectsData[index]?.keyFeatures}
                    </span>
                  </div>
                ) : (
                  <></>
                )}
              </>
            );
          })}
          <div className="w-full mt-[20px] h-[50px] rounded-xl bg-[#f5f5f5] flex justify-between  items-center px-[15px] cursor-pointer">
            <span>Extra Projects</span>
            <span className="flex justify-end items-center">
              View All{" "}
              <span className="ml-[5px]">
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
                  class="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-[60px] px-[20px] flex md:hidden lg:hidden justify-between items-center fixed top-0 left-0 border border-[#ededed] bg-gradient-to-t from-[#ffffffce] to-[#ffffff] backdrop-blur-2xl ">
        <div>Projects</div>
        <div
          className="-rotate-90"
          onClick={() => {
            setExpand(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chart-no-axes-column"
          >
            <line x1="18" x2="18" y1="20" y2="10" />
            <line x1="12" x2="12" y1="20" y2="4" />
            <line x1="6" x2="6" y1="20" y2="14" />
          </svg>
        </div>
      </div>
      <div className="w-full min-h-[40px] flex md:hidden lg:hidden"></div>
      <div
        className="w-full h-[calc(100%-40px)] md:h-full lg:h-full pt-[20px] md:pt-[50px] lg:pt-[50px] flex flex-col justify-start items-start overflow-y-scroll"
        ref={contentRef}
        onScroll={handleScroll}
      >
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
        {/* <div className="h-[40px] flex justify-start items-start pt-[10px] pl-[10px] mt-[-45px]">
          <div className="px-[15px] h-full flex justify-center items-center border border-[white] text-white ">
            A Video Platform
          </div>
        </div> */}
        <div
          className={
            "w-full flex flex-col justify-start items-start" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".4s" : "0s",
          }}
        >
          <div className="text-[black] text-[26px] mt-[27px]">
            {ProjectsData[indexPro].name}
          </div>

          <div className="flex justify-start items-start">
            <a
              className="px-[11px] h-[30px] text-[14px] rounded-lg mt-[5px] text-[#6161619e] border  border-[#e4e3e3] flex justify-center items-center"
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
            <a
              className="px-[11px] h-[30px] text-[14px] ml-[8px] rounded-lg mt-[5px] text-[#6161619e] border  border-[#e4e3e3] flex justify-center items-center"
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

          <div className="w-full flex justify-start items-start mt-[7px]">
            <div className="w-[100px] flex justify-start text-[#6161619e]">
              Tech Stack
            </div>
            <div className="w-[calc(100%-100px)] flex justify-start flex-wrap">
              {ProjectsData[indexPro].techStack}
            </div>
          </div>

          <pre className="w-full mt-[30px] mb-[21px] flex-wrap font-[geist] whitespace-pre-wrap">
            {ProjectsData[indexPro].about}
          </pre>
          <span className="mb-[7px] ">Key Features : </span>
          {ProjectsData[indexPro].points?.map((data, index) => {
            return (
              <div
                className="flex justify-start items-start leading-[22px]"
                key={index}
              >
                <span className="text-[23px] mr-[15px]">•</span>
                {data}
              </div>
            );
          })}
          <pre className="w-full mt-[0px] flex-wrap font-[geist] whitespace-pre-wrap">
            {ProjectsData[indexPro].keyFeatures}
          </pre>

          <div className="w-full h-[42px] mt-[20px] flex justify-end items-center">
            {indexPro == 0 ? (
              <></>
            ) : (
              <div
                className="px-[15px] h-full flex justify-center items-center ml-[15px] border border-[#ededed] rounded-xl cursor-pointer"
                onClick={() => {
                  if (indexPro != 0) {
                    setAnime(false);
                    scrollToTop();
                    setIndexPro(indexPro - 1);
                  }
                  console.log(indexPro);
                }}
              >
                Prev{" "}
                <div className="ml-[6px] border-l border-[#ededed] pl-[6px] text-[#6161619e]">
                  {ProjectsData[indexPro - 1]?.name}
                </div>
              </div>
            )}
            {indexPro == ProjectsData.length - 1 ? (
              <></>
            ) : (
              <div
                className="px-[15px] h-full flex justify-center items-center ml-[15px] border border-[#ededed] rounded-xl cursor-pointer"
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
                <div className="ml-[6px] border-l border-[#ededed] pl-[6px] text-[#6161619e]">
                  {ProjectsData[indexPro + 1]?.name}
                </div>
              </div>
            )}
          </div>
          <div className="mb-[70px]"></div>
        </div>
      </div>
      {/* <div className="w-full flex-col flex justify-start items-start pt-[20px] md:pt-[50px] lg:pt-[50px]">
        <ExtraProjects />
      </div> */}
    </div>
  );
};

export default Project;

export const TechStackD = () => {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setAnime(false);
    setTimeout(() => {
      setAnime(true);
    }, 10);
  }, []);
  return (
    <div className="w-full h-[100svh] overflow-y-scroll flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[50px] lg:pt-[50px] text-[#404040]">
      <div
        className={
          "text-[24px] ml-[0px] md:ml-[110px] lg:ml-[110px]" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".2s" : "0s",
        }}
      >
        Tech Stack
      </div>
      <div
        className={
          "text-[20px] ml-[0px] md:ml-[110px] lg:ml-[110px] text-[#919191] mb-[30px]" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".3s" : "0s",
        }}
      >
        Technology & Software products I use
      </div>
      <div className="w-full mt-[30px] flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start">
        <div className="w-[100px]  justify-start font-bold hidden md:flex lg:flex ">
          About
        </div>
        <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)]  flex  justify-start items-start flex-wrap text-[#404040]">
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center">
              <img src={react} className="w-[50%]"></img>
            </div>
            <div className="h-[30px] flex justify-start items-end w-full">
              ReactJS
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center">
              <img src={html} className="w-[50%]"></img>
            </div>

            <div className="h-[30px] flex justify-start items-end w-full">
              HTML
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center">
              <FaCss3Alt className="text-[60px] text-[#254BDD]" />
            </div>
            <div className="h-[30px] flex justify-start items-end w-full">
              CSS
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center">
              <SiTailwindcss className="text-[60px] text-[#36B7F0]" />
            </div>
            <div className="h-[30px] flex justify-start items-end w-full">
              Tailwind
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center">
              <IoLogoJavascript className="text-[60px] text-[#EFD81D]" />
            </div>
            <div className="h-[30px] flex justify-start items-end w-full">
              JavaScript
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center">
              <SiFirebase className="text-[60px] text-[#FF9300]" />
            </div>
            <div className="h-[30px] flex justify-start items-end w-full">
              Firebase
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center"></div>
            <div className="h-[30px] flex justify-start items-end w-full">
              C
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center"></div>
            <div className="h-[30px] flex justify-start items-end w-full">
              Python
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center"></div>
            <div className="h-[30px] flex justify-start items-end w-full">
              GitHub
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center"></div>
            <div className="h-[30px] flex justify-start items-end w-full">
              Vercel
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] flex flex-col justify-between items-center ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center"></div>
            <div className="h-[30px] flex justify-start items-end w-full">
              Netlify
            </div>
          </div>
          <div className="min-w-[calc((100%-40px)/2)] min-h-[200px] rounded-2xl bg-[#f5f5f5] mb-[11px] p-[20px] ml-[11px]">
            <div className="w-full min-h-[calc(160px-30px)] flex justify-center items-center"></div>
            <div className="h-[30px] flex justify-start items-end w-full">
              Blender
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ExtraProjects = () => {
  return (
    <>
      <div className="flex justify-start items-start">
        <div className="w-[200px] aspect-video rounded-xl bg-slate-300"></div>
        <div className="w-[calc(100%-220px)] ml-[20px] flex flex-col justify-start items-start text-[15px]">
          <span>Mineit</span>
          <span>
            A thrilling block-finding game where players must uncover diamond
            blocks while avoiding hidden bombs. Test your skills across easy,
            medium, and hard difficulty levels.
          </span>
        </div>
      </div>
    </>
  );
};
