import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LazyImage from "react-lazy-progressive-image";
// var img = require("image-sync").read("./assets/heroes/dc-arrow.png");
// var blur = require("image-blur-gaussian");

const HeroeCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
  setImageLoaded,
}) => {
  return (
    <div className="col">
      <div className="card animate__animated animate__fadeIn">
        <LazyImage
          className="card-img"
          placeholder="https://img.freepik.com/free-vector/blurred-purple-background_1107-140.jpg"
          src={`./assets/heroes/${id}.jpg`}
        >
          {(src, loading, isVisible) => <img src={src} />}
        </LazyImage>

        <div className="card-body">
          <h5 className="card-title">
            <b> {superhero}</b>
          </h5>
          <p className="card-text">{alter_ego}</p>

          {alter_ego !== characters && (
            <p className="card-text">{characters}</p>
          )}

          <p className="card-text">
            <small className="text-muted">{first_appearance}</small>
          </p>
          <Link to={`/heroe/${id}`}> Mas...</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroeCard;
