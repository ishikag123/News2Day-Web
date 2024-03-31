import React from "react";
import { useContext } from "react";
import { Global } from "../../Context/GlobalContext";

export const ViewNewsModal = ({ id }) => {
  const { setOpenViewModal } = useContext(Global);
  return (
    <div className="fixed z-50 w-full h-full backdrop-blur-md animate-jump-in overflow-auto sm:p-16 p-10">
      <div className="flex flex-col gap-6 sm:p-10 p-6 rounded-2xl shadow-xl bg-white md:w-1/2 w-full h-full m-auto  outline-double outline-offset-4 outline-4 outline-sky-400">
        <div className="flex flex-col gap-2 w-full h-6/7 overflow-y-auto text-left">
          <h1 className="sm:text-4xl text-3xl m-auto p-3 w-full text-gray-700 font-bold">
            Title
          </h1>
          <div className="sm:p-3 p-2 rounded-3xl bg-slate-500 text-white flex justify-center items-center mr-auto sm:text-base text-xs">
            Category
          </div>
          <div className="w-full flex gap-4">
            {/* Image
            Video */}
          </div>
          <p className="sm:text-base text-sm overflow-y-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            obcaecati doloribus harum dolorum rem at odit vero ex nesciunt eaque
            quas placeat quasi maiores, accusantium aliquid est, praesentium
            reiciendis totam. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nam aliquid reiciendis suscipit, veniam unde
            neque, iure ratione, mollitia architecto dolor soluta! Error culpa,
            necessitatibus distinctio quibusdam aliquam recusandae libero
            dolorem.
          </p>
        </div>
        <div className="flex gap-6 justify-center items-center mt-auto w-full">
          <button
            className="sm:p-4 p-3 rounded-xl bg-red-400 text-white font-bold shadow-xl mr-auto"
            onClick={() => setOpenViewModal(false)}
          >
            Close
          </button>
          <button className="sm:p-4 p-3 rounded-xl bg-sky-400 text-white font-bold shadow-xl">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
