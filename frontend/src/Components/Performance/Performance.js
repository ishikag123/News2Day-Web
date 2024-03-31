import React from "react";
import { bar_data, pie_data, line_data } from "../../Data/Dummy";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import { Bar, Pie, Line } from "react-chartjs-2";
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);
export const Performance = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center ">
      <div className="flex flex-col w-full justify-center items-center mt-32 animate-fade-down">
        <div className="flex md:flex-row flex-col h-full justify-center items-center w-full md:p-16 sm:p-8 p-4 gap-8">
          {/* Categorywise performance over time */}
          <div className="md:w-1/2 w-full h-full sm:p-16 p-1 md:mr-auto shadow-xl rounded-xl">
            <Bar data={bar_data}></Bar>
          </div>
          {/* Engagement rate over time */}
          <div className="md:w-1/2 w-full h-full sm:p-16 p-1 md:ml-auto shadow-xl rounded-xl">
            <Line data={line_data}></Line>
          </div>
        </div>
        {/* Total likes,share and comments */}
        <div className="h-full flex md:flex-row flex-col gap-32 justify-center items-center w-full font-semibold m-auto md:p-20 sm:p-16 p-10">
          <div className="flex flex-col rounded-3xl bg-[#36c1d3] w-full shadow-2xl gap-2 p-8 text-white text-center text-lg justify-center items-center md:hover:animate-rotate-y animate-delay-300 animate-ease-in animate-alternate-reverse hover:animate-rotate-x cursor-pointer">
            <div className="border-white border-double border-8 rounded-3xl shadow-inner shadow-white md:p-16 p-10 w-full">
              <h1>Total Likes</h1>
              <h1 className="font-bold text-6xl drop-shadow-xl">100k</h1>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl bg-[#3ba8eb] w-full shadow-2xl gap-2 p-8 text-white text-center text-lg justify-center items-center md:hover:animate-rotate-y animate-delay-300 animate-ease-in animate-alternate-reverse hover:animate-rotate-x cursor-pointer">
            <div className="border-white border-double border-8 rounded-3xl shadow-inner shadow-white md:p-16 p-10 w-full">
              <h1>Total Shares</h1>
              <h1 className="font-bold text-6xl drop-shadow-xl">10k</h1>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl bg-[#3b4aeb] w-full shadow-2xl gap-2 p-8 text-white text-center text-lg justify-center items-center md:hover:animate-rotate-y animate-delay-300 animate-ease-in animate-alternate-reverse hover:animate-rotate-x cursor-pointer">
            <div className="border-white border-double border-8 rounded-3xl shadow-inner shadow-white md:p-16 p-10 w-full">
              <h1>Total Comments</h1>
              <h1 className="font-bold text-6xl drop-shadow-xl">20k</h1>
            </div>
          </div>
        </div>
        {/* Overall performance distributed over categories */}
        <div className="flex md:flex-row md:gap-0 gap-16 flex-col-reverse w-full h-full justify-center items-center sm:p-16 p-8">
          <div className="flex flex-col rounded-3xl bg-[#3b8aeb] md:w-3/5 w-full shadow-2xl gap-4 sm:p-24 p-12 text-white sm:text-center sm:text-lg justify-center  items-center m-auto">
            <h1>Most Popular Category</h1>
            <h1 className="font-bold text-6xl drop-shadow-xl">Sports</h1>
            <p className="mt-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis illum cum tempora minus unde ad, explicabo necessitatibus
              excepturi, recusandae distinctio id. Asperiores maxime id non
              cupiditate harum temporibus ut?
            </p>
          </div>
          <div className="sm:w-5/6 md:w-2/5 w-full m-auto h-full p-10 md:ml-auto">
            <Pie data={pie_data}></Pie>
          </div>
        </div>
      </div>
    </div>
  );
};
