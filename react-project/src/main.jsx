import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home.jsx'
import Crear from './pages/CrearJugador.jsx'
import { Idjugador } from './pages/Idjugador.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/jugador/:id",
    element: <Idjugador/>,
  },
  {
    path: "/crear",
    element: <Crear/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
