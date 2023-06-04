import React, { useState, useContext } from "react";
import ReplyChat from "./ReplyChat";
import clsx from "clsx";
import doctor from "../../../assets/doctor.png";
import ProductContext from "../../ContextProvider/DataContext";
const Message = ({ message }) => {
  // const [message, setMessage] = useState(true);
  const { rooms, messages } = useContext(ProductContext);
  console.log("message", message);
  console.log("message", messages);
  console.log("room from message", rooms);
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
    <div
      className="container"
      style={{ chatStyle, background: "purple", paddingBottom: "100%" }}
    >
      <section style={{ background: "yellow" }}>
        <div className="container" style={{ chatStyle, background: "green" }}>
          <div
            className={clsx(
              `d-flex justify-content-end`,
              messageUser && "justify-content-start"
            )}
            style={{
              display,
              justifyContent,
              background: "yellow",
            }}
          >
            {/* <div
              className="p-0"
              style={{
                borderRadius: "15px",
                background: "orange",
                maxWidth: "75%",
              }}
            > */}
            {rooms ? (
              rooms?.messages?.map(({ message, id }) => {
                const { display, justifyContent } = messageUser ?? {};
                return (
                  <div
                    key={id}
                    id="chat1"
                    className="p-3 mb-4 style bg-primary"
                    style={{
                      // background: "orange",
                      width: "fit-content",
                      maxWidth: "75%",
                    }}
                  >
                    <p className="small mb-0 text-break">{message}</p>
                  </div>
                );
              })
            ) : (
              <div>
                <div className="" id="chat1" style={{ borderRadius: "10px" }}>
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
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Message;