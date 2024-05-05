import React, { useEffect } from 'react';
import { Row, Container, Alert } from "react-bootstrap";
import './../assets/css/Central.css';
import { useSelector, useDispatch } from "react-redux";
import FormatoHoras from './FormatoHoras.jsx';

function AgregarHoraPaciente(){

    const isLogged = useSelector((store) => store.authReducer.isLogged);

	return isLogged ? (
		<Container fluid>
			<Row>
				<FormatoHoras />
			</Row>
		</Container>
	) : (
		<Alert variant="danger">Error!, necesitas estar logeado.</Alert>
	);
};


//agregar opcion de las 4 opciones en tipo de examen

export default AgregarHoraPaciente;