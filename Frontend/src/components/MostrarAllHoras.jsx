import React, { useEffect, useState } from 'react';
import { Col, Row, Container, Alert, Form } from "react-bootstrap";
import './../assets/css/Central.css';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchHoras } from "../redux/actions/horaPacienteActions.js";
import HoraFormatoHospital from './HoraFormatoHospital.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar.jsx';
//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import '../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


function MostrarAllHoras(){

    const isLogged = useSelector((store) => store.authReducer.isLogged);
	const dispatch = useDispatch();
	const Horas = useSelector((store) => store.pacienteReducer.horas);
	const [selectedExamType, setSelectedExamType] = useState('');

	useEffect(() => {
		if (isLogged) {
			axios
				.get("http://localhost:8080/allMedicalAppointments", {
					headers: {
						"auth-token": localStorage.getItem("token"),
					},
				})
				.then((data) => {
					console.log(data);
					dispatch(fetchHoras(data.data));
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, []);

	const handleExamTypeChange = (e) => {
        setSelectedExamType(e.target.value);
    };

	  // Filtrar las horas médicas por el tipo de examen seleccionado
	  const filteredHoras = Horas.filter((hora) => {
        // Si no se selecciona ningún tipo, mostrar todas las horas médicas
        if (selectedExamType === '') {
            return true;
        }
        // Filtrar por tipo de examen
        return hora.exam_type === selectedExamType;
    });

  return isLogged ? (
    <div className="fix-header card-no-border fix-sidebar">
            <Navbar />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3 className="text-themecolor">Horas paciente</h3>
                        </div>
                    </div>
					<div style={{ maxHeight: '1000px', overflowY: 'auto' }}>
                    {/* Selector de tipo de examen */}
                    <Form.Select onChange={handleExamTypeChange} style={{ width: '200px', marginBottom: '15px' }}>
                        <option value="">Todos los tipos</option>
                        <option value="resonancia">resonancia</option>
                        <option value="tomografia">tomografia</option>
                        <option value="rayos">rayos</option>
						<option value="ecografia">ecografia</option>
                        {/* Añade más opciones según los tipos de exámenes disponibles  */}
                    </Form.Select>

                    <Container fluid>
                        <Row>
                            {/* Mapeando las horas médicas filtradas */}
                            {filteredHoras.map((v) => (
                                <Col key={v.id} md={2}>
                                    <HoraFormatoHospital
                                        id={v.id}
                                        date={v.date}
                                        start_time={v.start_time}
                                        end_time={v.end_time}
                                        exam_type={v.exam_type}
                                        diagnosis={v.diagnosis}
                                        rut_doctor={v.rut_doctor}
                                        rut_assistant={v.rut_assistant}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </div>
			</div>
                <footer className="footer">
                    © 2024 ImagenApp by <a href="https://www.wrappixel.com/">Grupo 17</a>
                </footer>
            </div>
        </div>
    )  : (
		<Alert variant="danger">Error!, necesitas estar logeado.</Alert>
	);

};
	

		


export default MostrarAllHoras;