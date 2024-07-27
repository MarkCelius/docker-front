import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

/**
 * Componente Card
 * 
 * Muestra una tarjeta con título, imagen cargada desde Pexels, texto y un botón.
 * 
 * @param {Object} props - Propiedades del componente Card.
 * @param {string} props.titleCard - Título de la tarjeta.
 * @param {string} props.imageQuery - Consulta para buscar la imagen en Pexels.
 * @param {string} props.imageAltCard - Texto alternativo para la imagen.
 * @param {string} props.imageTitleCard - Título de la imagen.
 * @param {string} props.textCard - Texto descriptivo de la tarjeta.
 * @param {string} props.btnCard - Texto del botón de la tarjeta.
 */
const Card = ({
  titleCard,
  imageQuery,
  imageAltCard,
  imageTitleCard,
  textCard,
  btnCard,
}) => {
  const [imageUrl, setImageUrl] = useState(""); // Estado para almacenar la URL de la imagen

  useEffect(() => {
    // Función para buscar la imagen en Pexels
    const fetchImage = async () => {
      const API_KEY = "DMcR1jV6d2yENdBKABbANFaC1ECVei8b4iXMSNnskDUIP1RQPNz6wTZV";
      const url = `https://api.pexels.com/v1/search?query=${imageQuery}&per_page=1`;

      try {
        // Realizar solicitud GET a la API de Pexels
        const response = await axios.get(url, {
          headers: {
            Authorization: API_KEY,
          },
        });

        // Verificar si se encontraron imágenes
        if (response.data.photos.length > 0) {
          setImageUrl(response.data.photos[0].src.medium); // Actualizar la URL de la imagen
        } else {
          console.error("No images found for query:", imageQuery); // Mostrar mensaje de error si no se encontraron imágenes
        }
      } catch (error) {
        console.error("Error fetching image from Pexels", error); // Capturar y mostrar errores de la solicitud
      }
    };

    fetchImage(); // Llamar a la función fetchImage al montar el componente o cuando imageQuery cambie
  }, [imageQuery]);

  return (
    <article className="card card-compact bg-base-100 shadow-xl m-4 max-w-max sm:w-3/12">
      <div className="card-body">
        <h2 className="card-title text-md">{titleCard}</h2>
        <figure className="image-container">
          <img src={imageUrl} alt={imageAltCard} title={imageTitleCard} /> {/* Mostrar la imagen obtenida */}
        </figure>
        <p>{textCard}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary hover:bg-btn-pri hover:text-primary border-none">
            {btnCard}
          </button>
        </div>
      </div>
    </article>
  );
};

// Definición de PropTypes para el componente Card
Card.propTypes = {
  titleCard: PropTypes.string.isRequired, // Título de la tarjeta
  imageQuery: PropTypes.string.isRequired, // Consulta para buscar la imagen en Pexels
  imageAltCard: PropTypes.string.isRequired, // Texto alternativo para la imagen
  imageTitleCard: PropTypes.string.isRequired, // Título de la imagen
  textCard: PropTypes.string.isRequired, // Texto descriptivo de la tarjeta
  btnCard: PropTypes.string.isRequired, // Texto del botón de la tarjeta
};

export default Card;
