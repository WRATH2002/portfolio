import yt from "../assets/img/yt.png";
import ttt from "../assets/img/ttt.png";
import ff from "../assets/img/ff.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Projects = () => {
  return (
    <>
      <div className="w-full h-[1600px] lg:h-[1500px] md:h-[1500px] flex flex-col justify-center bg-slate-100  items-center ">
        <div className="w-[75%] lg:w-[60%] md:w-[75%] flex justify-start items-center drop-shadow-lg">
          <span className="text-[25px] font-bold">Portfolio</span>
        </div>
        <div className="w-[75%] lg:w-[60%] md:w-[75%] mt-[30px] flex flex-col lg:flex-row md:flex-row bg-slate-50 justify-center items-center p-[20px]  rounded-3xl  drop-shadow-lg">
          <img
            className="w-full lg:w-[60%] md:w-[60%] rounded-2xl drop-shadow-lg"
            alt="youtube"
            src={yt}
          ></img>
          <div className="w-full lg:w-[40%] md:w-[40%]  flex flex-col justify-center items-start pl-0 lg:pl-[25px] md:pl-[25px] drop-shadow-lg">
            <span className="text-[22px] lg:text-[25px] md:text-[25px] font-bold mt-[10px] lg:mt-0 md:mt-0">
              Play Next
            </span>
            <span className="text-[#747474] mt-[10px] text-[14px] lg:text-[16px] md:text-[16px] text-justify">
              Play Next is a responsive website where user can watch videos as
              per their need. Fully functional website with video search,
              related videos and realtime comments and views
            </span>
            <div className="flex justify-center items-center w-full mt-[20px] text-[14px] lg:text-[16px] md:text-[16px]">
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                React
              </span>
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                JavaScript
              </span>
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                Tailwind
              </span>
            </div>
            <div className="w-full flex justify-center items-center mt-[20px] lg:mt-[38px] md:mt-[38px]">
              <a href="https://playynext.netlify.app/" target="_blank">
                <button className="whitespace-nowrap w-[150px] flex justify-center items-center font-semibold text-[16px] lg:text-[18px] md:text-[18px]">
                  Live Demo{" "}
                  <FaArrowUpRightFromSquare className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[75%] lg:w-[60%] md:w-[75%] mt-[50px] flex bg-slate-50 flex-col lg:flex-row md:flex-row justify-center items-center p-[20px]  rounded-3xl  drop-shadow-lg">
          <img
            className="w-full lg:w-[60%] md:w-[60%] rounded-2xl drop-shadow-lg"
            alt="youtube"
            src={ff}
          ></img>
          <div className="w-full lg:w-[40%] md:w-[40%] flex flex-col justify-center items-start pl-0 lg:pl-[25px] md:pl-[25px] drop-shadow-lg">
            <span className="text-[22px] lg:text-[25px] md:text-[25px] font-bold mt-[10px] lg:mt-0 md:mt-0">
              Food Fave
            </span>
            <span className="text-[#747474] mt-[10px] text-justify text-[14px] lg:text-[16px] md:text-[16px]">
              Food Fave is a website where user can order foods with various
              restuarants as per their need. Fully functional website with
              restuarant search, restuarant menu and functional cart and total
              payment.
            </span>
            <div className="flex justify-center items-center w-full mt-[20px] text-[14px] lg:text-[16px] md:text-[16px]">
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                React
              </span>
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                JavaScript
              </span>
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                CSS
              </span>
            </div>
            <div className="w-full flex justify-center items-center mt-[20px] lg:mt-[38px] md:mt-[38px]">
              <a href="https://foodfave.netlify.app/" target="_blank">
                <button className="whitespace-nowrap w-[150px] flex justify-center items-center font-semibold text-[16px] lg:text-[18px] md:text-[18px]">
                  Live Demo{" "}
                  <FaArrowUpRightFromSquare className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-[75%] lg:w-[60%] md:w-[75%] mt-[50px] flex bg-slate-50 flex-col lg:flex-row md:flex-row justify-center items-center p-[20px]  rounded-3xl  drop-shadow-lg">
          <img
            className="w-full lg:w-[60%] md:w-[60%] rounded-2xl drop-shadow-lg"
            alt="youtube"
            src={ttt}
          ></img>
          <div className="w-full lg:w-[40%] md:w-[40%] flex flex-col justify-center items-start pl-0 lg:pl-[25px] md:pl-[25px] drop-shadow-lg">
            <span className="text-[22px] lg:text-[25px] md:text-[25px] font-bold mt-[10px] lg:mt-0 md:mt-0">
              Tic Tac Toe
            </span>
            <span className="text-[#747474] mt-[10px] text-justify text-[14px] lg:text-[16px] md:text-[16px]">
              Tic Tac Toe is a responsive website where user can play tic tac
              toe game with their friends as well as with PC. Fully Functional
              with gameplay sound.
            </span>
            <div className="flex justify-center items-center w-full mt-[20px] text-[14px] lg:text-[16px] md:text-[16px]">
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                React
              </span>
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                JavaScript
              </span>
              <span className="mx-[10px] font-semibold  flex justify-center items-center rounded-full">
                Tailwind
              </span>
            </div>
            <div className="w-full flex justify-center items-center mt-[20px] lg:mt-[38px] md:mt-[38px]">
              <a href="https://squidtictactoe.netlify.app/" target="_blank">
                <button className="whitespace-nowrap w-[150px] flex justify-center items-center font-semibold text-[16px] lg:text-[18px] md:text-[18px]">
                  Live Demo{" "}
                  <FaArrowUpRightFromSquare className="ml-[15px]  text-[14px] lg:text-[16px] md:text-[16px]" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
