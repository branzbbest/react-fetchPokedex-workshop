import React, { useState, useEffect } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((apiResponse) => setPokemons(apiResponse.results))
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <h1>Pokedex List</h1>
      {!isLoading && (
        <ul>
          {pokemons.map((pokemon) => (
            <li>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Pokedex;
