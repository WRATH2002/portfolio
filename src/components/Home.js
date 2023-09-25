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
        <div className="mt-[75px] w-[75%] lg:w-[60%] md:w-[75%] flex flex-col justify-center items-center lg:h-[370px] md:h-[370px] h-[calc(100vh-100px)] ">
          <div className="w-full flex flex-col-reverse lg:flex-row md:flex-row">
            <div className="flex w-full lg:w-[50%] md:w-[50%]">
              <div className="flex flex-col drop-shadow-lg">
                <span className="font-bold text-[30px] lg:text-[50px] md:text-[50px] lg:leading-[3.75rem] md:leading-[3.75rem] leading-[40px] ">
                  Front-End React JS Developer
                </span>
                <span className="lg:text-[19px] md:text-[19px] text-[15px] mt-[20px] text-[#747474]">
                  Hi, I'm Himadri Purkait. A passionate Front-end React
                  Developer based in Kolkata, India. 📍
                </span>
                <span className="flex justify-start items-center mt-[20px] h-[40px]">
                  <span className="flex justify-start items-center  h-[50px] w-[50px]">
                    <a
                      href="https://www.linkedin.com/in/himadri-purkait-315193272"
                      target="_blank"
                    >
                      <BiLogoLinkedin
                        className=" text-[30px] cursor-pointer hover:text-[34px]"
                        style={{ transition: ".3s" }}
                      />
                    </a>
                  </span>

                  <span className="flex justify-center items-center  mx-[5px] h-[50px] w-[50px]">
                    <a
                      href="https://github.com/WRATH2002?tab=repositories"
                      target="_blank"
                    >
                      <BiLogoGithub
                        className="flex justify-center items-center text-[30px]   cursor-pointer hover:text-[34px]"
                        style={{ transition: ".3s" }}
                      />
                    </a>
                  </span>
                </span>
              </div>
              <div className="h-[50px] w-"></div>
            </div>
            <div className="w-full lg:w-[50%] md:w-[50%] flex justify-center md:justify-end lg:justify-end items-center">
              <div className="h-[130px] w-[130px] mb-[50px] lg:mb-0 md:mb-0 md:h-[230px] md:w-[230px] lg:h-[230px] lg:w-[230px] flex justify-center items-center  border-[2px] rounded-full  ">
                <img
                  className="h-[130px] w-[130px] md:h-[230px] md:w-[230px] lg:h-[230px] lg:w-[230px] object-cover rounded-full drop-shadow-lg"
                  alt="photo"
                  src={photo}
                ></img>
              </div>
            </div>
          </div>
          <div className="w-full text-[19px]  font-semibold mt-[25px] lg:mt-[60px] md:mt-[60px] flex flex-col lg:flex-row md:flex-row justify-start items-center drop-shadow-lg">
            Tech Stack{" "}
            <span className="hidden md:flex lg:flextext-[24px] font-normal justify-center items-center ml-[20px]">
              |
            </span>
            <div className="flex flex-row  mt-[18px] lg:mt-[0px] md:mt-[0px]">
              <img
                alt="html"
                className="w-[30px] md:w-[45px] lg:w-[45px] mx-[5px] cursor-pointer ml-0 lg:ml-[20px] md:ml-[20px]"
                src={html}
              ></img>
              <img
                alt="css"
                className="w-[30px] md:w-[45px] lg:w-[45px] mx-[5px] cursor-pointer"
                src={css}
              ></img>
              <img
                alt="javascript"
                className="w-[30px] md:w-[45px] lg:w-[45px] mx-[5px] cursor-pointer"
                src={javascript}
              ></img>
              <img
                alt="react"
                className="w-[30px] md:w-[45px] lg:w-[45px] mx-[5px] cursor-pointer"
                src={react}
              ></img>
              <img
                alt="tailwind"
                className="w-[30px] md:w-[45px] lg:w-[45px] mx-[5px] cursor-pointer"
                src={tailwind}
              ></img>
            </div>
            {/* <a href="www.google.com">a</a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
