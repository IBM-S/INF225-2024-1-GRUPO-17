// -----------------------------------------------------------------------------
//
// Filtro de Informacion del Dia por Tipo de Examen
//
// Desarrollado por: Diego Cisternas
//                   Ignacio Muñoz
//                   Benjamin Pavez
//
// Fecha Inicio: 10-10-2023
//
// Fecha Ultima Modificacion: 27-11-2023
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
// La pagina muestra los usuarios que tienen horas agendadas para el dia actual, 
// separado por el tipo de examen.
//
// -----------------------------------------------------------------------------

import React, { useEffect, useState } from 'react';
import './../assets/css/InfoDia.css';
import { Tabs, Tab } from 'react-bootstrap';

function InfoDia() {
  const [setDatos] = useState([]);

  useEffect(() => {
    //Hacer una solicitud al servidor cuando el componente se monta
    fetch('http://localhost:5000/print-db') //Cambiado a puerto 5000
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setDatos(data.data);
          

          
          //Transformar datos para cada tipo de examen
          const ecografiaData = data.data.filter(item => item.tipo === "Ecografia").map(item => ({
            name: item.name,
            lastname: item.rut,
            age: item.age,
            email: item.email,
            citation: item.citation,
          }));

          const resonanciaData = data.data.filter(item => item.tipo === "Resonancia").map(item => ({
            name: item.name,
            lastname: item.lastname,
            age: item.age,
            email: item.email,
            citation: item.citation,
          }));

          const radiografiaData = data.data.filter(item => item.tipo === "Radiografia").map(item => ({
            name: item.name,
            lastname: item.rut,
            age: item.age,
            email: item.email,
            citation: item.citation,
          }));

          const escanerData = data.data.filter(item => item.tipo === 'Escaner').map(item => ({
            name: item.name,
            lastname: item.rut,
            age: item.age,
            email: item.email,
            citation: item.citation,
          }));

          setEcografiaData(ecografiaData);
          setResonanciaData(resonanciaData);
          setRadiografiaData(radiografiaData);
          setEscanerData(escanerData);
        } else {
          console.error('Error al obtener datos:', data.error);
        }
      })
      .catch(error => console.error('Error al obtener datos:', error));
  }, []); //El segundo argumento [] significa que se ejecutará solo una vez al montar el componente

  const [ecografiaData, setEcografiaData] = useState([]);
  const [resonanciaData, setResonanciaData] = useState([]);
  const [radiografiaData, setRadiografiaData] = useState([]);
  const [escanerData, setEscanerData] = useState([]);

  const [inputValue, setInputValue] = useState('');
  const [editingRow, setEditingRow] = useState(-1);

  const handleEdit = (index, data, setData) => {
    const regex = /^(9|10|11|12|15|16):00/;
    const regex2 = /^(8|9|10|11|12|14|15):30/;
    if ((regex2.test(inputValue)||regex.test(inputValue)) && inputValue.split(':')[0] >= 8 && inputValue.split(':')[0] <= 16) {
      const newData = [...data];
      newData[index].citation = inputValue;
      setData(newData);
      setInputValue('');
    } else {
      alert('Hora no permitida. Ingrese una hora válida entre 8:30 y 12:30 o 14:30 y 16:00 en formato HH:00');
      setInputValue('');
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEditRow = (index) => {
    setEditingRow(index);
  };

    //Función para renderizar las tabs
    const renderTabs = (data, setData, title) => {
      return (
        <Tab eventKey={title} title={title}>
          <div className="table-container">
            <table>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    {item && typeof item === 'object' && Object.values(item).map((value, i) => (
                      <td key={i}>
                        {i ===0 ? (
                          <a href={`/usuario`}>
                          {value}
                          </a>
                        ) : (
                          value
                        )}
                        </td>
                    ))}
                    <td>
                      {editingRow === index ? (
                        <div>
                          <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Cambiar Hora"
                          />
                          <button onClick={() => handleEdit(index, data, setData)}>Guardar</button>
                        </div>
                      ) : (
                        <button onClick={() => handleEditRow(index)}>Editar</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Tab>
      );
    };


  return (
    <Tabs defaultActiveKey="Resonancia" id="uncontrolled-tab-example" className="mb-3">
      {renderTabs(resonanciaData, setResonanciaData, 'Resonancia')}
      {renderTabs(ecografiaData, setEcografiaData, 'Ecografía')}
      {renderTabs(radiografiaData, setRadiografiaData, 'Radiografía')}
      {renderTabs(escanerData, setEscanerData, 'Escáner')}
    </Tabs>
  );
}

export default InfoDia;