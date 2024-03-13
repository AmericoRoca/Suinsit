import React, { useState } from 'react';

const InicioPublic = () => {
    // Estado para controlar si el usuario está autenticado o no
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Función para manejar el envío del formulario de inicio de sesión
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para autenticar al usuario
        // Si la autenticación es exitosa, establece isLoggedIn en true
        setIsLoggedIn(true);
    }

    // Función para manejar el envío del formulario de registro
    const handleSignupSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para registrar al usuario
        // Si el registro es exitoso, establece isLoggedIn en true
        setIsLoggedIn(true);
    }

    return (
        <div className="form">
            {/* Si el usuario está autenticado, mostrar el contenido de bienvenida */}
            {isLoggedIn ? (
                <div>
                    <h1>Bienvenido de nuevo!</h1>
                    {/* Aquí puedes agregar cualquier contenido adicional para usuarios autenticados */}
                </div>
            ) : (
                // Si el usuario no está autenticado, mostrar los formularios de inicio de sesión y registro
                <div className="tab-content">
                    <div id="signup">
                        <h1>Sign Up for Free</h1>
                        <form onSubmit={handleSignupSubmit}>
                            {/* Contenido del formulario de registro */}
                        </form>
                    </div>
                    <div id="login">
                        <h1>Welcome Back!</h1>
                        <form onSubmit={handleLoginSubmit}>
                            {/* Contenido del formulario de inicio de sesión */}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default InicioPublic;
