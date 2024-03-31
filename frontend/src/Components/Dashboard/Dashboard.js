import React from "react";
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex w-full h-screen justify-center">
      <div className="flex mt-32 md:flex-row flex-col w-full md:gap-0 gap-20">
        <div className="flex flex-col md:w-3/5 w-full h-full md:rounded-r-3xl bg-[#86e5fa70] md:h-5/6 sm:p-16 px-10 py-6 text-left sm:gap-10 gap-3 font-serif md:shadow-lg md:animate-fade-right animate-fade-down m-0">
          <h1 className="sm:text-5xl text-4xl font-bold mt-10 mb-10 text-gray-600">
            News2Day
          </h1>
          <p className="sm:text-lg text-sm text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            expedita sint nulla earum voluptates repellat cum, quis voluptatem
            dolore commodi aspernatur reiciendis autem, non ut? Vero commodi
            natus officia dolorem? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque blanditiis odio similique fugiat laborum
            dignissimos, saepe provident recusandae incidunt unde sunt aliquid
            pariatur ut quisquam velit, minima, nobis beatae quibusdam?
          </p>
          <div className="flex gap-5 md:mt-auto mt-10 mb-5">
            <Link to="/manage-news-feed">
              <button className="flex justify-center items-center gap-2 sm:text-lg text-xs bg-[#3b8beb] sm:p-4 p-3 rounded-2xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer sm:font-bold font-semibold">
                Manage News Feed
              </button>
            </Link>
            <Link to="/performance-report">
              <button className="flex justify-center items-center gap-2 sm:text-lg text-xs bg-[#3b8beb] sm:p-4 p-3 rounded-2xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer sm:font-bold font-semibold">
                View Performance Report
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:w-1/3 w-full md:ml-auto md:m-0 md:text-left m-auto h-full md:p-0 p-10 sm:justify-normal justify-center">
          <div className="flex flex-col gap-1 md:animate-fade-left md:animate-ease-in md:animate-duration-[800ms] md:animate-delay-100 cursor-pointer md:hover:animate-none hover:animate-wiggle">
            <h1 className="text-sm font-semibold md:ml-8">
              Top Performed News
            </h1>
            <div className="flex md:rounded-l-full rounded-2xl bg-[#36c1d3] w-full md:p-8 sm:p-12 p-8 font-semibold shadow-lg gap-2 md:font-normal  text-white">
              <h2 className="text-xl">News1</h2>
              <div className="flex ml-auto sm:gap-4 gap-2 text-sm">
                <div className="flex ml-auto justify-center items-center gap-1 sm:text-lg">
                  1k
                  <BiLike />
                </div>
                <div className="flex ml-auto justify-center items-center gap-1 sm:text-lg">
                  1k
                  <PiShareFat />
                </div>
                <div className="flex ml-auto justify-center items-center gap-1 sm:text-lg">
                  1k
                  <FaRegComment />
                </div>
                {/* <div className="flex ml-auto justify-center items-center gap-1 text-lg">
                  1k
                  <FaWhatsapp />
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:animate-fade-left md:animate-ease-in md:animate-duration-[800ms] md:animate-delay-500 cursor-pointer  md:hover:animate-none hover:animate-wiggle">
            <h1 className="text-sm font-semibold sm:ml-8">Top Shared News</h1>
            <div className="flex md:rounded-l-full rounded-2xl bg-[#3ba8eb] w-full md:p-8 sm:p-12 p-8 font-semibold shadow-lg gap-2 md:font-normal  text-white">
              <h2 className="text-xl">News1</h2>

              <div className="flex ml-auto justify-center items-center gap-1 sm:text-lg text-sm">
                1k
                <PiShareFat />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 md:animate-fade-left md:animate-ease-in md:animate-duration-[800ms] md:animate-delay-1000 cursor-pointer  md:hover:animate-none hover:animate-wiggle">
            <h1 className="text-sm font-semibold sm:ml-8">
              Top Commented News
            </h1>
            <div className="flex md:rounded-l-full rounded-2xl bg-[#3b4aeb] w-full md:p-8 sm:p-12 p-8 font-semibold shadow-lg gap-2 md:font-normal  text-white">
              <h2 className="text-xl">News1</h2>

              <div className="flex ml-auto justify-center items-center gap-1 sm:text-lg text-sm">
                1k
                <FaRegComment />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
