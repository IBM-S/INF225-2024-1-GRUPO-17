
// -----------------------------------------------------------------------------
//
// Pruebas del Sistema
//
// Desarrollado por: Alessandro Cintolesi
//                   Ignacio Muñoz
//                   Benjamin Pavez
//                   Sebastian Poppen
//
// Fecha Inicio: 20-04-2024
//
// Fecha Ultima Modificacion: 21-04-2024
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
// La pagina de pruebas.
//
// -----------------------------------------------------------------------------

import React from 'react';

//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


function Pruebas() {
  return (
    <div className="fix-header card-no-border fix-sidebar">
        <div className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="index.html">
                        <b>
                            <img src={require("./../assets/profile/assets/images/favicon.png")} alt="homepage" className="dark-logo" />
                        </b>
                        <span>
                            <img src={require("./../assets/profile/assets/images/logo-text.png")} alt="homepage" className="dark-logo" />
                        </span>
                    </a>
                </div>
                <div className="navbar-collapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-toggler hidden-md-up waves-effect waves-dark">
                                <i className="ti-menu"></i>
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav my-lg-0">
                        <li className="nav-item hidden-xs-down search-box">
                            <a className="nav-link hidden-sm-down waves-effect waves-dark">
                                <i className="ti-search"></i>
                            </a>
                            <form className="app-search">
                                <input type="text" className="form-control" placeholder="Search & enter" />
                                <a className="srh-btn">
                                    <i className="ti-close"></i>
                                </a>
                            </form>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-dark" href="#">
                                <img src={require("./../assets/profile/assets/images/users/doctor.jpg")} alt="user" className="profile-pic" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <aside className="left-sidebar">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li>
                            <a className="waves-effect waves-dark" href="index.html" aria-expanded="false">
                                <i className="mdi mdi-gauge"></i>
                                <span className="hide-menu">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="pages-profile.html" aria-expanded="false">
                                <i className="mdi mdi-account-check"></i>
                                <span className="hide-menu">Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="table-basic.html" aria-expanded="false">
                                <i className="mdi mdi-table"></i>
                                <span className="hide-menu">Calendario</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="icon-material.html" aria-expanded="false">
                                <i className="mdi mdi-emoticon"></i>
                                <span className="hide-menu">Editar Hora Urgencia</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="map-google.html" aria-expanded="false">
                                <i className="mdi mdi-earth"></i>
                                <span className="hide-menu">Map</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="pages-blank.html" aria-expanded="false">
                                <i className="mdi mdi-book-open-variant"></i>
                                <span className="hide-menu">Agregar Hora</span>
                            </a>
                        </li>
                        <li>
                            <a className="waves-effect waves-dark" href="pages-error-404.html" aria-expanded="false">
                                <i className="mdi mdi-help-circle"></i>
                                <span className="hide-menu">404</span>
                            </a>
                        </li>
                    </ul>
                    <div className="text-center mt-4">
                        <a href="https://wrappixel.com/templates/adminpro" className="btn waves-effect waves-light btn-info hidden-md-down text-white">
                            Cerrar Sesion
                        </a>
                    </div>
                </nav>
            </div>
        </aside>



        <div className="page-wrapper">
            <div className="container-fluid">
                <div className="row page-titles">
                <div className="col-md-5 align-self-center">
                    <h3 className="text-themecolor">Perfil</h3>
                </div>
                <div className="col-md-7 align-self-center">
                    <a href="https://wrappixel.com/templates/adminpro/" className="btn waves-effect waves-light btn-danger pull-right hidden-sm-down">
                    Upgrade to Pro
                    </a>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-4 col-xlg-3">
                    <div className="card">
                    <div className="card-body">
                        <center className="mt-4">
                        <img src={require("./../assets/profile/assets/images/users/paciente.jpg")} alt="Perfil de Juan Bodoque" className="img-circle" width="150" />
                        <h4 className="card-title mt-2">Juan Bodoque</h4>
                        <h6 className="card-subtitle">Paciente</h6>
                        <div className="row text-center justify-content-md-center">
                            <div className="col-4">
                            <a className="link">
                                <i className="icon-people"></i>
                                <font className="font-medium">254</font>
                            </a>
                            </div>
                            <div className="col-4">
                            <a className="link">
                                <i className="icon-picture"></i>
                                <font className="font-medium">54</font>
                            </a>
                            </div>
                        </div>
                        </center>
                    </div>
                    </div>
                </div>
                <div className="col-lg-8 col-xlg-9">
                    <div className="card">
                    <div className="card-body">
                        <form className="form-horizontal form-material mx-2">
                        <div className="form-group">
                            <label className="col-md-12">Nombre Completo</label>
                            <div className="col-md-12">
                            <input type="text" placeholder="Juan Carlos Bodoque" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="example-email" className="col-md-12">
                            Correo
                            </label>
                            <div className="col-md-12">
                            <input type="email" placeholder="JBodoque@hospital.com" className="form-control form-control-line" name="example-email" id="example-email" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12">Rut</label>
                            <div className="col-md-12">
                            <input type="text" placeholder="12345678-9"  className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12">Telefono</label>
                            <div className="col-md-12">
                            <input type="text" placeholder="912345678" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12">Edad</label>
                            <div className="col-md-12">
                            <input type="text" placeholder="12" className="form-control form-control-line" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12">Alergias</label>
                            <div className="col-md-12">
                            <textarea rows="5" placeholder="Paracetamol" className="form-control form-control-line"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-12">Tramo Fonasa</label>
                            <div className="col-sm-12">
                            <select className="form-control form-control-line">
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                                <option>D</option>
                                <option>E</option>
                            </select>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div class="panel panel-default">
                                    <div class="panel-heading text-center">
                                        <span><strong><span class="glyphicon glyphicon-folder-open"> </span> Imagenes</strong></span>
                                    </div>
                                    <table class="table table-bordered table-hover vmiddle">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Examen</th>
                                                <th>Acciones</th>
                                                <th>Tamaño</th>
                                                <th>Fecha</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-center"><span class="glyphicon glyphicon-file"></span></td>
                                                <td>Radiografia</td>
                                                <td class="text-center">
                                                    <a href="#"><span class="btn btn-sm btn-danger glyphicon glyphicon-trash"></span></a>
                                                    <a href="#"><span class="btn btn-sm btn-primary glyphicon glyphicon-pencil"></span></a>
                                                    <a href="#"><span class="btn btn-sm btn-warning glyphicon glyphicon-info-sign"></span></a>
                                                </td>
                                                <td>523.0 KB </td>
                                                <td>19-abr-24 08:45</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center"><span class="glyphicon glyphicon-folder-close"></span></td>
                                                <td>Ecografia</td>
                                                <td class="text-center">
                                                    <a href="#"><span class="btn btn-sm btn-danger glyphicon glyphicon-trash"></span></a>
                                                    <a href="#"><span class="btn btn-sm btn-primary glyphicon glyphicon-pencil"></span></a>
                                                    <a href="#"><span class="btn btn-sm btn-warning glyphicon glyphicon-info-sign"></span></a>
                                                </td>
                                                <td>523.0 KB </td>
                                                <td>10-oct-21 09:48</td>
                                            </tr>
                                            <tr>
                                                <td class="text-center"><span class="glyphicon glyphicon-compressed"></span></td>
                                                <td>Ecografia</td>
                                                <td class="text-center">
                                                    <a href="#"><span class="btn btn-sm btn-danger glyphicon glyphicon-trash"></span></a>
                                                    <a href="#"><span class="btn btn-sm btn-primary glyphicon glyphicon-pencil"></span></a>
                                                    <a href="#"><span class="btn btn-sm btn-warning glyphicon glyphicon-info-sign"></span></a>
                                                </td>
                                                <td>523.0 KB </td>
                                                <td>12-sep-19 08:36</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-12">
                            <button className="btn btn-success">Modificar Perfil</button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <footer className="footer">
                © 2024 ImagenApp by <a href="https://www.wrappixel.com/">Grupo 17</a>
            </footer>
        </div>
    </div>
  );
}

export default Pruebas;
