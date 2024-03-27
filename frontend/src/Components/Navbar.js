import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/logo.png";
export const Navbar = () => {
  return (
    <div className="w-full p-2 flex justify-center items-center font-serif mb-1">
      <img src={img} alt="" className="w-16 h-16 rounded-full mr-auto m-2" />

      <ul className="flex gap-3 ml-auto text-xl text-[#3b8beb] transition-all ease-in-out delay-100 font-bold">
        <Link
          to="/"
          className="hover:text-[#5692dcbb] focus:border-b-2 border-[#5692dcbb] rounded-lg transition-all ease-in-out delay-100 p-2"
        >
          Dashboard
        </Link>
        <Link
          to="/create-news"
          className="hover:text-[#5692dcbb] focus:border-b-2 border-[#5692dcbb] rounded-lg transition-all ease-in-out delay-100 p-2"
        >
          Create News
        </Link>
        <Link
          to="/manage-news-feed"
          className="hover:text-[#5692dcbb] focus:border-b-2 border-[#5692dcbb] rounded-lg transition-all ease-in-out delay-100 p-2"
        >
          Manage News Feed
        </Link>
        <Link
          to="/performance-report"
          className="hover:text-[#5692dcbb] focus:border-b-2 border-[#5692dcbb] rounded-lg transition-all ease-in-out delay-100 p-2"
        >
          Performance Report
        </Link>
      </ul>
    </div>
  );
};
