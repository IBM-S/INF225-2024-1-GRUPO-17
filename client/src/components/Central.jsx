import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './../assets/css/Central.css';

function Central() {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Hacer una solicitud al servidor cuando el componente se monta
    fetch('http://localhost:5000/workers') // Cambiado a puerto 5000
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setDatos(data.data);
        } else {
          console.error('Error al obtener datos:', data.error);
        }
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []); // El segundo argumento [] significa que se ejecutará solo una vez al montar el componente

  // Función para desencriptar el id
  const desencriptarId = (idEncriptado) => {
    return atob(idEncriptado);
  };

  // Desencriptamos el id recibido
  const idDesencriptado = desencriptarId(id);

  // Buscamos la información correspondiente en el array de datos
  const usuarioEncontrado = datos.find(usuario => usuario._id === idDesencriptado);

  const handleEventClick = () => {
    window.location.href = `/infodia`;
  };

  const handleButtonClick = () => {
    window.location.href = `/crearinfo`;
  };

  const handleButton = () => {
    window.location.href = `/calendario`;
  };

  return (
    <div className="central-container">
      <h2>Bienvenido(a)</h2>

      {usuarioEncontrado ? (
        <>
          <h3>Información del usuario:</h3>
          <p>Nombre: {usuarioEncontrado.name}</p>
          <p>Ocupación: {usuarioEncontrado.occupation}</p>
          <p>RUT: {usuarioEncontrado.rut}</p>
        </>
      ) : (
        <p>Usuario no encontrado</p>
      )}

      <h3>Seleccione una opción</h3>
      <Button variant="primary" size="lg" onClick={handleEventClick}>
        Editar Hora Urgencia
      </Button>
      <Button variant="primary" size="lg" onClick={handleButtonClick}>
        Agregar Hora
      </Button>
      <Button variant="primary" size="lg" onClick={handleButton}>
        Ir al Calendario
      </Button>
    </div>
  );
}

export default Central;
