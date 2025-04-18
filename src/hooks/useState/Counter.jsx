import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Click to increase count
      </h1>
      <button
        onClick={handleCount}
        className="text-6xl font-extrabold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 ease-in-out px-8 py-4 rounded-full shadow-lg active:scale-95"
      >
        {count}
      </button>
    </div>
  );
};
