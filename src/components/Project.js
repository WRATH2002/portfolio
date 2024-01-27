import React from "react";
import chatgpt from "../assets/img/chtagpt.jpg";
import swiggy from "../assets/img/swiggy.jpg";
import chat from "../assets/img/chat.jpg";
import youtube from "../assets/img/youtube.webp";

const Project = () => {
  return (
    <div className="w-[23%] h-[250px]  rounded-lg">
      <div className="w-full h-[150px]">
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={chatgpt}
        ></img>
      </div>
      <div className="w-full h-[100px] rounded-b-lg bg-white  p-[20px]"></div>
    </div>
  );
};

export default Project;
