//* useState Challenge Description:
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.

//? Reset Button: Add a button to reset the count to zero.

//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.

//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement.

import { useState } from "react";
import "../Hooks.css";

const CounterChallenge = () => {
    const[count , setCount] = useState(0)
    const[value , setValue] = useState(1)

    // const handleInputChange = (value)=>{
    //     setValue(Number(value));
    // }

  return (
    <div className="container state-container">
      <h1>useState Challenge</h1>

      <p>
        Count: <span> {count} </span>           
      </p>

      <div>
        <label>
          Step:
          <input type="number" 
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}/>
        </label>
      </div>

      <div className="grid-three-cols">
        <button disabled={count>=100} onClick={() => setCount(count+value)}>
          Increment
        </button>
        <button disabled={count <= 0} onClick={() => setCount(count-value)}>
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
};

export default CounterChallenge;
