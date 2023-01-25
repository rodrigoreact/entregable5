import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import avatar from "../assets/img/avatar.png";

const Card = ({ url }) => {
  const [pokemon, setPokemon] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  const getImage = () => {
    if (pokemon.sprites?.other.home.front_default) {
      return pokemon.sprites?.other.home.front_default;
    } else {
      return avatar;
    }
  };

  return (
    <div className="cards__container">    
      <div onClick={() => navigate(`/pokedex/${pokemon.id}`)} className="card">
 
         pokemon: {pokemon.name}
        <img width={"100px"} src={getImage()} alt="" />
      </div>
    </div>
  );
};

export default Card;
