import React, { useContext , use } from "react";
import { BioContext } from ".";

export const About = () => {
//   const {myName , myAge} = useContext(BioContext); 
//   const {myName , myAge} = use(BioContext); 

  const newHook = true;
  let myName , myAge;

  if(newHook){
    ({myName , myAge} = use(BioContext));  // we can use this in condition
  }

  return (
    <h1 className="text-3xl font-bold">
      Hello, {myName} , {myAge}!
      this is (About) Page
    </h1>
  );
};
 