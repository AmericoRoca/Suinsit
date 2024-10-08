import './App.css'; // Hoja de estilos 
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import { LeftArrow } from './Componentes/LeftArrow'; // Componente Flecha Izquierda
import { Inicio } from './Componentes/Inicio'; // Componente Inicio
import { RigthArrow } from '../src/Componentes/RigthArrow'; // Componente Flecha Derecha

import { Footer1 } from './Componentes/Footer1'; // Componente Footer1
import { Footer2 } from './Componentes/Footer2'; // Componente Footer2
import BarraNavegacion from './Componentes/BarraNavegacion';

import React, { useState } from 'react'; // Importa useState para el manejo del estado
import { Routes, Route, BrowserRouter } from 'react-router-dom';

/* Carga de elementos */
import { Studio } from './Pages/Studio';
import { Login } from './Pages/Login';
import { Marketing } from './Pages/Marketing';
import Contrato from './Pages/Contrato';
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

/* Fin importación de elementos */

function App() {
  // Estado que indica si el usuario está autenticado o no
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Función que simula la autenticación de un usuario
  const handleLogin = (email, password) => {
    // Aquí podrías hacer una validación más avanzada o una petición al servidor
    if (email === 'user@example.com' && password === 'password123') {
      setIsAuthenticated(true);  // Autenticación exitosa
      alert('Usuario autenticado');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  // Si el usuario no está autenticado, mostramos el formulario de login
  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  // Si está autenticado, mostramos el contenido protegido
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            {/* Inicio */}
            <div className="inicio general">
              <Inicio />
            </div>
          </div>
          {/* Navigation */}
          <div className="col-md-8">
            <div className="sidebar general">
              <BarraNavegacion />
            </div>
          </div>
          <div className="col-12">
            {/* Pagina principal */}
            <div className="col-md-12 explorar general">
              <LeftArrow />
              <RigthArrow />
              {/* Cargador de rutas */}
              <div className="row">
                <Routes>
                  <Route path="/buscar" element={<Buscar />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/contrato" element={<Contrato />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/studio" element={<Studio />} />
                  <Route path="/ventas" element={<Ventas />} />
                  <Route path="/crm" element={<Crm />} />
                  <Route path="/marketing" element={<Marketing />} />
                  <Route path="/office" element={<Office />} />
                  <Route path="/procesos" element={<Procesos />} />
                  <Route path="/arquitectura" element={<Arquitectura />} />
                  <Route path="/atlas" element={<Atlas />} />
                  <Route path="/alm" element={<Alm />} />
                  <Route path="/soporte" element={<Soporte />} />
                  <Route path="*" element={<Error />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Footer1 */}
        <div className="row">
          <Footer1 />
        </div>
        {/* Footer2 */}
        <div className="row">
          <Footer2 />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
