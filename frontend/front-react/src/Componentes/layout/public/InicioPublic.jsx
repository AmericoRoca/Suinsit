import React from 'react'
import { Outlet } from 'react-router-dom'
import {useAuth} from '../../../hooks/useAuth'
import {Navigate} from 'react-router-dom'

const InicioPublic = () => {

    const auth = useAuth();
    
    return (


        <>
        {!auth._id ?
            <div className='container-fluid'>
                <Outlet />
            </div>
            :  <Navigate to="/app/contrato"/>}
        
        </>
    )
}

export default InicioPublic;