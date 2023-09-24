import pcc from "../assets/img/pcc.jpg";

const About = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-white flex justify-center items-center ">
        <div className="w-[60%] flex  h-[370px] flex-row justify-center items-center">
          <div className="w-[40%] bg-slate-500 rounded-2xl drop-shadow-lg">
            <img
              src={pcc}
              className="w-full h-[250px] object-cover rounded-2xl"
            ></img>
          </div>
          <div className="w-[60%] pl-[50px] flex flex-col justify-center items-start drop-shadow-lg ">
            <span className="text-[25px] font-bold">About Me</span>
            <span className="text-[22px] font-semibold leading-[30px] mt-[3px]">
              A dedicated Front-end Developer open to Face New Challenges &
              Learn New Things
            </span>
            <span className="text-[#747474] text-justify mt-[17px]">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and CSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging responsive interfaces through minimilastic UI design and
              optimized code.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
