import React from "react";
import qImage1 from "../../../assets/playground.png";
import qImage2 from "../../../assets/class.png";
import qImage3 from "../../../assets/swimming.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h1 className=" mb-5">Q-Zone</h1>
      <div>
        <img src={qImage1} alt="" />
        <img src={qImage2} alt="" />
        <img src={qImage3} alt="" />
        <h3></h3>
      </div>
    </div>
  );
};

export default Qzone;
