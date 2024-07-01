import React, { useEffect} from 'react';
import { Button} from "react-bootstrap";
import './../assets/css/Central.css';
import axios from 'axios';
import { mostrarData } from '../redux/actions/dataPacienteActions.js';
import { useSelector, useDispatch } from "react-redux";


function CentralPaciente() {
  const dispatch = useDispatch();
  const dataPaciente = useSelector((store) => store.dataReducer.datas);
  const isLogged = useSelector((store) => store.authReducer.isLogged);

  // Al montar el componente, realiza la solicitud para obtener los datos de los pacientes
  useEffect(() => {
    if (isLogged) {
      // Realizar la solicitud para obtener los datos de los pacientes
      axios.get('http://localhost:8080/patientByRut',{
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then((data) => {
        console.log(data);
        dispatch(mostrarData(data.data));
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, []);
  
  // Renderiza los datos de los pacientes y los botones
  return (
    <div className="central-container">
      <h2>Bienvenido(a)</h2>

      {/* Mostrar la información del paciente */}
      {dataPaciente && (

        <div>
          <p>Rut: {dataPaciente.rut}</p>
          <p>Nombre: {dataPaciente.name}</p>
          <p>Apellido: {dataPaciente.lastname}</p>
        </div>
      )}


      <h3>Seleccione una opción:</h3>
      <Button variant="primary" size="lg" onClick={() => window.location.href = '/MostrarHoraPaciente'}>
        Mostrar Horas Medicas
      </Button>
      <Button variant="primary" size="lg" onClick={() => window.location.href = '/AgregarHoraPaciente'}>
        Agregar Hora Medica
      </Button>
      <Button variant="primary" size="lg" onClick={() => window.location.href = '/'}>
        Editar Hora Medica
      </Button>
    </div>
  );
}

export default CentralPaciente;
