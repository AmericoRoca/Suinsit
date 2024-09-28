import React, { useState } from 'react';

export const Register = () => {
  // Definimos los estados para los valores de los campos
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación básica: Comprobar si las contraseñas coinciden
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }

    // Simulación del registro (Aquí podrías hacer una petición a tu backend)
    console.log('Nombre:', name);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);

    alert('Registro exitoso');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h2>Registro</h2>

        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '8px', marginBottom: '10px' }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '8px', marginBottom: '10px' }}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '8px', marginBottom: '10px' }}
        />

        <label>Confirmar Contraseña:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{ padding: '8px', marginBottom: '20px' }}
        />

        <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', cursor: 'pointer' }}>
          Registrarse
        </button>
      </form>
    </div>
  );
};
