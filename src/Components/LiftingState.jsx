import { useState } from "react";

export const LiftingState = () => {
    const [inputValue, SetInputValue] = useState("");
  return (
    <>
      <InputComponet inputValue={inputValue} SetInputValue={SetInputValue} />
      <DisplayComponet inputValue={inputValue}  />
    </>
  );
};

const InputComponet = ({inputValue , SetInputValue}) => {
  return (
    <>
      <input type="text" 
      placeholder="Enter your Name" 
      value={inputValue} 
      onChange={(e) => SetInputValue(e.target.value)}/>
    </>
  );
};

const DisplayComponet = ({inputValue}) =>{
    return <p>The current input Value is :{inputValue} </p>
}
