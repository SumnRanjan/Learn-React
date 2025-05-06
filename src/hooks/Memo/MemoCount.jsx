import { useRef, memo } from "react";

export const Counts = ({ bioData }) => {
  const { name, age } = bioData;
  const renderCount = useRef(0);
  console.log(renderCount);

  return (
    <div className="mt-3 font-display text-center">
      <p className="">
        Nothing changed here but Ive now rendered:
        <span className="text-red-600">{renderCount.current++} time(s)</span>
        <p>
          {name} age is {age}
        </p>
      </p>
    </div>
  );
};

// export default memo(Counts);
