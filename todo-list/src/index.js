import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa tus estilos globales
import App from './App'; // Importa el componente raíz

// Renderiza el componente App en el elemento con id 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
