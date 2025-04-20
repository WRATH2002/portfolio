import React, { useEffect, useState } from "react";
import { aboutData, techName } from "./Constant";
import {
  BriefcaseBusiness,
  Circle,
  CircleMinus,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MoveRight,
  School,
  Twitter,
  University,
  UserRoundSearch,
} from "lucide-react";
import user from "../assets/img/a4.jpg";
import Marquee from "react-fast-marquee";

// Default values shown

const AboutMy = (props) => {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setAnime(false);
    setTimeout(() => {
      setAnime(true);
    }, 10);
  }, []);
  return (
    <>
      <div class="gradient-blur ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)] h-[100svh] overflow-y-scroll overflow-x-visible flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[60px] lg:pt-[60px] text-[#313131] px-[20px]">
        {/* <div
        className={
          "text-[24px] ml-[0px] md:ml-[110px] lg:ml-[110px] flex justify-start items-center font-[DMSm]" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".2s" : "0s",
        }}
      >
        <UserRoundSearch
          width={22}
          height={22}
          strokeWidth={2.6}
          className="mr-[9px]"
        />{" "}
        About Me
      </div> */}
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
            "text-[35px] font-[DMSr] tracking-tight leading-[45px] ml-[0px]  mb-[140px] text-[black] " +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".3s" : "0s",
          }}
        >
          Few things you should know about me
        </div>
        <div
          className={
            "w-full text-[15px] mb-[200px] flex flex-col  justify-start  items-start" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".4s" : "0s",
          }}
        >
          <div className="w-full text-[12px] justify-start text-[#777777] font-[jetm] tracking-wider uppercase flex">
            My story
          </div>
          <pre className="w-full ml-[0px] whitespace-pre-wrap font-[DMSr] text-[#313131] leading-[25px] mt-[30px]">
            {/* {aboutData} */}
            {`Hello, I'm Himadri Purkait, a`} B.Tech undergraduate in Computer
            Science and Engineering{" "}
            {`at University of Engineering and Management, Kolkata. My passion lies in`}{" "}
            Web Development
            {`, where I’ve dedicated myself to create dynamic, user-centric websites and applications. Through numerous projects, I’ve honed my skills, always aiming to develop products that are not only functional but also visually appealing.

I believe in the power of design to solve real-world problems and enhance people's lives.`}{" "}
            My goal is to become a professional full-stack web developer
            {`, contributing to innovative projects and making a meaningful impact through technology.

Outside of my academic and professional pursuits, I enjoy drawing, watching movies, and occasionally diving into Blender for creative exploration. I’m eager to join a team where I can learn from mentors, collaborate with professionals, and continue to upskill in a dynamic, growth-oriented environment.`}
          </pre>
        </div>
        <div
          className={
            "w-full text-[15px] mb-[200px] flex flex-col justify-start  items-start" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".5s" : "0s",
          }}
        >
          <div className="w-full text-[12px] justify-start text-[#777777] font-[jetm] tracking-wider uppercase flex">
            Education
          </div>
          <pre className="w-full mt-[30px] ml-[0px] flex flex-col justify-start items-start whitespace-pre-wrap font-[DMSm] text-[#313131]">
            <div className="flex flex-col justify-start items-start ">
              <div className="flex justify-start items-center text-[#6161619e]">
                {/* <Circle
                  width={8}
                  height={8}
                  strokeWidth={3}
                  fill="#ffffff"
                  // stroke="#6161619e"
                  className="mr-[16px] ml-[-24px]"
                />{" "}
                <span className="text-[6161619e]">2021 - Present</span> */}
              </div>
              <pre className="mt-[4px] font-[DMSr] leading-[25px] whitespace-break-spaces">
                <span className="font-[DMSm] text-[black]">2021 - Present</span>{" "}
                {`
B.Tech in Computer Science & Engineering at the University of Engineering & Management, Kolkata.

`}
                <span className="font-[DMSm] text-[black]">2020 - 2021 </span>
                {`
Higher Secondary Education (WBCHSE) from Jadavpur Vidyapith, specializing in the Science stream.

`}
                <span className="font-[DMSm] text-[black]">2018 - 2019 </span>
                {`
Secondary Education (WBBSE) from Jadavpur Vidyapith.`}
              </pre>
            </div>
          </pre>
        </div>

        <div
          className={
            "w-full text-[15px] mb-[200px] flex flex-col  justify-start  items-start " +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".6s" : "0s",
          }}
        >
          <div className="w-full text-[12px] justify-start text-[#777777] font-[jetm] tracking-wider uppercase flex">
            Internship
          </div>
          <pre className="mt-[30px] w-full ml-[0px] flex flex-col justify-start items-start whitespace-pre-wrap font-[DMSr] text-[#313131] ">
            {/* <div className="flex justify-between items-start ">
            <div className="min-w-[100px] md:min-w-[100px] lg:w-[100px] text-[#6161619e]">
              2023 - (Feb - Mar)
            </div>
            <div className="ml-[10px] md:ml-[20px] lg:ml-[20px]">
              {`Certificate of Participation in Web Development from 1Stop.ai.`}
            </div>
          </div> */}
            <div className="flex flex-col justify-start items-start w-full">
              <div className="flex justify-start items-center text-[#6161619e] font-[DMSm]">
                {/* <Circle
                  width={8}
                  height={8}
                  strokeWidth={3}
                  fill="#ffffff"
                  // stroke="#6161619e"
                  className="mr-[16px] ml-[-24px]"
                />{" "} */}
                {/* <span className="text-[6161619e]">2025 - (Mar - May)</span> */}
              </div>
              <pre className="font-[DMSr] w-full whitespace-break-spaces leading-[25px]">
                {/* {`From`}{" "} */}
                <span className="text-[black] font-[DMSm]">
                  March to May, 2025
                </span>
                {`
I’m interning at`}{" "}
                <span className="text-[black] font-[DMSm]">
                  Tata Consultancy Services (TCS)
                </span>
                {`, where I’ve been working on a real-time project involving both frontend and backend development. This hands-on experience has sharpened my full-stack development skills and given me a strong understanding of agile practices and real-world software development.
           
`}
                <span className="text-[black] font-[DMSm]">
                  February to May, 2025
                </span>
                {`
I completed a Web Development certification program with`}{" "}
                <span className="text-[black] font-[DMSm]">1Stop.ai</span>,
                {` where I focused on frontend technologies and also worked on developing my reasoning and problem-solving abilities through structured modules and practical tasks.`}
              </pre>
            </div>
          </pre>
        </div>
        <div
          className={
            "w-full text-[15px] mb-[200px] flex flex-col justify-start items-start overflow-visible" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".7s" : "0s",
          }}
        >
          <div className="w-full text-[12px] justify-start text-[#777777] font-[jetm] tracking-wider uppercase flex">
            Award
          </div>
          <pre className="mt-[30px] w-full ml-[0px] flex flex-col justify-start items-start whitespace-pre-wrap font-[geist] text-[#313131] mb-[200px]">
            <div className="flex flex-col justify-start items-start ">
              <div className="flex justify-start items-center text-[#6161619e] font-[DMSm]">
                {/* <Circle
                  width={8}
                  height={8}
                  strokeWidth={3}
                  fill="#ffffff"
                  // stroke="#6161619e"
                  className="mr-[16px] ml-[-24px]"
                />{" "}
                <span className="text-[6161619e]">2024</span> */}
              </div>
              <pre className="font-[DMSr] w-full whitespace-break-spaces leading-[25px]">
                {`In 2024, I achieved a `}
                <span className="text-[black] font-[DMSm]">rank of 18th</span>
                {` in the 3rd Year Academic Session at the University of Engineering & Management (UEM).
                
In 2023, I achieved a `}
                <span className="text-[black] font-[DMSm]">rank of 21st</span>
                {` in the 2nd Year Academic Session at the University of Engineering & Management (UEM).`}
              </pre>
            </div>
          </pre>
          <div className="w-full text-[12px] justify-start text-[#777777] font-[jetm] tracking-wider uppercase flex ">
            Resources I Use
          </div>
          <div className="mt-[30px] w-full ml-[0px] flex flex-col justify-start items-start whitespace-pre-wrap font-[geist] text-[#313131] ">
            {/* <div className="flex flex-col justify-start items-start "></div> */}
            <div className=" mb-[40px] w-full text-[18px] font-[DMSr] tracking-tight leading-[29px] text-[#000000]">
              A curated list of tools, technologies, and software I’ve worked
              with and gained experiences
            </div>
            <Marquee
              gradient="true"
              gradientColor="#ffffff"
              speed={20}
              gradientWidth={100}
            >
              {techName?.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="w-[50px] h-[50px] rounded-[12px] border-[1.5px] border-[#eaeaea] p-[8px] mx-[15px]"
                  >
                    <img
                      className="w-full h-full object-cover "
                      src={data?.link}
                    ></img>
                  </div>
                );
              })}
            </Marquee>
            <div
              className="border-[1.5px] border-[#e6e6e6] rounded-full px-[15px] h-[40px] flex justify-center items-center cursor-pointer mt-[40px]"
              onClick={() => {
                props?.setSection("techstack");
                props?.setIndex(0);
                // }
              }}
            >
              View All Resources{" "}
              <MoveRight
                width={16}
                height={16}
                strokeWidth={2}
                className="ml-[10px]"
              />
            </div>
          </div>
        </div>
        <div className="w-full text-[12px] justify-start text-[#777777] font-[jetm] tracking-wider uppercase flex">
          Let's Connect
        </div>
        <div className="w-full flex flex-col justify-start items-start  font-[DMSr]  ml-[0px]  mb-[200px] mt-[30px] text-[#313131] ">
          <span className="text-[35px] tracking-tight leading-[45px] text-[black]">
            Feel free to reach out to explore opportunities, discuss freelance
            projects or just say hello.
          </span>
          <div
            className="mt-[80px] w-full flex flex-col justify-start items-start hover:text-[#bebebe]"
            style={{ transition: ".5s" }}
          >
            <div
              className="h-[45px] cursor-pointer hover:text-[black] w-full flex justify-between items-center"
              style={{ transition: ".2s" }}
            >
              <div className="flex justify-start items-center">
                <Mail
                  width={18}
                  height={18}
                  strokeWidth={2.2}
                  className=" mr-[10px]"
                />
                Mail
              </div>
              <div className="">purkaithimadricollege@gmail.com</div>
            </div>
            <div className="w-full border-t-[1.5px] border-[#f0f0f0] my-[0px]"></div>
            <a
              className="h-[45px] cursor-pointer hover:text-[black] w-full flex justify-between items-center"
              style={{ transition: ".2s" }}
              href="https://www.linkedin.com/in/himadri-purkait-315193272/"
              target="_blank"
            >
              <div className="flex justify-start items-center">
                <Linkedin
                  width={18}
                  height={18}
                  strokeWidth={2.2}
                  className=" mr-[10px]"
                />
                Linkedin
              </div>
              <div className="">Himadri Purkait</div>
            </a>
            <div className="w-full border-t-[1.5px] border-[#f0f0f0] my-[0px]"></div>
            <a
              className="h-[45px] cursor-pointer hover:text-[black] w-full flex justify-between items-center"
              style={{ transition: ".2s" }}
              target="_blank"
              href="https://www.instagram.com/himadri.1/"
            >
              <div className="flex justify-start items-center">
                <Instagram
                  width={18}
                  height={18}
                  strokeWidth={2.2}
                  className=" mr-[10px]"
                />
                Instagram
              </div>
              <div className="">@himadri.1</div>
            </a>
            <div className="w-full border-t-[1.5px] border-[#f0f0f0] my-[0px]"></div>
            <a
              className="h-[45px] cursor-pointer hover:text-[black] w-full flex justify-between items-center"
              style={{ transition: ".2s" }}
              target="_blank"
              href="https://x.com/himadri_02"
            >
              <div className="flex justify-start items-center">
                <Twitter
                  width={18}
                  height={18}
                  strokeWidth={2.2}
                  className=" mr-[10px]"
                />
                Twitter
              </div>
              <div className="">@himadri_02</div>
            </a>
          </div>
        </div>
        {/* <div className="mb-[60px]"></div> */}
        {/* <pre className="whitespace-pre-wrap font-[geist] ">{aboutData}</pre> */}
      </div>
    </>
  );
};

export default AboutMy;
