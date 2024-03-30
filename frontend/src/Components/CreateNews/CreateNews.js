import React, { useState } from "react";
import { useContext } from "react";
import { MobileContainer } from "./MobileContainer";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { Global } from "../../Context/GlobalContext";
import { CreateNewsModal } from "../Modals/CreateNewsModal";
import { Player, BigPlayButton } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css";

export const CreateNews = () => {
  const {
    setMobile,
    mobile,
    setNewsTitle,
    setNewsCat,
    setNewsContent,
    setImage,
    setVideo,
    image,
    video,
    openCreateModal,
    setOpenCreateModal,
  } = useContext(Global);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenCreateModal(true);
  };

  return (
    <div className="flex flex-col h-screen md:flex-row justify-center w-full">
      <div className="flex flex-col md:flex-row mt-28 h-full w-full justify-center px-16">
        <div className="flex flex-col h-5/6 max-h-full w-full md:w-1/2 bg-white rounded-lg border-2 border-blue-200 p-8 m-3 items-stretch justify-stretch gap-10 overflow-y-auto mt-0 shadow-lg shadow-blue-200 animate-fade-down">
          <form
            className="flex flex-col gap-5 w-full h-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Add title"
              className="bg-blue-100 rounded-lg p-3 border-2 border-blue-200"
              onChange={(e) => setNewsTitle(e.target.value)}
              required={true}
            />
            <input
              type="text"
              placeholder="Category"
              className="bg-blue-100 rounded-lg p-3 border-2 border-blue-200"
              onChange={(e) => setNewsCat(e.target.value)}
              required={true}
            />
            <label htmlFor="content">
              <textarea
                cols="80"
                rows="30"
                className="bg-blue-100 rounded-lg p-3 border-2 border-blue-200 w-full overflow-auto max-h-80"
                onChange={(e) => setNewsContent(e.target.value)}
                required={true}
                placeholder="Write Content"
              ></textarea>
            </label>
            {/* <input
            type="text"
            id="content"
           
            className="bg-blue-100 rounded-lg p-3 border-2 pb-40 border-blue-200"
            onChange={(e) => setNewsContent(e.target.value)}
            required={true}
          /> */}

            {(image || video) && (
              <div className="flex gap-5 w-full h-full justify-center items-center transition-all ease-in-out delay-100 animate-fade">
                {image && <img src={image} alt="" className="w-1/2 h-full" />}
                {video && (
                  <Player
                    src={video}
                    playsInline={true}
                    fluid={false}
                    autoPlay={true}
                    muted={false}
                    poster=""
                    preload="auto"
                    width="50%"
                    height="100%"
                    loop={true}
                  >
                    <BigPlayButton position="center" />
                  </Player>
                )}
              </div>
            )}

            <div className="flex gap-5 w-full ">
              <label htmlFor="imgFile">
                <div className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-5 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer font-bold">
                  <TbPhotoSquareRounded className="text-2xl" />
                  {/* <h2>Add Photos</h2> */}
                </div>
              </label>
              <input
                type="file"
                id="imgFile"
                style={{ display: "none" }}
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />

              <label htmlFor="vidFile">
                <div className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-5 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer font-extrabold">
                  <IoVideocamOutline className="text-2xl" />
                  {/* <h2>Add Videos</h2> */}
                </div>
              </label>
              <input
                type="file"
                id="vidFile"
                style={{ display: "none" }}
                onChange={(e) =>
                  setVideo(URL.createObjectURL(e.target.files[0]))
                }
              />
              <div
                className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer"
                onClick={() => setMobile(true)}
              >
                <h2>Click for mobile preview</h2>
                <FaMobileAlt />
              </div>
              <button
                className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 ml-auto w-36"
                //onClick={() => setOpenModal(true)}
                type="submit"
              >
                <FaRegPlusSquare className="text-xl" />
                <h2>Create</h2>
              </button>
            </div>
          </form>
        </div>

        {mobile && (
          <div className="flex flex-col w-full md:w-1/2 animate-fade-left animate-delay-400">
            <MobileContainer />
          </div>
        )}
        {/* </div> */}
      </div>

      {openCreateModal ? <CreateNewsModal /> : <></>}
    </div>
  );
};
