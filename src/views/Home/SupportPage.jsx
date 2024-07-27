import { Helmet } from "react-helmet-async";
import { Header, Footer } from "../../components/";

const SupportPage = () => {
  const headerImages = [
    "/img/header/SectionSupport1.png",
    "/img/header/SectionSupport2.png",
  ];

  const navItems = [
    { href: "/", label: "Inicio" },
    { href: "/explore", label: "Explorar" },
    { href: "/articles", label: "Articulos" },
    { href: "/signup", label: "Crear cuenta" },

  ];

  const headerProps = {
    titleHero: "¡Bienvenido a la sección de soporte!",
    textHero: "Encuentra soluciones a problemas comunes que puedes encontrar en nuestra plataforma.",
    btn1Hero: {
      label: "Continuar",
      href: "#solutions",
    },
    btn2Hero: {
      label: "Ver cursos",
      href: "/course",
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

  const errorSolutions = [
    { error: "La aplicación no funciona correctamente", solution: "Verificar si el sistema operativo cumple con los requisitos mínimos para un correcto funcionamiento." },
    { error: "No hay conexión a internet", solution: "Comprobar la conexión a internet y asegurarse de que está funcionando correctamente." },
    { error: "Los datos ingresados de usuario no existen", solution: "Revisar si los datos ingresados coinciden con los utilizados al crear la cuenta." },
    { error: "La cuenta de usuario ya existe", solution: "Confirmar si los datos ingresados pertenecen a una cuenta de usuario ya existente." },
    { error: "Contraseña incorrecta", solution: "Verificar si la contraseña ingresada es la correcta." },
    { error: "Información no disponible", solution: "Verificar si la información ingresada en el buscador es referente a temas académicos guardados en la plataforma." },
    { error: "Estudiante no encontrado", solution: "Verificar si el nombre del estudiante a buscar es existente o es correcto." },
    { error: "Actividad propuesta por el docente sin publicar", solution: "Verificar si se ha subido correctamente la actividad." },
    { error: "Personalización de cuenta no actualizada", solution: "Verificar si se ha guardado los nuevos ajustes en personalización." },
    { error: "El sistema no permite al usuario ejercer acciones de administrador", solution: "Comprobar si el usuario tiene el rol de administrador." },
  ];

  const faqs = [
    {
      question: "¿Cómo puedo obtener ayuda si tengo problemas técnicos en el sistema de FastLearn?",
      answer: "Puedes contactar al equipo de soporte técnico de FastLearn a través del formulario de contacto en la plataforma en www.fastlearn.edu.co/support. Buscar en la sección de preguntas frecuentes para obtener soluciones a problemas comunes que está situado en la parte inferior de la sección principal de la página."
    },
    {
      question: "¿Puedo tomar varios cursos simultáneamente en el sistema de FastLearn?",
      answer: "Sí, puedes inscribirte y tomar varios temas académicos al mismo tiempo en FastLearn. La plataforma te permite acceder a todos los cursos en los que estás inscrito con tu cuenta."
    },
    {
      question: "¿Cómo puedo hacer un seguimiento de mis calificaciones y progreso en el sistema de FastLearn?",
      answer: "FastLearn ofrece un panel de control personalizado donde puedes ver tus calificaciones, progreso en los temas académicos situados en Mi cuenta > Calificaciones. FastLearn notifica acerca de tu seguimiento de las actividades, talleres, tareas y exámenes."
    },
    {
      question: "¿Puedo tomar notas y marcar páginas en el sistema de FastLearn?",
      answer: "Sí, en FastLearn puedes tomar notas y guardarlas en tu equipo, para luego compartirlas. Permite marcar páginas dentro de la plataforma para tener un registro personal de tu aprendizaje y regresar a ellos en el futuro."
    },
    {
      question: "¿Por qué medios puedo ingresar a la plataforma?",
      answer: "FastLearn te permite ingresar a través de navegadores de dispositivos móviles y equipos de computo."
    },
    {
      question: "¿Cómo puedo registrarme en la plataforma?",
      answer: "En la sección principal puedes ingresar en el panel superior, luego Registro > Completa el formulario de registro. Puedes ingresar a www.FastLearn.edu.co/registro.html."
    },
    {
      question: "¿Cómo puedo ver contenido de una materia en específico?",
      answer: "Buscando el tema académico de tu interés en la barra de búsqueda de la sección principal del usuario, Descripción > Más información, encontrarás el contenido de la materia. Ingresando al tema académico de tu interés en la sección principal del usuario y encontrarás el contenido de la materia."
    },
    {
      question: "¿Cómo puedo ver la información de los usuarios?",
      answer: "Buscando al usuario en la barra de búsqueda de la sección principal del usuario, en la opción < Más información, encontrarás el contenido de la materia, realizando clic sobre el perfil del usuario visualizado en la página o ingresando a Mi cuenta > Ajuste > Información en la esquina superior derecha de tu cuenta."
    },
    {
      question: "¿Cómo puedo mandar mis quejas sobre la página?",
      answer: "Ingresando a www.fastlearn.edu.co/support/index.html. Al final de la página principal verás una opción llamada “PQRS o FAQ”, ingresando a esa opción encontrarás un formulario para enviar tus quejas. Enviando tus recomendaciones, quejas, sugerencias y problemas al FastLearnPQRS@gmail.com."
    },
    {
      question: "¿Cómo puedo recuperar mi cuenta? (en caso de perder contraseña)",
      answer: "Ingresando a www.fastlearn.edu.co/recovery-password/index.html. En el medio inferior de el formulario de inicio de sesión encontrarás una opción, “Olvide mi contraseña”, dónde te redireccionará al formulario para recuperar tu cuenta."
    },
    {
      question: "¿Cómo puedo configurar las notificaciones?",
      answer: "Ingresando a www.fastlearn.edu.co/notifications/index.html. Ingresando en la esquina superior izquierda a Ajustes > Configuración > Notificaciones y encontrarás opciones para configurar tus notificaciones."
    },
    {
      question: "¿Como puedo comunicarme con los usuarios (estudiantes y docentes)?",
      answer: "Ingresando a los foros a través de www.fastlearn.edu.co/forums/index.html. En la esquina superior izquierda encontrarás la opción “Foros” y allí encontrarás todos los grupos realizados por los usuarios y podrás comunicarte con ellos."
    },
    {
      question: "¿Cómo puedo reportar errores de la página?",
      answer: "A través de Ingresando a www.fastlearn.edu.co/support/index.html. Encontrarás un correo para enviar y notificar errores. Enviando tus recomendaciones, quejas, sugerencias y problemas al FastLearnPQRS@gmail.com."
    },
    {
      question: "¿Cómo puedo cambiar mi contraseña?",
      answer: "Ingresando a www.fastlearn.edu.co/changepass/index.html. Encontrarás un formulario para completar y enviar un correo de verificación. En el medio inferior del formulario de inicio de sesión encontrarás una opción, “Olvide mi contraseña”, dónde te redireccionará al formulario para recuperar tu cuenta. En la esquina superior izquierda en Ajustes > configuración > Cambiar contraseña y completa los datos necesarios."
    },
    {
      question: "¿Cómo puedo guardar contenido en mi lista de deseo?",
      answer: "En la esquina superior derecha de la plataforma está el apartado de lista de deseo, en la misma está la opción de agregar contenidos y direcciona a una página de contenidos que se pueden agregar a la lista. Al visualizar el contenido podremos fijarnos en la parte superior derecha de la publicación, los tres puntos, al presionar en estos se despliega un pequeño menú en el cual una de las opciones es “guardar contenido”."
    },
    {
      question: "¿Cómo puedo cerrar la sesión de mi cuenta en la plataforma?",
      answer: "En la esquina superior derecha de la pantalla al desplegar el menú de usuario podemos ver la opción de cerrar la sesión. Si usted no tiene la opción de recordar usuario activada la sesión se cerrará luego de que cierre el navegador. Al borrar el historial de su navegador junto con las cookies la sesión de su cuenta cerrará."
    },
    {
      question: "¿Cómo puedo descargar contenido?",
      answer: "Al visualizar el contenido de interés, podremos fijarnos en la parte superior derecha de la publicación, los tres puntos, al presionar en estos se despliega un pequeño menú en el cual una de las opciones es “descargar contenido”."
    },
  ];

  return (
    <>
      <Helmet>
        <title>Soluciones de Errores | FastLearn</title>
      </Helmet>
      <Header
        images={headerImages}
        interval={5000}
        heroProps={headerProps}
        menuItems={navItems}
      />

      <main className="flex flex-col justify-center items-center mx-5">
        <section id="solutions" className="w-full md:w-6/12 my-5">
          <h2 className="text-center text-lg font-semibold mb-4">Cuadro de Error – Solución</h2>
          <table className="table-auto w-full border-collapse border border-gray-200 shadow-md rounded-md">
            <thead className="bg-gray-100">
              <tr className="text-lg">
                <th className="border border-gray-300 p-2">Error</th>
                <th className="border border-gray-300 p-2">Solución</th>
              </tr>
            </thead>
            <tbody className="text-md">
              {errorSolutions.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2">{item.error}</td>
                  <td className="border border-gray-300 p-2">{item.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

     <section className="w-full md:w-6/12 my-5" id="faqs">
          <h2 className="text-center text-lg font-semibold mb-4">Preguntas Frecuentes</h2>
          {faqs.map((faq, index) => (
            <details key={index} className="mb-4 bg-gray-100 p-4 rounded-md shadow-md">
              <summary className="cursor-pointer font-semibold">{faq.question}</summary>
              <p className="mt-2">{faq.answer}</p>
            </details>
          ))}
        </section>
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

export default SupportPage ;
