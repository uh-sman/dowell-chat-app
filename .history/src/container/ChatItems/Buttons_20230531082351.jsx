import { useEffect, useContext, useState } from "react";
import "./button.css";
import { AppProvider } from "../ContextProvider/DataContext";
import ProductContext from "../ContextProvider/DataContext";
import { NavLink } from "react-router-dom";
const Buttons = ({ onSetChatHeader }) => {
  const { productList, click, setClick, setChatHeader } =
    useContext(ProductContext);
  console.log(productList);
  const [isActive, setIsActive] = useState(false);
  const [active, setActive] = useState(i);
  const buttonStyles = (title) => {
    switch (title) {
      case "Login":
        return {
          backgroundColor: "#90e7b5",
          color: "black",
          outline: "none",
          border: "none",
          opacity: "0.8",
        };
      case "Extension":
        return {
          backgroundColor: "#ff9898",
          color: "black",
          outline: "none",
          border: "none",
          opacity: "0.8",
        };
      case "Living-Lab-Admin":
        return {
          backgroundColor: "#90e7b5",
          color: "black",
          outline: "none",
          border: "none",
          opacity: "0.8",
        };
      case "Sales-Agent":
        return {
          border: "2px solid #fca5a5",
          color: "black",
          backgroundColor: "transparent",
          opacity: "0.8",
        };

      default:
        return null;
    }
  };
  const buttonClick = (title) => {
    switch (title) {
      case "Login":
        return {
          // backgroundColor: "#90e7b5",
          opacity: "0.8",
        };
      case "Extension":
        return {
          opacity: "0.8",
        };
      case "Living-Lab-Admin":
        return {
          opacity: "0.8",
        };
      case "Sales-Agent":
        return {
          opacity: "0.8",
        };

      default:
        return null;
    }
  };
  const handleClick = async (title) => {
    setChatHeader(title);
    setIsActive(!isActive, title);
    // style(title);
    // await getRooms();
  };
  const style = (title) => {
    switch (title) {
      case "Login":
        return {
          // backgroundColor: "#90e7b5",
          backgroundColor: "white",
          // opacity: "0.8",
        };
      case "Extension":
        return {
          opacity: "0.8",
        };
      case "Living-Lab-Admin":
        return {
          opacity: "0.8",
        };
      case "Sales-Agent":
        return {
          opacity: "0.8",
        };

      default:
        return null;
    }
  };

  const navlinkstyle = ({ isActive }) => {
    return {
      backgroundColor: "white",
    };
  };
  const handleClicks = () => {
    handleClick();
  };
  const activeIndex = -1;
  return (
    <div className="">
      <div className=" d-flex flex-nowrap">
        <div className="d-flex flex-nowrap gap-3  text-nowrap py-3" id="scroll">
          {productList &&
            productList.map((title, i) => {
              const { backgroundColor, color, border, outline, opacity } =
                buttonStyles(title) ?? {};
              // const { opacity } = buttonClick(title) ?? {};
              return (
                <NavLink
                  key={title}
                  type="button"
                  // className={`btn btn-md ${isActive == title && "active"}`}
                  className={`btn btn-md ${isActive == title ? "active" : ""}`}
                  style={{
                    backgroundColor,
                    color,
                    border,
                    outline,
                    style,
                  }}
                  onClick={(e) => {
                    handleClick(title);
                    setIsActive(console.log(title));
                  }}
                >
                  {title}
                  {title === "DO-WELL-CSC" && (
                    <span
                      className="badge bg-primary"
                      // style={{ padding: "0.2px 7px" }}
                    >
                      11
                    </span>
                  )}
                </NavLink>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
