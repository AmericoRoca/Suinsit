import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import '../../Assets/css/Pages/Contrato.css';
import Crud from '../../Componentes/Crud';
import { FormularioContrato } from './FormularioContrato';
import { fetchData, guardarDatos, deleteContrato } from '../../Services/ContratoService';

export const Contrato = () => {
  const [data, setData] = useState(null);
  const [añadir, setAñadir] = useState(false);
  const [fecha, setFecha] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [tipo, setTipo] = useState('');
  const [error, setError] = useState(null);
  const [eliminar, setEliminar] = useState(false);
  const [editar, setEditar] = useState(false);
  const [editandoIndex, setEditandoIndex] = useState(null); // Estado para almacenar el índice del contrato que se está editando

  // Llamada a fetchData en useEffect para obtener los datos iniciales
  useEffect(() => {
    fetchData()
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);

  // Función para manejar el evento de clic en el botón de editar
  const handleEditar = (index) => {
    setEditandoIndex(index); // Establecer el índice del contrato que se está editando
  };

  // Función para manejar el evento de guardar los cambios
  const handleGuardarCambios = () => {
    // Aquí puedes implementar la lógica para guardar los cambios
    setEditandoIndex(null); // Resetear el índice de edición
  };

  return (
    <>
      {/* Componente Crud para mostrar los botones de añadir, editar y eliminar */}
      <Crud
        toggleAñadir={() => setAñadir(!añadir)}
        toggleEditar={() => setEditar(!editar)}
        toggleEliminar={() => setEliminar(!eliminar)}
        addButtonIcon={faPlus}
        editButtonIcon={faPen}
        deleteButtonIcon={faTrash}
        title="Contratos"
      />

      {/* Componente FormularioContrato, se muestra si añadir es true */}
      {añadir && (
        <FormularioContrato
          fecha={fecha}
          setFecha={setFecha}
          empresa={empresa}
          setEmpresa={setEmpresa}
          tipo={tipo}
          setTipo={setTipo}
          guardarDatos={guardarDatos}
        />
      )}

      {/* Muestra un mensaje de error si hay un error */}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Muestra los datos por pantalla */}
      {data && data.map((contrato, index) => (
        <div className='cuadro-contrato' key={index}>
          <div className='row cuadro-li-back'>
            <ul>
              <li className="list-group-item cuadro-li">Codigo</li>
              <li className="list-group-item cuadro-li">Empresa</li>
              <li className="list-group-item cuadro-li">Fecha</li>
              <li className="list-group-item cuadro-li">Tipo</li>
              {eliminar && (
                <button className='btn btn-danger button-crud' onClick={() => deleteContrato(contrato.id)}>
                  <FontAwesomeIcon icon={faTrash} className='icon-crud' />
                </button>
              )}
              {editar && (
                <>
                  <button className='btn btn-warning button-crud' onClick={() => handleEditar(index)}> {/* Llama a handleEditar con el índice */}
                    <FontAwesomeIcon icon={faPen} className='icon-crud' />
                  </button>
                  <button className='btn btn-primary button-crud'> {/* Llama a handleEditar con el índice */}
                    <FontAwesomeIcon icon={faFloppyDisk} className='icon-crud' />
                  </button>
                </>
              )}
            </ul>
          </div>
          <div className='row cuadro-li-back2'>
            <ul className='fila-dato'>
              <li className="list-group-item cuadro-li2">{contrato.id}</li>
              {/* Verifica si este contrato está siendo editado */}
              {editandoIndex === index ? (
                <li className="list-group-item cuadro-li2">
                  <input
                    type="text"
                    value={contrato.empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                </li>
              ) : (
                <li className="list-group-item cuadro-li2">{contrato.empresa}</li>
              )}
              {/* Verifica si este contrato está siendo editado */}
              {editandoIndex === index ? (
                <li className="list-group-item cuadro-li2">
                  <input
                    type="date"
                    value={contrato.fechaFormateada}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </li>
              ) : (
                <li className="list-group-item cuadro-li2">{contrato.fechaFormateada}</li>
              )}
              {/* Verifica si este contrato está siendo editado */}
              {editandoIndex === index ? (
                <li className="list-group-item cuadro-li2">
                  <input
                    type="text"
                    value={contrato.tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                </li>
              ) : (
                <li className="list-group-item cuadro-li2">{contrato.tipo}</li>
              )}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default Contrato;
