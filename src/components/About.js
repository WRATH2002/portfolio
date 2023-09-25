import pcc from "../assets/img/pcc.jpg";

const About = (props) => {
  return (
    <>
      {props.data === true ? (
        <>
          <div
            className="w-full h-[100vh] bg-black text-white flex justify-center items-center "
            style={{ transition: ".3s" }}
          >
            <div className="w-[75%] lg:w-[60%] md:w-[75%]  flex  h-[370px] flex-col lg:flex-row md:flex-row  justify-center items-center">
              <div className="w-full lg:w-[40%] md:w-[40%] bg-slate-500 rounded-2xl drop-shadow-lg">
                <img
                  src={pcc}
                  className="w-full h-[180px] lg:h-[250px] md:h-[250px] object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-full lg:w-[60%] md:w-[60%] pl-0 lg:pl-[50px] md:pl-[50px] flex flex-col justify-center items-start drop-shadow-lg  mt-[15px] lg:mt-0 md:mt-0">
                <span className="text-[22px] lg:text-[25px] md:text-[25px] font-bold">
                  About Me
                </span>
                <span className="text-[20px] lg:text-[22px]  md:text-[22px]  font-semibold leading-[30px] mt-[8px] lg:mt-[3px] md:mt-[3px]">
                  A dedicated Front-end Developer open to Face New Challenges &
                  Learn New Things
                </span>
                <span className="text-[#747474] text-[14px] lg:text-[16px] md:text-[16px] text-justify mt-[17px]">
                  As a Junior Front-End Developer, I possess an impressive
                  arsenal of skills in HTML, CSS, JavaScript, React, Tailwind,
                  and CSS. I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic, engaging responsive interfaces
                  through minimilastic UI design and optimized code.
                </span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="w-full h-[100vh] bg-white flex justify-center items-center "
            style={{ transition: ".3s" }}
          >
            <div className="w-[75%] lg:w-[60%] md:w-[75%]  flex  h-[370px] flex-col lg:flex-row md:flex-row  justify-center items-center">
              <div className="w-full lg:w-[40%] md:w-[40%] bg-slate-500 rounded-2xl drop-shadow-lg">
                <img
                  src={pcc}
                  className="w-full h-[180px] lg:h-[250px] md:h-[250px] object-cover rounded-2xl"
                ></img>
              </div>
              <div className="w-full lg:w-[60%] md:w-[60%] pl-0 lg:pl-[50px] md:pl-[50px] flex flex-col justify-center items-start drop-shadow-lg  mt-[15px] lg:mt-0 md:mt-0">
                <span className="text-[22px] lg:text-[25px] md:text-[25px] font-bold">
                  About Me
                </span>
                <span className="text-[20px] lg:text-[22px]  md:text-[22px]  font-semibold leading-[30px] mt-[8px] lg:mt-[3px] md:mt-[3px]">
                  A dedicated Front-end Developer open to Face New Challenges &
                  Learn New Things
                </span>
                <span className="text-[#747474] text-[14px] lg:text-[16px] md:text-[16px] text-justify mt-[17px]">
                  As a Junior Front-End Developer, I possess an impressive
                  arsenal of skills in HTML, CSS, JavaScript, React, Tailwind,
                  and CSS. I excel in designing and maintaining responsive
                  websites that offer a smooth user experience. My expertise
                  lies in crafting dynamic, engaging responsive interfaces
                  through minimilastic UI design and optimized code.
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default About;
