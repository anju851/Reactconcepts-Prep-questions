// the state should be updated on every click of the button and after the timeout the state should be updated with string = the number of times the button is pressed

// Fix The Bug To Update The State Value The Number Of Times Button IS Clicked
import React, { useState } from "react";

export default function DelayedMessage() {
  const [message, setMessage] = useState("Hello");

  function updateMessage() {
    setTimeout(() => {
      setMessage(message + " World");
    }, 1000);
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

 


// Fix


export default function DelayedMessage() {
  const [message, setMessage] = useState("Hello");

  function updateMessage() {
    setTimeout(() => {
      setMessage(prevmessage => prevmessage + " World");
    }, 1000);
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}