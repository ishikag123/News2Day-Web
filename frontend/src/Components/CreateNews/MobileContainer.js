import React from "react";
//import "./styles.css";
import MobileDevicePreview from "sanity-mobile-preview";
import "sanity-mobile-preview/dist/index.css";

export const MobileContainer = () => {
  return (
    <div className="">
      <MobileDevicePreview
        preSelectedDevice={"iphone8"}
        preSelectedColor={"black"}
        preSelectedLandscape={false}
        showMenu={false}
      >
        <div>Testing SMS for Mobile Messaging</div>
      </MobileDevicePreview>
    </div>
  );
};
