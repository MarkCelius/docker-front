import PropTypes from "prop-types";
import { Form } from "../../Layout/";

/**
 * Componente SectionForm
 * 
 * Muestra una sección con un título, texto descriptivo, un enlace de recuperación,
 * y un formulario que utiliza el componente Form.
 * 
 * @param {Object} props - Propiedades del componente SectionForm.
 * @param {string} props.title - Título de la sección.
 * @param {string} props.text - Texto descriptivo de la sección.
 * @param {string} props.linkRecovery - URL del enlace de recuperación.
 * @param {string} props.textRecovery - Texto del enlace de recuperación.
 * @param {Array} props.formFields - Campos del formulario, cada uno con tipo, marcador de posición y ID.
 * @param {string} props.linkText - Texto del enlace dentro del formulario.
 * @param {string} props.linkHref - URL del enlace dentro del formulario.
 * @param {function} props.onSubmit - Función que maneja el envío del formulario.
 * @param {string} props.formType - Tipo de formulario utilizado.
 */
const SectionForm = ({
  title,
  text,
  linkRecovery,
  textRecovery,
  formFields,
  linkText,
  linkHref,
  onSubmit,
  formType,
}) => {
  return (
    <section className="relative flex flex-col md:flex-row w-full bg-gray-900 text-white py-12 px-6">
      {/* Columna izquierda con texto descriptivo */}
      <article className="md:w-1/2 flex flex-col justify-center items-start p-6">
        <div className="md:mx-16">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="mb-4 hidden md:block">{text}</p>
          <div className="my-4">
            <a href={linkRecovery}>{textRecovery}</a>
          </div>
        </div>
      </article>

      {/* Columna derecha con el formulario */}
      <div className="md:w-1/2 flex justify-center items-center">
        <Form
          initialFields={formFields}
          onSubmit={onSubmit}
          formType={formType}
          linkText={linkText}
          linkHref={linkHref}
        />
      </div>
    </section>
  );
};

// Definición de PropTypes para el componente SectionForm
SectionForm.propTypes = {
  title: PropTypes.string.isRequired, // Título de la sección
  text: PropTypes.string.isRequired, // Texto descriptivo de la sección
  linkRecovery: PropTypes.string.isRequired, // URL del enlace de recuperación
  textRecovery: PropTypes.string.isRequired, // Texto del enlace de recuperación
  formFields: PropTypes.arrayOf( // Array de campos del formulario
    PropTypes.shape({
      type: PropTypes.string.isRequired, // Tipo de campo (ej: texto, contraseña)
      placeholder: PropTypes.string.isRequired, // Marcador de posición del campo
      id: PropTypes.string.isRequired, // ID único del campo
    })
  ).isRequired,
  onSubmit: PropTypes.func.isRequired, // Función que maneja el envío del formulario
  formType: PropTypes.string.isRequired, // Tipo de formulario utilizado (ej: login, registro)
  linkText: PropTypes.string.isRequired, // Texto del enlace dentro del formulario
  linkHref: PropTypes.string.isRequired, // URL del enlace dentro del formulario
};

export default SectionForm;
