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
    <div className="absolute my-[150px]">
      <div className="">
        <Lottie animationData={img} loop={true} style={style} />
      </div>
    </div>
  );
};
