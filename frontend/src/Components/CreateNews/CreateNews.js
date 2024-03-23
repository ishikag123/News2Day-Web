import React from "react";
import { MobileContainer } from "./MobileContainer";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

export const CreateNews = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="flex flex-col w-full md:w-1/2 bg-[#c4dbf6] rounded-lg border-2 border-blue-200 p-10 m-3 items-stretch justify-stretch">
        <form className="flex flex-col gap-10 w-full">
          <input
            type="text"
            placeholder="Add title"
            className="bg-blue-100 rounded-lg p-3 border-2 border-blue-200"
          />
          <input
            type="text"
            placeholder="Category"
            className="bg-blue-100 rounded-lg p-3 border-2 border-blue-200"
          />
          {/* check the height as more content is entered */}
          <input
            type="text"
            placeholder="Write Content"
            className="bg-blue-100 rounded-lg p-3 border-2 pb-40 border-blue-200"
          />
          <div className="flex gap-10">
            <button className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75">
              <TbPhotoSquareRounded className="text-xl" />
              <h2>Add Photos</h2>
            </button>
            <button className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75">
              <IoVideocamOutline className="text-xl" />
              <h2>Add Videos</h2>
            </button>
            <button className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 ml-auto w-36">
              <FaRegPlusSquare className="text-xl" />
              <h2>Create</h2>
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col w-full md:w-1/2 ">
        <button className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 m-3">
          <h2>Click for mobile preview</h2>
          <FaMobileAlt />
        </button>
        <div>
          <MobileContainer />
        </div>
      </div>
    </div>
  );
};
