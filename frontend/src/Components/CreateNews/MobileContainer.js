import React from "react";
//import "./styles.css";
import MobileDevicePreview from "sanity-mobile-preview";
import "sanity-mobile-preview/dist/index.css";
import { useContext } from "react";
import { Global } from "../Context/GlobalContext";
import { Player, BigPlayButton } from "video-react";
import { BiLike } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import img from "../../Assets/logo.png";
// function NewlineText(props) {
//   const text = props.text;
//   return text.split("\n").map((str) => <p>{str}</p>);
// }
export const MobileContainer = () => {
  const { newsTitle, newsContent, image, video } = useContext(Global);
  return (
    <div>
      <MobileDevicePreview
        preSelectedDevice={"iphone8"}
        preSelectedColor={"black"}
        preSelectedLandscape={false}
        showMenu={false}
      >
        <div className="flex flex-col gap-2 h-full justify-start items-start m-2 text-left w-full overflow-y-auto overflow-x-hidden">
          <h1 className="text-2xl font-bold text-[#3b8beb] border-b-2 border-[#3b8beb]">
            News2Day
          </h1>
          <h2 className="text-lg font-bold text-[#8590AA]">{newsTitle}</h2>
          {(image || video) && (
            <div className="flex gap-2 w-full h-1/5 justify-center items-center transition-all ease-in-out delay-100">
              {image && <img src={image} alt="" className="w-1/2 h-full" />}
              {video && (
                <Player
                  src={video}
                  playsInline={true}
                  fluid={false}
                  autoPlay={true}
                  muted={true}
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
          {newsContent && (
            <div className="text-sm h-full w-full">
              {/* <NewlineText text={newsContent} /> */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              minus ex, praesentium amet accusamus deleniti molestiae temporibus
              necessitatibus blanditiis doloremque aut? Temporibus nisi ullam
              doloremque quo? Velit sequi perspiciatis magni!
            </div>
          )}
          <div className="flex justify-center items-center w-full mt-auto mb-4 border-t-2 p-2">
            <img src={img} alt="" className="mr-auto h-10 w-10 rounded-xl" />
            <div className="flex ml-auto gap-2 justify-center items-center text-[#3b8beb] mr-4 text-lg">
              <BiLike />
              <PiShareFat />
              <FaRegComment />
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </MobileDevicePreview>
    </div>
  );
};
