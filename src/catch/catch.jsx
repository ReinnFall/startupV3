import React from 'react';
import './catch.css'

export function Catch() {
  return (
    <main>
        <div className="encounter">
            <img className="grass" src="images/grass.png" alt="grass"> </img>
            <div className="encounter-button">
                <button type="button">Encounter</button>
            </div> 
        </div>
        <div className="catch-messages">
            <h1>Player Catches</h1>
            <p>John caught a Pikachu!</p>
            <p>Sarah caught a Mewtwo!</p>
            <p>Eric caught a Pidgey!</p>
        </div>
    </main>
  );
}