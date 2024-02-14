import React from 'react'
import '../Assets/css/Pages/Marketing.css';

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
//end fontawesome

export const Marketing = () => {
  return (
    <div className='container'>
      <div className='container-cuadro'>
        <FontAwesomeIcon icon={faBook} className='icon-book'></FontAwesomeIcon>
        <a className='contratos'>Marketing</a>
      </div>
    </div>
  )
}
