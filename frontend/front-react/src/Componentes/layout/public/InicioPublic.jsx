import React from 'react'
import { Outlet } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import {Navigate} from 'react-router-dom'

const InicioPublic = () => {

    const {auth} = useAuth();

    return (
        <>
            <div className='container-fluid'>
            {!auth.id ?
                <Outlet />
                :  <Navigate to="/app/app/contrato"/>}
            </div>
            
        
        </>
    )
}

export default InicioPublic;