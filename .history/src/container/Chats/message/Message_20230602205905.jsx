import React, { useState, useContext } from "react";
import ReplyChat from "./ReplyChat";
import clsx from "clsx";
import doctor from "../../../assets/doctor.png";
import ProductContext from "../../ContextProvider/DataContext";
const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  const { rooms, messages } = useContext(ProductContext);
  const { id } = messages ?? {};
  const messageUser = (id) => {
    switch (id) {
      case id === 28:
        return {
          display: "flex",
          justifyContent: "end",
        };
      case id === 29:
        return {
          display: "flex",
          justifyContent: "start",
        };

      default:
        return null;
    }
  };
  const chatStyle = {
    paddingTop: "8rem",
  };

  // function authorId(id) {
  //   if (id) {
  //     return {
  //       justifyContent: "start",
  //     };
  //   }
  // }
  const { display, justifyContent } = messageUser ?? {};
  return (
    <section
      className="container"
      style={{
        chatStyle,
        // background: "purple",
        paddingBottom: "100%",
        paddingTop: "1.5rem",
      }}
    >
      {messages ? (
        messages?.messages?.map(({ message, id, side }) => {
          const { display, justifyContent } = messageUser ?? {};
          console.log("side", side);
          // console.log("authorId", author.id);
          return (
            <div
              key={id}
              id="chat1"
              className={clsx(
                "p-3 mb-4 style bg-primary",
                !side && "bg-white text-black"
              )}
              style={{
                // background: "orange",
                width: "fit-content",
              }}
            >
              <p className="small mb-0 text-break">{message}</p>
            </div>
          );
        })
      ) : (
        <div>
          <div
            className=""
            id="chat1"
            style={{ borderRadius: "10px", margin: "auto" }}
          >
            <div className="card-body">
              <div className="text-nowrap d-flex flex-row justify-content-end mb-4">
                <div
                  className=" style bg-primary"
                  style={{ padding: "0.5rem 1rem" }}
                >
                  <p className="small mb-0 text-wrap fs-6">
                    Hey, How may I help you ?
                  </p>
                </div>
              </div>
              {/*  */}
            </div>
          </div>
          {/* Receiver authorId */}
        </div>
      )}
    </section>
  );
};

export default Message;
