import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { FiEye } from "react-icons/fi";
import { Global } from "../../Context/GlobalContext";
import { ViewNewsModal } from "../Modals/ViewNewsModal";
import { useState, useContext } from "react";

export const ManageNewsFeed = () => {
  const { openViewModal, setOpenViewModal } = useContext(Global);
  const TableHeading = [
    "News_Id",
    "Title",
    "Category",
    "Date",
    "Status",
    "Operations",
  ];
  const dummy = [
    {
      news_id: 1,
      title: "India Won WorldCup",
      category: "Sports",
      date: "2011-04-02",
      status: "Published",
    },

    {
      news_id: 2,
      title: "Dolor Sit Amet",
      category: "Sports",
      date: "2024-03-26",
      status: "Draft",
    },
    {
      news_id: 3,
      title: "Consectetur Adipiscing Elit",
      category: "Science",
      date: "2024-03-25",
      status: "Published",
    },
    {
      news_id: 4,
      title: "Lorem Ipsum",
      category: "Technology",
      date: "2024-03-27",
      status: "Published",
    },
  ];

  return (
    <div className="w-full h-screen flex flex-col justify-center overflow-auto">
      <div className="w-full h-full mt-32 animate-fade-down flex flex-col sm:p-5 p-2 items-center ">
        <table className="border-2 border-[#36c1d3] w-full md:h-1/2 max-h-full justify-center items-center md:text-lg text-xs shadow-lg">
          <thead className="border-b-2 border-[#36c1d3] bg-[#36c1d375] md:text-xl text-sm">
            <tr>
              {TableHeading.map((item) => (
                <th>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dummy.map((item) => (
              <tr className="border-b-2">
                <td>{item.news_id}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td
                  className={
                    item.status === "Published"
                      ? "text-green-600 font-semibold"
                      : "text-gray-600 font-semibold"
                  }
                >
                  {item.status}
                </td>
                <td className="flex sm:gap-5 gap-1 justify-center items-center md:text-2xl text-lg font-bold text-gray-600 my-8">
                  <button className="text-red-600 ">
                    <RiDeleteBin6Line />
                  </button>
                  <button>
                    <TbEdit />
                  </button>
                  <button onClick={() => setOpenViewModal(true)}>
                    <FiEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openViewModal && <ViewNewsModal />}
    </div>
  );
};
