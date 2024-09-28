import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../Assets/css/Components/Inicio.css'

export const Inicio = ({routes}) => {
  return (
    <div className='container-fluid'>
      <div className='cont'>
        <FontAwesomeIcon icon={faUser} className='icon-search'></FontAwesomeIcon>
        <a to='#' className='buscar-inicio'>Usuario</a>
      </div>
      <div className='cont'>
        <FontAwesomeIcon icon={faHouse} className='icon-house'></FontAwesomeIcon>
        <a to='#' className='inicio-inicio'>Inicio</a>
      </div>
      <div className='cont'>
        <FontAwesomeIcon icon={faSearch} className='icon-search'></FontAwesomeIcon>
        <a to='#' className='buscar-inicio'>Buscar</a>
      </div>
    </div>
  )
}
export default Inicio;