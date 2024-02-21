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
    if (error instanceof TypeError) {
      console.error('Error de red:', error);
      throw new Error('Error de red. Por favor, verifique su conexión a Internet.');
    } else if (error instanceof SyntaxError) {
      console.error('Error de análisis JSON:', error);
      throw new Error('Error de análisis JSON. Por favor, verifique el formato de los datos recibidos.');
    } else {
      console.error('Error en la solicitud:', error);
      throw new Error('Error en la solicitud. Por favor, inténtelo de nuevo más tarde.');
    }
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

// Función para guardar un nuevo contrato
export const guardarDatos = async (fecha, empresa, tipo) => {
  try {
    const fechaFormateada = moment(fecha).format('DD-MM-YYYY');
    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fecha: fechaFormateada, empresa, tipo })
    };
    await fetchDataFromAPI(baseURL, options);
    return true;
  } catch (error) {
    throw error;
  }
};

// Función para eliminar un contrato en el cliente
export const deleteContrato = async (id) => {
  try {
    const response = await fetchDataFromAPI(`${baseURL}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      // Si la respuesta no es exitosa, lanzar un error con el mensaje de error proporcionado por el servidor
      const errorMessage = await response.json(); // Obtener el mensaje de error del cuerpo de la respuesta
      throw new Error(errorMessage.error); // Lanzar un nuevo error con el mensaje de error
    }
    // Si la eliminación fue exitosa, devolver la respuesta vacía
    return null; // Devuelve la respuesta para manejarla en el componente
  } catch (error) {
    // Si se produce algún error durante la solicitud, lanzar un error con un mensaje genérico
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
