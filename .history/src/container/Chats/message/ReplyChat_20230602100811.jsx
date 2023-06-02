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
  const { handleSendMessage, getMessages, setData, setMessages } =
    useContext(ProductContext);
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
      .post(`https://100096.pythonanywhere.com/send_message/42/`, data)
      .then((res) => {
        console.log(res, "post res//");
        const newMessage = res;
        console.log(res?.config?.data, "post newMessage//");
        setMessages(newMessage);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-black ">
      <div class="card p-0 w-100 h-50">
        <div class="card-body p-1">
          <div className="d-flex justify-content-between">
            <InputBox />
            <div className="d-flex flex-column">
              <button className="btn text-primary ">
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
// {/* <div class="border container-lg ms-2 w-100  d-flex rounded">
//   <div className="card-content">
//     <form className="d-block" action="" onSubmit={handleSubmit}>
//       <div className="d-flex align-items-center justify-content-between">
//         <div className="d-flex gap-2  my-3">
//           <img src={user} alt="user-image" className=" image-styles" />
//           <div className="form">
//             <InputBox input={input} setInput={setInput} />
//           </div>
//         </div>
//         <div className="send_btn fixed-center">
//           <button className="btn " type="submit">
//             <FaPaperPlane className="fs-4 text-primary" />
//           </button>
//         </div>
//         {/* <ul className="d-flex justify-content-start align-items-center"> */}
//       </div>
//       <ul className="d-flex">
//         <button
//           className="btn text-primary"
//           data-tooltip-id="my-tooltip"
//           data-tooltip-content="Attach a file"
//         >
//           <FaLink className="" />
//           <Tooltip id="my-tooltip" />
//         </button>
//         <button
//           className="btn text-primary"
//           data-tooltip-id="my-tooltip"
//           data-tooltip-content="Reply"
//         >
//           {" "}
//           <FaReply className="" />
//           <Tooltip id="my-tooltip" />
//         </button>
//         <button
//           className="btn text-primary"
//           data-tooltip-id="my-tooltip"
//           data-tooltip-content="emoji"
//         >
//           <HiOutlineEmojiHappy className="" />
//           <Tooltip id="my-tooltip" />
//         </button>
//         <button
//           className="btn text-primary"
//           data-tooltip-id="my-tooltip"
//           data-tooltip-content="Like"
//         >
//           <FaThumbsUp className="" />
//           <Tooltip id="my-tooltip" />
//         </button>
//       </ul>
//     </form>
//     <div className="">
//       {/* <ul className="d-flex justify-content-start align-items-center">
//           <button
//             className="btn text-primary"
//             data-tooltip-id="my-tooltip"
//             data-tooltip-content="Attach a file"
//           >
//             <FaLink className="" />
//             <Tooltip id="my-tooltip" />
//           </button>
//           <button
//             className="btn text-primary"
//             data-tooltip-id="my-tooltip"
//             data-tooltip-content="Reply"
//           >
//             {" "}
//             <FaReply className="" />
//             <Tooltip id="my-tooltip" />
//           </button>
//           <button
//             className="btn text-primary"
//             data-tooltip-id="my-tooltip"
//             data-tooltip-content="emoji"
//           >
//             <HiOutlineEmojiHappy className="" />
//             <Tooltip id="my-tooltip" />
//           </button>
//           <button
//             className="btn text-primary"
//             data-tooltip-id="my-tooltip"
//             data-tooltip-content="Like"
//           >
//             <FaThumbsUp className="" />
//             <Tooltip id="my-tooltip" />
//           </button>
//         </ul> */}
//     </div>
//   </div>

//   {/* </div> */}
// </div>; */}
