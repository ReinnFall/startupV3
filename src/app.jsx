import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Catch } from './catch/catch';
import { Collection } from './collection/collection';
import { Pokedex } from './pokedex/pokedex';
import { AuthState } from './login/authState';
import { PokemonProvider } from './context/PokemonContext';


export default function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <PokemonProvider>
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
                        <Route path='/' element={
                            <Login
                            userName={userName}
                            authState={authState}
                            onAuthChange={(userName, authState) => {
                              setAuthState(authState);
                              setUserName(userName);
                                }}
                            />
                        } 
                        exact 
                        />

                        <Route path='/catch' element={<Catch userName={userName} />} />
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
        </PokemonProvider>
    );
}
function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}