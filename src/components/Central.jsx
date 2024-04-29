import React, { useEffect, useState } from 'react';
import { Button } from "react-bootstrap";
import './../assets/css/Central.css';
import axios from 'axios';
//import { fetchPaciente } from '../redux/actions/pacienteActions';
import { useDispatch } from "react-redux";


function CentralPaciente() {
  // Estado para almacenar los datos de los pacientes
  const [pacientes, setPacientes] = useState([]);
  const dispatch = useDispatch();
  //const paciente_ = useSelector((store) => store.pacienteReducer.rut);


  // Al montar el componente, realiza la solicitud para obtener los datos de los pacientes
  useEffect(() => {

    // Realizar la solicitud para obtener los datos de los pacientes
    axios.get('http://localhost:8080/patientByRut',{
      headers: {
        "auth-token": localStorage.getItem("token"),
      }
    })
      .then(data => {
        //dispatch(fetchPaciente(data.data));

        // Almacenar los datos de los pacientes en el estado
        /* console.log('Datos de la API:', data);
        setPacientes(data); */
      })
      .catch(error => {
        // Manejar errores
        console.error('Error al obtener datos:', error);
      });
  }, []);
  
  // Renderiza los datos de los pacientes y los botones
  return (
    <div className="central-container">
      <h2>Bienvenido(a)</h2>

      {/* Mostrar los datos de los pacientes si están disponibles */}
      {pacientes.length > 0 ? (
        pacientes
      ) : (
        <p>Cargando datos...</p>
      )}

      <h3>Seleccione una opción:</h3>
      <Button variant="primary" size="lg" onClick={() => window.location.href = '/MostrarHoraPaciente'}>
        Mostrar Horas Medicas
      </Button>
      <Button variant="primary" size="lg" onClick={() => window.location.href = '/'}>
        Agregar Hora Medica
      </Button>
      <Button variant="primary" size="lg" onClick={() => window.location.href = '/'}>
        Editar Hora Medica
      </Button>
    </div>
  );
}

export default CentralPaciente;
