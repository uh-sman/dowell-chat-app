import React from "react";

const Footer = () => {
  return (
    <div className="position-fixed bottom-0">
      <div
        className=" border-top d-flex justify-content-center"
        style={{ height: "auto" }}
      >
        <div className="py-3">
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
