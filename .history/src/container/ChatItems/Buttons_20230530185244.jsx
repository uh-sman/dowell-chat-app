import { useEffect, useContext, useState } from "react";
import "./button.css";
import { AppProvider } from "../ContextProvider/DataContext";
import ProductContext from "../ContextProvider/DataContext";
const Buttons = ({ onSetChatHeader }) => {
  const { productList, click, setClick, setChatHeader } =
    useContext(ProductContext);
  console.log(productList);
  const [isActive, setIsActive] = useState(false);
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
    if (title) {
      setIsActive(true);
      return {
        opacity: "0.8",
      };
    }
    if (title === "Extension") {
      setIsActive(true);
      return {
        opacity: "0.8",
      };
    }
    if (title === "Living-Lab-Admin") {
      setIsActive(true);
      return {
        opacity: "0.8",
      };
    }
    if (title === "Sales-Agent") {
      setIsActive(true);
      return {
        backgroundColor: "white",
      };
    }
  };
  const handleClicks = () => {
    handleClick();
  };
  return (
    <div className="">
      <div className=" d-flex flex-nowrap">
        <div className="d-flex flex-nowrap gap-3  text-nowrap py-3" id="scroll">
          {productList &&
            productList.map((title) => {
              const { backgroundColor, color, border, outline, opacity } =
                buttonStyles(title) ?? {};
              // const { opacity } = buttonClick(title) ?? {};
              return (
                <button
                  key={title}
                  type="button"
                  className="btn btn-md"
                  style={{
                    backgroundColor,
                    color,
                    border,
                    outline,
                    style,
                  }}
                  onClick={(e) => {
                    handleClick(title);
                    style(title);
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
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Buttons;
