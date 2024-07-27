import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";

const URL = import.meta.env.VITE_BACKEND_URL;

const HeroAdMIN = ({ userData }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contrasenaPlain: "",
  });

  const navigateTo = useNavigate();

  useEffect(() => {
    if (userData) {
      const initials = userData.nombre
        .split(" ")
        .map((n) => n[0])
        .join("");
      const avatar = `https://ui-avatars.com/api/?name=${initials}&background=random&size=256`;
      setAvatarUrl(avatar);

      setFormData({
        nombre: userData.nombre,
        correo: userData.correo,
        contrasenaPlain: "",
      });
    }
  }, [userData]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token de autenticación no encontrado");
      return;
    }

    try {
      const response = await axios.put(
        `${URL}/admin/${userData.id_admin}`,
        {
          nombre: formData.nombre,
          correo: formData.correo,
          contrasenaPlain: formData.contrasenaPlain,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Admin modificado exitosamente");
        navigateTo('/settings-admin')
      } else {
        alert("Error al actualizar el usuario");
      }
    } catch (error) {
      console.error("Error al actualizar la información:", error);
      alert("Error al actualizar el usuario");
    }
  };

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token de autenticación no encontrado");
      return;
    }

    try {
      const response = await axios.delete(`${URL}/admin/${userData.id_admin}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        alert("Usuario eliminado exitosamente");
        navigateTo('/login')

        // Aquí podrías redirigir a la página de inicio, por ejemplo
      } else {
        alert("Error al eliminar el usuario");
      }
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
      alert("Error al eliminar el usuario");
    }
  };

  if (!userData) {
    return null;
  }

  return (
    <>
      <section className="flex flex-col md:flex-row mx-4 md:mx-24">
        <article className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 my-5">
          <div className="flex flex-col items-center space-y-5">
            <div className="rounded-full md:w-72 md:h-72 flex items-center justify-center overflow-hidden">
              <img
                src={selectedImage || avatarUrl}
                alt="Avatar"
                className="object-cover w-full h-full rounded-full"
                id="img"
              />

            </div>
          </div>
          <div className="flex flex-col space-y-2 text-md">
            <span>
              <b>Nombre completo: </b>
              {userData.nombre}
            </span>
            <span>
              <b>Correo: </b>
              {userData.correo}
            </span>
            <span>
              <b>Rol: </b>
              {userData.rol}
            </span>
          </div>
        </article>
      </section>
      
      <section className="flex flex-col md:flex-row justify-around mx-4 md:mx-24 my-4">
        <button
          className="btn w-full md:w-3/12 my-2 md:my-0 bg-primary text-white"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Editar Información
        </button>
        <button
          className="btn w-full md:w-3/12 my-2 md:my-0 bg-red-500 text-white"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Eliminar cuenta
        </button>
      </section>

      <div className="modal">
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Editar Información</h3>
            <p className="py-4">
              Presiona ESC o clic en <b>cancelar</b> para cerrar
            </p>
            <form onSubmit={handleUpdate} className="flex flex-col space-y-5">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="px-2 py-3 outline-primary"
                required
              />
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                className="px-2 py-3 outline-primary"
                required
              />
              <input
                type="password"
                name="contrasenaPlain"
                value={formData.contrasenaPlain}
                onChange={handleChange}
                className="px-2 py-3 outline-primary"
                placeholder="Nueva Contraseña"
                required
              />
              <button
                type="submit"
                className="btn bg-primary hover:bg-green-500 text-white"
              >
                Actualizar
              </button>
              <button
                type="button"
                className="btn hover:bg-green-500 hover:text-white"
                onClick={() =>
                  document.getElementById("my_modal_1").close()
                }
              >
                Cancelar
              </button>
            </form>
          </div>
        </dialog>

        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-700">
              ¿Estás seguro de eliminar tu cuenta?
            </h3>
            <p className="py-4">
              Presiona ESC o clic en cancelar para cerrar
            </p>
            <button className="w-full bg-red-700 py-4 text-white rounded-md" onClick={handleDeleteAccount}>
              Si, quiero eliminar mi cuenta
            </button>
            <div className="modal-action">
              <div className="flex space-x-5">
                <button
                  className="btn hover:bg-green-500"
                  onClick={() =>
                    document.getElementById("my_modal_2").close()
                  }
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

// Definición de PropTypes para el componente HeroAdMIN
HeroAdMIN.propTypes = {
  userData: PropTypes.shape({
    id_admin: PropTypes.number.isRequired, // Id del usuario
    nombre: PropTypes.string.isRequired, // Nombre completo del usuario
    correo: PropTypes.string.isRequired, // Correo electrónico del usuario
  }).isRequired,
};

export default HeroAdMIN;
