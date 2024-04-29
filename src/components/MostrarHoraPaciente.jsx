import React, { useEffect } from 'react';
import { Col, Row, Container, Alert } from "react-bootstrap";
import './../assets/css/Central.css';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { fetchHoras } from "../redux/actions/pacienteActions.js";
import FormatoHoras from './FormatoHoras.jsx';
import Hora from './Hora.jsx';

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
		<Container fluid>
			<Row>
				<FormatoHoras />
			</Row>
			<Row>
				{Horas.map((v) => (
					<Col key={v.id} md={2}>
						<Hora id={v.id}/>
					</Col>
				))}
			</Row>
		</Container>
	) : (
		<Alert variant="danger">Error!, necesitas estar logeado.</Alert>
	);
};


export default MostrarHoraPaciente;