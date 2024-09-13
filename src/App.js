import logo from "./logo.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import { Projects } from "./components/Projects";
import Smartphone from "./components/Smartphone";
import { ring } from "ldrs";

ring.register();

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [timer, setTimer] = useState(false);
  const [anime, setAnime] = useState(false);
  const [anime1, setAnime1] = useState(false);

  useEffect(() => {
    setAnime(false);
    setTimeout(() => {
      setAnime(true);
    }, 1800);
  }, []);
  useEffect(() => {
    setAnime1(false);
    setTimeout(() => {
      setAnime1(true);
    }, 300);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 4000);
  }, []);

  // function sortcolor() {
  //   let arr = [2, 0, 1, 0, 0, 1, 2, 0, 2, 1, 0, 2];
  //   for (let i = 0; i < 3; i++) {
  //     let pos = 0
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[j] < arr[j - 1]) {
  //         let t = arr[j];
  //         arr[j] = arr[j - 1];
  //         arr[j - 1] = t;
  //       }
  //     }
  //   }
  //   console.log(arr);
  // }
  // useEffect(() => {
  //   sortcolor();
  // }, []);
  return (
    <>
      {/* <AboutMe /> */}
      {timer ? (
        <Smartphone />
      ) : (
        <div className="w-full h-[100svh] flex flex-col justify-center items-center ">
          {/* <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2"
            color="black"
          ></l-ring> */}
          {anime1 ? (
            <>
              <div
                className={
                  " font-[geist] text-[15px] ml-[-90px]" +
                  (anime
                    ? " mb-[-30px] h-[20px] opacity-100"
                    : " mb-[-20px] h-0 opacity-0")
                }
                style={{
                  transition: anime ? ".4s" : "none",
                  transitionDelay: anime ? ".2s" : "0s",
                }}
              >
                welcome to my
              </div>
              <div className="font-[sky2] text-[25px] font-semibold ">
                <svg
                  height="100"
                  stroke="#000000"
                  stroke-width="2.6"
                  class="text-line"
                  width="100%"
                >
                  <text
                    x="50%"
                    dominant-baseline="middle"
                    text-anchor="middle"
                    y="50%"
                  >
                    portfolio
                  </text>
                </svg>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
      {/* <Projects /> */}
    </>
  );
}

export default App;
