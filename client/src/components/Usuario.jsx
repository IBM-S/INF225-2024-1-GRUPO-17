// Importa las bibliotecas necesarias si aún no las tienes
import React, { useEffect, useState } from 'react';

function Usuario(){
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // Hacer una solicitud al servidor cuando el componente se monta
    fetch('http://localhost:5000/print-db') // Cambiado a puerto 5000
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setDatos(data.data);
        } else {
          console.error('Error al obtener datos:', data.error);
        }
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []); // El segundo argumento [] significa que se ejecutará solo una vez al montar el componente

  return (
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <link rel="canonical" href="https://www.wrappixel.com/templates/materialpro-lite/" />
        <link rel="icon" type="image/png" sizes="16x16" href="../assets/images/favicon.png" />
        <link href="./../assets/css/style.min_prof.css" rel="stylesheet" />

        <link rel="shortcut icon" href="favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" href="./../assets/css/animate.css" />
        <link rel="stylesheet" href="./../assets/css/icomoon.css" />
        <link rel="stylesheet" href="./../assets/css/bootstrap.css" />
        <link rel="stylesheet" href="./../assets/css/superfish.css" />
        <link rel="stylesheet" href="./../assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="./../assets/css/bootstrap-datepicker.min.css" />
        <link rel="stylesheet" href="./../assets/css/cs-select.css" />
        <link rel="stylesheet" href="./../assets/css/cs-skin-border.css" />
        <link rel="stylesheet" href="./../assets/css/style_perfil.css" />
        <script src="./../assets/js/modernizr-2.6.2.min.js"></script>
      </head>

      <body>
        <div className="preloader">
          <div className="lds-ripple">
            <div className="lds-pos"></div>
            <div className="lds-pos"></div>
          </div>
        </div>

        <style>
          {`
          body {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100vh;
              margin: 0;
          }

          .centered-div {
              width: 200px;
              height: 200px;
              background-color: lightgray;
              text-align: center;
              line-height: 200px;
          }
        `}
        </style>
        <div id="main-wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-xlg-9 col-md-7">
                <div className="card" style={{ width: '700px', marginLeft: '50px', marginTop: '10px' }}>
                  <div className="card-body">
                    <div className="form-group">
                      <label className="col-md-12 mb-0">
                        Nombre Completo
                      </label>
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="FullName3"
                          name="name"
                          className="form-control ps-0 form-control-line"
                          value={datos.length > 0 ? datos[0].name : ''}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                    <label htmlFor="example-email" className="col-md-12">
                      Correo
                    </label>
                    <div className="col-md-12">
                      <input
                        type="text"
                        id="Email3"
                        name="email"
                        className="form-control ps-0 form-control-line"
                        value={datos.length > 0 ? datos[0].email : '' } // Asumiendo que datos es un array y quieres mostrar el primer correo electrónico
                        disabled
                      />
                    </div>
                  </div>
                    <div className="form-group">
                      <label className="col-md-12 mb-0">Telefono</label>
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="telefono"
                          name="telefono"
                          maxlength="8"
                          className="form-control ps-0 form-control-line"
                          value={datos.length > 0 ? datos[0].tel : ''}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 mb-0">Rut</label>
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="Email3"
                          name="email"
                          className="form-control ps-0 form-control-line"
                          value={datos.length > 0 ? datos[0].rut : ''} 
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 mb-0">Edad</label>
                      <div className="col-md-12">
                        <input
                          type="fechaNac"
                          id="fechaNac"
                          name="fechaNac"
                          maxlength="8" 
                          className="form-control ps-0 form-control-line"
                          value={datos.length > 0 ? datos[0].age : ''}
                          disabled
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-md-12 mb-0">Información</label>
                      <div className="col-md-12">
                        <input
                          type="text"
                          id="fechaNac"
                          name="fechaNac"
                          maxlength="8"
                          className="form-control ps-0 form-control-line"
                          value={datos.length > 0 ? datos[0].obs : ''}
                          disabled
                        />
                      </div>
                    </div>

                    <div className="col-sm-12 d-flex">{/* Puedes agregar más contenido aquí si es necesario */}</div>

                    {/* También puedes descomentar y modificar el siguiente bloque según tus necesidades */}
                    {/*
                    <div className="form-group">
                      <div className="col-sm-12 d-flex">
                        <button className="btn btn-success mx-auto mx-md-0 text-white" style={{ marginTop: '15px' }}>
                          Actualizar Hora
                        </button>
                      </div>
                    </div>
                    */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script src="./../assets/plugins/jquery/dist/jquery.min.js"></script>
        <script src="./../assets/plugins/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
        <script src="./../assets/js/app-style-switcher_prof.js"></script>
        <script src="./../assets/js/waves_prof.js"></script>
        <script src="./../assets/js/sidebarmenu_prof.js"></script>
        <script src="./../assets/js/custom_prof.js"></script>
      </body>
    </html>
  );
};

export default Usuario;
