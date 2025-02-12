import React from 'react';

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
                <button type="submit" class="btn btn-primary">Login</button>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </div>
    </main>
  );
}