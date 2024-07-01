import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Estilos
import './../assets/profile/assets/plugins/bootstrap/css/bootstrap.min.css';
import './../assets/profile/css/style.css';
import './../assets/profile/css/colors/default-dark.css';
import './../assets/profile/assets/plugins/bootstrap/js/bootstrap.bundle.min.js';


function navbar() {
    return (
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
                        <a className="waves-effect waves-dark" href="usuario" aria-expanded="false">
                            <i className="mdi mdi-account-check"></i>
                            <span className="hide-menu">Perfil</span>
                        </a>
                    </li>
                    <li>
                        <a className="waves-effect waves-dark" href="calendario" aria-expanded="false">
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
                        <a className="waves-effect waves-dark" href="agregarhorapaciente" aria-expanded="false">
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
    );
}

export default navbar;