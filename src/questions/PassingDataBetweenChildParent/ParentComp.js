import ChildComponent from "./ChildComp";
import { useState } from "react";

export default function ParentComponent() {
  const [name, setName] = useState("Mathura Nandan");

  // function handleNameChange(){
  //   setName("Anju");
  // }

  // as child passes data for handleNameChange() to parent component, same is captured here in this function and name is set
  function handleNameChange(value) {
    setName(value);
  }

  return (
    <div>
      <ChildComponent name={name} handleNameChange={handleNameChange} />
      {/* <button onClick={handleNameChange}>SetName</button> */}
    </div>
  );
}