import React, { useMemo } from "react";

import queryString from "query-string";

import { useLocation, useNavigate } from "react-router-dom";

import useForm from "../../hooks/useForm";
import HeroeCard from "../heroes/HeroeCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import "../styles.css";

import useScrollPosition from "../../hooks/useScrollPos";
const SearchScreen = () => {
  const moreThanHalf = useScrollPosition("search");

  const location = useLocation();
  const navigate = useNavigate();

  const { q = "" } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchTerm: q,
  });

  const { searchTerm } = formValues;
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim().length === 0) return;

    navigate(`?q=${searchTerm}`);
  };
  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />
      <div className="row">
        <div>
          <h4>Search form</h4>

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search"
              className="form-control"
              name="searchTerm"
              onChange={handleInputChange}
              autoComplete="off"
              value={searchTerm}
            />
            <button
              type="submit"
              className="btn w-100 btn-outline-primary mt-1"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <h4>Results</h4>
          <hr />
          <div className="row row-cols-2 row-cols-md-4 g-4">
            {heroesFiltered.length === 0 && (
              <div
                className="alert alert-danger w-100 text-center"
                role="alert"
              >
                There is no a hero by the name of: {searchTerm}
              </div>
            )}

            {heroesFiltered.map((heroe) => (
              <HeroeCard key={heroe.id} {...heroe} />
            ))}
          </div>

          {moreThanHalf && (
            <i
              className="bi bi-arrow-up-circle-fill bsubir  animate__animated animate__fadeIn animate__faster"
              onClick={handleClick}
            ></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
