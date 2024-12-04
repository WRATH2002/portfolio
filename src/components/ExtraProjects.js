import React, { useEffect, useState } from "react";
import im1 from "../assets/img/tt.png";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

const Same = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start items-center mt-[10px]">
          {/* <div className="h-[20px] border-[2px] border-black rounded-r-full bg-black mr-[10px]"></div> */}
          <FaReact className="mr-[10px] text-[21px]" />
          <IoLogoJavascript className="mr-[10px] text-[21px]" />
          <FaHtml5 className="mr-[10px] text-[21px]" />
          <FaCss3Alt className="mr-[10px] text-[21px]" />
          <SiTailwindcss className="mr-[10px] text-[21px]" />
        </div>
        <div className="w-[40px] aspect-square flex justify-center items-center bg-[#f5f5f5] rounded-2xl">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-feather"
          >
            <path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
            <path d="M16 8 2 22" />
            <path d="M17.5 15H9" />
          </svg> */}

          <img
            className="w-[23px]"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-plain.svg"
          />
        </div>
      </div>
    </>
  );
};

const ExtraProjects = () => {
  const [anime, setAnime] = useState(false);

  useEffect(() => {
    setAnime(false);
    setTimeout(() => {
      setAnime(true);
    }, 10);
  }, []);
  return (
    <div className="fixed w-full md:w-full lg:w-[calc(100%-410px)] h-[100svh] top-0 right-0 bg-white flex justify-center items-center font-[geist]">
      <div className="w-full md:w-[600px] lg:w-[600px] h-full p-[20px] md:p-[0px] lg:p-[0px] flex flex-col justify-start items-center pt-[80px] md:pt-[60px] lg:pt-[60px] overflow-y-scroll">
        <a
          href="https://mineitio.netlify.app/"
          target="_blank"
          className={
            "w-full flex flex-col md:flex-row lg:flex-row justify-start items-start" +
            (anime ? " mt-0 opacity-100" : " mt-[10px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".3s" : "0s",
          }}
        >
          {/* <div className="w-full md:w-[250px] lg:w-[250px]  h-[200px] md:h-[170px] lg:h-[170px] rounded-2xl bg-[#efefef]"></div> */}
          <div className="w-full border border-[#efefef] hover:bg-[#f5f5f5] cursor-pointer rounded-2xl flex flex-col justify-start items-start  p-[20px] ">
            <div className="text-[22px]">Mineit</div>
            <div className="text-[15px] text-[#404040] mt-[5px]">
              Mine It – a thrilling block-finding game where players must
              uncover diamond blocks while avoiding hidden bombs. Test your
              skills across easy, medium, and hard difficulty levels.
            </div>
            <Same />
          </div>
        </a>
        <a
          href="https://getweatherio.netlify.app/"
          target="_blank"
          className={
            "w-full flex flex-col md:flex-row lg:flex-row justify-start items-start mt-[20px] md:mt-[20px] lg:mt-[20px]" +
            (anime ? " mt-[20px] opacity-100" : " mt-[30px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".5s" : "0s",
          }}
        >
          {/* <div className="w-full md:w-[250px] lg:w-[250px]  h-[200px] md:h-[170px] lg:h-[170px] rounded-2xl bg-[#efefef]"></div> */}
          <div className="w-full border border-[#efefef] hover:bg-[#f5f5f5] cursor-pointer rounded-2xl flex flex-col justify-start items-start  p-[20px] ">
            <div className="text-[22px]">GetWeather</div>
            <div className="text-[15px] text-[#404040] mt-[5px]">
              GetWeather – a global weather forecasting website providing
              real-time weather details with a configurable UI. Access accurate
              weather data anywhere in the world on a responsive platform.
            </div>
            <Same />
          </div>
        </a>
        <a
          href="https://squidtictactoe.netlify.app/"
          target="_blank"
          className={
            "w-full flex flex-col md:flex-row lg:flex-row justify-start items-start mt-[20px] md:mt-[20px] lg:mt-[20px]" +
            (anime ? " mt-[20px] opacity-100" : " mt-[30px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".7s" : "0s",
          }}
        >
          {/* <div className="w-full md:w-[250px] lg:w-[250px]  h-[200px] md:h-[170px] lg:h-[170px] rounded-2xl bg-[#efefef]">
            <img
              className="rounded-2xl w-full h-full object-cover"
              src={im1}
            ></img>
          </div> */}
          <div className="w-full border border-[#efefef] hover:bg-[#f5f5f5] cursor-pointer rounded-2xl flex flex-col justify-start items-start  p-[20px] ">
            <div className="text-[22px]">Tic Tac Toe</div>
            <div className="text-[15px] text-[#404040] mt-[5px]">
              Tic Tac Toe - a classic Tic Tac Toe game, built for seamless play
              on any device. Enjoy strategic gameplay with a responsive design
              for both smartphones and PCs.
            </div>
            <Same />
          </div>
        </a>
        {/* <a
          href="https://mycalculatorio.netlify.app/"
          target="_blank"
          className={
            "w-full flex flex-col md:flex-row lg:flex-row justify-start items-start mt-[20px] md:mt-[20px] lg:mt-[20px] mb-[60px]" +
            (anime ? " mt-[20px] opacity-100" : " mt-[30px] opacity-0")
          }
          style={{
            transition: anime ? ".4s" : "none",
            transitionDelay: anime ? ".9s" : "0s",
          }}
        >
          
          <div className="w-full border border-[#efefef] hover:bg-[#f5f5f5] cursor-pointer rounded-2xl flex flex-col justify-start items-start  p-[20px] ">
            <div className="text-[22px]">My Calculator</div>
            <div className="text-[15px] text-[#404040] mt-[5px]">
              Mine It – a thrilling block-finding game where players must
              uncover diamond blocks while avoiding hidden bombs. Test your
              skills across easy, medium, and hard difficulty levels.
            </div>
            <Same />
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default ExtraProjects;
