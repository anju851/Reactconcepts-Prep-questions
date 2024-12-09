import React from "react";

const ChildComponent = ({ name, handleNameChange }) => {
  return (
    <div>
      <p>{name}</p>

      {/*  below is the way to take event handler as data/ prop from parent , now button is a part of child component*/}
      {/* <button onClick={handleNameChange}>SetName</button> */}

      {/*  below is the way to send data to parent from child */}
      <button onClick={() => handleNameChange("Ramayan")}>setName</button>
    </div>
  );
};

export default ChildComponent;
