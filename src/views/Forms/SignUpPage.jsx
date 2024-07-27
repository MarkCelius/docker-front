import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SectionForm } from "../../components/";

const URL = import.meta.env.VITE_BACKEND_URL;

const SignUpPage = () => {
  // Inicialización de los campos del formulario
  const [initialFields] = useState([
    { type: "text", placeholder: "Nombre", id: "nombre" },
    { type: "email", placeholder: "Correo electrónico", id: "correo" },
    { type: "password", placeholder: "Contraseña", id: "contrasenaPlain" },
    { type: "date", placeholder: "Fecha de nacimiento", id: "fechaNacimiento" },
    {
      type: "tel",
      placeholder: "Formato correcto 123-456-7890",
      id: "telefono",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
    },
  ]);

  // Navegación
  const navigate = useNavigate();

  // Manejo del registro
  const handleRegister = async (formData) => {
    try {
      const response = await axios.post(
        `${URL}/usuario`, // Usa la URL del backend configurada
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Asegura que el contenido es en formato JSON
          },
        }
      );

      const { token } = response.data;
      if (token) {
        localStorage.setItem("token", token); // Guarda el token en el almacenamiento local
        navigate("/select-rol"); // Redirecciona al usuario a la ruta select-rol después del registro
      } else {
        console.error("Token no encontrado en la respuesta");
      }
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear cuenta | FastLearn</title>
      </Helmet>

      <main
        className="h-screen bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url(/img/forms/img1.webp)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <SectionForm
          title="Comienza tu viaje de aventuras"
          text="Descubre una nueva forma de aprendizaje con FastLearn. Nuestra plataforma te ofrece recursos educativos, personalizados y gratuitos para mejorar tu rendimiento académico. Únete a nuestra comunidad de estudiantes y docentes comprometidos con la educación de calidad. Aprende a tu ritmo, en cualquier lugar y momento.
          ¡Empieza tu viaje educativo hoy mismo!"
          textRecovery="Olvidé mi contraseña"
          linkRecovery="/recovery"
          formFields={initialFields}
          linkText="¿Ya tienes una cuenta?"
          linkHref="/login"
          onSubmit={handleRegister}
          formType="register"
        />
        {/* OnSubmit ejecuta la función HandleRegister */}
        {/* La propiedad Formtype se pasa a través de section form para llegar al componente Form */}
      </main>
    </>
  );
};

export default SignUpPage;
