import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components";
import { getSidebarLinks } from "../../../utils";
import { jwtDecode } from "jwt-decode";

const URL = import.meta.env.VITE_BACKEND_URL;

const CreateArticle = () => {
  const navigateTo = useNavigate();
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const [id_usuario, setid_usuario] = useState("");
  const [title, setTitle] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  useState(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token no encontrado en localStorage.");
      navigateTo("/login");
      return;
    }

    try {
      const decodedToken = jwtDecode(token);
      const idUsuario = decodedToken.id_usuario;

      if (
        decodedToken.rol !== "admin" &&
        decodedToken.rol !== "student" &&
        decodedToken.rol !== "teacher"
      ) {
        console.error("Rol no autorizado:", decodedToken.rol);
        navigateTo("/login");
        return;
      }

      setid_usuario(idUsuario);
      setSidebarLinks(getSidebarLinks(token));
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      navigateTo("/login");
    }
  }, [navigateTo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${URL}/articles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id_usuario: id_usuario,
          titulo: title,
          texto1: text1,
          texto2: text2,
          texto3: text3,
          texto4: text4,
        }),
      });

      if (response.ok) {
        alert("Artículo creado exitosamente");
        navigateTo("/articles-page");
      } else {
        console.error("Error al crear el artículo:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Crear Artículo - FastLearn</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex flex-col m-5 w-full space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Crear Artículo</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="hidden">
              <input
                type="text"
                value={id_usuario}
                className="mt-1 p-2 w-full border rounded-md bg-gray-100 hidden"
                disabled
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Título</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Texto 1</label>
              <textarea
                value={text1}
                onChange={(e) => setText1(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md h-40 resize-none focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Texto 2</label>
              <textarea
                value={text2}
                onChange={(e) => setText2(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md h-40 resize-none focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Texto 3</label>
              <textarea
                value={text3}
                onChange={(e) => setText3(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md h-40 resize-none focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Texto 4</label>
              <textarea
                value={text4}
                onChange={(e) => setText4(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md h-40 resize-none focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none"
              >
                Crear Artículo
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default CreateArticle;
