import { useState } from "react";
import PropTypes from "prop-types";
import {AlertLoad} from "../";
const Form = ({ initialFields, linkText, linkHref, onSubmit, formType }) => {
  const [formData, setFormData] = useState(
    initialFields.reduce((acc, field) => {
      acc[field.id] = "";
      return acc;
    }, {})
  );
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    // Ejemplo de validación para un campo específico (puedes adaptar según tus necesidades)
    if (id === 'email') {
      // Validación de formato de correo electrónico
      if (!/\S+@\S+\.\S+/.test(value)) {
        console.log('Correo electrónico no válido');
        return; // Puedes mostrar una alerta o mensaje de error aquí
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await onSubmit(formData);
      setLoading(false);
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setLoading(false);
      // Aquí puedes manejar el error específico de correo existente si lo devuelve el backend
    }
  };

  const buttonStyle = {
    backgroundImage:
      "radial-gradient(circle, #2253F0 0%, #B765E8 50%, #2253F0 100%)",
    backgroundSize: "200% auto",
    transition: "background-position 0.5s",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    color: "white",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto bg-white p-8 rounded-md"
      >
        {initialFields.map((field) => (
          <div key={field.id} className="mb-4">
            <input
              type={field.type}
              id={field.id}
              pattern={field.pattern}
              required
              placeholder={field.placeholder}
              value={formData[field.id]}
              onChange={handleChange}
              className="mt-1 block w-full px-3 p-3 border border-gray-300 rounded-md shadow-lg text-black border-none"
            />
          </div>
        ))}
        <button
          style={buttonStyle}
          type="submit"
          className="w-full py-2 px-4 border border-transparent font-medium rounded-md text-white"
        >
          {formType === "register" ? "Crear cuenta" : "Iniciar sesión"}
        </button>
      </form>
      {loading && <AlertLoad />}
      <div className="my-4">
        <a href={linkHref}>{linkText}</a>
      </div>
    </div>
  );
};

Form.propTypes = {
  initialFields: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  formType: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  linkText: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
};

export default Form;
