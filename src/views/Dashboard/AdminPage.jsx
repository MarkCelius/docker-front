import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sidebar, Footer } from "../../components/";
import { getSidebarLinks } from "../../utils";
import { Loader } from "../../components/Layout";
import { jwtDecode } from "jwt-decode";

const URL = import.meta.env.VITE_BACKEND_URL;

const AdminPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const token = localStorage.getItem("token");

  const sidebarLinks = getSidebarLinks(token);

  useEffect(() => {
    const fetchUserData = async (id_admin) => {
      try {
        const response = await fetch(
          `${URL}/admin/${id_admin}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const [userDataArray, additionalData] = await response.json();
          console.log("User data received:", userDataArray);
          
          if (Array.isArray(userDataArray) && userDataArray.length > 0) {
            const userDataObject = userDataArray[0];
            setUserData(userDataObject);
          } else {
            console.error("No se encontraron datos del usuario o el formato no es el esperado.");
          }
        } else {
          console.error("Error al obtener los datos del usuario:", response.statusText);
        }
        
      } catch (error) {
        console.error("Error en la conexión:", error);
      }
    };

    if (token) {
      try {
        const decodedToken = jwtDecode(token);

        const userId = decodedToken.id_admin;

        if (decodedToken.rol !== "admin") {
          console.error("Rol no autorizado:", decodedToken.rol);
          navigate("/login");
        } else {
          fetchUserData(userId);
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
        navigate("/login");
      }
    } else {
      console.error("Token no encontrado en localStorage.");
      navigate("/login");
    }
  }, [navigate, token]);

  const services = {
    title: "Información",
    links: [
      { text: "Explorar", href: "/explore" },
      { text: "Articulos", href: "/articles" },
      { text: "Cursos", href: "/courses" },
      { text: "Soporte", href: "/support" },
      { text: "Reportar un problema", href: "mailto:Info.fastlearn.project@gmail.com?subject=Reporte%20-%20FastLearn" },
    ],
  };

  const company = {
    title: "Compañia",
    links: [
      { text: "Documentación", href: "/docs" },
      { text: "Manual de usuario", href: "https://fastlearn.blob.core.windows.net/fastlearn/manualDeUsuario.pdf" },
      { text: "Manual técnico", href: "https://fastlearn.blob.core.windows.net/fastlearn/manualTecnico.pdf" },
    ],
  };

  const legal = {
    title: "Legal",
    links: [
      { text: "Términos y condiciones", href: "/terms" },
      { text: "Política de privacidad", href: "/policy" },
      { text: "Derechos de autor", href: "/rights-autor" },
    ],
  };

  const companyName = "FastLearn INC";
  const companyDescription = "Todos los derechos reservados";

  if (!userData) {
    return <Loader />; // Mostrar indicador de carga mientras se cargan los datos
  }


  return (
    <>
      <Helmet>
        <title>Dashboard | Admin</title>
      </Helmet>
      <div className="flex h-screen ">
        <Sidebar links={sidebarLinks} />
        <div className="flex flex-col w-full">
          <main className="p-4">
            <h1 className="text-xl font-bold">Bienvenido Admin {userData.nombre}</h1>
            <p className="mt-2">Bienvenido al panel de control Administrador.</p>
          </main>
          <Footer
            services={services}
            company={company}
            legal={legal}
            companyName={companyName}
            companyDescription={companyDescription}
          />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
