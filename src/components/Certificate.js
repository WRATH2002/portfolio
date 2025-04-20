import React, { useEffect, useRef, useState } from "react";
import i1 from "../assets/img/11.jpg";
import i2 from "../assets/img/22.jpg";
import i3 from "../assets/img/33.jpg";
import i4 from "../assets/img/44.jpg";
import i5 from "../assets/img/55.jpg";
import i6 from "../assets/img/66.jpg";
import i7 from "../assets/img/77.jpg";
import { Certificates } from "./Constant";
import user from "../assets/img/a4.jpg";

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
            "text-[35px] font-[DMSr] tracking-tight leading-[45px] ml-[0px] text-[black] " +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".3s" : "0s",
          }}
        >
          Showcasing projects that reflect my creativity, problem-solving, and
          attention to detail
        </div>
        <div
          className={
            " mb-[140px] w-full text-[18px] font-[DMSr] mt-[30px] tracking-tight leading-[29px] text-[#5d5d5d]" +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".4s" : "0s",
          }}
        >
          Explore how I approach complex user challenges, craft intuitive
          interfaces, and deliver impactful solutions.
        </div>
        {/* <div
          className={
            "w-full text-[12px] justify-start text-[#525252] font-[jetm] tracking-wider uppercase flex mb-[30px]" +
            (anime2 ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime2 ? ".4s" : "none",
            transitionDelay: anime2 ? ".5s" : "0s",
          }}
        >
          {section == 0 ? (
            <>Projects</>
          ) : section == 1 ? (
            <>Extra Projects</>
          ) : (
            <>Upcoming Projects</>
          )}{" "}
          <ChevronsLeftRight
            width="16"
            height="16"
            strokeWidth="2"
            className="ml-[10px] rotate-90 cursor-pointer hover:text-[black]"
            onClick={() => {
              if (section + 1 == 3) {
                setSection(0);
                setAnime2((anime2) => false);
                setTimeout(() => {
                  setAnime2(true);
                }, 5);
              } else {
                setSection((section) => section + 1);
                setAnime2((anime2) => false);
                setTimeout(() => {
                  setAnime2(true);
                }, 5);
              }
            }}
          />
        </div> */}
        <div
          className={
            "mb-[200px]" +
            (anime2 ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime2 ? ".4s" : "none",
            transitionDelay: anime2 ? ".5s" : "0s",
          }}
        >
          {Certificates?.map((data, index) => {
            return (
              <>
                <a
                  target="_blank"
                  href={data?.link}
                  key={index}
                  className="w-full flex flex-col justify-start items-start font-[DMSm] mb-[60px] text-[18px] text-[#7b7b7b] cursor-pointer"
                >
                  {/* <span>{data?.name}</span> */}
                  <div className="w-full text-[12px] justify-start text-[#777777] font-[jetm] tracking-wider uppercase flex mb-[10px]">
                    {data?.date}
                  </div>
                  {/* <div className="mt-[0px] w-full">
                    <img
                      className="w-full aspect-video rounded-xl object-fill border-[1.5px] border-[#e6e6e6]"
                      src={arr[index]}
                    ></img>
                  </div>
                  <div className="w-full h-[100px] bg-gradient-to-b from-transparent to-[white] to-[80%] mt-[-100px]"></div> */}
                  <div className=" mb-[0px] w-full text-[18px] font-[DMSm] mt-[0px] tracking-tight leading-[29px] text-[#000000]">
                    {data?.name}
                  </div>
                  <div className="mt-[5px] text-[15px] font-[DMSr] leading-[25px] text-[#313131]">
                    {data?.about}
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Certificate;
