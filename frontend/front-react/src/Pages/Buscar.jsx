import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const Buscar = () => {
  return (
    <div className='container'>
      <div className='container-cuadro'>
        <FontAwesomeIcon icon={faSearch} className='icon-book'></FontAwesomeIcon>
        <a className='contratos'>Buscar</a>
      </div>
    </div>
  )
}

export default Buscar;