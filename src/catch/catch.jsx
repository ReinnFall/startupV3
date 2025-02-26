import React from 'react';
import { useState, useEffect } from 'react'
import { usePokemonContext } from '../context/PokemonContext';
import './catch.css'


export function Catch() {
  const {addPokemon} = usePokemonContext();
  const grassDefault = {id:0, src: "/grass.png", name:"Click the button to find a Pokemon!"};
  const encounters = [
    {id: 1, src:"/pokemonImages/bulbasaur.png", name:"Bulbasaur"},
    {id: 2, src:"/pokemonImages/ivysaur.png", name:"Ivysaur"},
    {id: 3, src:"/pokemonImages/venusaur.png", name:"Venusaur"},
    {id: 4, src:"/pokemonImages/charmander.png", name:"Charmander"},
    {id: 5, src:"/pokemonImages/charmeleon.png", name:"Charmeleon"},
    {id: 6, src:"/pokemonImages/charizard.png", name:"Charizard"},
    {id: 7, src:"/pokemonImages/squirtle.png", name:"Squirtle"},
    {id: 8, src:"/pokemonImages/wartortle.png", name:"Wartortle"},
    {id: 9, src:"/pokemonImages/blastoise.png", name:"Blastoise"},
    {id: 10, src:"/pokemonImages/caterpie.png", name:"Caterpie"},
    {id: 11, src:"/pokemonImages/metapod.png", name:"Metapod"},
    {id: 12, src:"/pokemonImages/butterfree.png", name:"Butterfree"},
    {id: 13, src:"/pokemonImages/weedle.png", name:"Weedle"},
    {id: 14, src:"/pokemonImages/kakuna.png", name:"Kakuna"},
    {id: 15, src:"/pokemonImages/beedrill.png", name:"Beedrill"},
    {id: 16, src:"/pokemonImages/pidgey.png", name:"Pidgey"},
    {id: 17, src:"/pokemonImages/pidgeotto.png", name:"Pidgeotto"},
    {id: 18, src:"/pokemonImages/pidgeot.png", name:"Pidgeot"},
    {id: 19, src:"/pokemonImages/rattata.png", name:"Rattata"},
    {id: 20, src:"/pokemonImages/raticate.png", name:"Raticate"},
    {id: 21, src:"/pokemonImages/spearow.png", name:"Spearow"},
    {id: 22, src:"/pokemonImages/fearow.png", name:"Fearow"},
    {id: 23, src:"/pokemonImages/ekans.png", name:"Ekans"},
    {id: 24, src:"/pokemonImages/arbok.png", name:"Arbok"},
    {id: 25, src:"/pokemonImages/pikachu.png", name:"Pikachu"},
    {id: 26, src:"/pokemonImages/raichu.png", name:"Raichu"},
    {id: 27, src:"/pokemonImages/sandshrew.png", name:"Sandshrew"},
    {id: 28, src:"/pokemonImages/sandslash.png", name:"Sandslash"},
    {id: 29, src:"/pokemonImages/nidoran-f.png", name:"Nidoran♀"},
    {id: 30, src:"/pokemonImages/nidorina.png", name:"Nidorina"},
    {id: 31, src:"/pokemonImages/nidoqueen.png", name:"Nidoqueen"},
    {id: 32, src:"/pokemonImages/nidoran-m.png", name:"Nidoran♂"},
    {id: 33, src:"/pokemonImages/nidorino.png", name:"Nidorino"},
    {id: 34, src:"/pokemonImages/nidoking.png", name:"Nidoking"},
    {id: 35, src:"/pokemonImages/clefairy.png", name:"Clefairy"},
    {id: 36, src:"/pokemonImages/clefable.png", name:"Clefable"},
    {id: 37, src:"/pokemonImages/vulpix.png", name:"Vulpix"},
    {id: 38, src:"/pokemonImages/ninetales.png", name:"Ninetales"},
    {id: 39, src:"/pokemonImages/jigglypuff.png", name:"Jigglypuff"},
    {id: 40, src:"/pokemonImages/wigglytuff.png", name:"Wigglytuff"},
    {id: 41, src:"/pokemonImages/zubat.png", name:"Zubat"},
    {id: 42, src:"/pokemonImages/golbat.png", name:"Golbat"},
    {id: 43, src:"/pokemonImages/oddish.png", name:"Oddish"},
    {id: 44, src:"/pokemonImages/gloom.png", name:"Gloom"},
    {id: 45, src:"/pokemonImages/vileplume.png", name:"Vileplume"},
    {id: 46, src:"/pokemonImages/paras.png", name:"Paras"},
    {id: 47, src:"/pokemonImages/parasect.png", name:"Parasect"},
    {id: 48, src:"/pokemonImages/venonat.png", name:"Venonat"},
    {id: 49, src:"/pokemonImages/venomoth.png", name:"Venomoth"},
    {id: 50, src:"/pokemonImages/diglett.png", name:"Diglett"},
    {id: 51, src:"/pokemonImages/dugtrio.png", name:"Dugtrio"},
    {id: 52, src:"/pokemonImages/meowth.png", name:"Meowth"},
    {id: 53, src:"/pokemonImages/persian.png", name:"Persian"},
    {id: 54, src:"/pokemonImages/psyduck.png", name:"Psyduck"},
    {id: 55, src:"/pokemonImages/golduck.png", name:"Golduck"},
    {id: 56, src:"/pokemonImages/mankey.png", name:"Mankey"},
    {id: 57, src:"/pokemonImages/primeape.png", name:"Primeape"},
    {id: 58, src:"/pokemonImages/growlithe.png", name:"Growlithe"},
    {id: 59, src:"/pokemonImages/arcanine.png", name:"Arcanine"},
    {id: 60, src:"/pokemonImages/poliwag.png", name:"Poliwag"},
    {id: 61, src:"/pokemonImages/poliwhirl.png", name:"Poliwhirl"},
    {id: 62, src:"/pokemonImages/poliwrath.png", name:"Poliwrath"},
    {id: 63, src:"/pokemonImages/abra.png", name:"Abra"},
    {id: 64, src:"/pokemonImages/kadabra.png", name:"Kadabra"},
    {id: 65, src:"/pokemonImages/alakazam.png", name:"Alakazam"},
    {id: 66, src:"/pokemonImages/machop.png", name:"Machop"},
    {id: 67, src:"/pokemonImages/machoke.png", name:"Machoke"},
    {id: 68, src:"/pokemonImages/machamp.png", name:"Machamp"},
    {id: 69, src:"/pokemonImages/bellsprout.png", name:"Bellsprout"},
    {id: 70, src:"/pokemonImages/weepinbell.png", name:"Weepinbell"},
    {id: 71, src:"/pokemonImages/victreebel.png", name:"Victreebel"},
    {id: 72, src:"/pokemonImages/tentacool.png", name:"Tentacool"},
    {id: 73, src:"/pokemonImages/tentacruel.png", name:"Tentacruel"},
    {id: 74, src:"/pokemonImages/geodude.png", name:"Geodude"},
    {id: 75, src:"/pokemonImages/graveler.png", name:"Graveler"},
    {id: 76, src:"/pokemonImages/golem.png", name:"Golem"},
    {id: 77, src:"/pokemonImages/ponyta.png", name:"Ponyta"},
    {id: 78, src:"/pokemonImages/rapidash.png", name:"Rapidash"},
    {id: 79, src:"/pokemonImages/slowpoke.png", name:"Slowpoke"},
    {id: 80, src:"/pokemonImages/slowbro.png", name:"Slowbro"},
    {id: 81, src:"/pokemonImages/magnemite.png", name:"Magnemite"},
    {id: 82, src:"/pokemonImages/magneton.png", name:"Magneton"},
    {id: 83, src:"/pokemonImages/farfetchd.png", name:"Farfetch'd"},
    {id: 84, src:"/pokemonImages/doduo.png", name:"Doduo"},
    {id: 85, src:"/pokemonImages/dodrio.png", name:"Dodrio"},
    {id: 86, src:"/pokemonImages/seel.png", name:"Seel"},
    {id: 87, src:"/pokemonImages/dewgong.png", name:"Dewgong"},
    {id: 88, src:"/pokemonImages/grimer.png", name:"Grimer"},
    {id: 89, src:"/pokemonImages/muk.png", name:"Muk"},
    {id: 90, src:"/pokemonImages/shellder.png", name:"Shellder"},
    {id: 91, src:"/pokemonImages/cloyster.png", name:"Cloyster"},
    {id: 92, src:"/pokemonImages/gastly.png", name:"Gastly"},
    {id: 93, src:"/pokemonImages/haunter.png", name:"Haunter"},
    {id: 94, src:"/pokemonImages/gengar.png", name:"Gengar"},
    {id: 95, src:"/pokemonImages/onix.png", name:"Onix"},
    {id: 96, src:"/pokemonImages/drowzee.png", name:"Drowzee"},
    {id: 97, src:"/pokemonImages/hypno.png", name:"Hypno"},
    {id: 98, src:"/pokemonImages/krabby.png", name:"Krabby"},
    {id: 99, src:"/pokemonImages/kingler.png", name:"Kingler"},
    {id: 100, src:"/pokemonImages/voltorb.png", name:"Voltorb"},
    {id: 101, src:"/pokemonImages/electrode.png", name:"Electrode"},
    {id: 102, src:"/pokemonImages/exeggcute.png", name:"Exeggcute"},
    {id: 103, src:"/pokemonImages/exeggutor.png", name:"Exeggutor"},
    {id: 104, src:"/pokemonImages/cubone.png", name:"Cubone"},
    {id: 105, src:"/pokemonImages/marowak.png", name:"Marowak"},
    {id: 106, src:"/pokemonImages/hitmonlee.png", name:"Hitmonlee"},
    {id: 107, src:"/pokemonImages/hitmonchan.png", name:"Hitmonchan"},
    {id: 108, src:"/pokemonImages/lickitung.png", name:"Lickitung"},
    {id: 109, src:"/pokemonImages/koffing.png", name:"Koffing"},
    {id: 110, src:"/pokemonImages/weezing.png", name:"Weezing"},
    {id: 111, src:"/pokemonImages/rhyhorn.png", name:"Rhyhorn"},
    {id: 112, src:"/pokemonImages/rhydon.png", name:"Rhydon"},
    {id: 113, src:"/pokemonImages/chansey.png", name:"Chansey"},
    {id: 114, src:"/pokemonImages/tangela.png", name:"Tangela"},
    {id: 115, src:"/pokemonImages/kangaskhan.png", name:"Kangaskhan"},
    {id: 116, src:"/pokemonImages/horsea.png", name:"Horsea"},
    {id: 117, src:"/pokemonImages/seadra.png", name:"Seadra"},
    {id: 118, src:"/pokemonImages/goldeen.png", name:"Goldeen"},
    {id: 119, src:"/pokemonImages/seaking.png", name:"Seaking"},
    {id: 120, src:"/pokemonImages/staryu.png", name:"Staryu"},
    {id: 121, src:"/pokemonImages/starmie.png", name:"Starmie"},
    {id: 122, src:"/pokemonImages/mr-mime.png", name:"Mr. Mime"},
    {id: 123, src:"/pokemonImages/scyther.png", name:"Scyther"},
    {id: 124, src:"/pokemonImages/jynx.png", name:"Jynx"},
    {id: 125, src:"/pokemonImages/electabuzz.png", name:"Electabuzz"},
    {id: 126, src:"/pokemonImages/magmar.png", name:"Magmar"},
    {id: 127, src:"/pokemonImages/pinsir.png", name:"Pinsir"},
    {id: 128, src:"/pokemonImages/tauros.png", name:"Tauros"},
    {id: 129, src:"/pokemonImages/magikarp.png", name:"Magikarp"},
    {id: 130, src:"/pokemonImages/gyarados.png", name:"Gyarados"},
    {id: 131, src:"/pokemonImages/lapras.png", name:"Lapras"},
    {id: 132, src:"/pokemonImages/ditto.png", name:"Ditto"},
    {id: 133, src:"/pokemonImages/eevee.png", name:"Eevee"},
    {id: 134, src:"/pokemonImages/vaporeon.png", name:"Vaporeon"},
    {id: 135, src:"/pokemonImages/jolteon.png", name:"Jolteon"},
    {id: 136, src:"/pokemonImages/flareon.png", name:"Flareon"},
    {id: 137, src:"/pokemonImages/porygon.png", name:"Porygon"},
    {id: 138, src:"/pokemonImages/omanyte.png", name:"Omanyte"},
    {id: 139, src:"/pokemonImages/omastar.png", name:"Omastar"},
    {id: 140, src:"/pokemonImages/kabuto.png", name:"Kabuto"},
    {id: 141, src:"/pokemonImages/kabutops.png", name:"Kabutops"},
    {id: 142, src:"/pokemonImages/aerodactyl.png", name:"Aerodactyl"},
    {id: 143, src:"/pokemonImages/snorlax.png", name:"Snorlax"},
    {id: 144, src:"/pokemonImages/articuno.png", name:"Articuno"},
    {id: 145, src:"/pokemonImages/zapdos.png", name:"Zapdos"},
    {id: 146, src:"/pokemonImages/moltres.png", name:"Moltres"},
    {id: 147, src:"/pokemonImages/dratini.png", name:"Dratini"},
    {id: 148, src:"/pokemonImages/dragonair.png", name:"Dragonair"},
    {id: 149, src:"/pokemonImages/dragonite.png", name:"Dragonite"},
    {id: 150, src:"/pokemonImages/mewtwo.png", name:"Mewtwo"},
    {id: 151, src:"/pokemonImages/mew.png", name:"Mew"}
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
      const uniquePokemon = {
        ...encountered,
        uniqueId: Date.now() + Math.random(), // Generates a unique ID
      };
      addPokemon(uniquePokemon); // Store the caught Pokemon in global state
    }
    setCurrentImage(grassDefault);
    setEncountered(null);
    setButtonState("encounter");
  };

      // **Ensure UI updates after catching**
  useEffect(() => {
    if (!encountered) {
      setCurrentImage(grassDefault);
      setButtonState("encounter");
    }
  }, [encountered]);
  
  

  return (
    <main>
         <div className="catch-container">
         <h1>{currentImage.name}</h1>
            <img
              src = {currentImage.src}
              alt = {currentImage.name}
              className={currentImage.id === 0 ? "default-image": "pokemon-image"}
            />
            {buttonState === "encounter" ? (
              <button className='encounter-btn' onClick={handleEncounter}>Encounter</button>
            ) : (
              <button className='catch-btn' onClick={handleCatch}>Catch</button>
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