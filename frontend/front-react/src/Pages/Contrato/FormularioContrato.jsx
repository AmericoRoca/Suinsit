import React, { useState } from 'react';

export const FormularioContrato = ({
    guardarDatos,
}) => {
    // Estados para los campos del formulario
    const [fecha, setFecha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [tipo, setTipo] = useState('');

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se refresque al enviar el formulario
        guardarDatos(fecha, empresa, tipo); // Llama a la función para guardar los datos
        // Restablece los valores de los campos del formulario a una cadena vacía
        setFecha('');
        setEmpresa('');
        setTipo('');
    };

    return (
        <form className='cuadro-form' onSubmit={handleSubmit}>
            <div className='form-añadir'>
                <br />
                <div className="mb-3">
                    <input type="date" className="form-control" id="fecha" required value={fecha} onChange={(e) => setFecha(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="empresa" placeholder='Empresa *' required value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="tipo" placeholder='Tipo contrato *' required value={tipo} onChange={(e) => setTipo(e.target.value)} />
                </div>
                <div className="form col-md-12">
                    <button type="submit" className="btn btn-primary btn-submit-añadir">Submit</button>
                </div>
            </div>
        </form>
    );
};
