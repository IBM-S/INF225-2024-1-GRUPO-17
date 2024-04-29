// -----------------------------------------------------------------------------
//
// Login del trabajador
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//                   Benjamin Pavez
//                   Sebastian Poppen
//
// Fecha Inicio: 10-10-2023
//
// Fecha Ultima Modificacion: 24-04-2024
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
// La pagina muestra el login del trabajador.
//
// -----------------------------------------------------------------------------

import React, { useState } from 'react';

import './../assets/css/style_login.css';

//Nuevos imports
import axios from 'axios';
import {Form} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {login, logout} from '../redux/actions/authActions.js';

const buttonContainerStyle = {
	textAlign: 'center',
};

const buttonStyle = {
	padding: '10px 20px',
	backgroundColor: '#212529',
	color: '#fff',
	border: 'none',
	borderRadius: '5px',
	cursor: 'pointer',
};

const contenedorStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	height: '350px',
	width: '500px',
};

const contenedorculiao = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	minHeight: '75vh', // Altura mínima de la ventana visible del navegador NO CAMBIAR 
};


function Login(props){
	const [rut, setRut] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();


	const handleRut = (e) => {
		setRut(e.target.value);
	}

	const handlePassword = (e) => {
		setPassword(e.target.value);
	}

	const handleLogout = (e) => {
		dispatch(logout());
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/loginPatient', {
			rut: rut,
			password: password,
		}).then((data) => {
			console.log(data);
			dispatch(login());
			
			localStorage.setItem('token', data.headers['auth-token']);
			window.location.href = '/Central'
		})
		.catch((error) => {
            // Maneja los errores si es necesario
            console.error("Error during login:", error);
        });
		
	}
	return(
		<div style={contenedorculiao}>
			<div style={contenedorStyle}>
				<div className="container" style={contenedorStyle}>
					<div className="box"></div>
						<div className="container-forms" style={{ marginLeft: "-65px" }}>
							<div className="container-info">
								<div className="info-item">
									<div className="table">
										<div className="table-cell">
										<div className="btn" style={buttonStyle}>Iniciar sesión</div>
									</div>
								</div>
							</div>
						</div>
						<div className="container-form">
							<div style={{ marginLeft: '65px' }}></div>
								<div className="form-item log-in">
								<div className="table">
									<div className="table-cell">
										{/* Inicio Formulario Nacho Alessandro */}
										<Form>
											<Form.Group controlId="formBasicEmail">
												<Form.Label>Rut</Form.Label>
												<Form.Control onChange={handleRut} type="rut" placeholder="rut" />
											</Form.Group>

											<Form.Group controlId="formBasicPassword">
												<Form.Label>Contraseña</Form.Label>
												<Form.Control onChange={handlePassword} type="contraseña" placeholder="contraseña" />
											</Form.Group>
										</Form>
										<div style={buttonContainerStyle} className="btn-container">
											<button style={buttonStyle} className="btnboton" onClick={handleSubmit}>
												Iniciar sesión
											</button>
											<button style={buttonStyle} className="btnboton" onClick={handleLogout}>
												Registrarse
											</button>
										</div>
										{/* Fin Formulario Nacho Alessandro */}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
