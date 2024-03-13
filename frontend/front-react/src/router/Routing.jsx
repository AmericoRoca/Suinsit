import React from 'react'
import {  Route, BrowserRouter, Navigate, Routes } from 'react-router-dom';
import InicioPublic from '../Componentes/layout/public/InicioPublic';
import Login from '../Componentes/User/Login'
import { Register } from '../Componentes/User/Register';

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Login />} >
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                {/*
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
                  <Route path='*' element={<Error />} />
                
        */}
            </Routes>
        </BrowserRouter>
    )
}
