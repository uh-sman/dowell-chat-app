import React from "react";

const Footer = () => {
  return (
    <div className=" ">
      <div
        className=" border-top position-fixed bottom-0 left-0 right-0  d-flex justify-content-center"
        style={{ height: "3rem" }}
      >
        <div className=" py-3">
          <div className="text-center">
            <small className="text-center">
              Copyright &copy; 2023 UX Living Lab Chat | Powered by{" "}
              <a className="text-primary ">Dowell uxlivinglab</a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
