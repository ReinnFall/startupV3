import React from "react";
import { createContext, useState, useContext, useEffect } from "react";

const PokemonContext = createContext();

export const usePokemonContext = () => useContext(PokemonContext);

export const PokemonProvider = ({ children }) => {
  const [caughtPokemon, setCaughtPokemon] = useState([]);

  // Load data from localStorage on mount
  useEffect(() => {
    const storedPokemon = localStorage.getItem("caughtPokemon");
    if (storedPokemon) {
      setCaughtPokemon(JSON.parse(storedPokemon));
    }
  }, []);

  // Save to localStorage whenever caughtPokemon change
  useEffect(() => {
    localStorage.setItem("caughtPokemon", JSON.stringify(caughtPokemon));
  }, [caughtPokemon]);

  // Add a new Pokemon
  const addPokemon = (Pokemon) => {
    setCaughtPokemon((prev) => [...prev, Pokemon]);
  };

  // Remove a Pokemon by ID
  const removePokemon = (uniqueId) => {
    console.log("Before removing:", caughtPokemon); // 🛠 Log full list before deletion
    console.log("Removing Pokémon with uniqueId:", uniqueId);
    setCaughtPokemon((prev) => {
      const newList = prev.filter((pokemon) => pokemon.uniqueId !== uniqueId);
      console.log("After removing:", newList); // 🛠 Log list after deletion
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
