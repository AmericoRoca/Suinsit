import React, { useState } from 'react';
import '../../Assets/css/Components/layout/public/Login.css'
import logo from '../../Assets/images/react (1).svg'

const Register = () => {
    // Estado para controlar si el usuario está autenticado o no
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Manejar el cambio en el campo de nombre
    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    }

    // Manejar el cambio en el campo de apellido
    const handleApellidoChange = (event) => {
        setApellido(event.target.value);
    }

    // Manejar el cambio en el campo de email
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    // Manejar el cambio en el campo de contraseña
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    // Manejar el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Realizar la petición al API para guardar el usuario
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido,
                    email: email,
                    password: password
                })
            });

            if (response.ok) {
                // Usuario guardado exitosamente
                setIsLoggedIn(true);

                // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
                window.location.href = '/app/app/contrato';
            } else {
                // Hubo un error al guardar el usuario
                console.error('Error al guardar el usuario');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <div className='container-fluid login'>
            <div className='form-login'>
                <div className='title'>
                    <h1 className='title'>REACT</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className='login-content'>
                    <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="tab-login" data-mdb-toggle="pill" href="/login" role="tab"
                                aria-controls="pills-login">Login</a>
                        </li>
                        <li className="nav-item" role="presentation">
                            <a className="nav-link" id="tab-login" data-mdb-toggle="pill" href="/register" role="tab"
                                aria-controls="pills-register" >Register</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                            {/* Formulario de inicio de sesión */}

                            <div className="text-center mb-3">
                                <p>Sign in with:</p>
                                {/* Botones de inicio de sesión social */}
                            </div>
                            <form onSubmit={handleSubmit}>

                                {/* Campo de apellido */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginName">Nombre</label>
                                    <input type="text" id="loginName" className="form-control" value={nombre} onChange={handleNombreChange} />

                                </div>

                                {/* Campo de apellido */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginName">Apellido</label>
                                    <input type="text" id="loginName" className="form-control" value={apellido} onChange={handleApellidoChange} />

                                </div>

                                {/* Campo de email */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginName">Email</label>
                                    <input type="email" id="loginName" className="form-control" value={email} onChange={handleEmailChange} />

                                </div>

                                {/* Campo de contraseña */}
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="loginPassword">Password</label>
                                    <input type="password" id="loginPassword" className="form-control" value={password} onChange={handlePasswordChange} />

                                </div>

                                {/* Opciones adicionales y botones */}
                                <div className="row mb-4">
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <div className="form-check mb-3 mb-md-0">
                                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                            <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex justify-content-center">
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                </div>

                                {/* Botón de inicio de sesión */}
                                <button type="submit" className="btn btn-primary btn-block mb-4 boton-login">Register</button>

                                {/* Enlace de registro */}
                                <div className="text-center">
                                    <p>Already menber? <a href="/login">Sign in</a></p>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                            {/* Formulario de registro */}
                            <form>
                                {/* Contenido del formulario de registro */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
