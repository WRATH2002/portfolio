import React, { useEffect, useRef, useState } from "react";
import i1 from "../assets/img/11.jpg";
import i2 from "../assets/img/22.jpg";
import i3 from "../assets/img/33.jpg";
import i4 from "../assets/img/44.jpg";
import i5 from "../assets/img/55.jpg";
import i6 from "../assets/img/66.jpg";
import i7 from "../assets/img/77.jpg";
import { Certificates } from "./Constant";

const arr = [i1, i2, i3, i4, i5, i6, i7];

const Certificate = (props) => {
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
    <>
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
              Coursera
            </div>
            {Certificates?.map((data, index) => {
              return (
                <>
                  {index < 4 ? (
                    <div
                      className={
                        "w-full flex flex-col justify-center items-start hover:bg-[#f5f5f5] mb-[8px] rounded-2xl p-[15px] py-[12px] h-auto cursor-pointer" +
                        (index == indexPro
                          ? " bg-[#f5f5f5]"
                          : " bg-transparent")
                      }
                      style={{ transition: ".3s" }}
                      onClick={() => {
                        setIndexPro(index);
                        setExpand(false);
                      }}
                    >
                      <span className="text-black">
                        {Certificates[index]?.name}
                      </span>
                      <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] text-[13px]">
                        {Certificates[index]?.date}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
            <div className="mt-[30px] mb-[10px] pl-[15px] text-[#6161619e]">
              Udmey
            </div>
            {Certificates?.map((data, index) => {
              return (
                <>
                  {index > 3 && index < 6 ? (
                    <div
                      className={
                        "w-full flex flex-col justify-center items-start hover:bg-[#f5f5f5] mb-[8px] rounded-2xl p-[15px] py-[12px] h-auto cursor-pointer" +
                        (index == indexPro
                          ? " bg-[#f5f5f5]"
                          : " bg-transparent")
                      }
                      style={{ transition: ".3s" }}
                      onClick={() => {
                        setIndexPro(index);
                        setExpand(false);
                      }}
                    >
                      <span className="text-black">
                        {Certificates[index]?.name}
                      </span>
                      <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] text-[13px]">
                        {Certificates[index]?.date}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
            <div className="mt-[30px] mb-[10px] pl-[15px] text-[#6161619e]">
              Hackathon
            </div>
            <div
              className={
                "w-full flex flex-col justify-center items-start hover:bg-[#f5f5f5] mb-[8px] rounded-2xl p-[15px] py-[12px] h-auto cursor-pointer" +
                (indexPro == 6 ? " bg-[#f5f5f5]" : " bg-transparent")
              }
              style={{ transition: ".3s" }}
              onClick={() => {
                setIndexPro(6);
                setExpand(false);
              }}
            >
              <span className="text-black">{Certificates[6]?.name}</span>
              <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] text-[13px]">
                {Certificates[6]?.date}
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
              Coursera
            </div>
            {Certificates?.map((data, index) => {
              return (
                <>
                  {index < 4 ? (
                    <div
                      className={
                        "w-full flex flex-col justify-center items-start hover:bg-[#f5f5f5] mb-[8px] rounded-2xl p-[15px] py-[12px] h-auto cursor-pointer" +
                        (index == indexPro
                          ? " bg-[#f5f5f5]"
                          : " bg-transparent")
                      }
                      style={{ transition: ".3s" }}
                      onClick={() => {
                        setIndexPro(index);
                        setExpand(false);
                      }}
                    >
                      <span className="text-black">
                        {Certificates[index]?.name}
                      </span>
                      <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] text-[13px]">
                        {Certificates[index]?.date}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}

            <div className="mt-[30px] mb-[10px] pl-[15px] text-[#6161619e]">
              Udemy
            </div>
            {Certificates?.map((data, index) => {
              return (
                <>
                  {index > 3 && index < 6 ? (
                    <div
                      className={
                        "w-full flex flex-col justify-center items-start hover:bg-[#f5f5f5] mb-[8px] rounded-2xl p-[15px] py-[12px] h-auto cursor-pointer" +
                        (index == indexPro
                          ? " bg-[#f5f5f5]"
                          : " bg-transparent")
                      }
                      style={{ transition: ".3s" }}
                      onClick={() => {
                        setIndexPro(index);
                        setExpand(false);
                      }}
                    >
                      <span className="text-black">
                        {Certificates[index]?.name}
                      </span>
                      <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] text-[13px]">
                        {Certificates[index]?.date}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
            <div className="mt-[30px] mb-[10px] pl-[15px] text-[#6161619e]">
              Hackathon
            </div>

            <div
              className={
                "w-full flex flex-col justify-center items-start hover:bg-[#f5f5f5] mb-[8px] rounded-2xl p-[15px] py-[12px] h-auto cursor-pointer" +
                (indexPro == 6 ? " bg-[#f5f5f5]" : " bg-transparent")
              }
              style={{ transition: ".3s" }}
              onClick={() => {
                setIndexPro(6);
                setExpand(false);
              }}
            >
              <span className="text-black">{Certificates[6]?.name}</span>
              <span className="overflow-hidden text-ellipsis line-clamp-2 w-full text-[#707070] text-[13px]">
                {Certificates[6]?.date}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-[60px] px-[20px] flex md:hidden lg:hidden justify-between items-center fixed top-0 left-0 border border-[#ededed] bg-gradient-to-t from-[#ffffffce] to-[#ffffff] backdrop-blur-2xl ">
          <div>Certificates</div>
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
          <div
            className={
              "w-full h-auto p-[10px] bg-[#F5F5F5] flex justify-center items-center rounded-[14px] border " +
              (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
            }
            style={{
              transition: anime ? ".4s" : "none",
              transitionDelay: anime ? ".2s" : "0s",
            }}
          >
            <img
              src={arr[indexPro]}
              // src="https://drive.google.com/drive/u/4/folders/18WIKc9rYMs8J8L8jQpNQsHiW6x7Rbr9J"
              className="w-full h-auto rounded-xl object-cover"
            ></img>
          </div>
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
            <div className="text-[black] text-[26px] mt-[27px] ">
              {Certificates[indexPro].name}
            </div>

            <div className="flex justify-start items-start">
              <a
                className="px-[11px] h-[30px] text-[14px] rounded-lg mt-[5px] text-[#6161619e] border  border-[#e4e3e3] flex justify-center items-center"
                href={Certificates[indexPro]?.link}
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
                Drive Link
              </a>
            </div>
            <div className="w-full flex justify-start items-start mt-[25px]">
              <div className="w-[100px] flex justify-start text-[#6161619e]">
                Timeline
              </div>
              <div className="w-[calc(100%-100px)] flex justify-start flex-wrap">
                {Certificates[indexPro].date}
              </div>
            </div>
            {Certificates[indexPro]?.platform.length != 0 ? (
              <div className="w-full flex justify-start items-start mt-[7px]">
                <div className="w-[100px] flex justify-start text-[#6161619e]">
                  Platform
                </div>
                <div className="w-[calc(100%-100px)] flex justify-start flex-wrap">
                  {Certificates[indexPro]?.platform}
                </div>
              </div>
            ) : (
              <></>
            )}
            {Certificates[indexPro]?.type.length != 0 ? (
              <div className="w-full flex justify-start items-start mt-[7px]">
                <div className="w-[100px] flex justify-start text-[#6161619e]">
                  Type
                </div>
                <div className="w-[calc(100%-100px)] flex justify-start flex-wrap">
                  {Certificates[indexPro]?.type}
                </div>
              </div>
            ) : (
              <></>
            )}

            {/* <pre className="w-full mt-[30px] mb-[21px] flex-wrap font-[geist] whitespace-pre-wrap">
              {Certificates[indexPro].about}
            </pre>
            <span className="mb-[7px] ">Key Features : </span>
            {Certificates[indexPro].points?.map((data, index) => {
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
              {Certificates[indexPro].keyFeatures}
            </pre> */}

            <div className="w-full h-[42px] mt-[50px] flex justify-end items-center">
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
                  {/* <div className="ml-[6px] border-l border-[#ededed] pl-[6px] text-[#6161619e] whitespace-nowrap overflow-hidden text-ellipsis line-clamp-1">
                    {Certificates[indexPro - 1]?.name}
                  </div> */}
                </div>
              )}
              {indexPro == Certificates.length - 1 ? (
                <></>
              ) : (
                <div
                  className="px-[15px] h-full flex justify-center items-center ml-[15px] border border-[#ededed] rounded-xl cursor-pointer"
                  onClick={() => {
                    if (indexPro != Certificates.length - 1) {
                      setAnime(false);
                      scrollToTop();
                      setIndexPro(indexPro + 1);
                    }
                    console.log(indexPro);
                  }}
                >
                  Next{" "}
                  {/* <div className="ml-[6px] border-l border-[#ededed] pl-[6px] text-[#6161619e] whitespace-nowrap overflow-hidden text-ellipsis line-clamp-1">
                    {Certificates[indexPro + 1]?.name}
                  </div> */}
                </div>
              )}
            </div>
            <div className="mb-[0px] md:mb-[30px] g:mb-[30px]"></div>
          </div>
        </div>
        {/* <div className="w-full flex-col flex justify-start items-start pt-[20px] md:pt-[50px] lg:pt-[50px]">
        <ExtraProjects />
      </div> */}
      </div>
    </>
  );
};
export default Certificate;
