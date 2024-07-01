import React, { useState } from 'react';
import axios from 'axios';
import {Form, Button, Alert} from 'react-bootstrap';

function RegisterWorker(props) {
	

	const [rut, setRut] = useState('');
	const [name, setName] = useState('');
	const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
	const [address, setAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [position, setPosition] = useState('');
	const [estado, setEstado] = useState('');

	const handleRut = (e) => {
		setRut(e.target.value);
	}

	const handleName = (e) => {
		setName(e.target.value);
	}

	const handleLastName = (e) => {
		setLastName(e.target.value);
	}

    const handlePassword = (e) => {
		setPassword(e.target.value);
	}

	const handleBirthdate = (e) => {
		setBirthdate(e.target.value);
	}

    const handleAddress = (e) => {
		setAddress(e.target.value);
	}

	const handlePhoneNumber = (e) => {
		setPhoneNumber(e.target.value);
	}

    const handlePosition = (e) => {
		setPosition(e.target.value);
	}

	const handleRegister = (e) => {
		e.preventDefault();
		axios.post('http://localhost:8080/registerWorker', {
			rut: rut,
			name: name,
			lastname: lastname,
      password: password,
      birthdate: birthdate,
      address: address,
      phone_number: phone_number,
      position: position,
		}).then((data) => {
			setEstado('OK');
			console.log(data);
			window.location.href = '/loginWorker'
		}).catch((error) => {
			setEstado('ERROR')
            console.log(error);
		});
	}

	return (
		<Form >
			{estado !== '' && (
				<Alert variant={estado === 'OK' ? 'success' : 'danger'}>
					{estado}
				</Alert>
			)}
		  <Form.Group controlId="formBasicEmail">
		    <Form.Control onChange={handleRut} style={{ width: '400px'}} type="text" placeholder="Rut" />
		  </Form.Group>

		  <Form.Group>
		    <Form.Control onChange={handleName} style={{ width: '400px'}} type="text" placeholder="Nombre" />
		  </Form.Group>

		  <Form.Group>
		    <Form.Control onChange={handleLastName} style={{ width: '400px'}} type="text" placeholder="Apellido" />
		  </Form.Group>

          <Form.Group controlId="formBasicPassword">
		    <Form.Control onChange={handlePassword} style={{ width: '400px'}} type="text" placeholder="Contraseña" />
		  </Form.Group>

          <Form.Group>
		    <Form.Control onChange={handleBirthdate} style={{ width: '400px'}} type="date" placeholder="yyyy-mm-dd" />
		  </Form.Group>

          <Form.Group>
		    <Form.Control onChange={handleAddress} style={{ width: '400px'}} type="text" placeholder="Direccion" />
		  </Form.Group>

          <Form.Group>
		    <Form.Control onChange={handlePhoneNumber} style={{ width: '400px'}} type="text" placeholder="Telefono" />
		  </Form.Group>

        <Form.Group >
            <Form.Select onChange={handlePosition} style={{ width: '400px'}}>
              <option value="">Seleccione un tramo</option> {/* Opción inicial vacía */}
              <option value="jefe_unidad">jefe_unidad</option>
              <option value="secretaria_unidad">secretaria_unidad</option>
              <option value="tecnologo_medico">tecnologo_medico</option>
              <option value="medico_radiologo">medico_radiologo</option>
              <option value="tens">tens</option>
            </Form.Select>
        </Form.Group>

		  <Form.Group>
            <Button onClick={handleRegister} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '45px', border: '1px solid black' ,  textAlign: 'middle', width: '300px' }}>
                Registrarse
            </Button>
		</Form.Group>
          
		</Form>
	);
}

export default RegisterWorker;