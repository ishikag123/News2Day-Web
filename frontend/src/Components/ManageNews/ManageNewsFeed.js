import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import { FiEye } from "react-icons/fi";

export const ManageNewsFeed = () => {
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
    <div className="w-full h-screen flex justify-center p-5 ">
      <div className="w-full h-full mt-32">
        <table className="border-2 border-[#36c1d3] w-full h-1/2 max-h-full justify-center items-center text-lg shadow-lg">
          <thead className="border-b-2 border-[#36c1d3] bg-[#36c1d375] text-xl">
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
                <td className="flex gap-5 justify-center items-center text-2xl font-bold text-gray-600 my-8">
                  <button className="text-red-600 ">
                    <RiDeleteBin6Line />
                  </button>
                  <button>
                    <TbEdit />
                  </button>
                  <button>
                    <FiEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
