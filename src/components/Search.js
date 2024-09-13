import React, { useState } from "react";

const Arr = [
  {
    name: "Splitwise",
    sub: "An expense tracking, maintaining website",
    section: "project",
    subsection: 0,
  },
  {
    name: "Infinity",
    sub: "A n to n Chatting website",
    section: "project",
    subsection: 1,
  },
  {
    name: "Playnext",
    sub: "A video platform with AI integrated",
    section: "project",
    subsection: 2,
  },
  {
    name: "CheckYourHealth",
    sub: "An IOT based project for Senior Citizens",
    section: "project",
    subsection: 3,
  },
  {
    name: "Walle",
    sub: "An AI Chatbot",
    section: "project",
    subsection: 4,
  },
  {
    name: "Mineit",
    sub: "An interesting game, to find diamonds",
    section: "project",
    subsection: 0,
  },
  {
    name: "Weatherio",
    sub: "Website to get weather related information",
    section: "project",
    subsection: 0,
  },
  {
    name: "Tic Tac Toe",
    sub: "A old and classic Tic Tac Toe game",
    section: "project",
    subsection: 0,
  },
  {
    name: "Calculator",
    sub: "A calculator with 3d design effect",
    section: "project",
    subsection: 0,
  },
  {
    name: "AWS Fundamentals",
    sub: "Professional Certificate - (Coursera)",
    section: "certificate",
    subsection: 0,
  },
  {
    name: "IBM Cybersecurity Analyst",
    sub: "Professional Certificate - (Coursera)",
    section: "certificate",
    subsection: 1,
  },
  {
    name: "Microsoft Azure Cloud Service",
    sub: "Course Certificate - (Coursera)",
    section: "certificate",
    subsection: 2,
  },
  {
    name: "React Basics",
    sub: "Course Certificate - (Coursera)",
    section: "certificate",
    subsection: 3,
  },
  {
    name: "CSS, Bootstrap & JavaScript",
    sub: "Course Certificate - (Udemy)",
    section: "certificate",
    subsection: 4,
  },
  {
    name: "HTML & CSS",
    sub: "Course Certificate - (Udemy)",
    section: "certificate",
    subsection: 5,
  },

  {
    name: "Diversion 2K24",
    sub: "Hackathon Participation Certificate",
    section: "certificate",
    subsection: 0,
  },
  //   {
  //     name: "Splitwise",
  //     sub: "An expense tracking, maintaining website - Individual Project",
  //     section: 0,
  //     subsection: 0,
  //   },
  //   {
  //     name: "Splitwise",
  //     sub: "An expense tracking, maintaining website - Individual Project",
  //     section: 0,
  //     subsection: 0,
  //   },
  //   {
  //     name: "Splitwise",
  //     sub: "An expense tracking, maintaining website - Individual Project",
  //     section: 0,
  //     subsection: 0,
  //   },
];

const Search = (props) => {
  const [query, setQuery] = useState("");

  function searchArray() {
    return Arr.filter((item) => {
      const name = item.name.toLowerCase();
      const searchChars = query.toLowerCase().split("");

      return searchChars.every((char) => name.includes(char));
    });
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div className="w-full h-[100svh] font-[geist] z-[60] flex flex-col justify-start items-center pt-[100px] bg-[#e1e1e19e] backdrop-blur-sm fixed left-0 top-0">
      <div className="w-[calc(100%-40px)] md:w-[500px] lg:w-[500px] flex justify-start items-center mb-[10px] h-[50px] ">
        <div
          className="h-[40px] aspect-square rounded-xl flex justify-center items-center bg-white cursor-pointer"
          onClick={() => {
            props?.setSearchModal(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.7"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      </div>
      <div
        className="w-[calc(100%-40px)] md:w-[500px] lg:w-[500px] drop-shadow-sm  rounded-xl bg-white flex flex-col justify-start items-start max-h-[500px]"
        style={{
          transition: ".3s",
          height:
            query.length == 0
              ? " 50px"
              : searchArray().length == 0
              ? " 110px"
              : `${50 + searchArray().length * 65}px`,
        }}
      >
        <div className="w-full flex justify-start items-center">
          {" "}
          <div className="w-[50px] h-[50px] flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-search"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            className="w-[calc(100%-100px)] h-[50px] pr-[20px] rounded-xl outline-none "
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="search ..."
          ></input>
          <div
            className="w-[50px] h-[50px] flex justify-center items-center cursor-pointer"
            onClick={() => {
              setQuery("");
            }}
          >
            {query.length == 0 ? (
              <></>
            ) : (
              <>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </>
            )}
          </div>
        </div>
        {query.length == 0 ? (
          <></>
        ) : (
          <>
            <div className="w-full flex flex-col justify-start items-start h-[calc(100%-50px)] overflow-y-scroll ">
              {searchArray().length == 0 ? (
                <>
                  <div
                    className="w-full h-[65px] flex flex-col justify-center py-[10px] items-center px-[17px]"
                    style={{ transition: ".05s" }}
                  >
                    <span className="text-[16px]">No Results</span>
                  </div>
                </>
              ) : (
                <>
                  {searchArray()?.map((data, index) => {
                    return (
                      <>
                        <div
                          className={
                            "w-full h-[65px] flex flex-col justify-center hover:bg-[#F3F3F3] py-[10px] cursor-pointer items-start px-[17px]" +
                            (searchArray().length - 1 == index
                              ? " rounded-b-xl"
                              : " rounded-none")
                          }
                          onClick={() => {
                            if (data?.section == "certificate") {
                              props?.setSection("certificate");
                              props?.setIndex(data?.subsection);
                              props?.setSearchModal(false);
                            } else if (data?.section == "project") {
                              props?.setSection("project");
                              props?.setIndex(data?.subsection);
                              props?.setSearchModal(false);
                            }
                          }}
                          style={{ transition: ".05s" }}
                        >
                          <span className="text-[16px]">{data?.name}</span>
                          <span className="text-[14px] text-[#6161619e] mt-[-2px] w-full overflow-hidden text-ellipsis line-clamp-1">
                            {data?.sub}
                          </span>
                        </div>
                      </>
                    );
                  })}
                </>
              )}
            </div>
          </>
        )}
        {/* <div className="mb-[10px]"></div> */}
      </div>
    </div>
  );
};
export default Search;
