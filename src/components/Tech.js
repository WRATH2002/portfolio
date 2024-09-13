import React, { useEffect, useState } from "react";
import { techName } from "./Constant";

const Tech = () => {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setAnime(false);
    setTimeout(() => {
      setAnime(true);
    }, 10);
  }, []);
  return (
    <div className="w-full h-[100svh] flex justify-center items-start ">
      <div className="w-full h-[calc(100%-60px)] flex flex-col justify-start items-start text-[15px] pt-[20px] md:pt-[50px] lg:pt-[50px] text-[#404040] font-[geist]">
        {" "}
        <div
          className={
            "text-[24px] ml-[0px] md:ml-[110px] lg:ml-[110px] " +
            (anime ? " mt-[0px] opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".2s" : "0s",
          }}
        >
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
            Techs
          </div>
          <div className="w-full md:w-[calc(100%-100px)] lg:w-[calc(100%-100px)]  flex  justify-start items-start flex-wrap text-[#404040]">
            {techName.map((data, index) => {
              return (
                <>
                  <div
                    className={
                      "w-[calc((100%-20px)/2)] md:w-[calc((100%-40px)/3)] lg:w-[calc((100%-40px)/3)] min-h-[200px] md:min-h-[170px] lg:min-h-[170px] p-[20px] px-[15px] pb-[15px] rounded-xl mb-[20px] flex flex-col justify-between items-center bg-[#F8F8F8] font-[geist]" +
                      (index == 0
                        ? " ml-0 "
                        : [2, 4, 6, 8, 10].includes(index)
                        ? index == 6
                          ? " ml-[0px] "
                          : " ml-[0px] md:ml-[20px] lg:ml-[20px]"
                        : [3, 6, 9, 12].includes(index)
                        ? " ml-[20px] md:ml-[0px] lg:ml-[0px]"
                        : " ml-[20px]")
                    }
                  >
                    <div className="w-full h-[110px] flex justify-center items-center">
                      <img
                        className="w-[70px] md:w-[60px] lg:w-[60px]"
                        src={data?.link}
                      />
                    </div>
                    <div className="h-[30px] w-full flex justify-start items-center ">
                      <div className="w-auto text-[#707070] px-[10px] border border-[#eaeaea] text-[13px] rounded-lg h-full flex justify-center items-center uppercase">
                        {data?.name}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="mb-[60px] "></div>
        </div>
      </div>
    </div>
  );
};
export default Tech;
