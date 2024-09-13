import React, { useEffect, useState } from "react";
import yt from "../assets/img/pld.png";
import ytlogo from "../assets/img/ytlogo.png";
import m2 from "../assets/img/m2.png";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFirebase, SiMysql, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import {
  ClosedFolderIcon,
  FileIcon,
  FolderIcon,
  GitFolderIcon,
  GithubIcon,
  ResumeIcon,
  TechIcon,
  WebsiteLinkIcon,
} from "./Icon";
import { Typewriter } from "react-simple-typewriter";
import TechStack, { AboutProfile, Certificates } from "./TechStack";
import { Projects } from "./Projects";
import { ExtraProjectsData, ProjectIndex, ProjectsData } from "./Constant";

const AboutMe = () => {
  const [dark, setDark] = useState(false);
  const [expand, setExpand] = useState(false);
  const [smooth, setSmooth] = useState(false);
  const [level2, setLevel2] = useState("about");
  const [level23, setLevel23] = useState("profile");
  const [level3, setLevel3] = useState([]);
  const [proData, setProData] = useState({});
  const [proData2, setProData2] = useState({});
  const [anim, setanim] = useState(false);
  useEffect(() => {
    window.addEventListener("load", function () {
      document.getElementById("intro").classList.add("visible");
      document.getElementById("name").classList.add("visible");
      document.getElementById("b").classList.add("visible");
    });
  }, []);

  useEffect(() => {
    console.log(level3);
  }, [level3]);

  function isThere(str) {
    let arr = [];
    level3.filter((data) => {
      if (data != str) {
        arr.push(data);
      }
    });
    return arr;
  }

  function isTherAddToLast(str) {
    let arr = [];
    level3.filter((data) => {
      if (data != str) {
        arr.push(data);
      }
    });

    arr.push(str);
    return arr;
  }

  function ProjectDataReturn() {
    console.log("svd");
    let a;
    ProjectsData.map((data) => {
      if (data?.name == level3[level3.length - 1]) {
        console.log("matched");
        a = data;
      }
    });
    console.log(a);
    setProData(a);
  }
  function ProjectDataReturn2() {
    console.log("svd");
    let a;
    ExtraProjectsData?.map((data) => {
      if (data?.name == level3[level3.length - 1]) {
        console.log("matched");
        a = data;
      }
    });
    console.log(a);
    setProData(a);
  }

  useEffect(() => {
    if (level3.length != 0) {
      if (level2 == "core_projects") {
        ProjectDataReturn();
      } else {
        ProjectDataReturn2();
      }
    }
  }, [level3]);
  useEffect(() => {
    setSmooth(false);
    setTimeout(() => {
      setSmooth(true);
    }, 100);
  }, [level2]);
  return (
    <>
      <div
        className={
          "w-full h-auto min-h-[100svh] flex justify-start items-center text-[14px]  " +
          (dark ? " bg-[#191A2C] text-[white]" : " bg-[#ffffff] text-[black]")
        }
      >
        <div className="w-full py-[20px] fixed left-0 top-0 flex justify-center items-start font-[geist] z-50">
          <div
            className={
              "  px-[15px] py-[9px] transition-all rounded-2xl flex flex-col justify-center items-center cursor-pointer" +
              (dark ? " bg-[#303147]" : " bg-[#f6f6f6]") +
              (expand ? " h-[40px]" : " h-[40px]")
            }
            style={{ transition: "opacity .3s" }}
            onClick={() => {
              if (
                (level2 == "core_projects" || level2 == "mini_projects") &&
                level3.length != 0
              ) {
                setExpand(true);
                setTimeout(() => {
                  setExpand(false);
                }, 2000);
              }
              // setDark(!dark);
            }}
          >
            <div className="min-h-[22px] flex justify-center items-center">
              src/{level2}/
              {level2 == "about" || level2 == "certificates" ? (
                <>{level23}</>
              ) : (
                <>{level3[level3.length - 1]}</>
              )}
            </div>
            {/* {expand ? (
              <>
                <div
                  className="mt-[5px] pl-[15px] h-[72px] flex flex-col opacity-100 border-l border-[#e2e2e2] justify-center items-start w-full text-[14px]"
                  style={{ transition: "height .39s" }}
                >
                  <div
                    className="flex justify-start items-center opacity-100"
                    style={{ transition: ".3s", transitionDelay: ".3s" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-clock-10"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 8 10" />
                    </svg>
                    <span className="ml-[5px]">3 Months</span>
                  </div>
                  <div
                    className="flex justify-start items-center mt-[2px] opacity-100"
                    style={{ transition: ".3s", transitionDelay: ".3s" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="ml-[5px]">Individual</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div
                  className={
                    "mt-[0px] h-[0px] flex flex-col justify-center border-l pl-[15px] opacity-0 items-start w-full text-[14px]" +
                    (dark ? " border-[#303147]" : " border-[#efefef]")
                  }
                  style={{ transition: "height .39s" }}
                  // style={{ transition: ".3s" }}
                >
                  <div className="flex justify-start items-center opacity-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-clock-10"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 8 10" />
                    </svg>
                    <span className="ml-[5px]">3 Months</span>
                  </div>
                  <div className="flex justify-start items-center mt-[2px] opacity-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.7"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span className="ml-[5px]">Individual</span>
                  </div>
                </div>
              </>
            )} */}
          </div>
          <div
            className={
              "ml-[10px] cursor-pointer h-[40px] rounded-2xl flex justify-center items-center" +
              (dark ? " bg-[#303147]" : " bg-[#f6f6f6]") +
              (anim ? " w-[50px]" : " w-[40px]")
            }
            onClick={() => {
              setanim(true);
              setTimeout(() => {
                setanim(false);
              }, 300);
              setDark(!dark);
            }}
            style={{ transition: "width .3s, opacity .3s" }}
          >
            {/* core_projects */}
            {dark ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              </>
            )}
          </div>
        </div>
        <div className="h-[100dvh] w-full flex  justify-center items-center py-[100px] ">
          <div className="h-full w-[350px] hidden md:flex lg:flex justify-center items-start flex-col font-[geist] rounded-xl">
            {/*  */}
            <div
              className={
                "border-l  h-auto flex flex-col justify-start items-start px-[25px] " +
                (dark ? " border-[#303147]" : " border-[#efefef]")
              }
            >
              <div
                className={
                  "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                  (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                }
              >
                <FolderIcon />
                <span className="ml-[4px] text-[14px]">src</span>
              </div>
              <div className="my-[1.5px]"></div>
              <div
                className={
                  "border-l h-auto flex flex-col justify-start items-start px-[25px] " +
                  (dark ? " border-[#303147]" : " border-[#efefef]")
                }
              >
                <div
                  className={
                    "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                    (dark ? " bg-[#191A2C] " : " bg-[#ffffff] ")
                  }
                  onClick={() => {
                    setLevel2("about");
                  }}
                >
                  {level2 == "about" ? <FolderIcon /> : <ClosedFolderIcon />}
                  <span className="ml-[4px] text-[14px]">about</span>
                </div>
                <div className="my-[1.5px]"></div>
                {level2 == "about" ? (
                  <div
                    className={
                      "border-l h-auto flex flex-col justify-start items-start px-[25px] " +
                      (dark ? " border-[#303147]" : " border-[#efefef]")
                    }
                  >
                    <div
                      className={
                        "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                        (level23 == "profile"
                          ? dark
                            ? " bg-[#303147]"
                            : " bg-[#efefef]"
                          : dark
                          ? " bg-[#191A2C]"
                          : " bg-[#ffffff]")
                      }
                      onClick={() => {
                        if (level23 == "profile") {
                          setLevel23("");
                        } else {
                          setLevel23("profile");
                        }
                      }}
                    >
                      <FileIcon />
                      <span className="ml-[4px] text-[14px]">profile</span>
                    </div>
                    <div className="my-[1.5px]"></div>
                    <div
                      className={
                        "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                        (level23 == "tech_stack"
                          ? dark
                            ? " bg-[#303147]"
                            : " bg-[#efefef]"
                          : dark
                          ? " bg-[#191A2C]"
                          : " bg-[#ffffff]")
                      }
                      onClick={() => {
                        if (level23 == "tech_stack") {
                          setLevel23("");
                        } else {
                          setLevel23("tech_stack");
                        }
                      }}
                    >
                      <TechIcon />
                      <span className="ml-[4px] text-[14px]">tech_stack</span>
                    </div>
                    <div className="my-[1.5px]"></div>
                    <div
                      className={
                        "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                        (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                      }
                    >
                      <ResumeIcon />
                      <span className="ml-[4px] text-[14px]">resume</span>
                    </div>
                    {/* <div className="border-l border-[#efefef] h-auto flex flex-col justify-start items-start px-[25px] ">
                      <div className="py-[1px] flex justify-start items-center ml-[-38px] bg-[#ffffff] px-[4px] rounded-md cursor-pointer">
                        <FolderIcon />
                        <span className="ml-[4px] text-[14px]">src</span>
                      </div>
                    </div> */}
                  </div>
                ) : (
                  <></>
                )}
                {/* Projectssssssssssssssssssssssss */}
                <div
                  className={
                    "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                    (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                  }
                  onClick={() => {
                    setLevel2("core_projects");
                  }}
                >
                  {level2 == "core_projects" ? (
                    <FolderIcon />
                  ) : (
                    <ClosedFolderIcon />
                  )}
                  <span className="ml-[4px] text-[14px]">core_projects</span>
                </div>
                <div className="my-[1.5px]"></div>
                {/* <div className="h-[100px] " style={{ transition: ".5s" }}></div> */}
                {level2 != "core_projects" ? (
                  <>
                    {ProjectsData?.map((data, index) => {
                      return (
                        <div
                          className={
                            "border-l h-auto flex flex-col justify-start items-start px-[25px] " +
                            (dark ? " border-[#303147]" : " border-[#efefef]")
                          }
                        >
                          <div
                            className={
                              "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                              (level3[level3?.length - 1] == data?.name
                                ? dark
                                  ? " bg-[#303147]"
                                  : " bg-[#efefef]"
                                : dark
                                ? " bg-[#191A2C]"
                                : " bg-[#ffffff]")
                            }
                            onClick={() => {
                              if (level3?.includes(data?.name)) {
                                if (level3[level3.length - 1] == data?.name) {
                                  setLevel3(isThere(data?.name));
                                } else {
                                  setLevel3(isTherAddToLast(data?.name));
                                }
                              } else {
                                setLevel3((prev) => [...prev, data?.name]);
                              }
                            }}
                          >
                            <GitFolderIcon />
                            <span className="ml-[4px] text-[14px] lowercase">
                              {data?.name}
                            </span>
                          </div>
                          <div className="my-[1.5px]"></div>
                          {level3?.includes(data?.name) ? (
                            <div
                              className={
                                "border-l h-auto flex flex-col justify-start items-start px-[25px] " +
                                (dark
                                  ? " border-[#303147]"
                                  : " border-[#efefef]")
                              }
                            >
                              <a
                                className={
                                  "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer z-40" +
                                  (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                                }
                                href={data?.websiteLink}
                                target="_blank"
                              >
                                <WebsiteLinkIcon />
                                <span className="ml-[4px] text-[14px]">
                                  {data?.websiteLink?.split("/")[2]}
                                </span>
                              </a>
                              <div className="my-[1.5px]"></div>
                              <a
                                className={
                                  "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                                  (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                                }
                                href={data?.githubLink}
                                target="_blank"
                              >
                                <GithubIcon />
                                <span className="ml-[4px] text-[14px] lowercase">
                                  {data?.githubRepoName}
                                </span>
                              </a>
                              <div className="my-[1.5px]"></div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}

                <div
                  className={
                    "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                    (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                  }
                  onClick={() => {
                    setLevel2("mini_projects");
                  }}
                >
                  {level2 == "mini_projects" ? (
                    <FolderIcon />
                  ) : (
                    <ClosedFolderIcon />
                  )}
                  <span className="ml-[4px] text-[14px]">mini_projects</span>
                </div>
                <div className="my-[1.5px]"></div>
                {level2 != "mini_projects" ? (
                  <>
                    {ExtraProjectsData?.map((data, index) => {
                      return (
                        <div
                          className={
                            "border-l h-auto flex flex-col justify-start items-start px-[25px] " +
                            (dark ? " border-[#303147]" : " border-[#efefef]")
                          }
                        >
                          <div
                            className={
                              "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                              (level3[level3?.length - 1] == data?.name
                                ? dark
                                  ? " bg-[#303147]"
                                  : " bg-[#efefef]"
                                : dark
                                ? " bg-[#191A2C]"
                                : " bg-[#ffffff]")
                            }
                            onClick={() => {
                              if (level3?.includes(data?.name)) {
                                if (level3[level3.length - 1] == data?.name) {
                                  setLevel3(isThere(data?.name));
                                } else {
                                  setLevel3(isTherAddToLast(data?.name));
                                }
                              } else {
                                setLevel3((prev) => [...prev, data?.name]);
                              }
                            }}
                          >
                            <GitFolderIcon />
                            <span className="ml-[4px] text-[14px] lowercase">
                              {data?.name}
                            </span>
                          </div>
                          <div className="my-[1.5px]"></div>
                          {level3?.includes(data?.name) ? (
                            <div
                              className={
                                "border-l h-auto flex flex-col justify-start items-start px-[25px] " +
                                (dark
                                  ? " border-[#303147]"
                                  : " border-[#efefef]")
                              }
                            >
                              <a
                                className={
                                  "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer z-40" +
                                  (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                                }
                                href={data?.websiteLink}
                                target="_blank"
                              >
                                <WebsiteLinkIcon />
                                <span className="ml-[4px] text-[14px]">
                                  {data?.websiteLink?.split("/")[2]}
                                </span>
                              </a>
                              <div className="my-[1.5px]"></div>
                              <a
                                className={
                                  "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                                  (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
                                }
                                href={data?.githubLink}
                                target="_blank"
                              >
                                <GithubIcon />
                                <span className="ml-[4px] text-[14px] lowercase">
                                  {data?.githubRepoName}
                                </span>
                              </a>
                              <div className="my-[1.5px]"></div>
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      );
                    })}
                  </>
                ) : (
                  <></>
                )}
                {/* certificatestsstsssssssssssssssssssssss */}
                <div
                  className={
                    "py-[1px] flex justify-start items-center ml-[-38px] px-[4px] rounded-md cursor-pointer" +
                    (dark
                      ? level2 == "certificates"
                        ? " bg-[#303147]"
                        : " bg-[#191A2C]"
                      : level2 == "certificates"
                      ? " bg-[#efefef]"
                      : " bg-[#ffffff]")
                  }
                  onClick={() => {
                    setLevel2("certificates");
                  }}
                >
                  <FileIcon />
                  <span className="ml-[4px] text-[14px]">certificates</span>
                </div>
                <div className="my-[1.5px]"></div>
              </div>
            </div>
            {/*  */}
            {/* <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <FolderIcon /> <FileIcon /> <GitFolderIcon /> <GithubIcon /> Hello
            shadcn src app layout */}
          </div>
          <div
            className={
              "h-full w-full md:w-[600px] lg:w-[600px] ml-[0px] md:ml-[40px] lg:ml-[40px] px-[40px] md:px-[0px] lg:px-[0px] flex flex-col justify-center items-center rounded-xl font-[geist] " +
              (dark ? " bg-[#191A2C]" : " bg-[#ffffff]")
            }
          >
            {/* Projects */}
            {/* <div className="w-full h-[220px] px-[30px] flex justify-start items-center">
              <img
                className="h-full aspect-video bg-[#f6f6f6] rounded-2xl object-cover drop-shadow-sm"
                src={yt}
              ></img>
              <div className="h-full flex flex-col justify-start items-center ml-[10px] ">
                <img
                  className=" h-[calc((100%-10px)/2)] aspect-square bg-[#f6f6f6] rounded-2xl  object-contain"
                  src={ytlogo}
                ></img>
                <div className=" h-[calc((100%-10px)/2)] aspect-square bg-[#f6f6f6] rounded-2xl mt-[10px] flex justify-center items-center">
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
                    class="lucide lucide-chevron-right"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start p-[30px]">
              <div className="text-[35px] ">Splitwise</div>
              <div className="text-[14px] mt-[5px] text-[#575757] ">
                Introducing Splitwise – best companion for effortlessly managing
                expenses and staying financially organized! With Splitwise, one
                can automatically extract transaction details from images,
                easily split expenses with friends, and keep one;s finances on
                track. Dive into a detailed transaction history, analyze
                spending patterns, and gain valuable insights with visual data
                representations. Stay in control with monthly reports, set
                reminders for upcoming payments, and manage budgets for specific
                sub-categories. Splitwise makes tracking expenses simple,
                intuitive, and stress-free.
              </div>
              <div className="w-full flex justify-start items-center mt-[20px] text-[20px] text-[white]">
                <div className="w-auto px-[12px] h-[35px] rounded-xl bg-[#17232f] flex justify-center items-center mr-[10px]">
                  <FaReact />{" "}
                  <span className="ml-[10px] text-[13px]">ReactJS</span>
                </div>
                <div className="w-auto px-[12px] h-[35px] rounded-xl bg-[#17232f] flex justify-center items-center mr-[10px]">
                  <IoLogoJavascript />{" "}
                  <span className="ml-[10px] text-[13px]">JavaScript</span>
                </div>
                <div className="w-auto px-[12px] h-[35px] rounded-xl bg-[#17232f] flex justify-center items-center mr-[10px]">
                  <FaHtml5 />{" "}
                  <span className="ml-[10px] text-[13px]">HTML</span>
                </div>
                <div className="w-auto px-[12px] h-[35px] rounded-xl bg-[#17232f] flex justify-center items-center mr-[10px]">
                  <FaCss3Alt />{" "}
                  <span className="ml-[10px] text-[13px]">CSS</span>
                </div>
                <div className="w-auto px-[12px] h-[35px] rounded-xl bg-[#17232f] flex justify-center items-center mr-[10px]">
                  <SiTailwindcss />{" "}
                  <span className="ml-[10px] text-[13px]">Tailwind</span>
                </div>
                <div className="w-auto px-[12px] h-[35px] rounded-xl bg-[#17232f] flex justify-center items-center mr-[10px]">
                  <IoLogoFirebase />{" "}
                  <span className="ml-[10px] text-[13px]">Firebase</span>
                </div>
              </div>
            </div> */}

            {level2 == "certificates" ? (
              <>
                <Certificates dark={dark} />
              </>
            ) : level2 == "about" ? (
              <>
                {level23 == "tech_stack" ? (
                  <TechStack dark={dark} />
                ) : level23 == "profile" ? (
                  <AboutProfile dark={dark} />
                ) : (
                  <Certificates dark={dark} />
                )}
              </>
            ) : (
              <>
                {level2 == "core_projects" ? (
                  <>
                    {level3.length == 0 ? (
                      <>
                        {level23 == "tech_stack" ? (
                          <TechStack dark={dark} />
                        ) : level23 == "profile" ? (
                          <AboutProfile dark={dark} />
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <Projects dark={dark} data={proData} />
                    )}
                  </>
                ) : level2 == "mini_projects" ? (
                  <>
                    {level3.length == 0 ? (
                      <>
                        {level23 == "tech_stack" ? (
                          <TechStack dark={dark} />
                        ) : level23 == "profile" ? (
                          <AboutProfile dark={dark} />
                        ) : (
                          <></>
                        )}
                      </>
                    ) : (
                      <Projects dark={dark} data={proData} />
                    )}
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
