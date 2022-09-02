import React from "react";
import HeroesList from "../heroes/HeroesList";
import useScrollPosition from "../../hooks/useScrollPos";
import "../styles.css";
import { useOutletContext } from "react-router-dom";

const MarvelScreen = () => {
  const moreThanHalf = useScrollPosition("marvel");
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const setImageLoaded = useOutletContext();

  return (
    <>
      {/* <LoadingScreen /> */}

      <div>
        <h1>Marvel Screen</h1>
        <hr />
        <HeroesList
          setImageLoaded={setImageLoaded}
          publisher={"Marvel Comics"}
        />

        {moreThanHalf && (
          <i
            className="bi bi-arrow-up-circle-fill bsubir  animate__animated animate__fadeIn animate__faster"
            onClick={handleClick}
          ></i>
        )}
      </div>
    </>
  );
};

export default MarvelScreen;
