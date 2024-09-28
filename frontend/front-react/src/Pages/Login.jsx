import React, { useState } from 'react';

export const Login = () => {
  // Definimos el estado para los campos de email y password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que maneja el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue
    console.log('Email:', email);
    console.log('Password:', password);

    // Aquí puedes agregar la lógica para autenticar el usuario con tu backend
    alert(`Email: ${email}, Password: ${password}`); // Muestra una alerta con los datos
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Login</h2>

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Actualiza el estado del email
          required
          style={{ padding: '8px', marginBottom: '10px' }}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Actualiza el estado del password
          required
          style={{ padding: '8px', marginBottom: '20px' }}
        />

        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Iniciar sesión
        </button>
        <span> Si no tienes cuenta, haz <a href=''>click aqui</a> para crear una</span>
      </form>
    </div>
  );
};
