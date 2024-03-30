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
        <div className="flex h-full justify-center items-center w-full p-16 gap-8">
          {/* Categorywise performance over time */}
          <div className="w-1/2 h-full p-16 mr-auto shadow-xl rounded-xl">
            <Bar data={bar_data}></Bar>
          </div>
          {/* Engagement rate over time */}
          <div className="w-1/2 h-full p-16 ml-auto shadow-xl rounded-xl">
            <Line data={line_data}></Line>
          </div>
        </div>
        {/* Total likes,share and comments */}
        <div className="h-full flex gap-32 w-full font-semibold m-auto p-20">
          <div className="flex flex-col rounded-3xl bg-[#36c1d3] w-full shadow-2xl gap-2 p-8 text-white text-center text-lg justify-center items-center hover:animate-rotate-y hover:animate-delay-300 hover:animate-ease-in hover:animate-alternate-reverse cursor-pointer">
            <div className="border-white border-double border-8 rounded-3xl shadow-inner shadow-white p-16 w-full">
              <h1>Total Likes</h1>
              <h1 className="font-bold text-6xl drop-shadow-xl">100k</h1>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl bg-[#3ba8eb] w-full shadow-2xl gap-2 p-8 text-white text-center text-lg justify-center items-center hover:animate-rotate-y hover:animate-delay-300 hover:animate-ease-in hover:animate-alternate-reverse cursor-pointer">
            <div className="border-white border-double border-8 rounded-3xl shadow-inner shadow-white p-16 w-full">
              <h1>Total Shares</h1>
              <h1 className="font-bold text-6xl drop-shadow-xl">10k</h1>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl bg-[#3b4aeb] w-full shadow-2xl gap-2 p-8 text-white text-center text-lg justify-center items-center hover:animate-rotate-y hover:animate-delay-300 hover:animate-ease-in hover:animate-alternate-reverse cursor-pointer">
            <div className="border-white border-double border-8 rounded-3xl shadow-inner shadow-white p-16 w-full">
              <h1>Total Comments</h1>
              <h1 className="font-bold text-6xl drop-shadow-xl">20k</h1>
            </div>
          </div>
        </div>
        {/* Overall performance distributed over categories */}
        <div className="flex w-full h-full justify-center items-center p-16">
          <div className="flex flex-col rounded-3xl bg-[#3b8aeb] w-3/5 shadow-2xl gap-4 p-24 text-white text-center text-lg justify-center items-center m-auto">
            <h1>Most Popular Category</h1>
            <h1 className="font-bold text-6xl drop-shadow-xl">Sports</h1>
            <p className="mt-16">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              nobis illum cum tempora minus unde ad, explicabo necessitatibus
              excepturi, recusandae distinctio id. Asperiores maxime id non
              cupiditate harum temporibus ut?
            </p>
          </div>
          <div className="w-2/5 h-full p-10 ml-auto">
            <Pie data={pie_data}></Pie>
          </div>
        </div>
      </div>
    </div>
  );
};
