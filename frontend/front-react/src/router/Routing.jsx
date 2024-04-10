import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import InicioPublic from '../Componentes/layout/public/InicioPublic'
import Login from '../Componentes/User/Login'
import Register from '../Componentes/User/Register';

import Contrato from '../Pages/Contrato/Contrato'
import Buscar from '../Pages/Buscar';
import { Studio } from '../Pages/Studio';
import { Ventas } from '../Pages/Ventas';
import { Crm } from '../Pages/Crm';
import { Marketing } from '../Pages/Marketing';
import { Office } from '../Pages/Office';
import { Procesos } from '../Pages/Procesos';
import { Arquitectura } from '../Pages/Arquitectura';
import { Atlas } from '../Pages/Atlas';
import { Alm } from '../Pages/Alm';
import { Soporte } from '../Pages/Soporte';
import { Error } from '../Pages/Error';
import { AuthProvider } from '../context/AuthProvider';
import InicioPrivate from '../Componentes/layout/private/InicioPrivate'


export const Routing = () => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>

                    <Route path='/' element={<InicioPublic />} >
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route path='/app' element={<InicioPrivate />} >
                        <Route path='app/buscar' element={<Buscar />} />
                        <Route path='app/studio' element={<Studio />} />
                        <Route path='app/ventas' element={<Ventas />} />
                        <Route path='app/crm' element={<Crm />} />
                        <Route path='app/marketing' element={<Marketing />} />
                        <Route path='app/office' element={<Office />} />
                        <Route path='app/procesos' element={<Procesos />} />
                        <Route path='app/arquitectura' element={<Arquitectura />} />
                        <Route path='app/atlas' element={<Atlas />} />
                        <Route path='app/alm' element={<Alm />} />
                        <Route path='app/soporte' element={<Soporte />} />
                        <Route path='*' element={<Error />} />
                        <Route path='app/contrato' element={<Contrato />} />
                    </Route>

                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
