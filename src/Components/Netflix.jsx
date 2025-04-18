import seriesData from "../api/seriesData.json";
import  {SeriesCard } from "./SeriesCard";

const Netflix = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((currEle) => (
        <SeriesCard key={currEle.id} currEle={currEle} />
      ))}
    </ul>
  );
};

export default Netflix;
