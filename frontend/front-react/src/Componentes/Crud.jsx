import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para validar las props
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon para los iconos
import { faBook } from '@fortawesome/free-solid-svg-icons';
import '../Assets/css/Components/Crud.css'; // Importa el archivo de estilos CSS

const Crud = ({ // Define el componente Crud como una función de flecha que recibe props
  title,
  toggleAñadir, // Función para mostrar/ocultar el formulario de añadir
  toggleEditar, // Función para mostrar/ocultar el formulario de editar
  addButtonIcon, // Icono para el botón de añadir
  toggleEliminar, // Función para mostrar/ocultar el formulario de eliminar
  editButtonIcon, // Icono para el botón de editar
  deleteButtonIcon // Icono para el botón de eliminar
}) => {
  return (
    <div className='container-fluid container-cuadro'> {/* Contenedor principal */}
      <FontAwesomeIcon icon={faBook} className='icon-book' /> {/* Icono opcional */}
      <h1 className='title-contrato'>{title}</h1> {/* Título */}
      <div className='row crud'> {/* Contenedor de botones */}
        {/* Botón de añadir con icono */}
        <button className='btn btn-primary button-crud' onClick={toggleAñadir}>
          <FontAwesomeIcon icon={addButtonIcon} className='icon-crud' />
        </button>
        {/* Botón de editar con icono */}
        <button className='btn btn-warning button-crud' onClick={toggleEditar}>
          <FontAwesomeIcon icon={editButtonIcon} className='icon-crud' />
        </button>
        {/* Botón de eliminar con icono */}
        <button className='btn btn-danger button-crud' onClick={toggleEliminar}>
          <FontAwesomeIcon icon={deleteButtonIcon} className='icon-crud' />
        </button>
      </div>
    </div>
  );
};

// Definición de propTypes para validar las props recibidas
Crud.propTypes = {
  title: PropTypes.string.isRequired, // Título (cadena) requerido
  toggleAñadir: PropTypes.func.isRequired, // Función toggleAñadir requerida
  toggleEditar: PropTypes.func.isRequired, // Función toggleEditar requerida
  toggleEliminar: PropTypes.func.isRequired, // Función toggleEliminar requerida
  addButtonIcon: PropTypes.object.isRequired, // Icono para el botón de añadir (objeto) requerido
  editButtonIcon: PropTypes.object.isRequired, // Icono para el botón de editar (objeto) requerido
  deleteButtonIcon: PropTypes.object.isRequired, // Icono para el botón de eliminar (objeto) requerido
};

export default Crud; // Exporta el componente Crud por defecto
