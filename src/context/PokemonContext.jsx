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
  const removePokemon = (id) => {
    setCaughtPokemon((prev) => prev.filter((Pokemon) => Pokemon.id !== id));
  };

  return (
    <PokemonContext.Provider value={{ caughtPokemon, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};
