import React from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import './collection.css';

export function Collection() {
    const {caughtPokemon, removePokemon} = usePokemonContext();

  return (
    <main>
    <div className="collection-container">
        <h1>Caught Pokémon</h1>
        {caughtPokemon.length === 0 ? (
            <p>No Pokémon caught yet!</p>
        ) : (
            <div className="pokemon-grid">
                {caughtPokemon.map((pokemon) => (
                    <div key={pokemon.uniqueId} className="pokemon-slot">
                        <img src={pokemon.src} alt={pokemon.name} />
                        <p>{pokemon.name}</p>
                        <button onClick={() => removePokemon(pokemon.uniqueId)}>Release</button>
                    </div>
                ))}
            </div>
        )}
    </div>
</main>
  );
}

{/* <table className="collection-table">
<thead>
    <tr>
        <td>
            <p>Poliwhirl #61</p>
            <img src="/poliwhirl.ico"alt="poliwhirl"></img>
        </td>
        <td>
            <p>Poliwhirl #61</p>
            <img src="/poliwhirl.ico" alt="poliwhirl"></img> 
        </td>
        <td>
            <p>Poliwhirl #61</p>
            <img src="/poliwhirl.ico"alt="poliwhirl"></img> 
        </td>
        <td>
            <p>Poliwhirl #61</p>
            <img src="/poliwhirl.ico" alt="poliwhirl"></img> 
        </td>
        <td>
            <p>Poliwhirl #61</p>
            <img src="/poliwhirl.ico" alt="poliwhirl"></img> 
        </td>
        <td>
            <p>Poliwhirl #61</p>
            <img src="/poliwhirl.ico" alt="poliwhirl"></img>
        </td>
    </tr>
</thead>
<tbody>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</tbody>
</table> */}