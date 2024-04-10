import React, { useState } from 'react';
import moment from 'moment'; // Importar moment.js para formatear la fecha

export const FormularioContrato = ({ guardarDatos }) => {
    const [fecha, setFecha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [tipo, setTipo] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Formatear la fecha antes de enviarla al servidor
        const fechaFormateada = moment(fecha).format('YYYY-MM-DD');

        if (!fechaFormateada || !empresa || !tipo) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        guardarDatos(fechaFormateada, empresa, tipo);
        setFecha('');
        setEmpresa('');
        setTipo('');
        setError('');
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
                {error && <div className="alert alert-danger">{error}</div>}
            </div>
        </form>
    );
};
