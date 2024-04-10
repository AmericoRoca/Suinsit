//Componente principal donde cargamos el Router-dom

//Carga de componentes 
import './App.css'; //Hoja de estilos 
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap


import React from 'react';
import { Routing } from './router/Routing';
import useAuth from './hooks/useAuth';
/*Fin importacion de elementos*/

function App() {

  const auth = useAuth();

  return (
    <>
      <div className='container-fluid'>
        <Routing />

      </div>
    
    </>
  );
}

export default App;
