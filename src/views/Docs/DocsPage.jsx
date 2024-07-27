import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Header, Footer } from "../../components/";
import dataRF from "./datos.RF.json";
import dataRNF from "./datos.RNF.json";

const DocsPage = () => {
  const headerImages = [
    "/img/header/HeaderM1.webp",
    "/img/header/HeaderM2.webp",
  ];

  const navItems = [
    { href: "/explore", label: "Explorar" },
    { href: "/articles", label: "Articulos" },
    { href: "/signup", label: "Crear cuenta" },
    { href: "/support", label: "Soporte" },
  ];

  const headerProps = {
    titleHero: "Bienvenido a la documentación de nuestro proyecto",
    textHero:
      "En esta sección te mostraremos como fue el proceso de el desarrollo de FastLearn, aquí encontrarás la parte más importante para lograr que todo esto haya sido posible",
    btn1Hero: {
      label: "Continuar",
      href: "#requeriments",
    },
    btn2Hero: {
      label: "Ver cursos",
      href: "/course",
    },
  };

  const [buscarRF, setBuscarRF] = useState("");
  const [buscarRNF, setBuscarRNF] = useState("");
  const [tabActivo, settabActivo] = useState("tab1");

  const datosReqFunFiltrados = dataRF.filter(
    (item) =>
      item.numero.toLowerCase().includes(buscarRF.toLowerCase()) ||
      item.descripcion.toLowerCase().includes(buscarRF.toLowerCase()) ||
      item.proceso.toLowerCase().includes(buscarRF.toLowerCase()) ||
      item.stakeholder.toLowerCase().includes(buscarRF.toLowerCase())
  );

  const datosReqNonFunFiltrados = dataRNF.filter(
    (item) =>
      (item.numero &&
        item.numero.toLowerCase().includes(buscarRNF.toLowerCase())) ||
      (item.descripcion &&
        item.descripcion.toLowerCase().includes(buscarRNF.toLowerCase())) ||
      (item.nombre &&
        item.nombre.toLowerCase().includes(buscarRNF.toLowerCase()))
  );

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

  return (
    <>
      <Helmet>
        <title>Documentación | FastLearn</title>
      </Helmet>
      <Header
        images={headerImages}
        interval={5000}
        heroProps={headerProps}
        menuItems={navItems}
      />

      <main className="flex flex-col justify-center items-center mx-5">
        <div role="tablist" className="tabs tabs-bordered my-5">
          <a
            role="tab"
            className={`tab $(tabActivo == "tab1" ? "tab-active" : "")`}
            onClick={() => settabActivo("tab1")}
          >
            Requerimientos Funcionales
          </a>
          <a
            role="tab"
            className={`tab $(tabActivo == "tab2" ? "tab-active" : "")`}
            onClick={() => settabActivo("tab2")}
          >
            Requerimientos No Funcionales
          </a>
          <a
            role="tab"
            className={`tab $(tabActivo == "tab3" ? "tab-active" : "")`}
            onClick={() => settabActivo("tab3")}
          >
            Tab 3
          </a>
        </div>

        {tabActivo === "tab1" && (
          <>
            <div className="w-full md:w-6/12 my-5">
              <input
                type="text"
                className="input input-bordered w-full"
                value={buscarRF}
                onChange={(e) => setBuscarRF(e.target.value)}
                placeholder="Ingresa el requerimiento que quieras buscar"
              />
            </div>

            <div className="overflow-x-auto w-full md:w-6/12 my-4 flex flex-col justify-center">
              <h2 className="text-center text-lg font-semibold mb-4">
                Lista de requerimientos funcionales
              </h2>
              <table className="table-auto w-full border-collapse border border-gray-200 shadow-md rounded-md">
                {/* head */}
                <thead className="bg-gray-100">
                  <tr className="text-lg">
                    <th className="border border-gray-300 p-2">Número</th>
                    <th className="border border-gray-300 p-2">Descripción</th>
                    <th className="border border-gray-300 p-2">Proceso</th>
                    <th className="border border-gray-300 p-2">StakeHolder</th>
                  </tr>
                </thead>
                <tbody className="text-md">
                  {datosReqFunFiltrados.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <th className="border border-gray-300 p-2">
                        {item.numero}
                      </th>
                      <td className="border border-gray-300 p-2">
                        {item.descripcion}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.proceso}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.stakeholder}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {tabActivo === "tab2" && (
          <>
            <div className="w-full md:w-6/12 my-5">
              <input
                type="text"
                className="input input-bordered w-full"
                value={buscarRNF}
                onChange={(e) => setBuscarRNF(e.target.value)}
                placeholder="Ingresa el requerimiento que quieras buscar"
              />
            </div>

            <div className="overflow-x-auto w-full md:w-6/12 my-4 flex flex-col justify-center">
              <h2 className="text-center text-lg font-semibold mb-4">
                Lista de requerimientos no funcionales
              </h2>
              <table className="table-auto w-full border-collapse border border-gray-200 shadow-md rounded-md">
                {/* head */}
                <thead className="bg-gray-100">
                  <tr className="text-lg">
                    <th className="border border-gray-300 p-2">Número</th>
                    <th className="border border-gray-300 p-2">Descripción</th>
                    <th className="border border-gray-300 p-2">Nombre</th>
                  </tr>
                </thead>
                <tbody className="text-md">
                  {datosReqNonFunFiltrados.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <th className="border border-gray-300 p-2">
                        {item.numero}
                      </th>
                      <td className="border border-gray-300 p-2">
                        {item.descripcion}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {item.nombre}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>

      <Footer
        services={services}
        company={company}
        legal={legal}
        companyName={companyName}
        companyDescription={companyDescription}
      />
    </>
  );
};

export default DocsPage;
