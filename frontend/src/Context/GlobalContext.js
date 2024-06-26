import React from "react";
import { createContext, useState } from "react";
export const Global = createContext(null);

export const GlobalContext = ({ children }) => {
  const [mobile, setMobile] = useState(false);
  const [image, setImage] = useState();
  const [video, setVideo] = useState();
  const [newsTitle, setNewsTitle] = useState("");
  const [newsCat, setNewsCat] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openViewModal, setOpenViewModal] = useState(false);
  return (
    <Global.Provider
      value={{
        mobile,
        setMobile,
        image,
        setImage,
        video,
        setVideo,
        newsTitle,
        setNewsTitle,
        newsCat,
        setNewsCat,
        newsContent,
        setNewsContent,
        openCreateModal,
        setOpenCreateModal,
        openViewModal,
        setOpenViewModal,
      }}
    >
      {children}
    </Global.Provider>
  );
};
