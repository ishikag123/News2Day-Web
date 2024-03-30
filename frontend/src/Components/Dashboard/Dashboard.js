import React from "react";
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex mt-32">
        <div className="flex flex-col w-3/5 rounded-r-3xl bg-[#86e5fa70] h-5/6 p-16 text-left gap-10 font-serif shadow-lg animate-fade-right">
          <h1 className="text-5xl font-bold mt-10 mb-10 text-gray-600">
            News2Day
          </h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            expedita sint nulla earum voluptates repellat cum, quis voluptatem
            dolore commodi aspernatur reiciendis autem, non ut? Vero commodi
            natus officia dolorem? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Eaque blanditiis odio similique fugiat laborum
            dignissimos, saepe provident recusandae incidunt unde sunt aliquid
            pariatur ut quisquam velit, minima, nobis beatae quibusdam?
          </p>
          <div className="flex gap-5 mt-auto mb-5">
            <Link to="/manage-news-feed">
              <button className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-2xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer font-bold">
                Manage News Feed
              </button>
            </Link>
            <Link to="/performance-report">
              <button className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-2xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer font-bold">
                View Performance Report
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-10 w-1/3 ml-auto text-left">
          <div className="flex flex-col gap-1 animate-fade-left animate-ease-in animate-duration-[800ms] animate-delay-100">
            <h1 className="text-sm font-semibold ml-8">Top Performed News</h1>
            <div className="flex rounded-l-full bg-[#36c1d3] w-full p-8 shadow-lg gap-2 text-white">
              <h2 className="text-xl">News1</h2>
              <div className="flex ml-auto gap-4">
                <div className="flex ml-auto justify-center items-center gap-1 text-lg">
                  1k
                  <BiLike />
                </div>
                <div className="flex ml-auto justify-center items-center gap-1 text-lg">
                  1k
                  <PiShareFat />
                </div>
                <div className="flex ml-auto justify-center items-center gap-1 text-lg">
                  1k
                  <FaRegComment />
                </div>
                <div className="flex ml-auto justify-center items-center gap-1 text-lg">
                  1k
                  <FaWhatsapp />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 animate-fade-left animate-ease-in animate-duration-[800ms] animate-delay-500">
            <h1 className="text-sm font-semibold ml-8">Top Shared News</h1>
            <div className="flex rounded-l-full bg-[#3ba8eb] w-full p-8 shadow-lg gap-2 text-white">
              <h2 className="text-xl">News1</h2>

              <div className="flex ml-auto justify-center items-center gap-1 text-lg">
                1k
                <PiShareFat />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 animate-fade-left animate-ease-in animate-duration-[800ms] animate-delay-1000">
            <h1 className="text-sm font-semibold ml-8">Top Commented News</h1>
            <div className="flex rounded-l-full bg-[#3b4aeb] w-full p-8 shadow-lg gap-2 text-white">
              <h2 className="text-xl">News1</h2>

              <div className="flex ml-auto justify-center items-center gap-1 text-lg">
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
