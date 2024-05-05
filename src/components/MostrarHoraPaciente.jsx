import React, { useEffect } from 'react';
import { Col, Row, Container, Alert, Button, Form } from "react-bootstrap";
import './../assets/css/Central.css';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchHoras } from "../redux/actions/horaPacienteActions.js";
import FormatoHoras from './FormatoHoras.jsx';
import Hora from './Hora.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar.jsx';
//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


function MostrarHoraPaciente(){

    const isLogged = useSelector((store) => store.authReducer.isLogged);
	const dispatch = useDispatch();
	const Horas = useSelector((store) => store.pacienteReducer.horas);

	useEffect(() => {
		if (isLogged) {
			axios
				.get("http://localhost:8080/medicalAppointmentByPatient", {
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


  return isLogged ? (
    <div className="fix-header card-no-border fix-sidebar">
        
		<Navbar/>
        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">Horas paciente</h3>
                </div>
				<div className="col-12 mt10">
					<div style={{ marginLeft: '500px' }}></div>
					<Form>
					<Container fluid>
						<Row>
							{Horas.map((v) => (
								<Col key={v.id} md={2}>
									<Hora id={v.id}/>
								</Col>
							))}
						</Row>
					</Container>
					</Form>
				</div>
            	</div>
			</div>
            <footer className="footer">
                © 2024 ImagenApp by <a href="https://www.wrappixel.com/">Grupo 17</a>
            </footer>
        </div>
    </div>
    
	) : (
		<Alert variant="danger">Error!, necesitas estar logeado.</Alert>
	);

};
	

		


export default MostrarHoraPaciente;