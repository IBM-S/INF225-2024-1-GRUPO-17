import React, { useState } from "react";
import { Button, Col, Form, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function CrearInfo() {
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [mensajeExito, setMensajeExito] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    age: "",
    email: "",
    citation: "",
    tipo: "",
    rut: "",
    obs: "",
    tel: "",
  });

  const handleNombreChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };

  const handleApellidoChange = (event) => {
    setFormData({ ...formData, lastname: event.target.value });
  };

  const handleRutChange = (event) => {
    setFormData({ ...formData, rut: event.target.value });
  };

  const handleEdadChange = (event) => {
    setFormData({ ...formData, age: event.target.value });
  };

  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };

  const handleCitationChange = (event) => {
    setFormData({ ...formData, citation: event.target.value });
  };

  const handleTelChange = (event) => {
    setFormData({ ...formData, tel: event.target.value });
  };

  const handleObsChange = (event) => {
    setFormData({ ...formData, obs: event.target.value });
  };

  const handleTipoExamenChange = (event) => {
    const tipoExamen = event.target.value;
    setFormData({ ...formData, tipo: tipoExamen });
    let horasEspecificas = [];
    if (tipoExamen === "Resonancia") {
      horasEspecificas = ["8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
    } else if (tipoExamen === "Ecografia") {
      horasEspecificas = ["8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
    } else if (tipoExamen === "Radiografia") {
      horasEspecificas = ["8:30", "9:30", "10:30", "11:30", "12:30"];
    } else if (tipoExamen === "Escaner") {
      horasEspecificas = ["8:30", "10:00", "11:30"];
    }

    setHorasDisponibles(horasEspecificas);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    alert('Informacion guardada correctamente');
    window.location.href = `/infoDia`;
    try {
      const response = await axios.post('http://localhost:5000/guardar-informacion', formData);
      if (response.status === 201) {
        setMensajeExito('Se guardo correctamente la información');
      } else {
        setMensajeExito('');
      }
    } catch (error) {
      console.error('Error en la llamada a la API:', error);
      setMensajeExito('');
    }
  };
  

  return (
    <div className="col-12 mt10">
    <div style={{ marginLeft: '500px' }}><h3>Agregar hora</h3></div>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3 mt10">
          <Form.Group as={Col} controlId="name">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleNombreChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="lastname">
            <Form.Label>Apellido:</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleApellidoChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="rut">
            <Form.Label>Rut:</Form.Label>
            <Form.Control
              type="text"
              name="rut"
              value={formData.rut}
              onChange={handleRutChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="age">
            <Form.Label>Edad:</Form.Label>
            <Form.Control
              type="text"
              name="age"
              value={formData.age}
              onChange={handleEdadChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="tipo">
            <Form.Label>Tipo de examen:</Form.Label>
            <Form.Select
              name="tipo"
              value={formData.tipo}
              onChange={handleTipoExamenChange}
            >
              <option value="">Selecciona un tipo de examen</option>
              <option value="Resonancia">Resonancia</option>
              <option value="Ecografia">Ecografia</option>
              <option value="Radiografia">Radiografia</option>
              <option value="Escaner">Escaner</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="tel">
            <Form.Label>Telefono:</Form.Label>
            <Form.Control
              type="text"
              name="tel"
              value={formData.tel}
              onChange={handleTelChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="email">
            <Form.Label>Correo:</Form.Label>
            <Form.Control
              type="text"
              name="email"
              value={formData.email}
              onChange={handleEmailChange}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="citation">
            <Form.Label>Citacion:</Form.Label>
            <Form.Control
              type="text"
              name="citation"
              value={formData.citation}
              onChange={handleCitationChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="hora">
            <Form.Label>Hora:</Form.Label>
            <Form.Select
              name="hora"
              value={formData.citation}
              onChange={(e) => setFormData({ ...formData, citation: e.target.value })}
            >
              <option value="">Selecciona una hora</option>
              {horasDisponibles.map((hora, index) => (
                <option key={index} value={hora}>
                  {hora}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="obs">
            <Form.Label>Observación:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="obs"
              value={formData.obs}
              onChange={handleObsChange}
            />
          </Form.Group>
        </Row>

        <div>
          <Button variant="primary" type="submit">
            Confirmar
          </Button>
        </div>
      </Form>
      {mensajeExito && <div className="mensaje-exito">{mensajeExito}</div>}
    </div>
    
  );
}

export default CrearInfo;
