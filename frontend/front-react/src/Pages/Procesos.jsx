import React from 'react'
import '../Assets/css/Pages/Procesos.css';

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
//end fontawesome

export const Procesos = () => {
  return (
    <div className='container'>
    <div className='container-cuadro'>
      <FontAwesomeIcon icon={faBook} className='icon-book'></FontAwesomeIcon>
      <a className='contratos'>Procesos</a>
    </div>
  </div>
  )
}
