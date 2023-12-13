import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Jugador } from "./Jugador.jsx";

const Idjugador = () => {
  const { id } = useParams();
  const [jugador, setJugador] = useState(null);

  useEffect(() => {
  
    fetch(`http://localhost:3000/jugador/${id}`)
      .then((response) => response.json())
      .then((data) => setJugador(data.jugador))
      .catch((error) => console.error("Error:", error));
  }, [id]);

  const handleEliminarJugador = async () => {
    try {
    
      const response = await fetch(`http://localhost:3000/jugador/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {

        console.log('Jugador eliminado exitosamente');
      } else {
        console.error('Error al eliminar el jugador');
      }
    } catch (error) {
      console.error('Error de red al eliminar el jugador', error);
    }
  };

  if (!jugador) {
    return <p>Cargando jugador...</p>;
  }

  return (
    <div>
      <Jugador jugador={jugador} onEliminarJugador={handleEliminarJugador} />
    </div>
  );
};

export { Idjugador };