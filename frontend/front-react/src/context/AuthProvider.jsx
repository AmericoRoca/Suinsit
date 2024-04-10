import React, { createContext, useState, useEffect } from 'react';
import { Global } from '../Helpers/Global';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [auth, setAuth] = useState({});

  useEffect(() => {
    authUser();
  }, []);

  const authUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");

      console.log("Token:", token);
      console.log("User:", user);

      if (!token || !user) {
        console.log("Token o usuario no encontrados en el almacenamiento local");
        return false;
      }

      const userObj = JSON.parse(user);
      const userId = userObj.id;

      console.log("ID de usuario:", userId);

      const request = await fetch(Global.url + "user/profile/" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        }
      });

      const data = await request.json();

      console.log("Datos recibidos de la API:", data);

      if (!data ) {
        console.log("Los datos del usuario no están definidos en la respuesta");
        return false;
      }

      console.log("Datos del usuario:", data);
      setAuth(data);

    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
