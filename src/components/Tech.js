import React, { useEffect, useState } from "react";
import {
  ExtraProjectsData,
  ProjectsData,
  techName,
  techName2,
  techName3,
} from "./Constant";
import { Layers3 } from "lucide-react";
import user from "../assets/img/a4.jpg";

const Tech = () => {
  const [anime, setAnime] = useState(false);
  const [selectedTech, setSelectedTech] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setAnime(false);
    setTimeout(() => {
      setAnime(true);
    }, 10);
  }, []);

  useEffect(() => {
    setArr([]);
    if (selectedTech?.length != 0) {
      setArr(getRelatedTechProjects());
    }
  }, [selectedTech]);

  function isSubset(arr1, arr2) {
    const lowerArr1 = arr1.map((element) => element.toLowerCase());
    return arr2.every((element) => lowerArr1.includes(element.toLowerCase()));
  }

  function getRelatedTechProjects() {
    let tempArr = [];
    ProjectsData?.map((data) => {
      // if (data?.tags?.includes(selectedTech?.toLowerCase())) {
      //   tempArr.push(data);
      // }
      if (isSubset(data?.tags?.split(","), selectedTech)) {
        tempArr.push(data);
      }
    });
    ExtraProjectsData?.map((data) => {
      // if (data?.tags?.includes(selectedTech?.toLowerCase())) {
      //   tempArr.push(data);
      // }
      if (isSubset(data?.tags?.split(","), selectedTech)) {
        tempArr.push(data);
      }
    });

    return tempArr;
  }

  return (
    <>
      {" "}
      <div class="gradient-blur ">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="w-full h-[100svh] flex justify-center items-start ">
        {/* <div className="w-full h-[calc(100%-60px)] flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[50px] lg:pt-[50px] text-[#404040] font-[geist]">
        {" "}
        <div
          className={
            "text-[24px] ml-[0px] md:ml-[110px] lg:ml-[110px] flex justify-start items-center " +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".2s" : "0s",
          }}
        >
          <Layers3
            width={22}
            height={22}
            strokeWidth={2.2}
            className="mr-[9px]"
          />{" "}
          Tech Stack
        </div>
        <div
          className={
            "text-[20px] ml-[0px] md:ml-[110px] lg:ml-[110px] text-[#6161619e] mb-[0px] " +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".3s" : "0s",
          }}
        >
          Technology & Software products I use
        </div>
       
        <div
          className={
            "w-full   flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start z-10" +
            (anime ? " mt-[30px] opacity-100" : " mt-[40px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".5s" : "0s",
          }}
        >
          <div className="w-[80px] mr-[20px]  justify-end text-[#6161619e]  hidden md:flex lg:flex ">
            Languages
          </div>

          <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)]  flex  justify-start items-start flex-wrap text-[#404040] bg-[#fafafa] border border-dashed border-[#b4b4b4] p-[10px] pb-[0px] rounded-xl">
            {techName?.map((data, index) => {
              return (
                <div
                  className={
                    "w-auto cursor-pointer hover:bg-[#e6e6e6] px-[15px] h-[40px] rounded-lg border border-[#e4e3e3] flex justify-center items-center mr-[10px] mb-[10px]" +
                    (selectedTech.includes(data?.name)
                      ? " bg-[#e6e6e6] "
                      : " bg-[#ffffff]")
                  }
                  onClick={() => {
                    if (selectedTech?.includes(data?.name)) {
                      setSelectedTech(
                        selectedTech.filter((el) => el !== data?.name)
                      );
                    } else {
                      setSelectedTech((prev) => [...prev, data?.name]);
                    }
                  }}
                >
                  <img
                    className="w-[20px] md:w-[20px] lg:w-[20px] mr-[10px]"
                    src={data?.link}
                  />
                  {data?.name}
                </div>
              );
            })}
          </div>
          <div className="mb-[0px]"></div>
        </div>
        <div
          className={
            "w-full   flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start z-10" +
            (anime ? " mt-[30px] opacity-100" : " mt-[40px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".7s" : "0s",
          }}
        >
          <div className="w-[80px] mr-[20px]  justify-end text-[#6161619e]  hidden md:flex lg:flex ">
            Databases
          </div>

          <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)]  flex  justify-start items-start flex-wrap text-[#404040] bg-[#fafafa] border border-dashed border-[#b4b4b4] p-[10px] pb-[0px] rounded-xl">
            {techName2?.map((data, index) => {
              return (
                <div
                  className={
                    "w-auto cursor-pointer hover:bg-[#e6e6e6] px-[15px] h-[40px] rounded-lg border border-[#e4e3e3] flex justify-center items-center mr-[10px] mb-[10px]" +
                    (selectedTech.includes(data?.name)
                      ? " bg-[#e6e6e6] "
                      : " bg-[#ffffff]")
                  }
                  onClick={() => {
                    if (selectedTech?.includes(data?.name)) {
                      setSelectedTech(
                        selectedTech.filter((el) => el !== data?.name)
                      );
                    } else {
                      setSelectedTech((prev) => [...prev, data?.name]);
                    }
                  }}
                >
                  <img
                    className="w-[20px] md:w-[20px] lg:w-[20px] mr-[10px]"
                    src={data?.link}
                  />
                  {data?.name}
                </div>
              );
            })}
          </div>
          <div className="mb-[0px]"></div>
        </div>
        <div
          className={
            "w-full   flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start z-10" +
            (anime ? " mt-[30px] opacity-100" : " mt-[40px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".9s" : "0s",
          }}
        >
          <div className="w-[80px] mr-[20px]  justify-end text-[#6161619e]  hidden md:flex lg:flex ">
            Others
          </div>

          <div
            className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)]  flex  justify-start items-start flex-wrap text-[#404040] bg-[#fafafa] border border-dashed border-[#b4b4b4] p-[10px] pb-[0px] rounded-xl"
            // style={{ border: "1px dashed #b4b4b4" }}
          >
            {techName3?.map((data, index) => {
              return (
                <div
                  className={
                    "w-auto cursor-pointer hover:bg-[#e6e6e6] px-[15px] h-[40px] rounded-lg border border-[#e4e3e3] flex justify-center items-center mr-[10px] mb-[10px]" +
                    (selectedTech.includes(data?.name)
                      ? " bg-[#e6e6e6] "
                      : " bg-[#ffffff]")
                  }
                  onClick={() => {
                    if (selectedTech?.includes(data?.name)) {
                      setSelectedTech(
                        selectedTech.filter((el) => el !== data?.name)
                      );
                    } else {
                      setSelectedTech((prev) => [...prev, data?.name]);
                    }
                  }}
                >
                  <img
                    className="w-[20px] md:w-[20px] lg:w-[20px] mr-[10px]"
                    src={data?.link}
                  />
                  {data?.name}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={
            "w-full   flex flex-col md:flex-row lg:flex-row justify-start md:justify-center  lg:justify-center items-start z-10" +
            (anime ? " mt-[30px] opacity-100" : " mt-[40px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".9s" : "0s",
          }}
        >
          <div className="w-[80px] mr-[20px]  justify-end text-[#6161619e]  hidden md:flex lg:flex "></div>

          <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)]  flex  justify-start items-start flex-col text-[#404040] ">
           
            {arr.length > 0 ? (
              <div className="text-[13px] px-[8px] py-[4px] rounded-md mb-[10px] text-[] bg-[#F5F5F5]">
                Results ({arr.length})
              </div>
            ) : (
              <></>
            )}

            {arr?.map((data, index) => {
              return (
                <>
                  <a
                    className="w-full border border-[#e4e3e3] hover:bg-[#F5F5F5] rounded-xl h-[100px] px-[18px] flex flex-col justify-center items-start mb-[10px] cursor-pointer"
                    href={data?.websiteLink}
                    target="_blank"
                  >
                    <div className="text-black text-[16px]">{data?.name}</div>
                    <div className="text-[#707070] text-ellipsis overflow-hidden line-clamp-2 mt-[5px] ">
                      {data?.about}
                    </div>
                  </a>
                </>
              );
            })}
            <div className="mt-[60px]"></div>
          </div>
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
              "text-[35px] font-[DMSr] tracking-tight leading-[45px] ml-[0px]  mb-[140px] text-[black] " +
              (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
            }
            style={{
              transition: anime ? ".4s" : "none",
              transitionDelay: anime ? ".3s" : "0s",
            }}
          >
            A curated list of tools, technologies, and software I’ve worked with
            and gained experiences
          </div>
          <div
            className={
              "w-full text-[12px] justify-start text-[#525252] font-[jetm] tracking-wider uppercase flex mb-[40px]" +
              (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
            }
            style={{
              transition: anime ? ".4s" : "none",
              transitionDelay: anime ? ".4s" : "0s",
            }}
          >
            Resources I Use
          </div>
          <div
            className={
              "w-full text-[15px] mb-[200px] flex flex-col justify-start font-[DMSr] items-start" +
              (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
            }
            style={{
              transition: anime ? ".4s" : "none",
              transitionDelay: anime ? ".5s" : "0s",
            }}
          >
            {techName?.map((data, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex justify-start items-start mb-[60px]"
                  >
                    <div className="w-[50px] h-[50px] rounded-[12px] border-[1.5px] border-[#eaeaea] p-[8px]">
                      <img
                        className="w-full h-full object-cover "
                        src={data?.link}
                      ></img>
                    </div>
                    <div className="ml-[20px] w-[calc(100%-80px)] flex flex-col justify-start items-start">
                      <span className="font-[DMSm] text-[black]">
                        {data?.name}
                      </span>
                      <span className="font-[DMSr] leading-[25px] mt-[5px]">
                        {data?.about}
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Tech;
