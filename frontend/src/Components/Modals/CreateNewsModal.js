import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useContext } from "react";
import { Global } from "../../Context/GlobalContext";

export const CreateNewsModal = () => {
  const { setOpenCreateModal, mobile } = useContext(Global);

  return (
    <div
      className={
        mobile
          ? "fixed z-50 w-full h-full backdrop-blur-md animate-jump-in md:m-auto sm:-mt-72 sm:mb-96 mb-[100vh] sm:p-0 px-10 flex justify-center items-center"
          : "fixed z-50 w-full h-full backdrop-blur-md animate-jump-in m-auto sm:p-0 px-10 flex justify-center items-center"
      }
    >
      <div className="flex flex-col gap-6 md:p-20 p-10 justify-center items-center rounded-2xl shadow-xl bg-white sm:w-1/2 w-full h-96 m-auto mt-36 outline-double outline-offset-4 outline-4 outline-sky-400">
        <div className="bg-sky-400 text-white sm:text-4xl text-3xl rounded-full m-auto p-3">
          <FaCheck />
        </div>
        <h1 className="sm:text-3xl text-2xl font-bold w-full">
          News Created!!!!
        </h1>
        <h2 className="text-lg font-semibold w-full">
          Do you want to publish?
        </h2>
        <div className="flex sm:gap-6 gap-2  justify-center sm:items-center mt-auto w-full">
          <button
            className="sm:p-4 p-3 rounded-xl bg-red-400 text-white font-bold md:text-base text-xs shadow-xl mr-auto"
            onClick={() => setOpenCreateModal(false)}
          >
            Cancel
          </button>
          <button
            className="sm:p-4 p-3 rounded-xl bg-sky-400 text-white font-bold md:text-base text-xs shadow-xl"
            onClick={() => setOpenCreateModal(false)}
          >
            Save as draft
          </button>
          <button
            className="sm:p-4 p-3 rounded-xl bg-sky-400 text-white font-bold md:text-base text-xs  shadow-xl"
            onClick={() => setOpenCreateModal(false)}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
