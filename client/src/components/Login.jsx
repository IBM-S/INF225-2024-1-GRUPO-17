import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import './../assets/css/style_login.css';

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

function LoginSignup() {
  const [datos, setDatos] = useState([]);
  const [rut, setRut] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/workers') //5000
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setDatos(data.data);
        } else {
          console.error('Error al obtener datos:', data.error);
        }
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  const formatRut = (event) => {
    let formattedRut = event.target.value.replace(/\./g, '').replace(/-/g, '');
    if (formattedRut.length > 0) {
      formattedRut = formattedRut.substring(0, formattedRut.length - 1) + '-' + formattedRut.charAt(formattedRut.length - 1);
      formattedRut = formattedRut.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }
    setRut(formattedRut);
  };

  const handleButtonClick = async () => {
    console.log('Botón presionado', rut, password);
  
    // Verificar con la base de datos
    const usuarioEncontrado = datos.find(
      (usuario) => usuario.rut === rut && usuario.password === password
    );
  
    if (usuarioEncontrado) {
      console.log('Usuario encontrado, redirigiendo a Central');
  
      // Encriptar el ID antes de enviarlo a través de la URL
      const encryptedId = btoa(usuarioEncontrado._id.toString());
  
      // Redirigir a la página "Central" con el ID encriptado
      window.location.href = `/Central/${encryptedId}`;
    } else {
      console.error('Usuario no encontrado o contraseña incorrecta');
      // Mostrar una alerta si el usuario no se encuentra
      alert('Usuario no encontrado o contraseña incorrecta');
    }
  };

  useEffect(() => {
    const handleButtonClick = () => {
      $(".container").toggleClass("log-in");
      $(".container").addClass("active");
    };

    $(".info-item .btn").click(handleButtonClick);
    $(".container-form .btn").click(handleButtonClick);
  }, []);

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <title>Log in</title>
        <link rel="stylesheet" href="./../assets/css/style_login.css" />
      </head>
      <body>
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
              <div style={{ marginLeft: '65px' }}><h3>Imagenologia</h3></div>
              <div className="form-item log-in">
                <div className="table">
                  <div className="table-cell">
                    <input type="text" maxLength="12" placeholder="Ej: 12345678-9" onInput={formatRut} value={rut} />
                    <input type="password" maxLength="8" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
                    <div style={buttonContainerStyle} className="btn-container">
                      <button style={buttonStyle} className="btnboton" onClick={handleButtonClick}>
                        Iniciar sesión
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default LoginSignup;
