import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import javascript from "../assets/img/javascript.png";
import react from "../assets/img/react.png";
import tailwind from "../assets/img/tailwind.png";
import photo from "../assets/img/photo.jpg";

const Home = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-slate-100 flex justify-center items-center ">
        <div className="w-[60%] flex flex-col h-[370px]">
          <div className="w-full flex">
            <div className="flex w-[50%]">
              <div className="flex flex-col drop-shadow-lg">
                <span className="font-bold text-[50px] leading-[3.75rem]">
                  Front-End React JS Developer
                </span>
                <span className="text-[19px] mt-[20px] text-[#747474]">
                  Hi, I'm Himadri Purkait. A passionate Front-end React
                  Developer based in Kolkata, India.
                </span>
                <span className="flex justify-start items-center mt-[20px] h-[40px]">
                  <span className="flex justify-start items-center  h-[50px] w-[50px]">
                    <BiLogoLinkedin
                      className=" text-[30px] cursor-pointer hover:text-[34px]"
                      style={{ transition: ".3s" }}
                    />
                  </span>
                  <span className="flex justify-center items-center  mx-[5px] h-[50px] w-[50px]">
                    <BiLogoGithub
                      className="flex justify-center items-center text-[30px]   cursor-pointer hover:text-[34px]"
                      style={{ transition: ".3s" }}
                    />
                  </span>
                </span>
              </div>
              <div className="h-[50px] w-"></div>
            </div>
            <div className="w-[50%] flex justify-end items-center">
              <div className="h-[230px] w-[230px] flex justify-center items-center  border-[2px] rounded-full  ">
                <img
                  className="h-[230px] w-[230px] object-cover rounded-full drop-shadow-lg"
                  alt="photo"
                  src={photo}
                ></img>
              </div>
            </div>
          </div>
          <div className="text-[19px]  font-semibold mt-[60px] flex justify-start items-center drop-shadow-lg">
            Tech Stack{" "}
            <span className="text-[24px] font-normal flex justify-center items-center ml-[20px]">
              |
            </span>
            <img
              alt="html"
              className="w-[45px] mx-[5px] cursor-pointer ml-[20px]"
              src={html}
            ></img>
            <img
              alt="css"
              className="w-[45px] mx-[5px] cursor-pointer"
              src={css}
            ></img>
            <img
              alt="javascript"
              className="w-[45px] mx-[5px] cursor-pointer"
              src={javascript}
            ></img>
            <img
              alt="react"
              className="w-[45px] mx-[5px] cursor-pointer"
              src={react}
            ></img>
            <img
              alt="tailwind"
              className="w-[45px] mx-[5px] cursor-pointer"
              src={tailwind}
            ></img>
            {/* <a href="www.google.com">a</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
