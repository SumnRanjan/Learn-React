import { useEffect, useState } from "react";
import "./Pokemon.css";

export const HowNotToFetchApi = () => {
  const API = "https://jsonplaceholder.typicode.com/posts";

  const [apiData, setApiData] = useState([]);


  useEffect(() =>{
    fetch(API)
    .then((res) => res.json())
    .then((data) => setApiData(data))
    .catch((error) => console.log(error));
  },[])

  

  return (
    <div className="container effect-container">
      <ul>
        Data :
        {apiData.map((currEle) => {
          return <li key={currEle.id}> {currEle.title}</li>;
        })}
      </ul>
    </div>
  );
};
