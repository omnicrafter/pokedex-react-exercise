import React from "react";
import "./styles/Pokecard.css";

const Pokecard = ({ pokemon }) => {
  const { id, name, type, base_experience } = pokemon;
  const pokeImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <div className="PokecardContainer">
      <h1 className="PokecardTitle">{name}</h1>
      <img className="PokecardImg" src={pokeImage} alt={name} />
      <p className="PokecardStat">Type: {type}</p>
      <p className="PokecardStat">EXP: {base_experience} </p>
    </div>
  );
};

export default Pokecard;
