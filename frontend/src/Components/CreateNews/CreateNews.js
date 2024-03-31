import React, { useState } from "react";
import { useContext } from "react";
import { MobileContainer } from "./MobileContainer";
import { TbPhotoSquareRounded } from "react-icons/tb";
import { IoVideocamOutline } from "react-icons/io5";
import { FaRegPlusSquare } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { MdMobileOff } from "react-icons/md";
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
    <div className="flex flex-col md:h-screen h-full md:flex-row justify-center items-center w-full">
      <div className="flex flex-col md:gap-0 gap-16 md:flex-row h-full md:mt-24 mt-32 w-full justify-center md:px-16 px-10 items-center">
        <div className="flex flex-col h-5/6 md:max-h-full w-full md:w-1/2 bg-white rounded-lg border-2 border-blue-200 md:p-8 p-6 md:m-3 items-stretch justify-stretch gap-10 overflow-y-auto mt-0 shadow-lg shadow-blue-200 animate-fade-down">
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
              <div className="flex sm:flex-row flex-col gap-5 w-full h-full justify-center items-center transition-all ease-in-out delay-100 animate-fade">
                {image && (
                  <img src={image} alt="" className="sm:w-1/2 h-full w-full" />
                )}
                {video && (
                  <div className="h-full sm:w-1/2 w-full">
                    <Player
                      src={video}
                      playsInline={true}
                      fluid={false}
                      autoPlay={true}
                      muted={false}
                      poster=""
                      preload="auto"
                      width="100%"
                      height={204}
                      loop={true}
                    >
                      <BigPlayButton position="center" />
                    </Player>
                  </div>
                )}
              </div>
            )}

            <div className="flex sm:gap-5 gap-2 w-full justify-center sm:justify-normal">
              <label htmlFor="imgFile">
                <div className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] sm:p-5 p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer font-bold">
                  <TbPhotoSquareRounded className="sm:text-2xl text-lg" />
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
                <div className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] sm:p-5 p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer font-extrabold">
                  <IoVideocamOutline className="sm:text-2xl text-lg" />
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
              {mobile ? (
                <div
                  className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer"
                  onClick={() => setMobile(!mobile)}
                >
                  <h2 className="sm:flex hidden">Close mobile preview</h2>
                  <MdMobileOff />
                </div>
              ) : (
                <div
                  className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 cursor-pointer"
                  onClick={() => setMobile(true)}
                >
                  <h2 className="sm:flex hidden">Click for mobile preview</h2>
                  <FaMobileAlt />
                </div>
              )}

              <button
                className="flex justify-center items-center gap-2 text-lg bg-[#3b8beb] p-4 rounded-xl shadow-xl text-white hover:bg-[#5692dcbb] transition-all ease-in-out delay-75 sm:ml-auto sm:w-36"
                //onClick={() => setOpenModal(true)}
                type="submit"
              >
                <FaRegPlusSquare className="sm:text-xl text-lg" />
                <h2 className="sm:flex hidden">Create</h2>
              </button>
            </div>
          </form>
        </div>

        {mobile && (
          <div className="flex md:h-full w-full md:w-1/2 md:animate-fade-left animate-fade-down animate-delay-400 justify-center items-center sm:p-0 pb-10">
            <MobileContainer />
          </div>
        )}
        {/* </div> */}
      </div>

      {openCreateModal && <CreateNewsModal />}
    </div>
  );
};
