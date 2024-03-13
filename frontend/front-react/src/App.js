//Componente principal donde cargamos el Router-dom

//Carga de componentes 
import './App.css'; //Hoja de estilos 
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
/*import { LeftArrow } from '../src/Componentes/layout/general/LeftArrow' //Componente Flecha Izq
import { Inicio } from '../src/Componentes/layout/general/Inicio'; // Componente Inicio
import { RigthArrow } from '../src/Componentes/layout/general/RigthArrow' // Componente flecha derecha*/

//Import componentes
/*import { Footer1 } from '../src/Componentes/layout/general/Footer1'; // Componente Footer1
import { Footer2 } from '../src/Componentes/layout/general/Footer2'; // Componente Footer2
import BarraNavegacion from '../src/Componentes/layout/general/BarraNavegacion';*/
import React from 'react';
//import { Routes, Route, BrowserRouter } from 'react-router-dom';

/*Carga de elementos*/
/*import { Studio } from './Pages/Studio';
import Login from './Pages/Login';
import { Marketing } from './Pages/Marketing';
import Contrato from '../src/Pages/Contrato/Contrato';
import { Register } from './Pages/Register';
import { Ventas } from './Pages/Ventas';
import { Crm } from './Pages/Crm';
import { Office } from './Pages/Office';
import { Procesos } from './Pages/Procesos';
import { Arquitectura } from './Pages/Arquitectura';
import { Atlas } from './Pages/Atlas';
import { Alm } from './Pages/Alm';
import { Soporte } from './Pages/Soporte';
import Buscar from './Pages/Buscar';
import { Error } from './Pages/Error';
import { Home } from './Pages/Home';*/
import { Routing } from './router/Routing';

/*Fin importacion de elementos*/

function App() {
  return (
    <>
      <div className='container-fluid'>
        <Routing />

      </div>
      {/* Comentarios en HTML no son válidos aquí */}
      {/*
          <BrowserRouter>
            <div className="container-fluid">
              <div className='row'>
                <div className='col-md-4'>
                
          <div className='inicio general'>
            <Inicio />
          </div>
        </div >

          < div className = 'col-md-8' >
            <div className='sidebar general'>
              <BarraNavegacion />
            </div>
                </div >
          <div className='col-12'>
      
          <div className='col-md-12 explorar general'>
            <LeftArrow />
            <RigthArrow />
          
            <div className='row'>
              <Routes>
                <Route path='/buscar' element={<Buscar />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contrato' element={<Contrato />} />
                <Route path='/register' element={<Register />} />
                <Route path='/studio' element={<Studio />} />
                <Route path='/ventas' element={<Ventas />} />
                <Route path='/crm' element={<Crm />} />
                <Route path='/marketing' element={<Marketing />} />
                <Route path='/office' element={<Office />} />
                <Route path='/procesos' element={<Procesos />} />
                <Route path='/arquitectura' element={<Arquitectura />} />
                <Route path='/atlas' element={<Atlas />} />
                <Route path='/alm' element={<Alm />} />
                <Route path='/soporte' element={<Soporte />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<Error />} />
              </Routes>
            </div>
          </div>
          </div>
              </div >
          <br></br>

        <div className='row'>
          <Footer1 />
        </div>

        <div className='row'>
          <Footer2 />
        </div>
              </div >
            </BrowserRouter >
       */}
    </>
  );
}

export default App;
