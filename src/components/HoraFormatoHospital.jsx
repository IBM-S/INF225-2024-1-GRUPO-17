import React, { useState } from 'react';
import {Card, ListGroup, ListGroupItem, Form} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function convertirFecha(fecha) {
	// Dividir la cadena de fecha en un array [yyyy, mm, dd]
	const partes = fecha.split('-');
	
	// Reorganizar las partes para obtener [dd, mm, yyyy]
	const dd = partes[2];
	const mm = partes[1];
	const yyyy = partes[0];
	
	// Combinar las partes en el formato deseado dd-mm-yyyy
	const fechaConvertida = `${dd}-${mm}-${yyyy}`;
	
	return fechaConvertida;
}


// Función para calcular la cantidad de días que quedan desde la fecha actual hasta una fecha futura
function calcularDiasRestantes(fechaFutura) {
    // Obtener la fecha actual
    const fechaActual = new Date();
    
    // Convertir la fecha futura a un objeto Date
    const fechaFin = new Date(fechaFutura);
    
    // Calcular la diferencia en milisegundos
    const diferenciaMilisegundos = fechaFin - fechaActual;
    
    // Convertir la diferencia en días
    const diasRestantes = Math.floor(diferenciaMilisegundos / (24 * 60 * 60 * 1000));
    
    return diasRestantes;
  }

function HoraFormatoHospital(props) {
    
	const {id, date, start_time, end_time, exam_type, diagnosis, rut_doctor, rut_assistant} = useSelector((s) => s.pacienteReducer.horas.find((v) => v.id === props.id));

    const diasRestantes = calcularDiasRestantes(date);

	return id ? (
		<Card>
            {/* Mostrar la imagen del doctor o el tema de la tarjeta */}
            <Card.Img variant="top" src="./../assets/profile/assets/images/users/doctor.jpg" alt="Doctor" />

            {/* Cuerpo de la tarjeta con los detalles de la hora */}
            <Card.Body>
                <Card.Title>Detalles de la Hora</Card.Title>
                {/* Usar un ListGroup para presentar la información de forma estructurada */}
                <ListGroup variant="flush">
                    <ListGroupItem>
                        <strong>Días restantes hasta {convertirFecha(date)}:</strong> {diasRestantes}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Fecha:</strong> {convertirFecha(date)}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Hora de inicio:</strong> {start_time}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Hora de fin:</strong> {end_time}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Tipo de examen:</strong> {exam_type}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>Diagnóstico:</strong> {diagnosis}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>RUT del doctor:</strong> {rut_doctor}
                    </ListGroupItem>
                    <ListGroupItem>
                        <strong>RUT del asistente:</strong> {rut_assistant}
                    </ListGroupItem>
                </ListGroup>
            </Card.Body>
        </Card>
    ) : (
        <div>Error con la hora {props.id}</div>
    );
}

export default HoraFormatoHospital;