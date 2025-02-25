import React from 'react';
import { usePokemonContext } from '../context/PokemonContext';
import './collection.css';

export function Collection() {
    const {caughtPokemon, removePokemon} = usePokemonContext();

  return (
    <main>
       <div className="collection-container">
        <h2>Caught Pokemon</h2>
        {caughtPokemon.length === 0 ? (
            <p>No Pokemon caught yet!</p>
        ) : (
            <ul>
            {caughtPokemon.map((Pokemon) => (
                <li key={Pokemon.id}>
                <img src={Pokemon.src} alt={Pokemon.name} width="100" />
                <p>{Pokemon.name}</p>
                <button onClick={() => removePokemon(Pokemon.id)}>Release</button>
                </li>
            ))}
            </ul>
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