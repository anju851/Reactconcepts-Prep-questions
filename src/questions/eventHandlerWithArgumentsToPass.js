import { useState } from "react";

const EventComponent = () => {

    const [numOne, setNumOne] = useState(0);
    const [numTwo, setNumTwo] = useState(0);

    const getInputNum1 = (event) => {
        console.log(event.target.value);
        let num1 = parseInt(event.target.value);
        setNumOne(num1);
    }

    const getInputNum2 = (event) => {
      console.log(event.target.value);
       let num2 = parseInt(event.target.value);
      setNumTwo(num2);
    };

    function addNums(num1, num2){
        console.log(num1 + num2);
        return num1 + num2;
    }

    return (
      <div>
        <input
          placeholder="num 1"
          onChange={getInputNum1}
          name="num1"
          value={numOne}
        />
        <input
          placeholder="num 2"
          onChange={getInputNum2}
          name="num2"
          value={numTwo}
        />
        {/*  in order to be able to pass data to event handlers we use arrow function inside which we call the function with args instead of using them directly*/}
        <button onClick={() => addNums(numOne, numTwo)}>Submit</button>
      </div>
    );
}

export default EventComponent;