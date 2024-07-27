import { Helmet } from "react-helmet-async";
import { Header, SectionBenefits, SectionCourses, Footer } from "../../components/";

const HomePage = () => {
  const headerImages = [
    "/img/header/SectionMain1.webp",
    "/img/header/SectionMain2.webp",
  ];

  const navItems = [
    { href: "/explore", label: "Explorar" },
    { href: "/articles", label: "Articulos" },
    { href: "/signup", label: "Crear cuenta" },
    { href: "/support", label: "Soporte" },
  ];

  const headerProps = {
    titleHero: "Aprende Rápido y Fácil con FastLearn",
    textHero:
      "Explora cursos, materiales educativos y rutas de aprendizaje personalizados.",
    btn1Hero: {
      label: "Empezar ahora",
      href: "/login",
    },
    btn2Hero: {
      label: "Ver cursos",
      href: "/all-courses",
    },
  };

  const benefitsProps = {
    titleBen: "¿Por qué elegir FastLearn?",
    textBen:
      "Accede a videos, materiales y talleres diseñados por expertos para satisfacer tus necesidades específicas. Únete a grupos de estudio y mejora tu aprendizaje en comunidad.",
    btnTextBen: "Descubrir más",
    btnHrefBen: "/learn-more",
    imageBen: "/img/sections/benefits.webp",
    altBen: "Benefits Image",
    imageTitleBen: "Nuestros beneficios",
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
        <title>Bienvenido a FastLearn</title>
      </Helmet>

      <Header
        images={headerImages}
        interval={5000}
        heroProps={headerProps}
        menuItems={navItems}
      />

      <main>
        <SectionBenefits {...benefitsProps} />
        <SectionCourses
          titleCourses="Cursos destacados"
          textCourses="Explora algunos de nuestros cursos más populares."
        />
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

export default HomePage;
