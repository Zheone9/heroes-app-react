import React from "react";
import { useOutletContext } from "react-router-dom";
import useScrollPosition from "../../hooks/useScrollPos";

import HeroesList from "../heroes/HeroesList";
import "../styles.css";

const DcScreen = () => {
  const moreThanHalf = useScrollPosition("dc");
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const setImageLoaded = useOutletContext();
  return (
    <div>
      <h1>DC Screen</h1>
      <hr />
      <HeroesList setImageLoaded={setImageLoaded} publisher={"DC Comics"} />
      {moreThanHalf && (
        <i
          className="bi bi-arrow-up-circle-fill bsubir  animate__animated animate__fadeIn animate__faster"
          onClick={handleClick}
        ></i>
      )}
    </div>
  );
};

export default DcScreen;
