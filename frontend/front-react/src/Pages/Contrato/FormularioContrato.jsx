import React, { useState } from 'react';
import moment from 'moment'; 
import { guardarDatos } from '../../Services/ContratoService'; 

export const FormularioContrato = () => {
    const [fecha, setFecha] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [tipo, setTipo] = useState('');
    const [errores, setErrores] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        // Formatear la fecha antes de enviarla al servidor
        const fechaFormateada = moment(fecha).format('YYYY-MM-DD');

        // Validar campos requeridos
        const nuevosErrores = {};
        if (!fechaFormateada) {
            nuevosErrores.fecha = 'Por favor, selecciona una fecha.';
        }
        if (!empresa) {
            nuevosErrores.empresa = 'Por favor, ingresa el nombre de la empresa.';
        }
        if (!tipo) {
            nuevosErrores.tipo = 'Por favor, ingresa el tipo de contrato.';
        }

        // Si hay errores, detener el envío del formulario
        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            return;
        }

        // Si no hay errores, enviar datos al servidor utilizando la función guardarDatos importada
        guardarDatos(fechaFormateada, empresa, tipo)
            .then(() => {
                // Reiniciar los campos después de una solicitud exitosa
                setFecha('');
                setEmpresa('');
                setTipo('');
                setErrores({});
            })
            .catch(error => {
                // Manejar errores de la solicitud al servidor
                setErrores({ general: 'Hubo un error al guardar el contrato. Por favor, inténtalo de nuevo más tarde.' });
            });
    };

    return (
        <form className='cuadro-form' onSubmit={handleSubmit}>
            <div className='form-añadir'>
                <br />
                <div className="mb-3">
                    <input type="date" className="form-control" id="fecha" required value={fecha} onChange={(e) => setFecha(e.target.value)} />
                    {errores.fecha && <div className="text-danger">{errores.fecha}</div>}
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="empresa" placeholder='Empresa *' required value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
                    {errores.empresa && <div className="text-danger">{errores.empresa}</div>}
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="tipo" placeholder='Tipo contrato *' required value={tipo} onChange={(e) => setTipo(e.target.value)} />
                    {errores.tipo && <div className="text-danger">{errores.tipo}</div>}
                </div>
                <div className="form col-md-12">
                    <button type="submit" className="btn btn-primary btn-submit-añadir">Submit</button>
                </div>
                {errores.general && <div className="alert alert-danger">{errores.general}</div>}
            </div>
        </form>
    );
};
