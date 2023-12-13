import { useState } from "react";

function Crear() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    equipo: "",
    imagen: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:3000/jugador", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formulario),
      });

      if (respuesta.ok) {
        console.log("Jugador creado exitosamente");
        
      } else {
        console.error("Error al crear el jugador");
        
      }
    } catch (error) {
      console.error("Error de red al crear el jugador", error);
    }
  };

  return (
    <div>
      <h1>Crear Jugador</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input name="nombre" value={formulario.nombre} onChange={handleChange} />
        </label>
        <label>
          Apellido:
          <input name="apellido" value={formulario.apellido} onChange={handleChange} />
        </label>
        <label>
          Equipo:
          <input name="equipo" value={formulario.equipo} onChange={handleChange} />
        </label>
        <label>
          Imagen URL:
          <input name="imagen" value={formulario.imagen} onChange={handleChange} />
          {formulario.imagen && <img src={formulario.imagen} alt={`${formulario.nombre} ${formulario.apellido}`} style={{ maxWidth: "200px" }} />}
        </label>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Crear;