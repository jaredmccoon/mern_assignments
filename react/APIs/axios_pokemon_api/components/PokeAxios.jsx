import React, { useEffect, useState } from 'react';
import axios from 'axios';




const PokeAx = props => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect = ()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1000")
            .then(response=>{setPokemonList(response.data.results)})
    }; 
    return(
        <div>
            <button type="submit" onClick={useEffect}>Fetch Pokemon</button>
            {
                pokemonList.map((pokemon, i) => {
                return <ul>
                            <li key={i}>{pokemon.name}</li>
                        </ul>
                })
            }
        </div>
    )
}

export default PokeAx;