import { Helmet } from "react-helmet-async";
import { Header, Footer } from "../../components";
import { Breadcrumbs } from "../../components/Layout";

const PublicArticlesPage = () => {
  const headerImages = [
    "/img/header/SectionArticle1.webp",
    "/img/header/SectionArticle2.webp",
  ];
  const itemsBread = [
    { href: "/", label: "Inicio" },
    { href: "/articles", label: "Articulos" },
  ];

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/explore", label: "Explorar" },
    { href: "/signup", label: "Crear cuenta" },
    { href: "/support", label: "Soporte" },
  ];

  const headerProps = {
    titleHero: "Bienvenido a la sección de articulos",
    textHero: "Estos son los articulos más importantes de la semana",
    btn1Hero: {
      label: "Ver articulos",
      href: "#",
    },
    btn2Hero: {
      label: "Mostrar todos",
      href: "/all-articles",
    },
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
  
  return (
    <>
      <Helmet>
        <title>Articulos de FastLearn</title>
      </Helmet>
      <Header
        images={headerImages}
        interval={5000}
        heroProps={headerProps}
        menuItems={navItems}
      />
      <main className="flex flex-col flex-wrap m-5">
        <Breadcrumbs items={itemsBread} />
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

export default PublicArticlesPage;
