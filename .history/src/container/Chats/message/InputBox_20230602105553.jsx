import React from "react";
import user from "../../../assets/avatar.png";
const InputBox = ({ input, setInput }) => {
  return (
    <div>
      <div className="d-flex gap-2">
        <img src={user} width="30px" height="30px" />
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="py-2 px-2 rounded input-"
          type="text"
          placeholder="Reply in Chat..."
          style={{ minWidth: "7rem", width: "80%" }}
        />
      </div>
    </div>
  );
};

export default InputBox;
