import React from "react";
import { FaCheck } from "react-icons/fa6";
import { useContext } from "react";
import { Global } from "../../Context/GlobalContext";

export const CreateNewsModal = () => {
  const { setOpenCreateModal } = useContext(Global);

  return (
    <div className="fixed z-50 w-full h-full backdrop-blur-md animate-jump-in ">
      <div className="flex flex-col gap-6 p-20 justify-center items-center rounded-2xl shadow-xl bg-white w-1/2 h-96 m-auto mt-36 outline-double outline-offset-4 outline-4 outline-sky-400">
        <div className="bg-sky-400 text-white text-4xl rounded-full m-auto p-3">
          <FaCheck />
        </div>
        <h1 className="text-3xl font-bold w-full">News Created!!!!</h1>
        <h2 className="text-lg font-semibold w-full">
          Do you want to publish?
        </h2>
        <div className="flex gap-6 justify-center items-center mt-auto w-full">
          <button
            className="p-4 rounded-xl bg-red-400 text-white font-bold shadow-xl mr-auto"
            onClick={() => setOpenCreateModal(false)}
          >
            Cancel
          </button>
          <button
            className="p-4 rounded-xl bg-sky-400 text-white font-bold shadow-xl"
            onClick={() => setOpenCreateModal(false)}
          >
            Save as draft
          </button>
          <button
            className="p-4 rounded-xl bg-sky-400 text-white font-bold shadow-xl"
            onClick={() => setOpenCreateModal(false)}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
