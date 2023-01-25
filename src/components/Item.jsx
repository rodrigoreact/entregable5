import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom';

const Item = () => {
    const navigate =useNavigate();
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({})   
  
   useEffect(()=>{
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => setPokemon (res.data))
   }, [])
    return (
        <div className='item'>
           
           <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                    {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
                    <img src={pokemon.sprites?.other.home.front_default} className="itemcard" />
                    </div>
                    <div className="flip-card-back">
                    <br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h1 style={{textAlign:'center'}}>Tu nombre es:</h1> 
                    <p style={{fontSize:'30px'}}>{pokemon.name}</p> 
                    <p style={{fontSize:'30px'}}>Mi id de pokemon es: {id}</p>
                    </div>
                </div>
             
            </div>   
            <button style={{marginLeft:'205px', color:'red'}} onClick={() => navigate(-1)} className="btnitem">Volver</button>         
        </div>
    );
};

export default Item;
