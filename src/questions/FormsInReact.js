import { useState } from "react";


// const Form = () => {

//     const [inputs, setInputs] = useState({});

//     const getInputs = (value, name) => {
//         setInputs({...inputs, ...{[name]: value}});
//     }

//     function handleSubmit(){
//         for(let input in inputs){
//             console.log(input + ": " + inputs[input]);
//         }
        
//     }

//     return (
//       <main>
//         <div>
//           <input
//             name="name"
//             type="text"
//             placeholder="your name"
//             onChange={(event) =>
//               getInputs(event.target.value, event.target.name)
//             }
//           />
//           <input
//             name="age"
//             type="number"
//             placeholder="your age"
//             onChange={(event) =>
//               getInputs(event.target.value, event.target.name)
//             }
//           />
//           <input
//             name="hobbies"
//             type="text"
//             placeholder="mention ur hobbies"
//             onChange={(event) =>
//               getInputs(event.target.value, event.target.name)
//             }
//           />
//           <input
//             name="date"
//             type="date"
//             placeholder="date"
//             onChange={(event) =>
//               getInputs(event.target.value, event.target.name)
//             }
//           />
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       </main>
//     );
// }

// export default Form;


// using form tag

const Form = () => {
  const [inputs, setInputs] = useState({});

  const getInputs = (value, name) => {
    // handling multiple values in a single state hence reducing the creation of multiple states
    setInputs({ ...inputs, ...{ [name]: value } });
    for (let input in inputs) {
      console.log(input + ": " + inputs[input]);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    
    console.log(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="name"
          type="text"
          placeholder="your name"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <input
          name="age"
          type="number"
          placeholder="your age"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <input
          name="hobbies"
          type="text"
          placeholder="mention ur hobbies"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <input
          name="date"
          type="date"
          placeholder="date"
          onChange={(event) => getInputs(event.target.value, event.target.name)}
        />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  );
};

export default Form;