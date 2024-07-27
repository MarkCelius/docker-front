import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Sidebar, Footer } from '../../../components/';
import { Loader } from '../../../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { getSidebarLinks } from '../../../utils';
import reporteCursos from '../../../components/Reporte/CursosReporte';
import reporteUsuarios from '../../../components/Reporte/UserReporte';
import { jwtDecode } from 'jwt-decode'; // Importar jwtDecode

const URLB = import.meta.env.VITE_BACKEND_URL;

const SearchPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const [userDataFiltered, setUserDataFiltered] = useState([]);
  const [cursoData, setCursoData] = useState([]);
  const [cursoDataFiltered, setCursoDataFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // Estado para almacenar si el usuario es admin

  const token = localStorage.getItem("token");

  const sidebarLinks = getSidebarLinks(token);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!token) {
          throw new Error("Token no encontrado en localStorage");
        }

        const response = await fetch(`${URLB}/usuario/`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error(
            `Error al obtener los datos del usuario: ${response.statusText}`
          );
        }

        const responseData = await response.json();
        if (Array.isArray(responseData) && responseData.length > 0) {
          setUserData(responseData[0]);
          setUserDataFiltered(responseData[0]);
        } else {
          console.error("No se encontraron datos de usuario.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error en la conexión:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    const fetchCursoData = async () => {
      try {
        if (!token) {
          throw new Error("Token no encontrado en localStorage");
        }

        const response = await fetch(`${URLB}/cursos/`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error(
            `Error al obtener los datos de cursos: ${response.statusText}`
          );
        }

        const responseData = await response.json();
        if (Array.isArray(responseData) && responseData.length > 0) {
          setCursoData(responseData[0]);
          setCursoDataFiltered(responseData[0]);
        } else {
          console.error("No se encontraron datos de cursos.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error en la conexión:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    const checkUserRole = () => {
      try {
        if (token) {
          const decodedToken = jwtDecode(token);
          if (decodedToken.rol === "admin") {
            setIsAdmin(true); // Establecer isAdmin a true si el rol es admin
          }
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    };

    fetchUserData();
    fetchCursoData();
    checkUserRole(); // Llamar a la función para verificar el rol del usuario
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData || !cursoData) {
      return;
    }

    // Filtrar userData según el searchTerm
    const filteredUserData = userData.filter(
      (user) =>
        (user.nombre &&
          user.nombre.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (user.correo &&
          user.correo.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // Filtrar cursoData según el searchTerm
    const filteredCursoData = Object.values(cursoData).filter(
      (curso) =>
        (curso.titulo &&
          curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (curso.descripcion &&
          curso.descripcion.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (curso.tags &&
          curso.tags.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    setUserDataFiltered(filteredUserData);
    setCursoDataFiltered(filteredCursoData);
  };

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

  if (!userData || !cursoData) {
    return <Loader />; // Mostrar indicador de carga mientras se cargan los datos
  }

  return (
    <>
      <Helmet>
        <title>Buscar | FastLearn</title>
      </Helmet>

      <div className="flex h-screen">
        <Sidebar links={sidebarLinks} />
        <div className="flex flex-col w-full">
          <main className="p-4">
            <h1 className="text-xl font-bold">Buscar contenido</h1>
            <form onSubmit={handleSubmit} className="flex mx-10 space-x-5">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-slate-100 w-full p-4 rounded-xl outline-primary"
                placeholder="Buscar contenido"
              />
              <button
                type="submit"
                className="bg-primary text-white p-4 rounded-xl"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </form>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
              {loading ? (
                <p className="text-center">Cargando...</p>
              ) : Array.isArray(userDataFiltered) &&
                userDataFiltered.length > 0 ? (
                userDataFiltered.map((user, index) => {
                  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.nombre
                  )}&background=random`;

                  return (
                    <div
                      key={index}
                      className="bg-white flex flex-col justify-between items-start w-48 p-5 shadow-md text-sm rounded-lg"
                    >
                      <div className="w-full h-40 overflow-hidden rounded-t-lg">
                        <img
                          src={avatarUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h2 className="font-semibold mt-4">{user.nombre}</h2>
                      <a
                        href={`mailto:${user.correo}`}
                        className="text-gray-600 break-words w-full text-primary"
                      >
                        {user.correo}
                      </a>
                      <p className="text-gray-600">{user.rol}</p>
                      <p className="text-gray-600 text-primary">
                        {user.telefono}
                      </p>
                      <a
                        key={index}
                        href={`/search/user/${user.id_usuario}`}
                        className="btn"
                      >Información</a>
                    </div>
                  );
                })
              ) : (
                <p>No se encontraron datos de usuarios</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              {loading ? (
                <p className="text-center">Cargando...</p>
              ) : Array.isArray(cursoDataFiltered) &&
                cursoDataFiltered.length > 0 ? (
                cursoDataFiltered.map((curso, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-sm shadow-md"
                  >
                    <div className="flex justify-center">
                      <img
                        src={curso.imagen}
                        alt=""
                        className="object-cover w-full h-52 rounded-sm"
                      />
                    </div>
                    <h2 className="text-md font-semibold mt-4">
                      {curso.titulo}
                    </h2>
                    <p className="text-gray-600">
                      <b>Descripción: </b>
                      {curso.descripcion}
                    </p>
                    <a
                      href={curso.links}
                      className="text-blue-500 hover:underline"
                    >
                      Links adjuntos
                    </a>
                    <p className="text-gray-600">{curso.tags}</p>
                    <p className="text-gray-600">{curso.categoria}</p>
                    <br />
                    <a
                      key={index}
                      href={`/search/${curso.id_cursos}`}
                      className="btn"
                    >
                      Ver
                    </a>
                  </div>
                ))
              ) : (
                <p>No se encontraron datos de cursos</p>
              )}
            </div>

            {isAdmin && (
              <div className="flex justify-center mt-8 gap-5">
                <button onClick={() => reporteCursos(cursoDataFiltered)} className="bg-primary p-2 text-white rounded-md">
                  Generar Reporte Cursos
                </button>
            
                <button onClick={() => reporteUsuarios(userDataFiltered)} className="bg-primary p-2 text-white rounded-md">
                  Generar Reporte Usuarios
                </button>
              </div>
            )}

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

export default SearchPage;
