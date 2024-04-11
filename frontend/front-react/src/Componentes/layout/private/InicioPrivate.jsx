import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import Inicio from '../private/Inicio';
import BarraNavegacion from '../private/BarraNavegacion';
import Footer1 from '../private/Footer1';
import LeftArrow from '../private/LeftArrow';
import RigthArrow from '../private/RigthArrow';
import '../../../Assets/css/Components/layout/private/InicioPrivate.css';
import useAuth from '../../../hooks/useAuth';

const InicioPrivate = () => {

  const { auth }  = useAuth();


  return (
    <div className="container-fluid">
        {auth.id ? 
        <div className='row'>
          <div className='col-md-4'>
            <div className='inicio general'>
              <Inicio />
            </div>
          </div>
          <div className='col-md-8' id="barra-privada">
            <div className='sidebar general'>
              <BarraNavegacion />
            </div>
          </div>
          <div className='col-md-12 explorar general app-row'>
            <LeftArrow />
            <RigthArrow />
            <div className='row'>
              <Outlet />
            </div>
          </div>
          <div className='col-md-12'>
            <Footer1 />
          </div>
        </div>
        :  <Navigate to="/login"/>}
    </div>
  );
};

export default InicioPrivate;
