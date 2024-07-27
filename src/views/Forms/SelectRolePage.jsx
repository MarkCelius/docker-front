import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_BACKEND_URL;

const SelectRolePage = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [roleSelected, setRoleSelected] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token && roleSelected) {
      // Si hay un token y ya se ha seleccionado un rol, redirigir automáticamente
      if (selectedRole === "student") {
        navigate("/student");
      } else if (selectedRole === "teacher") {
        navigate("/teacher");
      }
    }
  }, [roleSelected, selectedRole, navigate]);

  const handleRoleSelection = async (role) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token no encontrado en el almacenamiento local");
      return;
    }

    try {
      const response = await axios.put(
        `${URL}/rol`,
        { rol: role },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        setSelectedRole(role); // Marcar el rol como seleccionado
        setRoleSelected(true); // Indicar que se ha seleccionado un rol
      }
    } catch (error) {
      console.error("Error al actualizar el rol:", error);
    }
  };

  return (
    <main
      className="h-screen bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: "url(/img/forms/img4.webp)" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <section className="relative flex flex-col md:flex-row w-full bg-gray-900 py-12 px-6">
        <article className="md:w-1/2 flex flex-col justify-center items-start p-6 text-white">
          <div className="md:mx-16">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Selecciona tu rol</h1>
            <p className="mb-4 hidden md:block">
            Selecciona si eres docente o estudiante para personalizar tu experiencia en FastLearn. Así, podremos ofrecerte los recursos y herramientas adecuados para tu aprendizaje o enseñanza. ¡Tu camino hacia el conocimiento comienza aquí!
            </p>
          </div>
        </article>
        <article className="md:w-1/2 flex justify-center items-center">
          <form className="w-full max-w-md mx-auto bg-white p-8 rounded-md">
            <h1>Selecciona tu rol</h1>
            <div className="mb-4">
              <div className="flex flex-col justify-center items-center space-y-4 text-black">
                <button
                  type="button"
                  onClick={() => handleRoleSelection("student")}
                  disabled={roleSelected}
                  className={`bg-white shadow-lg w-full p-5 rounded-lg text-start ${
                    selectedRole === "student"
                      ? "bg-primary text-white"
                      : "hover:bg-primary hover:text-white"
                  }`}
                >
                  Soy Alumno
                </button>
                <button
                  type="button"
                  onClick={() => handleRoleSelection("teacher")}
                  disabled={roleSelected}
                  className={`bg-white shadow-lg w-full p-5 rounded-lg text-start ${
                    selectedRole === "teacher"
                      ? "bg-primary text-white"
                      : "hover:bg-primary hover:text-white"
                  }`}
                >
                  Soy Docente
                </button>
              </div>
            </div>
          </form>
        </article>
      </section>
    </main>
  );
};

export default SelectRolePage;