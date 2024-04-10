import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import '../../Assets/css/Pages/Contrato/Contrato.css';
import Crud from '../../Componentes/layout/private/Crud';
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
  const [editandoIndex, setEditandoIndex] = useState(null);

  useEffect(() => {
    fetchData()
      .then(data => setData(data))
      .catch(error => setError(error));
  }, []);

  const handleEditar = (index) => {
    setEditandoIndex(index);
  };

  const handleGuardarCambios = () => {
    setEditandoIndex(null);
  };

  return (
    <div className='container-fluid container-cuadro'>
      <Crud
        toggleAñadir={() => setAñadir(!añadir)}
        toggleEditar={() => setEditar(!editar)}
        toggleEliminar={() => setEliminar(!eliminar)}
        addButtonIcon={faPlus}
        editButtonIcon={faPen}
        deleteButtonIcon={faTrash}
        title="Contratos"
      />

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

      {error && <div className="alert alert-danger">{error}</div>}

      {data && data.map((contrato, index) => (
        <div className='cuadro-contrato' key={index}>
          <div className='row cuadro-li-back'>
            <ul>
              <li className="list-group-item cuadro-li">Codigo</li>
              <li className="list-group-item cuadro-li">Empresa</li>
              <li className="list-group-item cuadro-li">Fecha</li>
              <li className="list-group-item cuadro-li">Tipo</li>
              {eliminar && (
                <button className='btn btn-danger button-crud-eliminar' onClick={() => deleteContrato(contrato.id)}>
                  <FontAwesomeIcon icon={faTrash} className='icon-crud' />
                </button>
              )}
              {editar && (
                <>
                  <button className='btn btn-warning button-crud-eliminar' onClick={() => handleEditar(index)}>
                    <FontAwesomeIcon icon={faPen} className='icon-crud' />
                  </button>
                  <button className='btn btn-primary button-crud-eliminar'>
                    <FontAwesomeIcon icon={faFloppyDisk} className='icon-crud' />
                  </button>
                </>
              )}
            </ul>
          </div>
          <div className='row cuadro-li-back2'>
            <ul className='fila-dato'>
              <li className="list-group-item cuadro-li2">{contrato.id}</li>
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
    </div>
  );
};

export default Contrato;
