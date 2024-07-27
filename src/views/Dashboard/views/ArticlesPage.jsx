import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../../components";
import { Loader } from "../../../components/Layout";
import { getSidebarLinks } from "../../../utils";
import { jwtDecode } from "jwt-decode";

const URL = import.meta.env.VITE_BACKEND_URL;

const ArticlesPage = () => {
  const navigateTo = useNavigate();
  const [articles, setArticles] = useState([]);
  const [sidebarLinks, setSidebarLinks] = useState([]);
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
          const response = await fetch(`${URL}/articles/`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const responseData = await response.json();
            console.log("Articles data received:", responseData);
            const articlesData =
              Array.isArray(responseData) &&
              responseData.length > 0 &&
              Array.isArray(responseData[0])
                ? responseData[0]
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

  const handleDelete = async (articleId) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${URL}/articles/${articleId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Remover el artículo eliminado de la lista
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article.id_articulo !== articleId)
        );
      } else {
        console.error("Error al borrar el artículo:", response.statusText);
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
    }
  };

  if (loading) {
    return <Loader />; // Mostrar indicador de carga mientras se cargan los datos
  }

  const token = localStorage.getItem("token");
  const decodedToken = token ? jwtDecode(token) : null;
  const isAdmin = decodedToken && decodedToken.rol === "admin";

  return (
    <>
      <Helmet>
        <title>Artículos de FastLearn</title>
      </Helmet>
      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} />
        <main className="flex flex-col m-5 w-full space-y-6">
          {articles.map((article) => (
            <div key={article.id_articulo} className="card p-4 shadow-lg">
              <div className="card-body">
                <h2 className="text-2xl font-bold text-gray-800">{article.titulo}</h2>
                <p className="text-gray-600">{article.texto1}</p>
                <p className="text-gray-600">{article.texto2}</p>
                <p className="text-gray-600">{article.texto3}</p>
                <p className="text-gray-600">{article.texto4}</p>
              </div>
              {isAdmin && (
                <div className="card-actions">
                  <button
                    onClick={() => handleDelete(article.id_articulo)}
                    className="btn btn-danger mt-2"
                  >
                    Eliminar artículo
                  </button>
                </div>
              )}
            </div>
          ))}
        </main>
      </div>
    </>
  );
};

export default ArticlesPage;
