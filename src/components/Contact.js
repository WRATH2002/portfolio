import { BiLogoGmail } from "react-icons/bi";
import { BiLogoWhatsapp } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedin } from "react-icons/bi";
import cont from "../assets/img/cont.jpg";

const Contact = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col justify-center bg-white  items-center ">
        <div className="w-[60%] flex justify-start items-center drop-shadow-lg">
          <span className="text-[25px] font-bold">Contact</span>
        </div>
        <div className="w-[60%] flex justify-start items-center drop-shadow-lg">
          <span className="text-[25px] font-bold mt-[10px]">
            Hit me up here !
          </span>
        </div>
        <div className="w-[60%] flex mt-[60px] justify-center items-center ">
          <div className="w-[40%] bg-slate-500 rounded-2xl ">
            <img
              alt="contact"
              className="drop-shadow-lg rounded-2xl"
              src={cont}
            ></img>
          </div>

          <div className="w-[60%] pl-[50px] flex flex-col justify-center items-start drop-shadow-lg">
            <div className="flex justify-center items-center my-[10px] text-[#747474]">
              <BiLogoGmail className="text-[25px]" />
              <span className="ml-[15px]">purkaithimadricollege@gmail.com</span>
            </div>
            <div className="flex justify-center items-center my-[10px] text-[#747474]">
              <BiLogoLinkedin className="text-[25px]" />
              <span className="ml-[15px]">Himadri Purkait</span>
            </div>
            <div className="flex justify-center items-center my-[10px] text-[#747474]">
              <BiLogoWhatsapp className="text-[25px]" />
              <span className="ml-[15px]">8100524419</span>
            </div>
            <div className="flex justify-center items-center my-[10px] text-[#747474]">
              <BiLogoInstagram className="text-[25px]" />
              <span className="ml-[15px]">himadri.1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
