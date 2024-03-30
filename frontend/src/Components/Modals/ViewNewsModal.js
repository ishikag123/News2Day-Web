import React from "react";
import { useContext } from "react";
import { Global } from "../../Context/GlobalContext";

export const ViewNewsModal = ({ id }) => {
  const { setOpenViewModal } = useContext(Global);
  return (
    <div className="fixed z-50 w-full h-full backdrop-blur-md animate-jump-in overflow-auto p-16">
      <div className="flex flex-col gap-6 p-10 rounded-2xl shadow-xl bg-white w-1/2 h-full m-auto  outline-double outline-offset-4 outline-4 outline-sky-400">
        <div className="flex flex-col gap-2 w-full h-6/7 overflow-y-auto text-left">
          <h1 className="text-4xl m-auto p-3 w-full text-left text-gray-700 font-bold">
            Title
          </h1>
          <div className="p-3 rounded-3xl bg-slate-500 text-white flex justify-center items-center mr-auto">
            Category
          </div>
          <div className="w-full flex gap-4">
            {/* Image
            Video */}
          </div>
          <p>
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
            className="p-4 rounded-xl bg-red-400 text-white font-bold shadow-xl mr-auto"
            onClick={() => setOpenViewModal(false)}
          >
            Close
          </button>
          <button className="p-4 rounded-xl bg-sky-400 text-white font-bold shadow-xl">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};
