import React, { useEffect } from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import './collection.css';

export function Collection() {
    const {caughtPokemon, removePokemon,loadPokemonFromDB} = usePokemonContext();

    useEffect(() => {
        loadPokemonFromDB();
      }, []);

  return (
    <div className="collection-container">
        <h1>Collection</h1>
        {caughtPokemon.length === 0 ? (
            <p>No Pokémon caught yet!</p>
        ) : (
            <div className="pokemon-grid">
                {caughtPokemon.map((pokemon) => (
                    <div key={pokemon.uniqueId} className="pokemon-slot">
                        <img src={pokemon.src} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                        {pokemon.types && 
                        (<p className='pokemon-type'>Type: {pokemon.types.join(",")}</p>)}
                        <button onClick={() => removePokemon(pokemon.uniqueId)}>Release</button>
                    </div>
                ))}
            </div>
        )}
    </div>

  );
}

