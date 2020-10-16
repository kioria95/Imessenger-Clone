import { IconButton } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Chat.css";
import db from "./firebase";
import MicNoneIcon from "@material-ui/icons/MicNone";

function Chat() {
  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Chatting</span>
        </h4>
        <strong>Details</strong>
      </div>

      <div className="chat__messages">
          
      </div>

      <div className="chat__input">
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="iMessage"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>

        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
