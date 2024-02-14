/*import React from 'react'
import '../Assets/css/Pages/Studio.css';

//Import FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
//end fontawesome

export const Studio = () => {
  return (
    <div className='container'>
      <div className='container-cuadro'>
        <FontAwesomeIcon icon={faBook} className='icon-book'></FontAwesomeIcon>
        <a className='contratos'>Studio</a>
      </div>
    </div>
  )
}*/
/*Componente de operacion CRUD, botones de añadir, editar y eliminar*/


import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash, faBook } from '@fortawesome/free-solid-svg-icons';
import '../Assets/css/Pages/Studio.css'

export const Studio = () => {
  const [data, setData] = useState(null);
  const [añadir, setAñadir] = useState(false);
  const [estado, setEstado] = useState('');
  const [tipoExpediente, setTipoExpediente] = useState('');
  const [alta, setAlta] = useState('');
  const [fechaVencimiento, setFechaVencimiento] = useState('');
  const [file, setFile] = useState('');
  const [option, setOption] = useState('');
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
      const response = await fetch('http://localhost:3001/expedientes');
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
      const response = await fetch('http://localhost:3001/expedientes', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ estado, tipoExpediente, alta, fechaVencimiento, file, option })
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
    setEstado('');
    setTipoExpediente('');
    setAlta('');
    setFechaVencimiento('');
    console.log("Funcionando:" + añadir)
  };


  return (
    <>
      <div className='container-fluid container-cuadro'>
        <FontAwesomeIcon icon={faBook} className='icon-book'></FontAwesomeIcon>
        <h1 className='title-studio'>Studios</h1>
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
        {añadir && (
          <form className='cuadro-form'>
            <div class="mb-3">
              <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='nombre'/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Contraseña'/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <div className="form-control col-md-12"> {/* Asegurarse de que el botón esté en una fila separada */}
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        )}


        {error && <div className="alert alert-danger">{error}</div>}

        {data && data.map((studio, index) => (
          <div className='cuadro-studio' key={index}>
            <div className='row cuadro-li-back'>
              <ul>
                <li className="list-group-item cuadro-li">Expediente</li>
                <li className="list-group-item cuadro-li">Estado</li>
                <li className="list-group-item cuadro-li">Tipo Expediente</li>
                <li className="list-group-item cuadro-li">Alta</li>
                <li className="list-group-item cuadro-li">Fecha Vencimiento</li>
              </ul>
            </div>
            <div className='row cuadro-li-back2'>
              <ul className='fila-dato'>
                <li className="list-group-item cuadro-li2">{studio.expediente}</li>
                <li className="list-group-item cuadro-li2">{studio.estado}</li>
                <li className="list-group-item cuadro-li2">{studio.tipoExpediente}</li>
                <li className="list-group-item cuadro-li2">{studio.alta}</li>
                <li className="list-group-item cuadro-li2">{studio.fechaVencimiento}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>


    </>
  );
};

export default Studio;
