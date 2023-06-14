import React, { useContext } from "react";
import Lottie from "lottie-react";
import img from "../../assets/97203-loader.json";

export const Loader = () => {
  const options = {
    animationData: img,
    loop: true,
    width: 50,
  };
  const style = {
    width: "200px",
    height: "200px",
  };

  return (
    <div className="" style={{ position: "relative" }}>
      <div
        className=""
        style={{ position: "absolute", right: "50%", left: "50%" }}
      >
        <Lottie animationData={img} loop={true} style={style} />
      </div>
    </div>
  );
};
