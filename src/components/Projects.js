import React, { useEffect } from "react";
import m11 from "../assets/img/m11.png";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = (props) => {
  const str = `
•  Automatically extract transaction details from images.
•  Easily split expenses with friends and groups. 
•  Access detailed transaction history and analyze spending patterns. 
•  Gain insights with visual data representations. 
•  Stay on top of your finances with monthly reports. 
•  Set reminders for upcoming payments. 
•  Manage budgets for specific sub-categories.`;

  useEffect(() => {
    console.log("props?.data");
    console.log(props?.data);
  }, [props?.data]);
  return (
    <>
      {/* <div className="flex justify-start items-center w-full">
        <img className="w-[80px] " src={ytlogo}></img>
      </div> */}
      <div className="w-full h-full flex justify-between items-center">
        <div className="flex flex-col justify-center items-start">
          <div
            className={
              "text-[50px] w-full flex justify-start items-center font-bold bg-gradient-to-b bg-clip-text text-transparent drop-shadow-sm" +
              (props?.dark
                ? " from-white to-[#909090]"
                : " from-black to-[#959595]")
            }
          >
            {props?.data?.name}
          </div>
          <div
            className="text-[14px] w-full mt-[10px]"
            dangerouslySetInnerHTML={{
              __html: props?.data?.about,
            }}
          ></div>
          <span className="font-semibold w-full flex justify-start mt-[17px]">
            Key Features :{" "}
          </span>{" "}
          <pre
            className="w-full flex justify-start items-center font-[geist] mt-[-15px]"
            dangerouslySetInnerHTML={{
              __html: props?.data?.keyFeatures,
            }}
          ></pre>
          <div className="mt-[50px] w-full flex justify-start items-center">
            <a
              className={
                "h-[35px] px-[15px] hover:px-[22px] flex justify-center items-center rounded-xl cursor-pointer" +
                (props?.dark
                  ? " bg-[#303147] text-white"
                  : " bg-[#f6f6f6] text-[black]")
              }
              href={props?.data?.githubLink}
              target="_blank"
              style={{ transition: "padding .3s, opacity .3s" }}
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
            </a>
            <a
              className={
                "h-[35px] px-[15px] hover:px-[22px] flex justify-center items-center rounded-xl ml-[10px] cursor-pointer" +
                (props?.dark
                  ? " bg-[#303147] text-white"
                  : " bg-[#f6f6f6] text-[black]")
              }
              href={props?.data?.websiteLink}
              target="_blank"
              style={{ transition: "padding .3s, opacity .3s" }}
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
                class="lucide lucide-link-2"
              >
                <path d="M9 17H7A5 5 0 0 1 7 7h2" />
                <path d="M15 7h2a5 5 0 1 1 0 10h-2" />
                <line x1="8" x2="16" y1="12" y2="12" />
              </svg>
            </a>
            <div className="h-[35px] ml-[10px] flex justify-center items-center">
              <div className="h-[23px] border border-[#c9c9c9] mr-[3px]"></div>
              <div className="h-[23px] border border-[#c9c9c9] ml-[3px]"></div>
            </div>
            <div
              className={
                "h-[35px] px-[15px] text-[20px] flex justify-center items-center rounded-xl ml-[10px] " +
                (props?.dark
                  ? " bg-[#f6f6f6] text-[black]"
                  : " bg-[#303147] text-[white]")
              }
            >
              <FaHtml5 />
            </div>
            <div
              className={
                "h-[35px] px-[15px] text-[20px] flex justify-center items-center rounded-xl ml-[10px] " +
                (props?.dark
                  ? " bg-[#f6f6f6] text-[black]"
                  : " bg-[#303147] text-[white]")
              }
            >
              <IoLogoJavascript />
            </div>
            <div
              className={
                "h-[35px] px-[15px] text-[20px] flex justify-center items-center rounded-xl ml-[10px] " +
                (props?.dark
                  ? " bg-[#f6f6f6] text-[black]"
                  : " bg-[#303147] text-[white]")
              }
            >
              <FaCss3Alt />
            </div>
          </div>
        </div>
        {/* <img className="w-[150px] ml-[20px]" src={m11}></img> */}
      </div>
    </>
  );
};
