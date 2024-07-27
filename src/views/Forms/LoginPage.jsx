import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // Corrige la importación de jwtDecode
import axios from "axios";
import { SectionForm } from "../../components/";

const URLB = import.meta.env.VITE_BACKEND_URL;;

const LoginPage = () => {
  const [initialFields] = useState([
    { type: "email", placeholder: "Correo electrónico", id: "correo" },
    { type: "password", placeholder: "Contraseña", id: "contrasena" },
  ]);
  const [errorMessage, setErrorMessage] = useState(""); // Estado para manejar errores

  const URLUSER = `${URLB}/login`
  const URLADMIN = `${URLB}/loginAdmin`
  
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // Determina la URL basada en el tipo de usuario
      const isAdmin = formData.correo.includes('@admin.com'); // Cambia esta lógica según tus necesidades
      const url = isAdmin ? URLADMIN : URLUSER;

      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Respuesta del servidor:", response.data);

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token);

        const decodedToken = jwtDecode(token);

        const role = decodedToken.rol;

        if (role === "student") {
          navigate("/student");
        } else if (role === "teacher") {
          navigate("/teacher");
        } else if (role === "admin") {
          navigate("/admin");
        } else {
          navigate("/login");
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setErrorMessage("Datos de inicio de sesión incorrectos. Por favor, verifica tus credenciales e intenta de nuevo."); // Establece el mensaje de error
    }
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => {
        setErrorMessage("");
      }, 5000); // El mensaje se borra después de 5 segundos (5000 ms)

      // Limpia el temporizador si el componente se desmonta o el errorMessage cambia
      return () => clearTimeout(timer);
    }
  }, [errorMessage]);

  return (
    <>
      <Helmet>
        <title>Iniciar sesión | FastLearn</title>
      </Helmet>

      <main
        className="h-screen bg-center bg-cover flex justify-center items-center relative"
        style={{ backgroundImage: "url(/img/forms/img2.webp)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <SectionForm
          title="Accede a tu espacio educativo"
          text="Ingresa tus datos de inicio de sesión para disfrutar de todos los recursos educativos que hemos preparado para ti"
          textRecovery="Olvidé mi contraseña"
          linkRecovery="/recovery"
          formFields={initialFields}
          linkText="No tengo una cuenta"
          linkHref="/signup"
          onSubmit={handleLogin}
          formType="login"
        />
        {errorMessage && (
          <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded">
            {errorMessage}
          </div>
        )}
      </main>
    </>
  );
};

export default LoginPage;
