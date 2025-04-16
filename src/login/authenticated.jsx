import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePokemonContext } from '../context/PokemonContext';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
  const navigate = useNavigate();
  const { resetPokemon } = usePokemonContext();

  function logout() {
    fetch(`/api/auth/logout`, {
      method: 'delete',
    })
      .catch(() => {
        // Logout failed. Assuming offline
      })
      .finally(() => {
        console.log("Running reset and props.onLogout");
        localStorage.removeItem('userName');
        resetPokemon();
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
