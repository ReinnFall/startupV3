import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
  const [userName, setUserName] = React.useState(props.userName);
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);

  async function loginUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  async function createUser() {
    localStorage.setItem('userName', userName);
    props.onLogin(userName);
  }

  return (
    <>
      <div>
        <form method="get">
            <div>
                {/* <div>Username</div> */}
                <input type="text" className='inputBar' placeholder="Username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div>
                {/* <div>Password</div> */}
                <input type="password" className='inputBar' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
        </form>
        <Button className='custom-btn' onClick={() => loginUser()} disabled={!userName || !password}>
          Login
        </Button>
        <Button className='custom-btn' onClick={() => createUser()} disabled={!userName || !password}>
          Create
        </Button>
      </div>

      <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
    </>
  );
}
