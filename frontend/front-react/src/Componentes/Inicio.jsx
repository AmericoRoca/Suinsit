import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importa Routes y Route de react-router-dom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Assets/css/Components/Inicio.css';

export const Inicio = ({ routes }) => {
  return (
    <div className='container-fluid'>
      <div className='cont'>
        <FontAwesomeIcon icon={faHouse} className='icon-house'></FontAwesomeIcon>
        {/* Coloca Routes alrededor de todas las rutas */}
        <a href='/' className='buscar-inicio'>Inicio</a>
      </div>
      <div className='cont'>
        <FontAwesomeIcon icon={faSearch} className='icon-search'></FontAwesomeIcon>
        <a href='#' className='buscar-inicio'>Buscar</a>
      </div>
    </div>
  );
};

export default Inicio;
