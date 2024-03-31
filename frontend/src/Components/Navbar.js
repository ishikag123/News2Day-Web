import React from "react";
import { Link } from "react-router-dom";
import img from "../Assets/logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { useState } from "react";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="w-screen sm:p-2 p-3 sm:px-6 flex md:flex-row flex-col justify-center items-center z-50 fixed bg-[#ffffffce]">
      <div className="flex justify-center md:w-1/5 w-full items-center mr-auto">
        <img src={img} alt="" className="w-16 h-16 rounded-full mr-auto" />
        <div
          className="ml-auto text-4xl text-[#3b8beb] font-extrabold cursor-pointer p-6 md:hidden"
          onClick={() => setMenu(!menu)}
        >
          <RiMenu3Line />
        </div>
      </div>
      <ul className="hidden md:flex gap-3 ml-auto text-xl text-[#3b8beb] transition-all ease-in-out delay-100 font-bold">
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
      {menu && (
        <div className="flex flex-col gap-5 w-full animate-flip-down text-xl font-semibold p-6 text-[#3b8beb]">
          <Link
            to="/"
            className="hover:text-[#5692dcbb] focus:bg-[#5692dcbb]  focus:text-white rounded-2xl transition-all ease-in-out delay-100 p-6 w-full"
          >
            Dashboard
          </Link>
          <Link
            to="/create-news"
            className="hover:text-[#5692dcbb] focus:bg-[#5692dcbb] focus:text-white rounded-2xl transition-all ease-in-out delay-100 p-6 w-full"
          >
            Create News
          </Link>
          <Link
            to="/manage-news-feed"
            className="hover:text-[#5692dcbb] focus:bg-[#5692dcbb] focus:text-white rounded-2xl transition-all ease-in-out delay-100 p-6 w-full"
          >
            Manage News Feed
          </Link>
          <Link
            to="/performance-report"
            className="hover:text-[#5692dcbb] focus:bg-[#5692dcbb] focus:text-white rounded-2xl transition-all ease-in-out delay-100 p-6 w-full"
          >
            Performance Report
          </Link>
        </div>
      )}
    </div>
  );
};
