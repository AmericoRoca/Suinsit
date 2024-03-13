import React, { useState } from 'react';
import '../../Assets/css/Components/User/Login.css'

const Login = () => {
    // Estado para controlar si el usuario está autenticado o no
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Estados para los campos del formulario
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (response.ok) {
                // Usuario guardado exitosamente
                setIsLoggedIn(true);
                // Aquí podrías redirigir al usuario a otra página o mostrar un mensaje de éxito
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
                    <div className='login-content'>
                        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                                    aria-controls="pills-login" aria-selected="true">Login</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                                    aria-controls="pills-register" aria-selected="false">Register</a>
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
                                    {/* Campo de email o username */}
                                    <div className="form-outline mb-4">
                                        <input type="email" id="loginName" className="form-control" value={email} onChange={handleEmailChange} />
                                        <label className="form-label" htmlFor="loginName">Email or username</label>
                                    </div>

                                    {/* Campo de contraseña */}
                                    <div className="form-outline mb-4">
                                        <input type="password" id="loginPassword" className="form-control" value={password} onChange={handlePasswordChange} />
                                        <label className="form-label" htmlFor="loginPassword">Password</label>
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
                                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                    {/* Enlace de registro */}
                                    <div className="text-center">
                                        <p>Not a member? <a href="#!">Register</a></p>
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

export default Login;
