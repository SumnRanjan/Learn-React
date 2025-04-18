import { useState } from "react";
export default function State() {
    console.log("Parent Component rendered");
  //   let value = 0;
  //   const handelButtonClick = () => {
  //     value++;
  //     console.log(value);
  //   };
  // console.log(useState())
  const [count, setCount] = useState(0);

  const handelButtonClick = () => {
    setCount(() => count + 1);
  };
  return (
    <>
      <div className="main-div flex flex-col justify-center items-center  ">
        <h1>{count}</h1>
        <button onClick={handelButtonClick}>Increment</button>
      </div>

      <ChildComponent count = {count}/>
    </>
  );
}

function ChildComponent({count}) {
    console.log("Child Component rendered");
    return (
      <div className="main-div">
        <h2> Child Component - {count} </h2>
      </div>
    );
  }
