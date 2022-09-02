import React from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";
import { createBrowserHistory } from "history";

const HeroeScreen = () => {
  const { heroeId } = useParams();
  const heroe = getHeroesById(heroeId);
  const navigate = useNavigate();

  const history = createBrowserHistory({ window });

  //Si no encontró el heroe por el id, lo redirecciona a la pag principal
  if (!heroe) return <Navigate to="/" />;

  const {
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
    publisher,
  } = heroe;

  const handleReturn = () => {
    if (history.location.key === "default") {
      navigate("/");
    } else {
      navigate(-1);
    }
  };
  return (
    <div className="row-mt-5 d-flex">
      <div className="col-3">
        <img
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>Superhero</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publiser: </b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First appareance: </b>
            {first_appearance}
          </li>

          <li className="list-group-item">
            <b>Characters: </b>
            {characters}
          </li>
        </ul>

        <button
          className="btn btn-outline-info ms-3 mt-4 float-end"
          onClick={handleReturn}
          style={{ paddingInline: "40px" }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default HeroeScreen;
