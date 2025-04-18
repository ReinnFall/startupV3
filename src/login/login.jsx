import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

import { Unauthenticated } from './unauthenticated';
import { Authenticated } from './authenticated';
import { AuthState } from './authState';
import { PokemonProvider } from '../context/PokemonContext';

export function Login({userName, authState, onAuthChange}) {
  return (
    <main>
    <div className = 'login'>
      {authState !== AuthState.Unknown && <h1>Login</h1>}
      {authState === AuthState.Authenticated && (
        <PokemonProvider username = {userName}>
        <Authenticated userName={userName} onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)} />
        </PokemonProvider>
      )}
      {authState === AuthState.Unauthenticated && (
        <Unauthenticated
          userName={userName}
          onLogin={(loginUserName) => {
            onAuthChange(loginUserName, AuthState.Authenticated);
          }}
        />
      )}
    </div>
  </main>
  );
}

{/* <main>
        <div className="login">
            <h1> Login</h1>
            <form method="get" action="catch.html">
                <div >
                    <div>Username</div>
                    <input type="text" placeholder="your@email.com" />
                </div>
                <div>
                    <div>Password</div>
                    <input type="password" placeholder="password" />
                </div>
                <div className="button-area">
                    <button type="submit" className="btn btn-primary login-button">Login</button>
                    <button type="submit" className="btn btn-primary create-button">Create</button>
                </div>
            </form>
        </div>
    </main> */}