import React from 'react'
import '../Assets/css/Pages/Arquitectura.css';

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
//end fontawesome

export const Arquitectura = () => {
  return (
    <div className='container'>
      <div className='container-cuadro'>
        <FontAwesomeIcon icon={faBook} className='icon-book'></FontAwesomeIcon>
        <a className='contratos'>Arquitectura</a>
      </div>
    </div>
  )
}
