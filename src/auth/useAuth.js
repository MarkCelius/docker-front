// useAuth.js
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

// Exportar el contexto del proveedor de Autenticacion

export const useAuth = () => useContext(AuthContext);