import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

export const Logout = () => {

    const {setAuth} = useAuth()
    const navigate = useNavigate();

    useEffect(() =>{
        //vaciar local
        localStorage.clear();

        //setar estados a vacio
        setAuth({});

        //navigate a login
        navigate("/login");
    })
  return (
    <div>Cerrando sesión...</div>
  )
}
