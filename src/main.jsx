// Importaciones necesarias desde React y ReactDOM
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// Importación de HelmetProvider para manejar el documento head de forma asíncrona
import { HelmetProvider } from 'react-helmet-async';

// Importaciones desde React Router DOM para manejar el enrutamiento
import { BrowserRouter as Router } from 'react-router-dom';

// Importación del proveedor de autenticación
import { AuthProvider } from './auth/AuthProvider';

// Importación de estilos globales
import './styles/index.css';

// Importación del componente principal de la aplicación
import App from './App';

// Renderización de la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode es una herramienta para destacar problemas potenciales en la aplicación
  <React.StrictMode>
    {/* HelmetProvider se usa para gestionar el documento head */}
    <HelmetProvider>
      {/* AuthProvider proporciona el contexto de autenticación a la aplicación */}
      <AuthProvider>
        {/* BrowserRouter es el enrutador que utiliza el historial del navegador */}
        <Router>
          {/* El componente principal de la aplicación */}
          <App />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
