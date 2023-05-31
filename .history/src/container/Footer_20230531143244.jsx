import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-white fixed-bottom"
      style={{ backgroundColor: "white" }}
    >
      {/* Grid container  */}
      <div class="container p-4"></div>
      {/* Grid container  */}

      {/* Copyright  */}
      <div
        className="text-center p-3 text-black"
        // style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* Copyright  */}
    </footer>
  );
};

export default Footer;
//  <div className="">
//       <div className="d-flex justify-content-center" style={{ height: "auto" }}>
//         <div className="py-3">
//           <div className="text-center">
//             <small className="text-center">
//               Copyright &copy; 2023 UX Living Lab Chat | Powered by{" "}
//               <a className="text-primary ">Dowell uxlivinglab</a>
//             </small>
//           </div>
//         </div>
//       </div>
//     </div>
