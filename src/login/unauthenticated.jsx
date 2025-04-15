import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }
  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'post',
      body: JSON.stringify({ username: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      props.onLogin(userName);
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <>
      <div>
        <form method="get" className='barSection'>
            <div>
                {/* <div>Username</div> */}
                <input type="text" className='inputBar' placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
                {/* <div>Password</div> */}
                <input type="password" className='inputBar' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
        </form>
        <div className='button-container'>
          <Button className='custom-btn' onClick={() => loginUser()} disabled={!userName || !password}>
            Login
          </Button>
          <Button className='custom-btn' onClick={() => createUser()} disabled={!userName || !password}>
            Create
          </Button>
        </div>
        {displayError && (
          <div className = "error-message">
            {displayError}
            </div>
        )}
      </div>

      {/* <MessageDialog message={displayError} onHide={() => setDisplayError(null)} /> */}
    </>
  );
}
