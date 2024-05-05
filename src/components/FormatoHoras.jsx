// -----------------------------------------------------------------------------
//
// Formulario para agregar horas (Con Backend)
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//                   Benjamin Pavez
//
// Fecha Inicio: 20-04-2024
//
// Fecha Ultima Modificacion: 23-04-2024
//
//
// Este código fuente representa una parte del proyecto de Analisis y Diseño de
// Software (INF-236) e Ingenieria de Software (INF-225), para mas informacion
// revisar el README en GitHub.
//
// El código fuente se distribuye con la esperanza de que sea útil,
// pero SIN NINGUNA GARANTÍA; sin siquiera la garantía implícita de
// APTITUD PARA UN PROPÓSITO PARTICULAR.
//
//
// DESCRIPCIÓN:
// La pagina muestra un formulario para agregar otra hora dependiendo del 
// tipo de examen.
//
// -----------------------------------------------------------------------------

import React, { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { createHora } from '../redux/actions/horaPacienteActions.js';
import Navbar from './navbar.jsx'
import moment from 'moment';
//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


//Funcion Nacho Alessandro
function FormatoHoras() {
	const isLogged = useSelector((store) => store.authReducer.isLogged);
	const [date, setDate] = useState('');
	const [start_time, setStartTime] = useState('');
    const [end_time, setEndTime] = useState('');
    const [exam_type, setExamType] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
	const [rut_doctor, setRutDoctor] = useState('');
    const [rut_assistant, setRutAssistant] = useState('');

	const dispatch = useDispatch();

	const handleDate = (e) => {
        setDate(e.target.value);
	}
	const handleStartTime = (e) => {
		setStartTime(e.target.value);
	}
	const handleEndTime = (e) => {
		setEndTime(e.target.value);
	}
    const handleExamType = (e) => {
		setExamType(e.target.value);
	}
    const handleDiagnosis = (e) => {
		setDiagnosis(e.target.value);
	}
    const handleRutDoctor = (e) => {
		setRutDoctor(e.target.value);
	}
    const handleRutAssistant = (e) => {
		setRutAssistant(e.target.value);
	}
	

	const handleSubmit = (e) => { 
		e.preventDefault();
		axios.post('http://localhost:8080/createMedicalAppointment', {
			date: date,
			start_time: start_time,
            end_time: end_time,
			exam_type: exam_type,
            diagnosis: diagnosis,
            rut_doctor: rut_doctor,
            rut_assistant: rut_assistant,
		}, {
			headers: {
				'auth-token': localStorage.getItem('token'),
			}
		}).then((data) => {
			dispatch(createHora(data.data));

            window.location.href = '/mostrarhorapaciente'
		})
	}
  

  return (
    <div className="fix-header card-no-border fix-sidebar">
        <div className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <b>
                            <img src={require("./../assets/profile/assets/images/favicon.png")} alt="homepage" className="dark-logo" />
                        </b>
                        <span>
                            <img src={require("./../assets/profile/assets/images/logo-text.png")} alt="homepage" className="dark-logo" />
                        </span>
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark">
                                <i className="ti-menu"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                        <li className="nav-item hidden-xs-down search-box">
                            <a className="nav-link hidden-sm-down waves-effect waves-dark">
                                <i className="ti-search"></i>
                            </a>
                            <form className="app-search">
                                <input type="text" className="form-control" placeholder="Search & enter" />
                                <a className="srh-btn">
                                    <i className="ti-close"></i>
                                </a>
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-dark" href="#">
                                <img src={require("./../assets/profile/assets/images/users/doctor.jpg")} alt="user" className="profile-pic" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <Navbar/>
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">Agregar Hora</h3>
                </div>
				<div className="col-12 mt10">
					<div style={{ marginLeft: '500px' }}></div>
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Fecha</Form.Label>
							<Form.Control onChange={handleDate} type="date" placeholder="Enter fecha" />
						</Form.Group>

                        <Form.Group controlId="formBasicEmail">
							<Form.Label>Hora de inicio</Form.Label>
							<Form.Control onChange={handleStartTime} type="time" placeholder="Enter nombre" />
						</Form.Group>

                        <Form.Group controlId="formBasicEmail">
							<Form.Label>Hora de termino</Form.Label>
							<Form.Control onChange={handleEndTime} type="time" placeholder="Enter nombre" />
						</Form.Group>

                        <Form.Group controlId="formExamType">
                            <Form.Label>Tipo de examen</Form.Label>
                            <Form.Select onChange={handleExamType}>
                                <option value="">Seleccione una opción</option>
                                <option value="a">resonancia</option>
                                <option value="b">tomografia</option>
                                <option value="c">rayos</option>
                                <option value="d">ecografia</option>
                            </Form.Select>
                        </Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Posible diagnostico</Form.Label>
							<Form.Control onChange={handleDiagnosis} type="email" placeholder="Enter descripción" />
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Rut Doctor</Form.Label>
							<Form.Control onChange={handleRutDoctor} type="email" placeholder="Enter descripción" />
						</Form.Group>

						<Form.Group controlId="formBasicEmail">
							<Form.Label>Rut asistente</Form.Label>
							<Form.Control onChange={handleRutAssistant} type="email" placeholder="Enter descripción" />
						</Form.Group>

                        
						<Button onClick={handleSubmit} variant="primary" type="submit">
							Enviar
						</Button>
					</Form>
				</div>
            	</div>
			</div>
            <footer className="footer">
                © 2024 ImagenApp by <a href="https://www.wrappixel.com/">Grupo 17</a>
            </footer>
        </div>
    </div>
    
  );
}

export default FormatoHoras;
