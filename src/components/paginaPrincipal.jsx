import React from 'react';

function paginaPrincipal() {

  // Funciones para manejar los eventos de clic en los botones
  const handleButtonClick1 = () => {
    window.location.href = '/loginWorker'; // Navega a /other cuando se hace clic en el botón 1
  };

  const handleButtonClick2 = () => {
    window.location.href = '/login'; // Navega a /other cuando se hace clic en el botón 2
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', height: '100vh'}}>
      <h1>Esto es para los devs</h1>
      <button style={{margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer',}} 
        onClick={handleButtonClick1}>Login trabajadores</button>
      <button style={{margin: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer',}} 
        onClick={handleButtonClick2}>Login pacientes</button>
    </div>
  );
}

export default paginaPrincipal;
