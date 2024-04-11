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

 
    return true;
  } catch (error) {

    throw error;
  }
};


//Metodo para el borrado de contratos
export const deleteContrato = async (id) => {
  try {
    const response = await fetchDataFromAPI(`${baseURL}/${id}`, { method: 'DELETE' });


    if ('ok' in response && !response.ok) {
      const errorMessage = await response.json();
      throw new Error(errorMessage.error);
    }

    return null;
  } catch (error) {
    // Manejar cualquier error que ocurra durante la eliminación del contrato
    throw new Error('Error al eliminar el contrato. Por favor, inténtelo de nuevo más tarde.');
  }
};


//Metodo para modificar los datos
export const guardarDatosModificados = async (id, empresa, fecha, tipo) => {
  try {
    const response = await fetchDataFromAPI(`${baseURL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ empresa, fecha, tipo }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

      // Verifica si la respuesta indica un error
      if ('ok' in response && !response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.error);

      }

    // Devuelve true si los datos se guardaron correctamente
    return true;
  } catch (error) {
    console.error('Error al guardar los datos modificados del contrato:', error);
    throw new Error('Error al guardar los datos modificados del contrato. Por favor, inténtelo de nuevo más tarde.');
  }
};

