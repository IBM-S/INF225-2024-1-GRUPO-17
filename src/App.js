import React from 'react';
import './index.css';

import InfoDia from "./components/InfoDia";
import EventsCalendar from "./components/Calendario";
import Usuario from "./components/Usuario";
import Login from "./components/Login";
import Central from './components/Central';
import FormatoHoras from './components/FormatoHoras';
import Personal from './components/Personal';
import Pruebas from './components/Pruebas';
import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import MostrarHoraPaciente from './components/MostrarHoraPaciente';
import Register from './components/Register';
import AgregarHoraPaciente from './components/AgregarHoraPaciente';
import navbar from './components/navbar';
import EditarHoraPaciente from './components/EditarHoraPaciente';
import paginaPrincipal from './components/paginaPrincipal';
import loginWorker from './components/LoginWorker';
import registerWorker from './components/RegisterWorker';
import MostrarAllHoras from './components/MostrarAllHoras';
import horaFormatoHospital from './components/HoraFormatoHospital';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" Component={paginaPrincipal} />
        <Route path="/FormatoHoras" Component={FormatoHoras} />
        <Route path="/mostrarhorapaciente" Component={MostrarHoraPaciente} />
        <Route path="/agregarhorapaciente" Component={AgregarHoraPaciente} />
        <Route path="/central/" Component={Central} />
        <Route path="/login" Component={Login} />
        <Route path="/infodia" Component={InfoDia}/>
        <Route path="/editarhorapaciente" Component={EditarHoraPaciente}/>
        <Route path="/paginaprincipal" Component={paginaPrincipal}/>
        <Route path="/loginWorker" Component={loginWorker}/>
        <Route path="/MostrarAllHoras" Component={MostrarAllHoras}/>
        <Route path="/horasHospital" Component={horaFormatoHospital}/>
        <Route path="/usuario/" Component={Usuario}/>
        <Route path="/navbar/" Component={navbar}/>
        <Route path="/Pruebas/" Component={Pruebas}/>
        <Route path="/personal/" Component={Personal}/>
        <Route path="/register" Component={Register}/>
        <Route path="/registerworker" Component={registerWorker}/>
        <Route path="/calendario" element={<EventsCalendar />} /> 
      </Routes>
    </Router>
  );
}

export default App;


