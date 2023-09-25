import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoTelegram } from "react-icons/bi";
import cont from "../assets/img/cont.jpg";

const Contact = (props) => {
  return (
    <>
      {props.data === true ? (
        <>
          <div
            className="w-full h-[100vh] flex flex-col justify-center bg-black text-white   items-center "
            style={{ transition: ".3s" }}
          >
            <div className="w-[75%] lg:w-[60%] md:w-[60%] flex justify-start items-center drop-shadow-lg">
              <span className="text-[22px] lg:text-[25px] md:text-[25px] font-bold">
                Contact
              </span>
            </div>
            <div className="w-[75%] lg:w-[60%] md:w-[60%] flex justify-start items-center drop-shadow-lg">
              <span className="text-[20px] lg:text-[22px]  md:text-[22px]  flex items-center justify-center  font-bold mt-[10px]">
                Hit me up here <BiLogoTelegram className="ml-[18px]" />
              </span>
            </div>
            <div className="w-[75%] lg:w-[60%] md:w-[75%] flex flex-col lg:flex-row md:flex-row mt-[25px] lg:mt-[60px] md:mt-[60px] justify-center items-center ">
              <div className="w-full lg:w-[40%] md:w-[40%] bg-slate-500 rounded-2xl ">
                <img
                  alt="contact"
                  className="drop-shadow-lg rounded-2xl"
                  src={cont}
                ></img>
              </div>

              <div className="w-full lg:w-[60%]  md:w-[60%] pl-0 lg:pl-[50px] md:pl-[50px] flex flex-col justify-center items-start drop-shadow-lg mt-[20px] lg:mt-0 md:mt-0">
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoGmail className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    purkaithimadricollege@gmail.com
                  </span>
                </div>
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoLinkedin className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    Himadri Purkait
                  </span>
                </div>
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoWhatsapp className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    8100524419
                  </span>
                </div>
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoInstagram className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    himadri.1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="w-full h-[100vh] flex flex-col justify-center bg-white  items-center "
            style={{ transition: ".3s" }}
          >
            <div className="w-[75%] lg:w-[60%] md:w-[60%] flex justify-start items-center drop-shadow-lg">
              <span className="text-[22px] lg:text-[25px] md:text-[25px] font-bold">
                Contact
              </span>
            </div>
            <div className="w-[75%] lg:w-[60%] md:w-[60%] flex justify-start items-center drop-shadow-lg">
              <span className="text-[20px] lg:text-[22px]  md:text-[22px]  flex items-center justify-center  font-bold mt-[10px]">
                Hit me up here <BiLogoTelegram className="ml-[18px]" />
              </span>
            </div>
            <div className="w-[75%] lg:w-[60%] md:w-[75%] flex flex-col lg:flex-row md:flex-row mt-[25px] lg:mt-[60px] md:mt-[60px] justify-center items-center ">
              <div className="w-full lg:w-[40%] md:w-[40%] bg-slate-500 rounded-2xl ">
                <img
                  alt="contact"
                  className="drop-shadow-lg rounded-2xl"
                  src={cont}
                ></img>
              </div>

              <div className="w-full lg:w-[60%]  md:w-[60%] pl-0 lg:pl-[50px] md:pl-[50px] flex flex-col justify-center items-start drop-shadow-lg mt-[20px] lg:mt-0 md:mt-0">
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoGmail className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    purkaithimadricollege@gmail.com
                  </span>
                </div>
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoLinkedin className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    Himadri Purkait
                  </span>
                </div>
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoWhatsapp className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    8100524419
                  </span>
                </div>
                <div className="flex justify-center items-center my-[10px] text-[#747474]">
                  <BiLogoInstagram className="text-[25px]" />
                  <span className="ml-[15px] text-[14px] lg:text-[16px] md:text-[16px]">
                    himadri.1
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
