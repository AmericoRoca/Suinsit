import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPen, faTrash, faFloppyDisk, faChartSimple} from '@fortawesome/free-solid-svg-icons';
import '../Assets/css/Pages/Alm.css'
import Crud from '../Componentes/layout/private/Crud';
import { FormularioContrato } from '../Pages/Contrato/FormularioContrato';
import { fetchData, guardarDatos, deleteContrato, guardarDatosModificados } from '../Services/ContratoService';

export const Marketing = () => {

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

    const contrato = data[index]; // Obtener el contrato actual
    setEmpresa(contrato.empresa); // Establecer el valor de empresa
    setFecha(contrato.fechaFormateada); // Establecer el valor de fecha
    setTipo(contrato.tipo); // Establecer el valor de tipo
  };

  const handleGuardarCambios = async (id) => {
    try {
      console.log('Guardando cambios del contrato con ID:', id);
  
      await guardarDatosModificados(id, empresa, fecha, tipo);
  
      console.log('Datos del contrato actualizados con éxito');
  
      console.log('Actualizando lista de contratos...');
      const newData = await fetchData();
      console.log('Nuevos datos después de la actualización:', newData);
      setData(newData);
      setError(null);
      setEditandoIndex(-1); // Salir del modo de edición
    } catch (error) {
      console.error('Error al guardar los cambios del contrato:', error);
      setError('Error al guardar los cambios del contrato. Por favor, inténtelo de nuevo más tarde.');
    }
  };
  


  const handleEliminarContrato = async (id) => {
    try {
      console.log('Iniciando eliminación del contrato con ID:', id);
      await deleteContrato(id);
      console.log('Contrato eliminado con éxito');
      // Llamar a fetchData manualmente para actualizar la lista de contratos después de la eliminación
      console.log('Actualizando lista de contratos...');
      const newData = await fetchData();
      console.log('Nuevos datos después de la eliminación:', newData);
      setData(newData);
      setError(null); // Limpiar cualquier error anterior si la eliminación tiene éxito
    } catch (error) {
      console.error('Error al eliminar el contrato:', error);
      // Si hay un error al eliminar el contrato, mostrar el mensaje de error pero mantener los datos existentes
      setError('Error al eliminar el contrato. Por favor, inténtelo de nuevo más tarde.');
    }
  };





  return (
    <>
    {/* CRUD */} 

    <div className='container-fluid container-cuadro'>
      <Crud
        toggleAñadir={() => setAñadir(!añadir)}
        toggleEditar={() => setEditar(!editar)}
        toggleEliminar={() => setEliminar(!eliminar)}
        addButtonIcon={faPlus}
        editButtonIcon={faPen}
        deleteButtonIcon={faTrash}
        title="Marketing"
        icon={faChartSimple}
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
          fetchData={fetchData}
          setData={setData}
          setError={setError}
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
                <button className='btn btn-danger button-crud-eliminar' onClick={() => handleEliminarContrato(contrato.id)}>
                  <FontAwesomeIcon icon={faTrash} className='icon-crud' />
                </button>
              )}

              {editar && (
                <>
                  <button className='btn btn-warning button-crud-eliminar' onClick={() => handleEditar(index)}>
                    <FontAwesomeIcon icon={faPen} className='icon-crud' />
                  </button>
                  <button className='btn btn-primary button-crud-eliminar' onClick={() => handleGuardarCambios(contrato.id)}>
                    <FontAwesomeIcon icon={faFloppyDisk} className='icon-crud' />
                  </button>
                </>
              )}

            </ul>
          </div>

          <div className='row cuadro-li-back2'>
            <ul className='fila-dato'>
              <li className="list-group-item cuadro-li2">{contrato.id}</li>

              <li className="list-group-item cuadro-li2">
                {editandoIndex === index ? (
                  <input
                    type="text"
                    value={empresa}
                    onChange={(e) => setEmpresa(e.target.value)}
                  />
                ) : (
                  editandoIndex === index ? empresa : contrato.empresa
                )}
              </li>

              <li className="list-group-item cuadro-li2">
                {editandoIndex === index ? (
                  <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                  />
                ) : (
                  editandoIndex === index ? fecha : contrato.fechaFormateada
                )}
              </li>

              <li className="list-group-item cuadro-li2">
                {editandoIndex === index ? (
                  <input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                  />
                ) : (
                  editandoIndex === index ? tipo : contrato.tipo
                )}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Marketing;
