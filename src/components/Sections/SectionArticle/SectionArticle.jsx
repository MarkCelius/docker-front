import propTypes from "prop-types";

/**
 * Componente SectionArticle
 * 
 * Muestra un conjunto de elementos <h1> con un título principal y tres líneas adicionales.
 * 
 * @param {Object} props - Propiedades del componente SectionArticle.
 * @param {string} props.titulo1 - Título principal que se muestra en el primer <h1>.
 */
const SectionArticle = ({ titulo1 }) => {
  return (
    <>
      {/* Título principal */}
      <h1>{titulo1}</h1>
      
      {/* Líneas adicionales */}
      <h1>Hola</h1>
      <h1>Hola</h1>
      <h1>Hola</h1>
    </>
  );
};

// Definición de PropTypes para el componente SectionArticle
SectionArticle.propTypes = {
  titulo1: propTypes.string, // Propiedad titulo1 debe ser de tipo string
};

export default SectionArticle;
