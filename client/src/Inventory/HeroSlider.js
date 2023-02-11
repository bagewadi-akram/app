import React from "react";
import "./heroslider.css";
// import KeyboardDoubleArrowLeftIcon from "@material-ui/icons/KeyboardDoubleArrowLeft";
// import KeyboardDoubleArrowRightIcon from "@material-ui/icons/KeyboardDoubleArrowRight";

function HeroSlider() {
  return (
    <div className="heroslider-box container-fluid border-1">
      <img
        className="heroimg"
        src="http://www.pecelect.com.sg/qql/slot/happenings/ie01/438d2e1fb_u1934.jpg"
        alt=""
        width="100%"
        height={350}
      />
      <img
        className="heroimg"
        // src="http://www.leedsind.net/images/banner1.jpg"
        alt=""
        width="100%"
        height={350}
      />
      <img
        className="heroimg"
        // src="http://www.leedsind.net/images/banner3.jpg"
        alt=""
        width="100%"
        height={350}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <span>{/* <KeyboardDoubleArrowLeftIcon /> */}</span>
      <span>{/* <KeyboardDoubleArrowRightIcon /> */}</span>
    </div>
  );
}

export default HeroSlider;
