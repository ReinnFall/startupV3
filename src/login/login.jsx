import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';

export function Login() {
  return (
    <main>
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
    </main>
  );
}