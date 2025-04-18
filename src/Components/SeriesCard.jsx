// css module
import styles from "./Netflix.module.css";
// styled-components
import styled from "styled-components";
export const SeriesCard = ({ currEle }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } =
    currEle;

  // object
  // const BtnStyle = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "1.6rem",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   fontWeight: "bold",
  //   color: "var(--bg-color)",
  // });

  // etemplate literals
  const BtnStyle = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
    font-weight: bold;
    color: var(--bg-color);
  `;

  const Rating = styled.h3`
    font-size: 1.6rem;
    color: red;
    text-transform: capitalize;
  `;

  const reatingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      {/* <div className={styles["card-content"]}> */}
      <div className="flex flex-col gap-6 py-6 px-6">
        <h1>Name: {name}</h1>
        <Rating>
          Rating:{" "}
          <span className={`${styles.rating} ${reatingClass}`}> {rating}</span>
        </Rating>
        <p className=" text-blue-300">Summary: {description}</p>
        <p>Genre: {genre.join(", ")}</p>
        <p>Cast: {cast.join(", ")}</p>
        <a href={watch_url} target="_blank">
          <BtnStyle rating={rating}>Watch Now</BtnStyle>
        </a>
      </div>

      {/* </div> */}
    </li>
  );
};
