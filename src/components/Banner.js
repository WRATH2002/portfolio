import React from "react";
import photo from "../assets/img/phh.jpg";
import Project from "./Project";
import { IoReorderThree } from "react-icons/io5";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoReorderThreeSharp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import chatgpt from "../assets/img/chtagpt.jpg";
import swiggy from "../assets/img/swiggy1.webp";
import chat from "../assets/img/ca1.png";
import g1 from "../assets/img/g1.jpg";
import g2 from "../assets/img/g2.jpg";
import g3 from "../assets/img/g3.jpg";
import youtube from "../assets/img/pn3.png";
import ph from "../assets/img/pl.png";
import Qualification from "./Qualification";
import { FiUser } from "react-icons/fi";
import Footer from "./Footer";
import { useRef, useState, ref } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaCaretLeft } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { FaCaretRight } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
const Banner = (props) => {
  const contact = useRef(null);
  const [pos, setPos] = useState(1);

  const scrollToSection = (elementRef) => {
    // window.scrollTo({
    //   top: elementRef.current.offsetTop,
    //   behavior: "smooth",
    // });
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="w-full md:w-[calc(100%-320px)] lg:w-[calc(100%-320px)] h-[100svh] ">
      <div className="w-full md:w-[calc(100%-320px)] lg:w-[calc(100%-320px)] fixed bg-[#14131a] h-[60px]  flex justify-between md:justify-end lg:justify-end items-center z-30 ">
        <IoReorderThreeOutline
          className="flex md:hidden lg:hidden text-[white] text-[40px] ml-[10px]"
          onClick={() => {
            props.data2(!props.data1);
          }}
        />
        <div
          className="text-[white] mr-[20px] text-[14px] font-[mukta] cursor-pointer flex justify-center items-center h-[35px] rounded-lg px-[10px] bg-[#207448] hover:bg-[#32995f] select-none"
          onClick={() => {
            scrollToSection(contact);
            console.log("clicked");
          }}
        >
          Contact Me <FiUser className="ml-[5px] " />
        </div>
      </div>
      <div className="w-full h-[60px]  flex justify-start items-center "></div>
      <div className="w-full h-[160px]  bannerBg rounded-lg">
        <div className="w-[100%] h-full backdrop-blur-[8px] flex justify-center items-center px-[35px] rounded-lg">
          <div className="group w-[100px] h-[100px] rounded-full bg-gradient-to-b from-[#ffb657] to-[#ff7700] flex justify-center items-center p-[3px]">
            <img
              className="w-full h-full object-cover rounded-full"
              src={photo}
            ></img>
          </div>
          <div className="w-[calc(100%-130px)] h-full flex justify-between items-center">
            <div className="flex flex-col text-[white] pl-[30px] font-[lato] ">
              <span className="font-bold font-[mukt] text-[24px] h-[30px] flex justify-start items-center">
                <Typewriter
                  words={["Himadri Purkait", "Web Developer"]}
                  cursor="true"
                  typeSpeed={100}
                  deleteSpeed={100}
                  loop="0"
                  // cursorBlinking={false}
                />
              </span>
              <span className="text-[15px] font-[mukta] text-[#bfbfbf]">
                @himadri.1
              </span>
            </div>
            <div className="w-auto px-[20px] h-[40px] hidden md:flex lg:flex justify-center items-center rounded-lg bg-[#1c1b23] text-[14px] text-[#bababa] font-[mukta]">
              <a
                className="w-full h-full flex justify-center items-center"
                href="https://www.instagram.com/himadri.1/"
              >
                <FaInstagram className="mr-[10px] text-[22px]  text-[#bababa]" />
                Follow me on Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-[white] my-[23px]  font-[mukt] text-[20px] font-medium ml-[20px]">
          Individual Projects
        </div>
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between items-center px-[20px]">
          <div className="group w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a
              className="group w-full h-full  "
              href="https://walleio.netlify.app/"
            >
              <div className="w-full bg-[#1c1b23] rounded-t-lg h-[60%] group-hover:h-[0%] transition-height duration-300 ease-in-out">
                <img
                  className=" w-full h-full object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                  src={chatgpt}
                ></img>
              </div>
              <div
                className="w-full group-hover:h-[100%] transition-height duration-300 ease-in-out h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start group-hover:rounded-lg"
                // style={{ transition: ".3s" }}
              >
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  ChatGpt Clone
                </span>
                <span className="group-hover:hidden  text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, Firebase
                </span>
                <span className="group-hover:block  hidden text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  This is a Clone of ChatGpt called{" "}
                  <span className="text-black font-bold">WALLE</span>, that
                  answers all of your questions with ease. It is implemented
                  using <span className="text-black font-bold">OpenAi API</span>
                  .
                </span>
              </div>
            </a>
          </div>
          <div className="group w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a
              className="group w-full h-full  "
              href="https://infinityio.netlify.app/"
            >
              <div className="w-full bg-[#1c1b23] rounded-t-lg h-[60%] group-hover:h-[0%] transition-height duration-300 ease-in-out ">
                <img
                  className=" w-full h-full object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                  src={chat}
                ></img>
              </div>
              <div
                className="w-full group-hover:h-[100%] transition-height duration-300 ease-in-out h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start group-hover:rounded-lg "
                // style={{ transition: ".3s" }}
              >
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  Infinity - Chatting App
                </span>
                <span className="group-hover:hidden  text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, Firebase
                </span>
                <span className="group-hover:block  hidden text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  This is a Clone of ChatGpt called{" "}
                  <span className="text-black font-bold">WALLE</span>, that
                  answers all of your questions with ease. It is implemented
                  using <span className="text-black font-bold">OpenAi API</span>
                  .
                </span>
              </div>
            </a>
          </div>
          <div className="group w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a
              className="group w-full h-full  "
              href="https://playynext.netlify.app/"
            >
              <div className="w-full bg-[#1c1b23] rounded-t-lg h-[60%] group-hover:h-[0%] transition-height duration-300 ease-in-out">
                <img
                  className=" w-full h-full object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                  src={youtube}
                ></img>
              </div>
              <div
                className="w-full group-hover:h-[100%] transition-height duration-300 ease-in-out h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start group-hover:rounded-lg "
                // style={{ transition: ".3s" }}
              >
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  YouTube Clone
                </span>
                <span className="group-hover:hidden  text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, YouTube API
                </span>
                <span className="group-hover:block  hidden text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  This is a Clone of Yotube called{" "}
                  <span className="text-black font-bold">PLAYNEXT</span>. Here
                  one can watch videos of their favourite creators. It has
                  features like{" "}
                  <span className="text-black font-bold">Searching Videos</span>
                  , <span className="text-black font-bold">Comments</span> etc.
                </span>
              </div>
            </a>
          </div>
          <div className="group w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a
              className="group w-full h-full  "
              href="https://foodfave.netlify.app/"
            >
              <div className="w-full bg-[#1c1b23] rounded-t-lg h-[60%] group-hover:h-[0%] transition-height duration-300 ease-in-out">
                <img
                  className=" w-full h-full object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                  src={swiggy}
                ></img>
              </div>
              <div
                className="w-full group-hover:h-[100%] transition-height duration-300 ease-in-out h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start  group-hover:rounded-lg"
                // style={{ transition: ".3s" }}
              >
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  Swiggy Clone
                </span>
                <span className="group-hover:hidden  text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, CSS, Swiggy API {"\n"}*Enable CORS
                  Extension in browser
                </span>
                <span className="group-hover:block  hidden text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  This is a Clone of Swiggy called{" "}
                  <span className="text-black font-bold">FOODFAVE</span>, where
                  one can search for{" "}
                  <span className="text-black font-bold">Restuarants</span> and
                  can see all the{" "}
                  <span className="text-black font-bold">Menu's</span>. It also
                  have working{" "}
                  <span className="text-black font-bold">Cart System</span>.
                </span>
              </div>
            </a>
          </div>

          {/* <div className="group w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a
              className="w-full h-full  "
              href="https://infinityio.netlify.app/"
            >
              <div className="w-full bg-[#1c1b23] rounded-t-lg h-[150px] flex flex-col justify-end items-center">
                <img
                  className="group w-full h-full object-cover rounded-t-lg"
                  src={chat}
                ></img>
               
              </div>
              <div className="group-hover:hidden w-full h-[100px] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start ">
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  Infinity - Chatting App
                </span>
                <span className="text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, Firebase
                </span>
              </div>
              <div className="group-hover:flex w-full h-[40%] rounded-b-lg bg-white px-[20px]  font-[lato] hidden flex-col justify-center items-center ">
                <span className="text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  This is an n to n chatting website called{" "}
                  <span className="text-black font-bold">INFINITY</span>. Here
                  one can talk to anyone who have account in itwith status
                  visible. It also has{" "}
                  <span className="text-black font-bold">Status</span> and{" "}
                  <span className="text-black font-bold">Group</span> creation
                  features.
                </span>
              </div>
            </a>
          </div> */}
          {/* <div className="group w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a
              className="w-full h-full  "
              href="https://playynext.netlify.app/"
            >
              <div className="w-full bg-[#1c1b23] rounded-t-lg h-[150px] flex flex-col justify-end items-center">
                <img
                  className="group w-full h-full object-cover rounded-t-lg"
                  src={youtube}
                ></img>
            
              </div>
              <div className="group-hover:hidden w-full h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start ">
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  YouTube Clone
                </span>
                <span className="text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, YouTube API
                </span>
              </div>
              <div className="group-hover:flex w-full h-[40%] rounded-b-lg bg-white px-[20px]  font-[lato] hidden flex-col justify-center items-center ">
                <span className="text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  This is a Clone of Yotube called{" "}
                  <span className="text-black font-bold">PLAYNEXT</span>. Here
                  one can watch videos of their favourite creators. It has
                  features like{" "}
                  <span className="text-black font-bold">Searching Videos</span>
                  , <span className="text-black font-bold">Comments</span> etc.
                </span>
              </div>
            </a>
          </div> */}
          {/* <div className="group w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <a className="w-full h-full  " href="https://foodfave.netlify.app/">
              <div className="w-full bg-[#1c1b23] rounded-t-lg h-[60%]">
                <img
                  className="group w-full h-full object-cover rounded-t-lg"
                  src={swiggy}
                ></img>
              </div>
              <div className="group-hover:hidden w-full h-[40%] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start ">
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  Swiggy Clone
                </span>
                <pre className="text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, CSS, Swiggy API {"\n"}*Enable CORS
                  Extension in browser
                </pre>
              </div>
              <div className="group-hover:flex w-full h-[40%] rounded-b-lg bg-white px-[20px]  font-[lato] hidden flex-col justify-center items-center ">
                <span className="text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  This is a Clone of Swiggy called{" "}
                  <span className="text-black font-bold">FOODFAVE</span>, where
                  one can search for{" "}
                  <span className="text-black font-bold">Restuarants</span> and
                  can see all the{" "}
                  <span className="text-black font-bold">Menu's</span>. It also
                  have working{" "}
                  <span className="text-black font-bold">Cart System</span>.
                </span>
              </div>
            </a>
          </div> */}
        </div>
        <div className="text-[white] my-[23px]  font-[mukt] text-[20px] font-medium ml-[20px]">
          Group Projects
        </div>
        <div className=" flex flex-col md:flex-row lg:flex-row justify-between items-center px-[20px]">
          <div className=" w-full md:w-[23.5%] lg:w-[23.5%] h-[250px]  rounded-lg my-[10px] md:my-0 lg:my-0">
            <div className="group-hover:hidden mb-[-150px] bg-slate-300 w-full h-[150px] object-cover rounded-t-lg z-30  flex justify-between items-center">
              {pos == 1 ? (
                <>
                  <div className="w-[30px] h-[40px] bg-transparent flex justify-center items-center rounded-r-md z-30"></div>
                </>
              ) : (
                <div
                  className="w-[30px] h-[40px] bg-[#000000a8] flex justify-center items-center rounded-r-md z-30"
                  onClick={() => {
                    if (pos > 1) {
                      setPos(pos - 1);
                    }
                  }}
                >
                  <FaCaretLeft className="text-white text-[25px]" />
                </div>
              )}
              {pos == 3 ? (
                <>
                  {" "}
                  <div className="w-[30px] h-[40px] bg-transparent flex justify-center items-center rounded-r-md z-30"></div>
                </>
              ) : (
                <div className="w-[30px] h-[40px] bg-[#000000a8] flex justify-center items-center rounded-l-md z-30">
                  <FaCaretRight
                    className="text-white text-[25px]"
                    onClick={() => {
                      if (pos < 3) {
                        setPos(pos + 1);
                      }
                    }}
                  />
                </div>
              )}
            </div>
            <a
              className="group w-full h-full  "
              href="https://checkyourhealth.netlify.app/"
            >
              <div className=" w-full bg-[#1c1b23] rounded-t-lg h-[150px] group-hover:h-[0px] transition-height duration-300 ease-in-out">
                {pos == 1 ? (
                  <img
                    className=" w-full h-full object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                    src={g1}
                  ></img>
                ) : pos == 2 ? (
                  <img
                    className=" w-full h-full object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                    src={g2}
                  ></img>
                ) : (
                  <img
                    className=" w-full h-full object-cover rounded-t-lg group-hover:opacity-0 transition-opacity duration-300 ease-in-out"
                    src={g3}
                  ></img>
                )}
              </div>

              <div
                className="z-50 w-full group-hover:h-[250px] transition-height duration-300 ease-in-out h-[100px] rounded-b-lg bg-white p-[20px]  font-[lato] flex flex-col justify-start items-start  group-hover:rounded-lg"
                // style={{ transition: ".3s" }}
              >
                <span className="text-[17px] tracking-[.6px] font-bold font-[mukt] ">
                  CheckYourHealth
                </span>
                <span className="group-hover:hidden  text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  React JS, JavaScript, Tailwind CSS, Rduino Uno, Python,
                  Firebase
                </span>
                <span className="group-hover:block  hidden text-[14.5px] tracking-[.4px] md:text[13.5px] lg:text-[13.5px] font-[mukta] font-medium text-[#6a6a6a] leading-[16px] mt-[4px]">
                  There is a device which tells{" "}
                  <span className="text-black font-bold">Current BPM</span>,{" "}
                  <span className="text-black font-bold">
                    Detects Sudden Fall
                  </span>{" "}
                  and notifies the user through website with all details. Best
                  view in Android.
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="text-[white] my-[23px]  font-[mukt] text-[20px] font-medium ml-[20px]">
          What I know
        </div>
        <Qualification />
        <div className="w-full" ref={contact}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Banner;
