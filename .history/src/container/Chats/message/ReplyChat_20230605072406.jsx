import { useState, useContext } from "react";
import user from "../../../assets/avatar.png";
// import axios from "axios";
import { Tooltip } from "react-tooltip";
import {
  FaRegPaperPlane,
  FaPaperPlane,
  FaTelegramPlane,
  FaReply,
  FaThumbsUp,
  FaLink,
} from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import ProductContext from "../../ContextProvider/DataContext";
import { HiOutlineHandThumbUp, HiHandThumbUp } from "react-icons/hi2";
import InputBox from "./InputBox";
import axios from "axios";
const ReplyChat = () => {
  const {
    handleSendMessage,
    getMessages,
    setData,
    setMessages,
    messages,
    room_Id,
  } = useContext(ProductContext);
  const [input, setInput] = useState("");
  // const [messages, setMessages] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    setData(input);
    // const user_id = "644f9d1e4baba28710c128ea";
    const user_id = "644f9d1e4baba28710c128ea";
    // const user_id = "5p8do0ht7no4gyjo0w2984o4vj5dc2hs";
    // const user_id = 28;
    // const user_id = "644f9d104baba28710c128e3";
    console.log("data to submit", {
      message: input,
      user_id: user_id,
      side: true,
    });
    const data = {
      // message: "input",
      message: input,
      user_id: user_id,
      side: true,
    };

    axios
      .post(`https://100096.pythonanywhere.com/send_message/${room_Id}/`, data)
      .then((res) => {
        console.log(res, "post res//");
        const newMessage = res;
        console.log(res?.config?.data, "post newMessage//");
        setMessages([...messages, newMessage]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-black mb-5 mb-md-5 mb-lg-0 mb-xl-0 mb-xxl-0">
      <div className="card py-2 ms-2 w-100 " style={{ height: "20vh" }}>
        <div className="card-body p-1 " onSubmit={handleSubmit}>
          <div className="d-flex w-100 justify-content-between">
            <InputBox input={input} setInput={setInput} />
            <div className="d-flex">
              <div
                className="d-flex justify-content-end"
                // style={{ marginBottom: "4rem" }}
              >
                <button
                  className="btn text-primary"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Attach a file"
                >
                  <FaLink className="" />
                  <Tooltip id="my-tooltip" />
                </button>
                <button
                  className="btn text-primary"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Reply"
                >
                  {" "}
                  <FaReply className="" />
                  <Tooltip id="my-tooltip" />
                </button>
                <button
                  className="btn text-primary"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="emoji"
                >
                  <HiOutlineEmojiHappy className="" />
                  <Tooltip id="my-tooltip" />
                </button>
                <button
                  className="btn text-primary"
                  data-tooltip-id="my-tooltip"
                  data-tooltip-content="Like"
                >
                  <FaThumbsUp className="" />
                  <Tooltip id="my-tooltip" />
                </button>
              </div>
              <button className="btn text-primary " typeof="submit">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyChat;
