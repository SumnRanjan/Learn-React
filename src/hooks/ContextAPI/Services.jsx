import { use, useContext } from "react";
import { BioContext } from ".";

export const Services = () => {

  const { myName, myAge } = use(BioContext);

  return (
    <section
      className={`p-4 font-display tracking-wider flex flex-col justify-center  items-center text-white`}
    >
      <h1>
        Hello Context API (Services). My name is {myName}. I am {myAge} yrs old
      </h1>
    </section>
  );
};