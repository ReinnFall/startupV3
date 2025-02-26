import React from "react";
import { useState, useEffect } from "react";
import "./catchMessages.css";

export default function CatchMessages() {
    const [messages, setMessages] = useState([
        "John caught a Pikachu!",
        "Sarah caught a Mewtwo!",
        "Eric caught a Pidgey!"
    ]);

    const players = ["John", "Sarah", "Eric", "Emily", "Alex", "Chris"];
    const pokemon = ["Pikachu", "Mewtwo", "Charmander", "Squirtle", "Bulbasaur", "Jigglypuff"];

    useEffect(() => {
        const interval = setInterval(() => {
            const randomPlayer = players[Math.floor(Math.random() * players.length)];
            const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
            const newMessage = `${randomPlayer} caught a ${randomPokemon}!`;

            setMessages((prevMessages) => {
                const updatedMessages = [...prevMessages, newMessage];
                return updatedMessages.length > 5 ? updatedMessages.slice(1) : updatedMessages;
            });
        }, 10000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="catch-messages">
            <h1>Player Catches</h1>
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}
        </div>
    );
}
