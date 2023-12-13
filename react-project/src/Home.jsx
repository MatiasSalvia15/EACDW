import React, { useState, useEffect } from 'react';
import { Jugador } from './pages/Jugador.jsx';

const Home = () => {
  const [jugadores, setJugadores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jugadores')
      .then(response => response.json())
      .then(data => setJugadores(data.jugadores))
      .catch(error => console.error('Error:', error));
  }, []); 

  return (
    <div>
      <h1>Lista de Jugadores</h1>
      <ul>
        {jugadores.map(jugador => (
          <Jugador jugador={jugador} key={jugador.id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;