import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Creación de un contexto para la autenticación
const AuthContext = createContext();

// Definir el proveedor de autenticación
export const AuthProvider = ({ children }) => {
  // Definir el estado del token utilizando useState, inicializándolo con el token almacenado en localStorage
  const [token, setToken] = useState(localStorage.getItem("token"));

  // Función para iniciar sesión que almacena el token en localStorage y actualiza el estado del token
  const login = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  };

  // Función para cerrar sesión que elimina el token de localStorage y actualiza el estado del token a null
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  // Retornar el proveedor de contexto con el valor del token y las funciones login y logout
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Definir las propTypes para el proveedor de autenticación
AuthProvider.propTypes = {
  children: PropTypes.node,
};

// Exportar el contexto de autenticación
export { AuthContext };
