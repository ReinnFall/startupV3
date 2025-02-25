import React from 'react';
import { useState } from 'react'
import { usePokemonContext } from '../context/PokemonContext';
import './catch.css'


export function Catch() {
  const {addPokemon} = usePokemonContext();
  const grassDefault = {id:0, src: "/grass.png", name:"default"};
  const encounters = [
    {id: 1, src:"/bulbasaur.png", name:"Bulbasaur"},
    {id: 4, src:"/charmander.png", name:"Charmander"},
    {id: 7, src:"/squirtle.png", name:"Squirtle"}
  ];

  const [currentImage, setCurrentImage] = useState(grassDefault);
  const [encountered, setEncountered] = useState(null);
  const [buttonState, setButtonState] = useState("encounter");

  const handleEncounter = () => {
    const randomIndex = Math.floor(Math.random() * encounters.length);
    const newEncounter = encounters[randomIndex];
    setCurrentImage(newEncounter);
    setEncountered(newEncounter);
    setButtonState("catch");
  };

  const handleCatch = () => {
    if (encountered) {
      addPokemon(encountered); // Store the caught Pokemon in global state
    }
    setCurrentImage(defaultImage);
    setEncountered(null);
    setButtonState("encounter");
  };

  return (
    <main>
         <div className="catch-container">
            <img src={currentImage.src} alt={currentImage.name} />
            <h3>{currentImage.name}</h3>
            {buttonState === "encounter" ? (
              <button onClick={handleEncounter}>Encounter</button>
            ) : (
              <button onClick={handleCatch}>Catch</button>
            )}
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

{/* <div className="encounter">
            <img className="grass" src="/grass.png" alt="grass"></img>
            <div className="encounter-button">
                <button type="button">Encounter</button>
            </div> 
        </div> */}