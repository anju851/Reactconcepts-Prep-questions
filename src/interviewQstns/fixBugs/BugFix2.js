// Fix The Bug to Stop The Counter


// Buggy code
// import { useState, useEffect } from "react";

// export default function BugFix2() {
//   const [count, setCount] = useState(0);
//   let interval = null;

//   useEffect(() => {
//     interval = setInterval(() => {
//       setCount((prevCount) => prevCount + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const onStopCount = () => {
//     clearInterval(interval);
//   };

//   return (
//     <div>
//       <h1>Hello World. The world world in variety of ways</h1>
//       <h3>{count}</h3>
//       <button onClick={onStopCount}>Stop Counting</button>
//     </div>
//   );
// }




// Fix
/* 
The issue is that the interval variable is being redeclared inside the useEffect hook, and the onStopCount function is trying to clear the interval using a different reference to the interval variable.

To fix this issue, you can use a ref to store the interval ID, like below code:
By using a ref to store the interval ID, we can ensure that the onStopCount function is clearing the correct interval
*/

import { useState, useEffect, useRef } from "react";

export default function BugFix2() {
  const [count, setCount] = useState(0);
  // let interval = null;
  let intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const onStopCount = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div>
      <h1>Hello World. The world world in variety of ways</h1>
      <h3>{count}</h3>
      <button onClick={onStopCount}>Stop Counting</button>
    </div>
  );
}
