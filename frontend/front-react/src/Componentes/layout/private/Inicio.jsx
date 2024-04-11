import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRightFromBracket, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import '../../../Assets/css/Components/layout/private/Inicio.css';
import useAuth from '../../../hooks/useAuth';
import {  NavLink } from 'react-router-dom';

export const Inicio = ({ routes }) => {

  const { auth } = useAuth();

  // Verificar si auth está definido y tiene la propiedad nombre
  const nombreUsuario = auth && auth.nombre ? auth.nombre : '';

  return (
    <section className='inicio'>
      <div className='container-fluid'>
        <div className='inicio-cont'>
        <div className='cont'>
          <FontAwesomeIcon icon={faUser} className='icon-house'></FontAwesomeIcon>
          {/* Mostrar el nombre del usuario si está definido */}
          <a href='/app/app/contrato' className='buscar-inicio'>Bienvenido, {nombreUsuario}</a>
        </div>
        <div className='cont'>
          <FontAwesomeIcon icon={faHouse} className='icon-house'></FontAwesomeIcon>
          <a href='/app/app/contrato' className='buscar-inicio'>Inicio</a>
        </div>
        <div className='cont'>
          <FontAwesomeIcon icon={faSearch} className='icon-search'></FontAwesomeIcon>
          <a href='/app/app/contrato' className='buscar-inicio'>Buscar</a>
        </div>
        <div className='cont'>
          <FontAwesomeIcon icon={faRightFromBracket} className='icon-house'></FontAwesomeIcon>
          <NavLink to='app/logout' className='buscar-inicio'>
            <span>Cerrar sesión</span>
          </NavLink>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
