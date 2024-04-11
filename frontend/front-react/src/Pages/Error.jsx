/*Pagina de error 404 */
import React from 'react'
import '../Assets/css/Pages/Error.css'

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBug } from '@fortawesome/free-solid-svg-icons'
//end fontawesome

export const Error = () => {
  return (
    <div className='container'>
      <div className='container-cuadro'>
        <FontAwesomeIcon icon={faBug} className='icon-book'></FontAwesomeIcon>
        <h1 className='contratos'>Error 404 Página no encontrada</h1>
        <button className='btn btn-danger boton-error'><a href="/login">Inicio</a></button>
      </div>
    </div>
  )
}
