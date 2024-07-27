import { Helmet } from "react-helmet-async";
import { SectionForm } from "../../components/";

const RecoveryPage = () => {
  const formFields = [
    { type: "text", placeholder: "Nombre", id: "nombre" },
    { type: "email", placeholder: "Correo electrónico", id: "email" },
  ];

  return (
    <>
      <Helmet>
        <title>Recupera tu cuenta | FastLearn</title>
      </Helmet>

      <main
        className="h-screen bg-center bg-cover flex justify-center items-center"
        style={{ backgroundImage: "url(/img/forms/img3.webp)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <SectionForm
          title="Recupera tu acceso"
          text="No te preocupes si has olvidado tu contraseña, estamos aquí para ayudarte a restablecer tu acceso de manera rápida y segura. Sigue los pasos a continuación y vuelve a disfrutar de todos los beneficios que FastLearn tiene para ti"
          formFields={formFields}
          linkText="Crear una nueva cuenta"
          linkHref="/signup"
        />
      </main>
    </>
  );
};

export default RecoveryPage;
