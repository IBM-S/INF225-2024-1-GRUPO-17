// -----------------------------------------------------------------------------
//
// Disponibilidad de Equipos
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
// La pagina muestra la informacion acerca de la disponibilidad de los integrantes
// que conforman cada equipo.
//
// -----------------------------------------------------------------------------

import React from 'react';

//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


function Personal() {
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
                                <span className="hide-menu">Pacientes</span>
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
                                <span className="hide-menu">Estado Equipos</span>
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
                    <h3 className="text-themecolor">Estado Equipos</h3>
                </div>
                <div className="col-md-7 align-self-center">
                    <a href="https://wrappixel.com/templates/adminpro/" className="btn waves-effect waves-light btn-danger pull-right hidden-sm-down">
                    Modificar
                    </a>
                </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Estado del Equipo</h4>
                                <h6 class="card-subtitle">Dia: 21-04-2024</h6>
                                <h6 class="card-subtitle">Ubicacion: Radiografia</h6>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>ID</th>
                                                <th>Nombre</th>
                                                <th>Ubicacion</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>231</td>
                                                <th>Benjamin Pavez</th>
                                                <td>Radiografia</td>
                                                <td>Disponible</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>232</td>
                                                <th>Alessandro Cintolesi</th>
                                                <td>Radiografia</td>
                                                <td>Licencia</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>233</td>
                                                <th>Sebastian Poppen</th>
                                                <td>Radiografia</td>
                                                <td>Trabajando</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>234</td>
                                                <th>Ignacio Muñoz</th>
                                                <td>Radiografia</td>
                                                <td>Disponible</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>235</td>
                                                <th>Vicente Ruiz</th>
                                                <td>Radiografia</td>
                                                <td>Licencia</td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>236</td>
                                                <th>Pedro Montt</th>
                                                <td>Radiografia</td>
                                                <td>Trabajando</td>
                                            </tr>
                                            <tr>
                                                <td>7</td>
                                                <td>237</td>
                                                <th>Manuel Montt</th>
                                                <td>Radiografia</td>
                                                <td>Disponible</td>
                                            </tr>
                                            <tr>
                                                <td>8</td>
                                                <td>238</td>
                                                <th>Jose Miguel</th>
                                                <td>Radiografia</td>
                                                <td>Licencia</td>
                                            </tr>
                                            <tr>
                                                <td>9</td>
                                                <td>239</td>
                                                <th>Juan Carlos</th>
                                                <td>Radiografia</td>
                                                <td>Trabajando</td>
                                            </tr>
                                            <tr>
                                                <td>10</td>
                                                <td>240</td>
                                                <th>Arturo Prat</th>
                                                <td>Radiografia</td>
                                                <td>Disponible</td>
                                            </tr>
                                            <tr>
                                                <td>11</td>
                                                <td>241</td>
                                                <th>Tulio Trivino</th>
                                                <td>Radiografia</td>
                                                <td>Licencia</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>242</td>
                                                <th>Zico Limon</th>
                                                <td>Radiografia</td>
                                                <td>Licencia</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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

export default Personal;
