import React, { useMemo, useState } from "react";
import { useLoading } from "../../hooks/useLoading";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import HeroeCard from "./HeroeCard";

const HeroesList = ({ publisher, setImageLoaded }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-2 row-cols-md-4 g-4">
      {heroes.map((heroe) => (
        <HeroeCard key={heroe.id} {...heroe} setImageLoaded={setImageLoaded} />
      ))}
    </div>
  );
};

export default HeroesList;
