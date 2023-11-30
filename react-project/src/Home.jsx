import React from 'react';

const jugadores = [
  {
    id: 1,
    nombre: 'Sergio Rochet',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/rochetmodjun2023.jpg',

  },
  {
    id: 2,
    nombre: 'Franco Israel',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/israelmodjun2023.jpg',
   
  },
  {
    id: 3,
    nombre: 'Santiago Mele',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/melemodjun2023.jpg',
  },
  {
    id: 4,
    nombre: 'Ronald Araujo',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/araujo-ronald.png',
  },
  {
    id: 5,
    nombre: 'José María Giménez',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/gime-769-nez.jpg',
  },
  {
    id: 6,
    nombre: 'Sebastián Cáceres',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/caceresmodjun2023.jpg',
  },
  {
    id: 7,
    nombre: 'Matías Viña',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/vinamodjun2023.jpg',
  },
  {
    id: 8,
    nombre: 'Bruno Méndez',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/mendezmodjun2023.jpg',
  },
  {
    id: 9,
    nombre: 'Guillermo Varela',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/varelamodjun2023.jpg',
  },
  {
    id: 10,
    nombre: 'Mathías Olivera',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/mathiolivera16.jpg',
  },
  {
    id: 11,
    nombre: 'Manuel Ugarte',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/manolougart.jpg',
  },
  {
    id: 12,
    nombre: 'Rodrigo Bentancur',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/bentancur.jpg',
  },
  {
    id: 13,
    nombre: 'Federico Valverde',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/halconcapitan.jpg',
  },
  {
    id: 14,
    nombre: 'Felipe Carballo',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/carballomodjun2023.jpg',
  },
  {
    id: 15,
    nombre: 'Agustín Canobbio',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/canobbiomodjun2023.jpg',
  },
  {
    id: 16,
    nombre: 'Nicolás de la Cruz',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/delacruyffiajwbnav.jpg',
  },
  {
    id: 17,
    nombre: 'Giorgian De Arrascaeta',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/gioergian.png',
  },
  {
    id: 18,
    nombre: 'Facundo Pellistri',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/pellistrimodjun2023.jpg',
  },
  {
    id: 19,
    nombre: 'Maximiliano Araújo',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/araujomodjun2023.jpg',
  },
  {
    id: 20,
    nombre: 'Facundo Torres',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/torresmodjun2023.jpg',
  },
  {
    id: 21,
    nombre: 'Cristian Olivera',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/crisolivera9.jpg',
  },
  {
    id: 22,
    nombre: 'Federico Viñas',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/vin-771-as.jpg',
  },
  {
    id: 23,
    nombre: 'Darwin Núñez',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/darwin.png',
  },
  {
    id: 24,
    nombre: 'Luis Suárez',
    imagen: 'https://www.auf.org.uy/imagenes/img_contenido/seleccion_jugador/a/sua-769-rez.jpg',
  },
];

const Home = () => {
  return (
    <div>
      <h1>Lista de Jugadores</h1>
      <ul>
        {jugadores.map((jugador) => (
          <li key={jugador.id}>
            <img src={jugador.imagen} alt={jugador.nombre} />
            <p>{jugador.nombre}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;