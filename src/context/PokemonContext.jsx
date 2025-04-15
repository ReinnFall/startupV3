import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

const PokemonContext = createContext();

export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  // Load data from localStorage
  useEffect(() => {
    const fetchCaughtPokemon = async () => {
      try {
        const res = await fetch('/api/pokemon/list', {
          credentials: 'include', // Include cookies for auth
        });
        if (res.ok) {
          const data = await res.json();
          setCaughtPokemon(data);
        } else {
          console.error("Failed to fetch caught Pokémon");
        }
      } catch (error) {
        console.error("Error loading caught Pokémon", error);
      }
    };
    fetchCaughtPokemon();
  }, []);

  // const storedPokemon = localStorage.getItem("caughtPokemon");
  //   if (storedPokemon) {
  //     setCaughtPokemon(JSON.parse(storedPokemon));
  //   }

  // Save to localStorage whenever caughtPokemon change
  // useEffect(() => {
  //   localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon));
  // }, [caughtPokemon]);

  // Add a new Pokemon
  const addPokemon = async (Pokemon) => {
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${Pokemon.name.toLowerCase()}`);
      const data = await response.json();
      const types = data.types.map((t) => {
        const name = t.type.name;
        return name.charAt(0).toUpperCase() + name.slice(1);
      });
      const pokemonWithType = {...Pokemon, types};

      const saveRes = await fetch('/api/pokemon/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(pokemonWithType),
        credentials: 'include',
      });

      if (!saveRes.ok) {
        console.error("Failed to save Pokémon to backend");
        return;
      }

      setCaughtPokemon((prev)=> [...prev,pokemonWithType]);
    } catch(error){
      setCaughtPokemon((prev) => [...prev, Pokemon]);
    }
    
  };

  // Remove a Pokemon by ID
  const removePokemon = (uniqueId) => {
    console.log("Before removing:", caughtPokemon); // Log full list before deletion
    console.log("Removing Pokémon with uniqueId:", uniqueId);
    setCaughtPokemon((prev) => {
      const newList = prev.filter((pokemon) => pokemon.uniqueId !== uniqueId);
      console.log("After removing:", newList); // Log list after deletion
      return newList;
  });
  };
  return (
    <PokemonContext.Provider value={{ caughtPokemon, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
// setCaughtPokemon((prev) => prev.filter((pokemon) => pokemon.uniqueId !== uniqueId));
