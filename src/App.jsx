// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useAuth } from "./auth/useAuth";
import {
  publicRoutes,
  protectedRoutes,
  dashboardRoutes,
  RouteProtected,
  ErrorPage
} from "./routes";

// Componente principal de la aplicación
const App = () => {
  // Utiliza el hook de autenticación para obtener el estado de autenticación del usuario
  const { isAuthenticated } = useAuth();

  return (
    // Configuración de las rutas de la aplicación
    <Routes>
      {publicRoutes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}

      <Route element={<RouteProtected />}>
        {protectedRoutes.map(({ path, component: Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Route>

      {dashboardRoutes.map(({ path, component: Component }, index) => (
        <Route key={index} path={path} element={<Component />} />
      ))}

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
