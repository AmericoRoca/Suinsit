import React from 'react'
import '../Assets/css/Pages/Crm.css';

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
//end fontawesome

export const Crm = () => {
  return (
    <div className='container'>
      <div className='container-cuadro'>
        <FontAwesomeIcon icon={faBook} className='icon-book'></FontAwesomeIcon>
        <a className='contratos'>CRM</a>
      </div>
    </div>
  )
}
