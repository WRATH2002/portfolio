import React, { useEffect, useState } from "react";
import TechStack, { AboutProfile, Certificates } from "./TechStack";
import { Projects } from "./Projects";
import { ProjectsData } from "./Constant";
import im from "../assets/img/swiggy1.webp";
import im2 from "../assets/img/youtube.webp";
import brainwaveLogo from "../assets/img/Groupzilla_new.png";
import splitwiseLogo from "../assets/img/Splitwise_ss.png";
import walleLogo from "../assets/img/Walle_New.png";
import playnextLogo from "../assets/img/playnext_ss.png";
import infinityLogo from "../assets/img/Infinity_ss.png";
import vitalcareLogo from "../assets/img/check_new.png";
import SudokuLogo from "../assets/img/Sudoku_New.png";
import jsonLogo from "../assets/img/JSON_New.png";
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
import {
  ArrowRight,
  BrainCog,
  Cpu,
  Folder,
  GraduationCap,
  House,
  MoveRight,
  UserSearch,
} from "lucide-react";
import ProjectNew from "./ProjectNew";
import user from "../assets/img/a4.jpg";
// import { HugeiconsIcon } from "@hugeicons/react";
// import { GitbookIcon } from "@hugeicons-pro/core-stroke-rounded";

const Sidebar = (props) => {
  return (
    <>
      <div
        className="fixed h-[45px] w-[calc(100%-40px)]  md:w-auto lg:w-auto flex justify-center items-center p-[9px] rounded-full left-[50%] bottom-[20px] z-50 bg-[black] text-[white]"
        style={{ transform: " translateX(-50%)" }}
      >
        <div className="h-full min-w-[27px] aspect-square rounded-full bg-[#1e1e1e] overflow-hidden">
          <img className="w-full h-full object-fill" src={user}></img>
        </div>
        <div className="text-[15px] text-[white] font-[DMSm] ml-[8px] whitespace-nowrap">
          Himadri Purkait
        </div>
        <div className="min-h-full border-l-[1.5px] border-[#1b1b1b] mx-[10px]"></div>
        <div className="flex justify-between items-center w-full">
          <div
            className={
              "text-[#9D9D9D] hover:text-[white] cursor-pointer" +
              (props?.section == "about" ? " text-[white]" : " text-[#9D9D9D]")
            }
            onClick={() => {
              props?.setSection("about");
              props?.setIndex(0);
            }}
          >
            <House
              width={18}
              height={18}
              strokeWidth={2.3}
              className="mr-[8px]"
            />
          </div>
          <div
            className={
              "text-[#9D9D9D] hover:text-[white] cursor-pointer ml-[8px]" +
              (props?.section == "project"
                ? " text-[white]"
                : " text-[#9D9D9D]")
            }
            onClick={() => {
              props?.setSection("project");
              if (props?.section != "project") {
                props?.setIndex(0);
              }
            }}
          >
            <Folder
              width={18}
              height={18}
              strokeWidth={2.3}
              className="mr-[8px]"
            />
          </div>
          <div
            className={
              "text-[#9D9D9D] hover:text-[white] cursor-pointer ml-[8px]" +
              (props?.section == "aboutme"
                ? " text-[white]"
                : " text-[#9D9D9D]")
            }
            onClick={() => {
              props?.setSection("aboutme");
              // if (props?.section != "project") {
              props?.setIndex(0);
              // }
            }}
          >
            <UserSearch
              width={18}
              height={18}
              strokeWidth={2.3}
              className="mr-[8px]"
            />
          </div>
          <div
            className={
              "text-[#9D9D9D] hover:text-[white] cursor-pointer ml-[8px]" +
              (props?.section == "certificate"
                ? " text-[white]"
                : " text-[#9D9D9D]")
            }
            onClick={() => {
              props?.setSection("certificate");
              if (props?.section != "certificate") {
                props?.setIndex(0);
              }
            }}
          >
            <GraduationCap
              width={18}
              height={18}
              strokeWidth={2.3}
              className="mr-[8px]"
            />
          </div>
          <div
            className={
              "text-[#9D9D9D] hover:text-[white] cursor-pointer ml-[8px]" +
              (props?.section == "techstack"
                ? " text-[white]"
                : " text-[#9D9D9D]")
            }
            onClick={() => {
              props?.setSection("techstack");
              // if(props?.section != "project"){
              props?.setIndex(0);
              // }
            }}
          >
            <Cpu
              width={18}
              height={18}
              strokeWidth={2.3}
              className="mr-[8px]"
            />
          </div>
        </div>
      </div>
      {/* <div className="h-[70px] md:h-[100svh] lg:h-[100svh] w-full md:w-[60px] lg:w-[60px] flex md:flex-col lg:flex-col justify-evenly md:justify-center lg:justify-center items-center fixed left-0 bottom-0 bg-gradient-to-b from-[#ffffffce] to-[#ffffff] backdrop-blur-2xl  z-30 border-r-none md:border-r lg:border-r border-[#ededed]">
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
      </div> */}
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
    <div className="w-full md:w-[calc(100%-0px)] lg:w-[calc(100%-0px)] h-[100svh] overflow-y-scroll overflow-x-visible flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[60px] lg:pt-[60px] text-[#313131] px-[20px] md:px-[70px] lg:px-[70px]">
      {/* <div className="w-full h-[50px] fixed left-0 bottom-0 backdrop-blur-xl z-50"></div> */}
      <div class="gradient-blur ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div
        className={
          "w-full flex justify-start items-center" +
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
          "text-[35px] font-[DMSr] tracking-tight leading-[45px] ml-[0px]  mb-[140px] text-[black] " +
          (anime ? " mt-[50px] opacity-100" : " mt-[60px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".3s" : "0s",
        }}
      >
        I’m a fresher Software Developer, passionate about crafting intuitive,
        user-friendly web interfaces
      </div>

      <div
        className={
          "w-full text-[15px] mb-[200px] flex flex-col  justify-start  items-start" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".5s" : "0s",
        }}
      >
        <div className="w-full text-[12px] justify-start text-[#525252] font-[jetm] tracking-wider uppercase flex">
          My story
        </div>
        <pre className="w-full ml-[0px] whitespace-pre-wrap font-[DMSr] text-[#313131] leading-[25px] mt-[30px]">
          {/* {aboutData} */}
          {`Hello, I'm Himadri Purkait, a`} B.Tech undergraduate in Computer
          Science and Engineering{" "}
          {`at University of Engineering and Management, Kolkata. My passion lies in`}{" "}
          Web Development
          {`, where I’ve dedicated myself to create dynamic, user-centric websites and applications. Through numerous projects, I’ve honed my skills, always aiming to develop products that are not only functional but also visually appealing.`}{" "}
        </pre>
        <div className="w-full h-[120px] bg-gradient-to-b from-transparent to-[#ffffff] mt-[-120px]"></div>
        <div
          className="mt-[60px] font-[DMSr] border-[1.5px] border-[#e6e6e6] h-[40px] rounded-[30px] px-[15px] flex justify-center items-center cursor-pointer"
          onClick={() => {
            props?.setSection("aboutme");
          }}
        >
          Know More About Me{" "}
          <MoveRight
            width={16}
            height={16}
            strokeWidth={2}
            className="ml-[10px]"
          />
        </div>
      </div>
      <div
        className={
          "w-full text-[15px] flex flex-col font-[DMSr]  justify-start  items-start" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".7s" : "0s",
        }}
      >
        <div className="w-full text-[12px] mb-[30px] justify-start text-[#525252] font-[jetm] tracking-wider uppercase flex">
          Projects
        </div>

        <a
          target="_blank"
          href="https://checkyourhealth.vercel.app/"
          className="w-full flex flex-col justify-start items-start font-[DMSm] mb-[80px] text-[18px] text-[#7b7b7b] cursor-pointer"
        >
          <span>CheckYourHealth</span>
          <div className="mt-[20px] w-full">
            <img
              className="w-full aspect-video rounded-xl object-fill border-[1.5px] border-[#e6e6e6]"
              src={vitalcareLogo}
            ></img>
          </div>
          <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-[white] to-[80%] mt-[-100px]"></div>
          <div className=" mb-[40px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#000000]">
            A smart IoT-powered wearable that monitors heart rate and detects
            falls in real-time, paired with a responsive web dashboard for
            clear, accessible health insights and safety alerts anytime,
            anywhere.
          </div>
        </a>
        <a
          target="_blank"
          href="https://jsonbeautyio.vercel.app/"
          className="w-full flex flex-col justify-start items-start font-[DMSm] mb-[80px] text-[18px] text-[#7b7b7b] cursor-pointer"
        >
          <span>JSON Beauty</span>
          <div className="mt-[20px] w-full">
            <img
              className="w-full aspect-video rounded-xl object-fill border-[1.5px] border-[#e6e6e6]"
              src={jsonLogo}
            ></img>
          </div>
          <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-[white] to-[80%] mt-[-100px]"></div>
          <div className=" mb-[40px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#000000]">
            A sleek and powerful JSON visualizer that formats, validates, and
            highlights your data in real-time—perfect for developers debugging
            structured data with ease and clarity.
          </div>
        </a>
        <a
          target="_blank"
          href="https://splitwiseio.vercel.app/"
          className="w-full flex flex-col justify-start items-start font-[DMSm]  text-[18px] text-[#7b7b7b] cursor-pointer"
        >
          <span>Splitwise</span>
          <div className="mt-[20px] w-full">
            <img
              className="w-full aspect-video rounded-xl object-fill border-[1.5px] border-[#e6e6e6]"
              src={splitwiseLogo}
            ></img>
          </div>
          <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-[white] to-[80%] mt-[-100px]"></div>
          <div className=" mb-[40px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#000000]">
            A smart expense tracker that simplifies splitting bills with
            friends, automates transaction logging from images, and gives you
            powerful insights into your spending with reminders, reports, and
            visual analytics
          </div>
        </a>
      </div>

      <div className="w-full min-h-[200px] bg-gradient-to-b from-transparent to-[white] mt-[-200px] mb-[50px]"></div>
      <div
        className={
          "w-full  flex flex-col md:flex-row lg:flex-row justify-start md:justify-center mb-[150px] lg:justify-center items-start " +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".9s" : "0s",
        }}
      >
        <div className="w-full  mb-[140px] md:mb-[140px] lg:mb-[140px] flex justify-center items-center rounded-xl  font-[DMSr] ">
          <div
            className="flex justify-center items-center h-[40px] px-[20px] rounded-full border-[1.5px] border-[#e6e6e6]  cursor-pointer"
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
    </div>
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
        (section == "about" ||
        section == "techstack" ||
        section == "aboutme" ||
        section == "project" ||
        section == "aboutme"
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
      <div className="w-full md:w-[600px] lg:w-[600px] h-[100%-70px] md:h-full lg:h-full flex justify-start items-center flex-col p-[0px] md:p-[0px] lg:p-[0px] overflow-y-scroll overflow-x-visible">
        {section == "about" ? (
          <>
            <About setSection={setSection} setIndex={setIndex} />
          </>
        ) : section == "project" ? (
          <>
            <ProjectNew index={index} />
          </>
        ) : section == "techstack" ? (
          <>
            {/* <TechStackD /> */}
            <Tech />
          </>
        ) : section == "aboutme" ? (
          <>
            <AboutMy setSection={setSection} setIndex={setIndex} />
          </>
        ) : (
          <>
            <Certificate index={index} />
          </>
        )}
      </div>
    </div>
  );
};
export default Smartphone;
