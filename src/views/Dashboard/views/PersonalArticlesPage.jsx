import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components";
import { getSidebarLinks } from "../../../utils";
import { jwtDecode } from "jwt-decode";
import { Loader } from "../../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const URL = import.meta.env.VITE_BACKEND_URL;

const PersonalArticlesPage = () => {
  const navigateTo = useNavigate();
  const [sidebarLinks, setSidebarLinks] = useState([]);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

      setSidebarLinks(getSidebarLinks(token));

      const fetchArticles = async () => {
        try {
          const response = await fetch(`${URL}/articlesUser/${idUsuario}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const responseData = await response.json();
            console.log("Articles data received:", responseData);

            // Assuming responseData is [Array(2), {...}]
            const articlesData =
              Array.isArray(responseData) && responseData.length > 0
                ? responseData[0] // Accede al primer elemento que contiene los artículos
                : [];

            setArticles(articlesData);
          } else {
            console.error(
              "Error al obtener los datos de los artículos:",
              response.statusText
            );
          }
        } catch (error) {
          console.error("Error en la conexión:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchArticles();
    } catch (error) {
      console.error("Error al decodificar el token:", error);
      navigateTo("/login");
    }
  }, [navigateTo]);

  const handleDeleteArticle = async (articleId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${URL}/articles/${articleId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        alert("Artículo eliminado exitosamente");
        // Actualizar la lista de artículos después de eliminar
        const updatedArticles = articles.filter(
          (article) => article.id_articulo !== articleId
        );
        setArticles(updatedArticles);
      } else {
        console.error("Error al eliminar el artículo:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  if (loading) {
    return <Loader />; // Mostrar indicador de carga mientras se cargan los datos
  }

  return (
    <>
      <Helmet>
        <title>Artículos Personales - FastLearn</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex flex-col m-5 w-full space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Artículos Personales
          </h1>
          {articles.map((article) => (
            <div key={article.id_articulo} className="card p-4 shadow-lg">
              <div className="card-body">
                <h2 className="text-xl font-bold text-gray-800">
                  {article.titulo}
                </h2>
                <p className="text-gray-600">{article.texto1}</p>
                <p className="text-gray-600">{article.texto2}</p>
                <p className="text-gray-600">{article.texto3}</p>
                <p className="text-gray-600">{article.texto4}</p>
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700 focus:outline-none flex items-center space-x-1"
                  onClick={() => handleDeleteArticle(article.id_articulo)}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                  <span>Eliminar</span>
                </button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default PersonalArticlesPage;
