import moment from 'moment';

const baseURL = 'http://localhost:3001/contratos';

// Función genérica para hacer peticiones a la API
export const fetchDataFromAPI = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error en la solicitud:', error);
    throw new Error('Error en la solicitud. Por favor, inténtelo de nuevo más tarde.');
  }
};

// Función para obtener los contratos
export const fetchData = async () => {
  try {
    const jsonData = await fetchDataFromAPI(baseURL);
    const dataFormateada = jsonData.map(contrato => ({
      ...contrato,
      fechaFormateada: moment(contrato.fecha).format('DD-MM-YYYY')
    }));
    return dataFormateada;
  } catch (error) {
    throw error;
  }
};

// Función para guardar datos
export const guardarDatos = async (fecha, empresa, tipo) => {
  try {
    // Formatea la fecha utilizando moment.js
    const fechaFormateada = moment(fecha).format('YYYY-MM-DD');

    // Define las opciones para la solicitud POST
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fecha: fechaFormateada, empresa, tipo })
    };

    // Realiza la solicitud al API
    await fetchDataFromAPI(baseURL, options);

    // Retorna true para indicar que la solicitud fue exitosa
    return true;
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante la solicitud
    throw error;
  }
};


// Función para eliminar un contrato en el cliente
export const deleteContrato = async (id) => {
  try {
    const response = await fetchDataFromAPI(`${baseURL}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.error);
    }
    // No es necesario lanzar una excepción aquí si la eliminación fue exitosa
    return null;
  } catch (error) {
    // Manejar cualquier error que ocurra durante la eliminación del contrato
    throw new Error('Error al eliminar el contrato. Por favor, inténtelo de nuevo más tarde.');
  }
};


// Función para guardar los cambios al editar un contrato
export const guardarCambios = async (editandoContrato) => {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editandoContrato)
    };
    await fetchDataFromAPI(`${baseURL}/${editandoContrato.id}`, options);
    return true;
  } catch (error) {
    throw error;
  }
};
