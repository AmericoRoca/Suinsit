/*Componente de operacion CRUD, botones de añadir, editar y eliminar*/


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash, faBook } from '@fortawesome/free-solid-svg-icons';
import '../Assets/css/Pages/Contrato.css';
import moment from 'moment';

export const Contrato = () => {

  const [data, setData] = useState(null);
  const [añadir, setAñadir] = useState(false);
  const [contrato, setContrato] = useState('');
  const [fecha, setFecha] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState(null);

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  useEffect(() => {
    fetchData(); // Se llama a fetchData() cuando el componente se monta por primera vez
  }, []);


  //Llamada al API para mostrar los datos por pantalla
  const fetchData = async () => {

    try {
      const response = await fetch('http://localhost:3001/contratos');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
      const jsonData = await response.json();

      // Formatear las fechas antes de establecerlas en el estado
      const dataFormateada = jsonData.map(contrato => ({
        ...contrato,
        fechaFormateada: moment(contrato.fecha).format('DD-MM-YYYY') // Agrega esta línea para formatear la fecha
      }));

      setData(dataFormateada);
      
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      setError('Error al obtener los datos. Por favor, inténtelo de nuevo más tarde.');
    }

  };


  //Llamada al API, para guardar los datos
  const guardarDatos = async (e) => {
    //e.preventDefault();

    try {
      // Formatear la fecha antes de enviarla al backend
      const fechaFormateada = moment(fecha).format('DD-MM-YYYY');

      const response = await fetch('http://localhost:3001/contratos', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ contrato, fecha: fechaFormateada, empresa, tipo })
 
      });

      if (!response.ok) {
        throw new Error('Error al guardar los datos');
      }

      fetchData(); // Actualizar los datos después de guardarlos
      //document.getElementById("miFormulario").reset();

    } catch (error) {
      console.error('Error al guardar los datos:', error);
      setError('Error al guardar los datos. Por favor, inténtelo de nuevo más tarde.');
    }
  };


  //Función para mostrar u ocultar el panel de añadido, editado y eliminado
  const toggleAñadir = () => {
    setAñadir(!añadir);
    console.log("Funcionando:" + añadir)
  };


  return (
    <>

      {/* CRUD de botones par añadir, editar y eliminar*/}
      <div className='container-fluid container-cuadro'>
        <FontAwesomeIcon icon={faBook} className='icon-book'></FontAwesomeIcon>
        <h1 className='title-contrato'>Contratos</h1>
        <div className='row crud'>
          <button className='btn btn-primary button-crud' onClick={toggleAñadir}>
            <FontAwesomeIcon icon={faPlus} className='icon-crud' />
          </button>
          <button className='btn btn-warning button-crud'>
            <FontAwesomeIcon icon={faPen} className='icon-crud' />
          </button>
          <button className='btn btn-danger button-crud'>
            <FontAwesomeIcon icon={faTrash} className='icon-crud' />
          </button>
        </div>

        {/* Formulario de relleno de datos para añadir contratos */}
        {añadir && (
          <form className='cuadro-form'>
            <div className='form-añadir'>
              <br />
              <div className="mb-3">
                <input type="text" className="form-control" id="contrato" placeholder='Contrato *' required value={contrato} onChange={(e) => setContrato(e.target.value)} />
              </div>
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
                <button type="submit" className="btn btn-primary btn-submit-añadir" onClick={guardarDatos}>Submit</button>
              </div>
            </div>
          </form>
        )}
        {/*  End Formulario de relleno de datos para añadir contratos */}

        {error && <div className="alert alert-danger">{error}</div>}

        {/*  Muestra los datos por pantalla */}
        {data && data.map((contrato, index) => (
          <div className='cuadro-contrato' key={index}>
            <div className='row cuadro-li-back'>
              <ul>
                <li className="list-group-item cuadro-li">Codigo</li>
                <li className="list-group-item cuadro-li">Contrato</li>
                <li className="list-group-item cuadro-li">Empresa</li>
                <li className="list-group-item cuadro-li">Fecha</li>
                <li className="list-group-item cuadro-li">Tipo</li>
              </ul>
            </div>
            <div className='row cuadro-li-back2'>
              <ul className='fila-dato'>
                <li className="list-group-item cuadro-li2">{contrato.codigo}</li>
                <li className="list-group-item cuadro-li2">{contrato.contrato}</li>
                <li className="list-group-item cuadro-li2">{contrato.empresa}</li>
                <li className="list-group-item cuadro-li2">{contrato.fechaFormateada}</li>
                <li className="list-group-item cuadro-li2">{contrato.tipo}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
      {/* Fin muestra datos por pantalla*/}


    </>
  );
};

export default Contrato;
