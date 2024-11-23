import React, { useEffect, useState } from "react";
import { aboutData } from "./Constant";
import { UserRoundSearch } from "lucide-react";

// Default values shown

const AboutMy = () => {
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
          "text-[24px] ml-[0px] md:ml-[110px] lg:ml-[110px] flex justify-start items-center" +
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
          strokeWidth={2.2}
          className="mr-[9px]"
        />{" "}
        About Me
      </div>
      <div
        className={
          "text-[20px] ml-[0px] md:ml-[110px] lg:ml-[110px] text-[#6161619e] mb-[30px] " +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".3s" : "0s",
        }}
      >
        Some few things you should know
      </div>
      <div
        className={
          "w-full text-[15px] mb-[30px] flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".5s" : "0s",
        }}
      >
        <div className="w-[80px]  justify-end text-[#6161619e] hidden md:flex lg:flex ">
          About
        </div>
        <pre className="w-full md:w-[calc(100%-110px)] lg:w-[calc(100%-110px)] ml-[0px] md:ml-[30px] lg:ml-[30px] flex flex-col justify-start items-start whitespace-pre-wrap font-[geist] text-[#404040]">
          {aboutData}
        </pre>
      </div>
      <div
        className={
          "w-full text-[15px] mb-[30px] flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".7s" : "0s",
        }}
      >
        <div className="w-[80px]  justify-end text-[#6161619e] hidden md:flex lg:flex ">
          Education
        </div>
        <pre className="w-full md:w-[calc(100%-110px)] lg:w-[calc(100%-110px)] ml-[0px] md:ml-[30px] lg:ml-[30px] flex flex-col justify-start items-start whitespace-pre-wrap font-[geist] text-[#404040]">
          <div className="flex justify-between items-start ">
            <div className="min-w-[100px] md:min-w-[100px] lg:w-[100px] text-[#6161619e]">
              2021 - Now
            </div>
            <div className="ml-[10px] md:ml-[20px] lg:ml-[20px]">
              {`B.Tech in Computer Science & Engineering,
University of Engineering & Management, Kolkata`}
            </div>
          </div>
          <div className="flex justify-between items-start mt-[15px]">
            <div className="min-w-[100px] md:min-w-[100px] lg:w-[100px] text-[#6161619e]">
              2020 - 2021
            </div>
            <div className="ml-[10px] md:ml-[20px] lg:ml-[20px]">{`Higher Secondary Education (WBCHSE) in Science,
Jadavpur Vidyapith`}</div>
          </div>
          <div className="flex justify-between items-start mt-[15px]">
            <div className="min-w-[100px] md:min-w-[100px] lg:w-[100px] text-[#6161619e]">
              2018 - 2019
            </div>
            <div className="ml-[10px] md:ml-[20px] lg:ml-[20px]">{`Secondary Education (WBBSE) in General,
Jadavpur Vidyapith`}</div>
          </div>
        </pre>
      </div>

      <div
        className={
          "w-full text-[15px] mb-[30px] flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".7s" : "0s",
        }}
      >
        <div className="w-[80px]  justify-end text-[#6161619e] hidden md:flex lg:flex ">
          Internship
        </div>
        <pre className="w-full md:w-[calc(100%-110px)] lg:w-[calc(100%-110px)] ml-[0px] md:ml-[30px] lg:ml-[30px] flex flex-col justify-start items-start whitespace-pre-wrap font-[geist] text-[#404040]">
          <div className="flex justify-between items-start ">
            <div className="min-w-[100px] md:min-w-[100px] lg:w-[100px] text-[#6161619e]">
              2023 - (Feb - Mar)
            </div>
            <div className="ml-[10px] md:ml-[20px] lg:ml-[20px]">
              {`Certificate of Participation in Web Development from 1Stop.ai.`}
            </div>
          </div>
        </pre>
      </div>
      <div
        className={
          "w-full text-[15px] mb-[30px] flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start" +
          (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
        }
        style={{
          transition: anime ? ".4s" : "none",
          transitionDelay: anime ? ".7s" : "0s",
        }}
      >
        <div className="w-[80px]  justify-end text-[#6161619e] hidden md:flex lg:flex ">
          Award
        </div>
        <pre className="w-full md:w-[calc(100%-110px)] lg:w-[calc(100%-110px)] ml-[0px] md:ml-[30px] lg:ml-[30px] flex flex-col justify-start items-start whitespace-pre-wrap font-[geist] text-[#404040]">
          <div className="flex justify-between items-start ">
            <div className="min-w-[100px] md:min-w-[100px] lg:w-[100px] text-[#6161619e]">
              2023
            </div>
            <div className="ml-[10px] md:ml-[20px] lg:ml-[20px]">
              {`Ranked 21st in the 2nd Year Academic Session at the University of Engineering and Management.`}
            </div>
          </div>
          <div className="flex justify-between items-start mt-[15px]">
            <div className="min-w-[100px] md:min-w-[100px] lg:w-[100px] text-[#6161619e]">
              2024
            </div>
            <div className="ml-[10px] md:ml-[20px] lg:ml-[20px]">
              {`Ranked 18th in the 3rd Year Academic Session at the University of Engineering and Management.`}
            </div>
          </div>
        </pre>
      </div>
      <div className="mb-[60px]"></div>
      {/* <pre className="whitespace-pre-wrap font-[geist] ">{aboutData}</pre> */}
    </div>
  );
};

export default AboutMy;
