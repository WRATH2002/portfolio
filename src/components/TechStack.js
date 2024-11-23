import React, { useEffect, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiFirebase, SiMysql, SiTailwindcss } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { Typewriter } from "react-simple-typewriter";
import { FaJava } from "react-icons/fa";
import { DownloadIcon, WebsiteLinkIcon } from "./Icon";
import { QR } from "react-qr-rounded";

const TechStack = (props) => {
  const [textReveal, setTextReveal] = useState(false);
  const [hoveredText, setHoveredText] = useState("");

  const handleMouseEnter = (text) => {
    setHoveredText(text);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHoveredText("");
    }, 1500);
  };
  useEffect(() => {
    setTimeout(() => {
      setTextReveal(true);
    }, 300);
    console.log("TechStack Component Loaded");
  }, []);
  const [mode, setMode] = useState(false);
  return (
    <div className="flex flex-col-reverse md:flex-row lg:flew-row justify-end items-center md:justify-end md:items-center lg:justify-end lg:items-center w-full h-full font-[geist]">
      <div className="flex flex-col justify-center items-center md:items-start lg:items-start w-full h-full ">
        {mode ? (
          <>
            <div className="w-full flex justify-start items-center text-[15px]">
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center">
                      <div className="flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center">
                          <div
                            className={
                              "w-[110px] h-[100px] rounded-2xl flex justify-center items-center  overflow-hidden" +
                              (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                            }
                          >
                            <FaHtml5
                              className={
                                "text-[68px] fixed" +
                                (props?.dark
                                  ? " text-[#ffffff10]"
                                  : " text-[#00000010]")
                              }
                            />{" "}
                            <span className="w-full h-full flex justify-center items-center ">
                              HTML
                            </span>
                          </div>
                          <div
                            className={
                              "w-[110px] h-[100px] ml-[10px] rounded-2xl flex justify-center items-center overflow-hidden" +
                              (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                            }
                          >
                            <FaCss3Alt
                              className={
                                "text-[68px] fixed" +
                                (props?.dark
                                  ? " text-[#ffffff10]"
                                  : " text-[#00000010]")
                              }
                            />{" "}
                            <span className="w-full h-full flex justify-center items-center ">
                              CSS
                            </span>
                          </div>
                        </div>
                        <div
                          className={
                            "w-[230px] h-[100px] rounded-2xl mt-[10px] flex justify-center items-center overflow-hidden" +
                            (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                          }
                        >
                          <SiFirebase
                            className={
                              "text-[68px] fixed" +
                              (props?.dark
                                ? " text-[#ffffff10]"
                                : " text-[#00000010]")
                            }
                          />{" "}
                          <span className="w-full h-full flex justify-center items-center ">
                            Firebase
                          </span>
                        </div>
                      </div>
                      <div
                        className={
                          "h-[210px] w-[110px] ml-[10px] rounded-2xl flex justify-center items-center overflow-hidden " +
                          (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                        }
                      >
                        <SiTailwindcss
                          className={
                            "text-[68px] fixed" +
                            (props?.dark
                              ? " text-[#ffffff10]"
                              : " text-[#00000010]")
                          }
                        />{" "}
                        <span className="w-full h-full flex justify-center items-center ">
                          Tailwind
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-center items-center mt-[10px]">
                      <div
                        className={
                          "w-[110px] h-[100px] rounded-2xl flex justify-center items-center overflow-hidden" +
                          (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                        }
                      >
                        <FaReact
                          className={
                            "text-[68px] fixed" +
                            (props?.dark
                              ? " text-[#ffffff10]"
                              : " text-[#00000010]")
                          }
                        />{" "}
                        <span className="w-full h-full flex justify-center items-center ">
                          ReactJS
                        </span>
                      </div>
                      <div
                        className={
                          "w-[230px] h-[100px] rounded-2xl ml-[10px] flex justify-center items-center overflow-hidden" +
                          (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                        }
                      >
                        <IoLogoJavascript
                          className={
                            "text-[68px] fixed" +
                            (props?.dark
                              ? " text-[#ffffff10]"
                              : " text-[#00000010]")
                          }
                        />{" "}
                        <span className="w-full h-full flex justify-center items-center ">
                          JavaScript
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center ml-[10px]">
                    <div
                      className={
                        "w-[110px] h-[100px] rounded-2xl flex justify-center items-center overflow-hidden" +
                        (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                      }
                    >
                      <FaJava
                        className={
                          "text-[68px] fixed" +
                          (props?.dark
                            ? " text-[#ffffff10]"
                            : " text-[#00000010]")
                        }
                      />{" "}
                      <span className="w-full h-full flex justify-center items-center ">
                        Java
                      </span>
                    </div>
                    <div
                      className={
                        "h-[210px] w-[110px] mt-[10px] rounded-2xl flex justify-center items-center overflow-hidden " +
                        (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
                      }
                    >
                      <SiMysql
                        className={
                          "text-[68px] fixed" +
                          (props?.dark
                            ? " text-[#ffffff10]"
                            : " text-[#00000010]")
                        }
                      />{" "}
                      <span className="w-full h-full flex justify-center items-center ">
                        MySQL
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-[270px] aspect-square text-[14px] flex justify-center items-center absolute">
              <span className="px-[10px] rounded-xl py-[7px] flex justify-center items-center bg-[#f6f6f6]">
                {hoveredText}
              </span>
            </div>
            <div
              className={
                "min-w-[120px] min-h-[120px] text-[28px] rounded-full border-[1px] border-dashed  flex justify-center items-center flex-col absolute ml-[0px] md:ml-[75px] lg:ml-[75px] z-30  r2" +
                (props?.dark ? " border-[#5c5f9e]" : " border-[#c1c1c1]") +
                (textReveal ? " opacity-100" : " opacity-0")
              }
              style={{ transition: " opacity .3s", transitionDelay: ".2s" }}
            >
              {/* <div className="w-[calc(100%+40px)] h-[calc(100%/4)] flex justify-between items-start">
                <div
                  className={
                    "w-[40px] aspect-square flex justify-center items-center rounded-full border-[1px] border-dashed i2" +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{ transition: " opacity .5s", transitionDelay: ".8s" }}
                  onMouseEnter={() => handleMouseEnter("Firebase")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <SiFirebase />
                  </div>
                </div>
                <div
                  className={
                    "w-[40px] aspect-square flex justify-center items-center rounded-full border-[1px] border-dashed i2" +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{ transition: " opacity .5s", transitionDelay: "1s" }}
                  onMouseEnter={() => handleMouseEnter("MySQL")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <SiMysql />
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div
              className={
                "min-w-[270px] min-h-[270px] text-[28px] rounded-full border-[1px] border-dashed flex justify-center items-center flex-col r1" +
                (props?.dark ? " border-[#5c5f9e]" : " border-[#c1c1c1]") +
                (textReveal ? " opacity-100" : " opacity-0")
              }
              style={{ transition: " opacity .4s", transitionDelay: ".5s" }}
            >
              <div className="w-full h-[calc(100%/4)]  flex justify-center items-start">
                <div
                  className={
                    "border-[1px] border-dashed  w-[40px] aspect-square flex justify-center items-center rounded-full mt-[-20px] i1 " +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{
                    transition: " opacity .5s",
                    transitionDelay: "1.2s",
                  }}
                  onMouseEnter={() => handleMouseEnter("ReactJS")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <FaReact />
                  </div>
                </div>
              </div>
              <div className="w-[calc(100%+10px)] h-[calc(100%/4)]  flex justify-between items-center pb-[20px]">
                {" "}
                <div
                  className={
                    "border-[1px] border-dashed  w-[40px] aspect-square flex justify-center items-center rounded-full mt-[-50px] i1 " +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{
                    transition: " opacity .5s",
                    transitionDelay: "1.4s",
                  }}
                  onMouseEnter={() => handleMouseEnter("JavaScript")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <IoLogoJavascript />
                  </div>
                </div>
                <div
                  className={
                    "border-[1px] border-dashed  w-[40px] aspect-square flex justify-center items-center rounded-full mt-[-50px] i1 " +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{
                    transition: " opacity .5s",
                    transitionDelay: "2.2s",
                  }}
                  onMouseEnter={() => handleMouseEnter("HTML")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <FaHtml5 />
                  </div>
                </div>
              </div>
              <div className="w-[calc(100%+10px)] h-[calc(100%/4)]  flex justify-between items-center pt-[20px]">
                <div
                  className={
                    "border-[1px] border-dashed  w-[40px] aspect-square flex justify-center items-center rounded-full mb-[-50px] i1 " +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{
                    transition: " opacity .5s",
                    transitionDelay: "1.6s",
                  }}
                  onMouseEnter={() => handleMouseEnter("CSS")}
                  onMouseLeave={handleMouseLeave}
                >
                  {" "}
                  <div>
                    <FaCss3Alt />
                  </div>
                </div>
                <div
                  className={
                    "border-[1px] border-dashed  w-[40px] aspect-square flex justify-center items-center rounded-full mb-[-50px] i1 " +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{ transition: " opacity .5s", transitionDelay: "2s" }}
                  onMouseEnter={() => handleMouseEnter("Tailwind")}
                  onMouseLeave={handleMouseLeave}
                >
                  {" "}
                  <div>
                    <SiTailwindcss />
                  </div>
                </div>
              </div>
              <div className="w-full h-[calc(100%/4)]  flex justify-center items-center">
                <div
                  className={
                    "border-[1px] border-dashed  min-w-[40px] aspect-square flex justify-center items-center rounded-full mb-[-60px] i1 " +
                    (props?.dark
                      ? " border-[#5c5f9e] bg-[#191A2C]"
                      : " border-[#c1c1c1] bg-[white]") +
                    (textReveal ? " opacity-100" : " opacity-0")
                  }
                  style={{
                    transition: " opacity .5s",
                    transitionDelay: "1.8s",
                  }}
                  onMouseEnter={() => handleMouseEnter("Firebase")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    <IoLogoFirebase />
                  </div>
                </div>
              </div>
            </div> */}
          </>
        )}
      </div>
      <div
        className={
          "w-[45px] py-[5px] flex flex-col rounded-2xl -rotate-90 md:rotate-0 lg:rotate-0 justify-center items-center p-[5px] fixed" +
          (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]")
        }
      >
        <div
          className={
            "w-full aspect-square flex justify-center items-center rounded-[14px] cursor-pointer" +
            (mode
              ? " bg-transparent"
              : props?.dark
              ? " bg-[#191A2C]"
              : " bg-[white]")
          }
          onClick={() => {
            setMode(!mode);
          }}
        >
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
            class="lucide lucide-orbit"
          >
            <circle cx="12" cy="12" r="3" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="5" cy="19" r="2" />
            <path d="M10.4 21.9a10 10 0 0 0 9.941-15.416" />
            <path d="M13.5 2.1a10 10 0 0 0-9.841 15.416" />
          </svg>
        </div>
        <div
          className={
            "w-full aspect-square flex justify-center mt-[5px] items-center rounded-[14px] cursor-pointer" +
            (!mode
              ? " bg-transparent"
              : props?.dark
              ? " bg-[#191A2C]"
              : " bg-[white]")
          }
          onClick={() => {
            setMode(!mode);
          }}
        >
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
            class="lucide lucide-layout-panel-left"
          >
            <rect width="7" height="18" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
          </svg>
        </div>
      </div>
    </div>
  );
};
export default TechStack;

export const AboutProfile = (props) => {
  const [textReveal, setTextReveal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTextReveal(true);
    }, 300);
    console.log("AboutProfile Component Loaded");
  }, []);
  return (
    <>
      <div
        className={
          "text-[30px] md:text-[50px] lg:text-[50px] w-full flex flex-col md:flex-row lg:flex-row justify-center items-start md:justify-start md:items-center lg:justify-start lg:items-center font-bold bg-gradient-to-b  bg-clip-text text-transparent drop-shadow-sm " +
          (props?.dark
            ? " from-white to-[#909090]"
            : " from-black to-[#959595]") +
          (textReveal ? " opacity-100" : " opacity-0")
        }
        style={{ opacity: ".4s" }}
      >
        Hi! I'm{" "}
        <span
          className={
            "ml-[0px] md:ml-[10px] lg:ml-[10px] bg-gradient-to-b  bg-clip-text text-transparent" +
            (props?.dark
              ? " from-white to-[#909090]"
              : " from-black to-[#959595]")
          }
        >
          <Typewriter
            words={["HIMADRI PURKAIT", "WEB DEVELOPER"]}
            cursor="true"
            typeSpeed={100}
            deleteSpeed={100}
            // delaySpeed={100}
            loop="0"

            // cursorColor="black"
            // cursorBlinking={false}
          />
        </span>
      </div>
      <div
        className={
          "text-[14px] w-full mt-[10px] " +
          (textReveal ? " opacity-100" : " opacity-0")
        }
        style={{ transition: "opacity .4s", transitionDelay: ".3s" }}
      >
        I'm an ambitious B.Tech CSE undergraduate, passionate about technology
        and <span className="font-semibold ">frontend web developer</span>.
        Eager to contribute my skills, learn, and grow in a dynamic
        organization. Ready to make an impact.
      </div>
      {/* <div
        className={
          "mt-[50px] w-full flex justify-start items-center" +
          (props?.dark ? " text-[white]" : " text-[black]")
        }
      >
        <b></b>
      </div> */}
      <div className="mt-[50px] w-full flex justify-start items-center ">
        <div
          className={
            "h-[35px] px-[15px] hover:px-[22px] flex justify-center items-center rounded-xl  cursor-pointer" +
            (props?.dark
              ? " bg-[#303147] text-white"
              : " bg-[#f6f6f6] text-[black]") +
            (textReveal ? " opacity-100" : " opacity-0")
          }
          style={{
            transition: "padding .3s, opacity .3s",
            transitionDelay: ".6s",
          }}
        >
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
            class="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </div>
        <div
          className={
            "h-[35px] px-[15px] hover:px-[22px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer" +
            (props?.dark
              ? " bg-[#303147] text-white"
              : " bg-[#f6f6f6] text-[black]") +
            (textReveal ? " opacity-100" : " opacity-0")
          }
          style={{
            transition: "padding .3s, opacity .3s",
            transitionDelay: ".8s",
          }}
        >
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
            class="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </div>
        <div
          className={
            "h-[35px] px-[15px] hover:px-[22px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer" +
            (props?.dark
              ? " bg-[#303147] text-white"
              : " bg-[#f6f6f6] text-[black]") +
            (textReveal ? " opacity-100" : " opacity-0")
          }
          style={{
            transition: "padding .3s, opacity .3s",
            transitionDelay: "1s",
          }}
        >
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
            class="lucide lucide-twitter"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </div>
        <div
          className={
            "h-[35px] px-[15px] hover:px-[22px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer" +
            (props?.dark
              ? " bg-[#303147] text-white"
              : " bg-[#f6f6f6] text-[black]") +
            (textReveal ? " opacity-100" : " opacity-0")
          }
          style={{
            transition: "padding .3s, opacity .3s",
            transitionDelay: "1.2s",
          }}
        >
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
            class="lucide lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
        <div
          className={
            "h-[35px] px-[15px] hover:px-[22px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer" +
            (props?.dark
              ? " bg-[#303147] text-white"
              : " bg-[#f6f6f6] text-[black]") +
            (textReveal ? " opacity-100" : " opacity-0")
          }
          style={{
            transition: "padding .3s, opacity .3s",
            transitionDelay: "1.4s",
          }}
        >
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
            class="lucide lucide-facebook"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export const Certificates = (props) => {
  const [textReveal, setTextReveal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTextReveal(true);
    }, 300);
    console.log("Certificates Component Loaded");
  }, []);
  return (
    <>
      <div className="w-full flex justify-between items-center font-[geist]">
        <div className="w-auto flex flex-col justify-center items-start font-[geist]">
          <div
            className={
              "flex justify-start items-center px-[15px] h-[35px] rounded-xl mb-[10px]" +
              (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]") +
              (textReveal ? " opacity-100" : " opacity-0")
            }
            style={{ transition: "opacity .3s" }}
          >
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
              class="lucide lucide-graduation-cap"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
            <span className="ml-[10px]">Coursera</span>
          </div>
          <div className="flex justify-start items-start h-auto ">
            <div
              className={
                "h-[163px] border-l-[1.5px]  mx-[20px] flex flex-col justify-start items-start" +
                (textReveal ? " opacity-100" : " opacity-0") +
                (props?.dark ? " border-[#303147]" : " border-[#efefef]")
              }
              style={{ transition: "opacity .3s", transitionDelay: ".2s" }}
            >
              <div className=" py-[5px] flex justify-center items-start rounded-xl bg-transparent">
                <div className="flex justify-start items-start">
                  <div
                    className={
                      "w-[7px] aspect-square rounded-full mt-[5px] ml-[-4px]" +
                      (textReveal ? " opacity-100" : " opacity-0") +
                      (props?.dark ? " bg-[#4e4f6e]" : " bg-[#919191]")
                    }
                    style={{
                      transition: "opacity .3s",
                      transitionDelay: ".2s",
                    }}
                  ></div>
                  <div className="flex justify-start items-start  overflow-visible w-0 whitespace-nowrap opacity-0">
                    <DownloadIcon className="cursor-pointer" />
                    <div className="flex flex-col justify-normal items-start">
                      <div className="ml-[10px] m-[-2px]">
                        CSS, Bootstrap & JavaScript
                      </div>
                      <div className="ml-[10px] text-[11px] text-[#959595]">
                        18th Sept, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-[5px] flex justify-center items-start rounded-xl bg-transparent">
                <div className="flex justify-start items-start">
                  <div
                    className={
                      "w-[7px] aspect-square rounded-full mt-[5px] ml-[-4px]" +
                      (textReveal ? " opacity-100" : " opacity-0") +
                      (props?.dark ? " bg-[#4e4f6e]" : " bg-[#919191]")
                    }
                    style={{
                      transition: "opacity .3s",
                      transitionDelay: ".4s",
                    }}
                  ></div>
                  <div className="flex justify-start items-start  overflow-visible w-0 whitespace-nowrap opacity-0">
                    <DownloadIcon className="cursor-pointer" />
                    <div className="flex flex-col justify-normal items-start">
                      <div className="ml-[10px] m-[-2px]">
                        CSS, Bootstrap & JavaScript
                      </div>
                      <div className="ml-[10px] text-[11px] text-[#959595]">
                        18th Sept, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-[5px] flex justify-center items-start rounded-xl bg-transparent">
                <div className="flex justify-start items-start">
                  <div
                    className={
                      "w-[7px] aspect-square rounded-full mt-[5px] ml-[-4px]" +
                      (textReveal ? " opacity-100" : " opacity-0") +
                      (props?.dark ? " bg-[#4e4f6e]" : " bg-[#919191]")
                    }
                    style={{
                      transition: "opacity .3s",
                      transitionDelay: ".6s",
                    }}
                  ></div>
                  <div className="flex justify-start items-start  overflow-visible w-0 whitespace-nowrap opacity-0">
                    <DownloadIcon className="cursor-pointer" />
                    <div className="flex flex-col justify-normal items-start">
                      <div className="ml-[10px] m-[-2px]">
                        CSS, Bootstrap & JavaScript
                      </div>
                      <div className="ml-[10px] text-[11px] text-[#959595]">
                        18th Sept, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" py-[5px] flex justify-center items-start rounded-xl bg-transparent">
                <div className="flex justify-start items-start">
                  <div
                    className={
                      "w-[7px] aspect-square rounded-full mt-[5px] ml-[-4px]" +
                      (textReveal ? " opacity-100" : " opacity-0") +
                      (props?.dark ? " bg-[#4e4f6e]" : " bg-[#919191]")
                    }
                    style={{
                      transition: "opacity .3s",
                      transitionDelay: ".8s",
                    }}
                  ></div>
                  <div className="flex justify-start items-start  overflow-visible w-0 whitespace-nowrap opacity-0">
                    <DownloadIcon className="cursor-pointer" />
                    <div className="flex flex-col justify-normal items-start">
                      <div className="ml-[10px] m-[-2px]">
                        CSS, Bootstrap & JavaScript
                      </div>
                      <div className="ml-[10px] text-[11px] text-[#959595]">
                        18th Sept, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start ml-[-3px]">
              <div
                className={
                  "px-[0px] py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: ".2s" }}
              >
                {/* <DownloadIcon className="cursor-pointer" /> */}
                <div className="flex flex-col justify-normal items-start">
                  <div className="ml-[2px] m-[-2px]">AWS Fundamentals</div>
                  <div className="ml-[2px] text-[11px] text-[#959595]">
                    13th May, 2024
                  </div>
                </div>
              </div>
              <div
                className={
                  "px-[0px] py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: ".4s" }}
              >
                {/* <DownloadIcon className="cursor-pointer" /> */}

                <div className="flex flex-col justify-normal items-start mr-[15x]">
                  <div className="ml-[2px] m-[-2px]">
                    IBM Cybersecurity Analyst
                  </div>
                  <div className="ml-[2px] text-[11px] text-[#959595]">
                    13th May, 2024
                  </div>
                </div>
                {/* <WebsiteLinkIcon className="cursor-pointer mt-[-2px]" /> */}
              </div>{" "}
              <div
                className={
                  "px-[0px] py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: ".6s" }}
              >
                {/* <DownloadIcon className="cursor-pointer" /> */}

                <div className="flex flex-col justify-normal items-start mr-[15x]">
                  <div className="ml-[2px] m-[-2px]">
                    Introduction to Microsoft Azure Cloud Service
                  </div>
                  <div className="ml-[2px] text-[11px] text-[#959595]">
                    25th Feb, 2024
                  </div>
                </div>
                {/* <WebsiteLinkIcon className="cursor-pointer mt-[-2px]" /> */}
              </div>{" "}
              <div
                className={
                  "px-[0px] py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: ".8s" }}
              >
                {/* <DownloadIcon className="cursor-pointer" /> */}

                <div className="flex flex-col justify-normal items-start mr-[15x]">
                  <div className="ml-[2px] m-[-2px]">React Basics</div>
                  <div className="ml-[2px] text-[11px] text-[#959595]">
                    23rd Sept, 2023
                  </div>
                </div>
                {/* <WebsiteLinkIcon className="cursor-pointer mt-[-2px]" /> */}
              </div>
            </div>
          </div>

          <div
            className={
              "flex justify-start items-center px-[15px] h-[35px] rounded-xl mb-[10px] mt-[30px]" +
              (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]") +
              (textReveal ? " opacity-100" : " opacity-0")
            }
            style={{ transition: "opacity .3s", transitionDelay: "1s" }}
          >
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
              class="lucide lucide-graduation-cap"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
            <span className="ml-[10px]">Udemy</span>
          </div>
          <div className="flex justify-start items-start h-auto">
            <div
              className={
                "h-[80px] border-l-[1.5px] mx-[20px] flex flex-col justify-start items-start" +
                (textReveal ? " opacity-100" : " opacity-0") +
                (props?.dark ? " border-[#303147]" : " border-[#efefef]")
              }
              style={{ transition: "opacity .3s", transitionDelay: "1.1s" }}
            >
              <div
                className={
                  " py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: "1.2s" }}
              >
                <div className="flex justify-start items-start">
                  <div
                    className={
                      "w-[7px] aspect-square rounded-full mt-[5px] ml-[-4px]" +
                      (props?.dark ? " bg-[#4e4f6e]" : " bg-[#919191]")
                    }
                  ></div>
                  <div className="flex justify-start items-start  overflow-visible w-0 whitespace-nowrap opacity-0">
                    <DownloadIcon className="cursor-pointer" />
                    <div className="flex flex-col justify-normal items-start">
                      <div className="ml-[10px] m-[-2px]">
                        CSS, Bootstrap & JavaScript
                      </div>
                      <div className="ml-[10px] text-[11px] text-[#959595]">
                        18th Sept, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={
                  " py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: "1.4s" }}
              >
                <div className="flex justify-start items-start">
                  <div
                    className={
                      "w-[7px] aspect-square rounded-full mt-[5px] ml-[-4px]" +
                      (props?.dark ? " bg-[#4e4f6e]" : " bg-[#919191]")
                    }
                  ></div>
                  <div className="flex justify-start items-start  overflow-visible w-0 whitespace-nowrap opacity-0">
                    <DownloadIcon className="cursor-pointer" />
                    <div className="flex flex-col justify-normal items-start">
                      <div className="ml-[10px] m-[-2px]">
                        CSS, Bootstrap & JavaScript
                      </div>
                      <div className="ml-[10px] text-[11px] text-[#959595]">
                        18th Sept, 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start ml-[-3px]">
              <div
                className={
                  "px-[0px] py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: "1.2s" }}
              >
                {/* <DownloadIcon className="cursor-pointer" /> */}
                <div className="flex flex-col justify-normal items-start">
                  <div className="ml-[2px] m-[-2px]">
                    CSS, Bootstrap & JavaScript
                  </div>
                  <div className="ml-[2px] text-[11px] text-[#959595]">
                    18th Sept, 2023
                  </div>
                </div>
              </div>
              <div
                className={
                  "px-[0px] py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: "1.4s" }}
              >
                {/* <DownloadIcon className="cursor-pointer" /> */}

                <div className="flex flex-col justify-normal items-start mr-[15x]">
                  <div className="ml-[2px] m-[-2px]">HTML & CSS</div>
                  <div className="ml-[2px] text-[11px] text-[#959595]">
                    12th Sept, 2023
                  </div>
                </div>
                {/* <WebsiteLinkIcon className="cursor-pointer mt-[-2px]" /> */}
              </div>
            </div>
          </div>

          <div
            className={
              "flex justify-start items-center px-[15px] h-[35px] rounded-xl mb-[10px] mt-[30px]" +
              (props?.dark ? " bg-[#303147]" : " bg-[#f6f6f6]") +
              (textReveal ? " opacity-100" : " opacity-0")
            }
            style={{ transition: "opacity .3s", transitionDelay: "1.6s" }}
          >
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
              class="lucide lucide-graduation-cap"
            >
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
            <span className="ml-[10px]">Hackathon</span>
          </div>
          <div className="flex justify-start items-start h-auto">
            <div
              className={
                "h-[35px] border-l-[1.5px] mx-[20px] flex flex-col justify-start items-start" +
                (textReveal ? " opacity-100" : " opacity-0") +
                (props?.dark ? " border-[#303147]" : " border-[#efefef]")
              }
              style={{ transition: "opacity .3s", transitionDelay: "1.7s" }}
            >
              <div
                className={
                  " py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: "1.8s" }}
              >
                <div className="flex justify-start items-start">
                  <div
                    className={
                      "w-[7px] aspect-square rounded-full mt-[5px] ml-[-4px]" +
                      (props?.dark ? " bg-[#4e4f6e]" : " bg-[#919191]")
                    }
                  ></div>
                  <div className="flex justify-start items-start  overflow-visible w-0 whitespace-nowrap opacity-0">
                    <DownloadIcon className="cursor-pointer" />
                    <div className="flex flex-col justify-normal items-start">
                      <div className="ml-[10px] m-[-2px]">
                        Certificate of Participation - 2K24
                      </div>
                      <div className="ml-[10px] text-[11px] text-[#959595]">
                        3-4th Feb, 2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start ml-[-3px]">
              <div
                className={
                  "px-[0px] py-[5px] flex justify-center items-start rounded-xl bg-transparent" +
                  (textReveal ? " opacity-100" : " opacity-0")
                }
                style={{ transition: "opacity .3s", transitionDelay: "1.8s" }}
              >
                {/* <DownloadIcon className="cursor-pointer" /> */}
                <div className="flex flex-col justify-normal items-start">
                  <div className="ml-[2px] m-[-2px]">
                    Certificate of Participation - 2K24
                  </div>
                  <div className="ml-[2px] text-[11px] text-[#959595]">
                    3-4th Feb, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="w-[180px] aspect-square rounded-2xl bg-[#f6f6f6] p-[20px] ">
          <QR
            color="#000"
            backgroundColor="#f6f6f6"
            rounding={100}
            errorCorrectionLevel="H"
          >
            https://www.fugo.ai/
          </QR>
        </div> */}
      </div>
    </>
  );
};
