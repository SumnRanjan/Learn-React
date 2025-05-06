import { useMemo, useState } from "react";
import { Counts } from "./MemoCount";

export const ReactMemo = () => {
  const [count, setCount] = useState(0);

  const bioData = useMemo(() => {
    return {
      name: "suman",
      age: 26,
    };
  }, []);
  
  return (
    <>
      <div className="p-4 h-52 font-display tracking-wider flex flex-col justify-center  items-center ">
        <h2>{count}</h2>
        <button
          className="btn bg-cyan-500 py-1 px-3"
          onClick={() => setCount((prev) => prev + 1)}
        >
          Increment
        </button>
      </div>
      <Counts bioData={bioData} />
      {/* when we pass normal value we dont get problem with React.memo but
      when we pass ojb we get problem */}
    </>
  );
};
