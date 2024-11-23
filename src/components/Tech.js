import React, { useEffect, useState } from "react";
import {
  ExtraProjectsData,
  ProjectsData,
  techName,
  techName2,
  techName3,
} from "./Constant";
import { Layers3 } from "lucide-react";

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
    <div className="w-full h-[100svh] flex justify-center items-start ">
      <div className="w-full h-[calc(100%-60px)] flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[50px] lg:pt-[50px] text-[#404040] font-[geist]">
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
        {/* <div className="w-full flex flex-wrap justify-start items-start">
          {techName?.map((data, index) => {
            return (
              <div className="w-auto px-[15px] h-[40px] rounded-lg bg-[#F5F5F5] border border-[#f2f2f2] flex justify-center items-center mr-[12px] mb-[12px]">
                <img
                  className="w-[20px] md:w-[20px] lg:w-[20px] mr-[10px]"
                  src={data?.link}
                />
                {data?.name}
              </div>
            );
          })}
        </div> */}
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
            {/* {techName3?.map((data, index) => {
              return (
                <div
                  className="w-auto cursor-pointer hover:bg-[#f3f3f3] px-[15px] h-[40px] rounded-lg bg-[#ffffff] border border-[#e4e3e3] flex justify-center items-center mr-[12px] mb-[12px]"
                  onClick={() => {
                    setSelectedTech(data?.toLowerCase());
                  }}
                >
                  <img
                    className="w-[20px] md:w-[20px] lg:w-[20px] mr-[10px]"
                    src={data?.link}
                  />
                  {data?.name}
                </div>
              );
            })} */}
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
      </div>
    </div>
  );
};
export default Tech;
