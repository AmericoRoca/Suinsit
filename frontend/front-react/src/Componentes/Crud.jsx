/*Componente de operacion CRUD, botones de añadir, editar y eliminar*/


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../Assets/css/Components/Crud.css';

export const Crud = () => {
    const [data, setData] = useState(null);
    const [añadir, setAñadir] = useState(false);
    const [numero, setNumero] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [color, setColor] = useState('');
    const [coche, setCoche] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(); // Se llama a fetchData() cuando el componente se monta por primera vez
    }, []);

    //Llamada al API para mostrar los datos por pantalla
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/contratos');
            if (!response.ok) {
                throw new Error('Error al obtener los datos');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            setError('Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.');
        }
    };


    //Llamada al API, para guardar los datos
    const guardarDatos = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/contratos', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ numero, empresa, color, coche })
            });

            if (!response.ok) {
                throw new Error('Error al guardar los datos');
            }

            fetchData(); // Actualizar los datos después de guardarlos
            document.getElementById("miFormulario").reset();
        } catch (error) {
            console.error('Error al guardar los datos:', error);
            setError('Error al guardar los datos. Por favor, inténtelo de nuevo más tarde.');
        }
    };

    /*const obtenerIdContrato = () => {
        // Aquí puedes implementar la lógica para obtener el ID del contrato
        // Esto podría ser desde un formulario, un campo de entrada, una variable, una base de datos, etc.
        // Por ahora, solo devolveré un valor fijo para demostración
        return 'idContrato123'; // Este sería el ID del contrato que deseas eliminar
    };*/

    // Llamada al API para eliminar los datos
    /*const eliminarDatos = async (e) => {
        e.preventDefault();
        try {
            //const idContrato = obtenerIdContrato(); // Suponiendo que tienes una función para obtener el ID del contrato

            const response = await fetch(`http://localhost:3000/contratos/${idContrato}`, {
                method: 'DELETE',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: idContrato }) // Enviar el ID del contrato en el cuerpo de la solicitud
            });

            if (!response.ok) {
                throw new Error('Error al eliminar el contrato');
            }

            fetchData(); // Actualizar los datos después de eliminar el contrato
            document.getElementById("miFormulario").reset();
        } catch (error) {
            console.error('Error al eliminar el contrato:', error);
            setError('Error al eliminar el contrato. Por favor, inténtelo de nuevo más tarde.');
        }
    };*/


    //Función para mostrar u ocultar el panel de añadido, editado y eliminado
    const toggleAñadir = () => {
        setAñadir(!añadir);
    };


    return (
        <>
            <button className='btn btn-primary button-crud' onClick={toggleAñadir}>
                <FontAwesomeIcon icon={faPlus} className='icon-crud' />
            </button>
            <button className='btn btn-warning button-crud'>
                <FontAwesomeIcon icon={faPen} className='icon-crud' />
            </button>
            <button className='btn btn-danger button-crud'>
                <FontAwesomeIcon icon={faTrash} className='icon-crud' />
            </button>

            {añadir && (
                <form className='cuadro-form fade-in row' id="miFormulario">
                    <input
                        type="text"
                        placeholder="Número"
                        className='form-control'
                        value={numero}
                        onChange={e => setNumero(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Empresa"
                        className='form-control'
                        value={empresa}
                        onChange={e => setEmpresa(e.target.value)}
                    />
                    <input
                        type="color"
                        placeholder="color"
                        className='form-control'
                        value={color}
                        onChange={e => setColor(e.target.value)}
                    />
                    <select name="cars" id="cars" value={coche} onChange={e => setCoche(e.target.value)}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                    <button type="submit" onClick={guardarDatos} className='btn btn-primary guardar'>
                        Guardar
                    </button>
                </form>
            )}

            {error && <div className="alert alert-danger">{error}</div>}
        </>
    );
};
