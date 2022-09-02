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
          placeholder="https://64.media.tumblr.com/2b911a5aa476acb79bc56fd4b6ece7bf/ecde8d103f41cb37-42/s400x600/dc1f77f98960f4e6297415a86bbc91a02688bca4.gifv"
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
