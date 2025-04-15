import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        localStorage.removeItem('userName');
        props.onLogout();
      });
  }

  return (
    <div>
      <div className='playerName'>{props.userName}</div>
      <Button className='custom-btn' onClick={() => navigate('/catch')}>
        Catch
      </Button>
      <Button className='custom-btn' onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
