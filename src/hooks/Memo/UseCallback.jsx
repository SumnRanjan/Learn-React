import { memo, useCallback, useState } from "react";

const Button = memo(({ onClick, children }) => {
  console.log(`Rendering Buttton : ${children}`);

  return (
    <button
      className={`text-black mb-4 py-2 px-5 ${
        children === "Increment" ? "bg-green-400" : "bg-red-400"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
});

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const Increment = useCallback(() => {
    console.log("Increment inside");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const Decrement = useCallback(() => {
    console.log("Decrement inside");
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div className=" p-4 w-lvw h-lvh font-display tracking-wider flex flex-col justify-center items-center bg-black text-white ">
      <h1 className="mb-4">Count : {count}</h1>
      <Button onClick={Increment}>Increment</Button>
      <Button onClick={Decrement}>Decrement</Button>
    </div>
  );
}
