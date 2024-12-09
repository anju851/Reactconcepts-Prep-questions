
import Child from "./Child";
import { useState } from "react";

function Parent() {
  const [colored, setColored] = useState("white");

  function handleChange(val) {
    setColored(val);
  }

  const styling = {
    border: "solid",
    width: "500px",
    height: "400px",
    backgroundColor: colored,
  };

  return (
    <main>
      <div style={styling}>
        <p>Parent</p>
        <Child setColored={handleChange} />
      </div>
    </main>
  );
}

export default Parent;
