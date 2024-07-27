import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { jwtDecode } from "jwt-decode";
import { Sidebar } from "../../components";
import { getSidebarLinks } from "../../utils";

const URL = import.meta.env.VITE_BACKEND_URL;

const UserPage = () => {
  const { id } = useParams();
  const [userData, setuserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const sidebarLinks = getSidebarLinks(token);

  const navigateTo = useNavigate();

  // Decode token to get role
  let decodedToken = null;
  if (token) {
    decodedToken = jwtDecode(token);
  }

  const isAdmin = decodedToken && decodedToken.rol === "admin";

  useEffect(() => {
    const fetchuserData = async () => {
      try {
        if (!token) {
          throw new Error("Token no encontrado en localStorage");
        }

        const response = await fetch(`${URL}/usuario/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            `Error al obtener los datos del usuario: ${response.statusText}`
          );
        }

        const responseData = await response.json();

        if (Array.isArray(responseData) && responseData.length > 0) {
          const userData = responseData[0]; // Accede al primer elemento del primer array
          setuserData(userData);
          setLoading(false);
        } else {
          setError("No se encontraron datos del usuario.");
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchuserData();
  }, [id, token]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${URL}/usuario/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error al borrar el usuario: ${response.statusText}`);
      }
      alert("Usuario eliminado correctamente")
      navigateTo("/search")

    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No se encontraron datos del usuario.</div>;
  }

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    userData.nombre
  )}&background=0D8ABC&color=fff&size=128`;

  return (
    <>
      <Helmet>
        <title>Perfil | {userData.nombre}</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex flex-col m-5 w-full space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-4">
              <img
                src={avatarUrl}
                alt="Foto de perfil"
                className="w-32 h-32 rounded-full"
              />
              <div>
                <h1 className="text-2xl font-bold">{userData.nombre}</h1>
                <p className="text-gray-600">{userData.correo}</p>
                {userData.telefono && (
                  <p className="text-gray-600">
                    <a
                      href={`tel:+57${userData.telefono}`}
                      className="text-blue-500 underline"
                    >
                      {userData.telefono}
                    </a>
                  </p>
                )}
              </div>
            </div>
            {isAdmin && (
              <div className="mt-4">
                <button
                  onClick={handleDelete}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Borrar usuario
                </button>
              </div>
            )}
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Información del usuario</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Nombre</h3>
                <p className="text-gray-600">{userData.nombre}</p>
              </div>
              <div>
                <h3 className="font-semibold">Correo Electrónico</h3>
                <p className="text-gray-600">{userData.correo}</p>
              </div>
              {userData.telefono && (
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <p className="text-gray-600">
                    <a
                      href={`tel:+57${userData.telefono}`}
                      className="text-blue-500 underline"
                    >
                      {userData.telefono}
                    </a>
                  </p>
                </div>
              )}
              <div>
                <h3 className="font-semibold">Rol</h3>
                <p className="text-gray-600">{userData.rol}</p>
              </div>
              <div>
                <h3 className="font-semibold">Genero</h3>
                <p className="text-gray-600">{userData.genero}</p>
              </div>
              <div>
                <h3 className="font-semibold">Fecha de nacimiento</h3>
                <p className="text-gray-600">{userData.fechaNacimiento}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserPage;
