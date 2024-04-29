import React from "react";
import {Card} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
/* import { updateTask } from './redux/actions/pacienteActions.js'; */

function Hora(props) {

	const {id, date, start_time, end_time, exam_type, diagnosis, rut_doctor, rut_assistant} = useSelector((s) => s.pacienteReducer.horas.find((v) => v.id === props.id));
	//const dispatch = useDispatch();

	return id ? (
		<Card>
		  <Card.Img variant="top" src={"./../assets/profile/assets/images/users/doctor.jpg"} />
		  <Card.Body>
		    <Card.Title>{date}</Card.Title>
		    <Card.Text>
		      {start_time}
		    </Card.Text>
		  </Card.Body>
		</Card>
	) : (
		<div>error con task {props.id}</div>
	)
}

export default Hora;