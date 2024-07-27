import PropTypes from "prop-types";

/**
 * Componente SectionBenefits
 * 
 * Muestra una sección con título, texto descriptivo, botón de acción, y una imagen con superposición.
 * 
 * @param {Object} props - Propiedades del componente SectionBenefits.
 * @param {string} props.titleBen - Título de la sección.
 * @param {string} props.textBen - Texto descriptivo de la sección.
 * @param {string} props.btnTextBen - Texto del botón de acción.
 * @param {string} props.btnHrefBen - URL a la que redirige el botón de acción.
 * @param {string} props.imageBen - URL de la imagen que se muestra.
 * @param {string} props.altBen - Texto alternativo para la imagen.
 * @param {string} props.imageTitleBen - Título de la imagen.
 */
const SectionBenefits = ({
  titleBen,
  textBen,
  btnTextBen,
  btnHrefBen,
  imageBen,
  altBen,
  imageTitleBen,
}) => {
  return (
    <section className="bg-gray-100 py-20">
      <article className="container mx-auto flex flex-wrap items-center">
        {/* Columna izquierda */}
        <div className="w-full md:w-6/12 px-6 mb-12 md:mb-0">
          <h2 className="text-lg font-bold sm:text-4xl text-label mb-5">
            {titleBen}
          </h2>
          <p className="text-md sm:text-lg mb-6">{textBen}</p>
          <a
            href={btnHrefBen}
            className="inline-block bg-primary text-white text-sm sm:text-md py-2 px-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
          >
            {btnTextBen}
          </a>
        </div>

        {/* Columna derecha */}
        <div className="w-full md:w-6/12 px-6">
          <div className="relative">
            {/* Imagen con superposición */}
            <img
              src={imageBen}
              alt={altBen}
              title={imageTitleBen}
              className="w-full h-auto rounded-2xl shadow-lg transform transition duration-300 hover:scale-105"
            />
            {/* Superposición degradada sobre la imagen */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary via-transparent to-transparent opacity-30 rounded-2xl"></div>
          </div>
        </div>
      </article>
    </section>
  );
};

// Definición de PropTypes para el componente SectionBenefits
SectionBenefits.propTypes = {
  titleBen: PropTypes.string.isRequired,       // Título de la sección
  textBen: PropTypes.string.isRequired,        // Texto descriptivo
  btnTextBen: PropTypes.string.isRequired,     // Texto del botón de acción
  btnHrefBen: PropTypes.string.isRequired,     // URL a la que redirige el botón de acción
  imageBen: PropTypes.string.isRequired,       // URL de la imagen
  altBen: PropTypes.string.isRequired,         // Texto alternativo para la imagen
  imageTitleBen: PropTypes.string.isRequired,  // Título de la imagen
};

export default SectionBenefits;
