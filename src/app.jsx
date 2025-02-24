import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Catch } from './catch/catch';
import { Collection } from './collection/collection';
import { Pokedex } from './pokedex/pokedex';

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <h1> Pokemon Catch</h1>
                    <nav>
                        <NavLink to="">Home</NavLink>

                        {authState === AuthState.Authenticated && (
                        <NavLink to='catch'>Catch</NavLink>
                        )}
                        {authState === AuthState.Authenticated && (
                        <NavLink to="collection">Collection</NavLink>
                        )}
                        <NavLink to="pokedex">Pokedex</NavLink>
                    </nav>
                </header>

                <main>
                    <Routes>
                        <Route path='/' element={<Login />} exact />
                        <Route path='/catch' element={<Catch />} />
                        <Route path='/collection' element={<Collection />} />
                        <Route path='/pokedex' element={<Pokedex />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>

                <footer>
                    <a href="https://github.com/ReinnFall/startupV3"> Github Link</a>
                </footer>
            </div>
        </BrowserRouter>
    );
}
function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}