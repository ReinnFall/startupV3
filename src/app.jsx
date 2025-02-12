import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div>
            <header>
                <h1> Pokemon Catch</h1>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="catch.html">Catch</a>
                    <a href="collection.html">Collection</a>
                    <a href="pokedex.html">Pokedex</a>
                </nav>
            </header>

            <main>App components go here</main>

            <footer>
                <a href="https://github.com/ReinnFall/startupV3"> Github Link</a>
            </footer>
        </div>
    );
}