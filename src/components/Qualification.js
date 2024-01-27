import React from "react";
import { TiWeatherStormy } from "react-icons/ti";
import { GiTicTacToe } from "react-icons/gi";
import { FaAngleRight } from "react-icons/fa6";
import { MdCalculate } from "react-icons/md";

const Qualification = () => {
  return (
    <div className="w-full h-auto flex flex-col md:flex-row lg:flex-row justify-between items-start px-[20px] ">
      <div className="flex flex-col md:flex-row lg:flex-row h-full">
        <div className="bg-[#1c1b23] w-full md:w-[240px] lg:w-[240px] p-[20px] pl-[15px] font-[lato] text-[#8b8a91] h-full mb-[20px] md:mb-0 lg:mb-0 rounded-lg">
          <span className="text-[17px] font-semibold ml-[5px]">Frontend</span>
          <div className="w-full h-auto flex flex-wrap  mt-[10px]">
            <div className="h-[36px] my-[5px] w-auto border border-[#ca983a] px-[20px] mx-[5px] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center grow ">
              HTML
            </div>
            <div className="h-[36px] my-[5px] mx-[5px] w-auto border border-[#32343d] px-[20px] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center grow">
              CSS
            </div>
            <div className="h-[36px] my-[5px] mx-[5px] w-auto border border-[green] px-[20px] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center grow">
              JavaScript
            </div>
            <div className="h-[36px] my-[5px] mx-[5px] w-auto border border-[#d26d37] px-[20px] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center grow">
              Tailwind
            </div>
            <div className="h-[36px] my-[5px] mx-[5px] w-auto border border-[#ca983a] px-[20px] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center grow">
              React JS
            </div>
          </div>
        </div>
        <div className="bg-[#1c1b23] w-full md:w-[240px] lg:w-[240px] p-[20px] pl-[15px] font-[lato] text-[#8b8a91] h-full mb-[20px] md:mb-0 lg:mb-0 ml-0 md:ml-[20px] lg:ml-[20px] rounded-lg">
          <span className="text-[17px] font-semibold ml-[5px]">Backend</span>
          <div className="w-full h-auto flex flex-wrap grow-1 mt-[10px]">
            <div className="h-[36px] my-[5px] w-auto px-[20px] mx-[5px] grow border border-[green] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center">
              JavaScript
            </div>
            <div className="h-[36px] my-[5px] mx-[5px] w-auto px-[20px] grow border border-[#32343d] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center">
              MySql
            </div>
            <div className="h-[36px] my-[5px] mx-[5px] w-auto px-[20px] grow border border-[orange] text-[#75757b] text-[13px] bg-[#14131a] rounded-lg flex justify-center items-center">
              Firebase
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[calc(100%-520px)] lg:w-[calc(100%-520px)] bg-[#1c1b23] h-auto p-[20px] rounded-lg">
        <span className="text-[17px] text-white font-semibold">
          More Projects
        </span>
        <div className="w-full h-auto my-[10px] flex justify-center items-center cursor-pointer">
          <a
            className="w-full h-auto  flex justify-center items-center cursor-pointer"
            href="https://squidtictactoe.netlify.app/"
          >
            <div className="w-[60px] h-[60px] mr-[10px] flex justify-start items-center">
              <GiTicTacToe className="text-[35px] text-[#8b8a91]" />
            </div>
            <div className="flex w-[calc(100%-70px)] flex-col h-[60px] justify-center items-start">
              <span className="text-[15px] text-[#8b8a91] font-bold ">
                Tic Tac Toe Game
              </span>
              <span className="text-[13px] text-[#444448] leading-[15px] mt-[4px]">
                React JS, JavaScript, Tailwind CSS
              </span>
            </div>
            <div className="w-[30px]">
              <FaAngleRight className="text-[18px] text-[#8b8a91]" />
            </div>
          </a>
        </div>
        <div className="w-full h-auto my-[10px] mb-0 flex justify-center items-center cursor-pointer">
          <a
            className="w-full h-auto mb-0 flex justify-center items-center cursor-pointer"
            href="https://getweatherio.netlify.app/"
          >
            <div className="w-[60px] h-[60px] mr-[10px] flex justify-start items-center">
              <TiWeatherStormy className="text-[35px] text-[#8b8a91]" />
            </div>
            <div className="flex w-[calc(100%-70px)] flex-col h-[60px] justify-center items-start">
              <span className="text-[15px] text-[#8b8a91] font-bold ">
                Weather.io
              </span>
              <span className="text-[13px] text-[#444448] leading-[15px] mt-[4px]">
                React JS, JavaScript, Tailwind CSS, OpenWeather API
              </span>
            </div>
            <div className="w-[30px]">
              <FaAngleRight className="text-[18px] text-[#8b8a91]" />
            </div>
          </a>
        </div>
        <div className="w-full h-auto my-[10px] mb-0 flex justify-center items-center cursor-pointer">
          <a
            className="w-full h-auto mb-0 flex justify-center items-center cursor-pointer"
            href="https://mycalculatorio.netlify.app/"
          >
            <div className="w-[60px] h-[60px] mr-[10px] flex justify-start items-center">
              <MdCalculate className="text-[35px] text-[#8b8a91]" />
            </div>
            <div className="flex w-[calc(100%-70px)] flex-col h-[60px] justify-center items-start">
              <span className="text-[15px] text-[#8b8a91] font-bold ">
                Calculator.io
              </span>
              <span className="text-[13px] text-[#444448] leading-[15px] mt-[4px]">
                React JS, JavaScript, Tailwind CSS
              </span>
            </div>
            <div className="w-[30px]">
              <FaAngleRight className="text-[18px] text-[#8b8a91]" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
