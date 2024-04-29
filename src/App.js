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

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" Component={Login} />
        <Route path="/FormatoHoras" Component={FormatoHoras} />
        <Route path="/mostrarhorapaciente" Component={MostrarHoraPaciente} />
        <Route path="/central/" Component={Central} />
        <Route path="/login" Component={Login} />
        <Route path="/infodia" Component={InfoDia}/>
        <Route path="/usuario/" Component={Usuario}/>
        <Route path="/Pruebas/" Component={Pruebas}/>
        <Route path="/personal/" Component={Personal}/>
        <Route path="/calendario" element={<EventsCalendar />} /> 
      </Routes>
    </Router>
  );
}

export default App;


