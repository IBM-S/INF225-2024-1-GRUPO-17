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

//Estilos
import './../assets/css/style_login.css';
import './../assets/js/script_login.js';

//Nuevos imports
import axios from 'axios';
import {Form, Row} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {login} from '../redux/actions/authActions.js';
import RegisterWorker from './RegisterWorker.jsx'


function LoginWorker(props){
	const [rut, setRut] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const [containerStyles, setContainerStyles] = useState({});

	const handleRut = (e) => {
		setRut(e.target.value);
	}

	const handlePassword = (e) => {
		setPassword(e.target.value);
	}



	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/loginWorker', {
			rut: rut,
			password: password,
		}).then((data) => {
			console.log(data);
			dispatch(login());
			
			localStorage.setItem('token', data.headers['auth-token']);
			window.location.href = '/MostrarAllHoras'
		})
		.catch((error) => {
            // Maneja los errores si es necesario
            console.error("Error during login:", error);
        });
	}

	const expandContainer = () => {
		console.log("AGRANDAR CONTENEDOR");
		setContainerStyles({ height: '600px', width: '500px', marginTop: '-100px' }); // Al presionar el botón, expande el contenedor culiao
	}
	return(
		<div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', marginTop: '90px' }}>
        <div className="box"></div>
        <div className="container-forms" >
          <div className="container-info">
			{/* Inicio Boton accion Nacho Alessandro */}
            <div className="info-item">
              <div className="table">
                <div className="table-cell">
                  <p>
                    Tienes una cuenta?
                  </p>
                  <div className="btn" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px', width: '150px', border: '1px solid black' }}>
                    Iniciar sesión
                  </div>
                  
                </div>
              </div>
            </div>
            <div className="info-item">
              <div className="table">
                <div className="table-cell">
                  <p>
                    No tienes una cuenta? 
                  </p>
                  <button className="btn" onClick={expandContainer} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px', width: '150px', border: '1px solid black' }}>
                    Registrate
                  </button>
                </div>
              </div>
            </div>
			{/* Fin Boton accion Nacho Alessandro */}
          </div>
          <div className="container-form" style={containerStyles}>
            <div className="form-item log-in">
              <div className="table">
                <div className="table-cell">
                    {/* Inicio Formulario Nacho Alessandro */}
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control onChange={handleRut} type="rut" placeholder="Ej: 12345678-9" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control onChange={handlePassword} type="contraseña" placeholder="Contraseña" />
                        </Form.Group>
                    </Form>
                  <button className="btn"  onClick={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px', width: '150px'}}>
                    Iniciar
                  </button>
                  {/* Fin Formulario Nacho Alessandro */}
                </div>
              </div>
            </div>
            <div className="form-item sign-up" style={{ width: '500px',  height: '500px'}}>
              <div className="table">
                <div className="table-cell">
					<Row>
						<RegisterWorker />
					</Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
	);
}

export default LoginWorker;
