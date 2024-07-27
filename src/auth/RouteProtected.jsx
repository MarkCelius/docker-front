import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// Rutas protegidas
const RouteProtected = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        const role = decodedToken.rol;

        let targetPath;
        if (role === "student") {
          targetPath = "/student";
        } else if (role === "teacher") {
          targetPath = "/teacher";
        } else if (role === "admin") {
          targetPath = "/admin";
        }

        if (targetPath && window.location.pathname !== targetPath) {
          navigate(targetPath);
        }

      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return <Outlet />;
};

export default RouteProtected;
