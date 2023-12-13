const Jugador = ({ jugador, onEliminarJugador }) => {
  const handleEliminarClick = () => {
    onEliminarJugador(jugador.id);
  };
  return (
    <li key={jugador.id}>
      <img src={jugador.imagenUrl} alt={`${jugador.nombre} ${jugador.apellido}`} />
      <p>{`${jugador.nombre} ${jugador.apellido}`}</p>
      <p>{`Edad: ${jugador.edad}`}</p>
      <p>{`Equipo: ${jugador.equipo}`}</p>
      <button onClick={handleEliminarClick}>Eliminar</button>
    </li>
  );
}

export { Jugador };