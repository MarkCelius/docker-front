import React from "react";
import PropTypes from "prop-types";
import { Card } from "../../Layout/"; // Asumiendo que esta importación es necesaria

/**
 * Componente SectionCourses
 * 
 * Muestra una sección con título, texto descriptivo y tarjetas de cursos.
 * Cada tarjeta utiliza el componente Card para mostrar información específica del curso.
 * 
 * @param {Object} props - Propiedades del componente SectionCourses.
 * @param {string} props.titleCourses - Título de la sección de cursos.
 * @param {string} props.textCourses - Texto descriptivo de la sección de cursos.
 */
const SectionCourses = ({ titleCourses, textCourses }) => {
  return (
    <section className="flex flex-col justify-center items-center p-5 bg-gray">
      {/* Título de la sección */}
      <h2 className="text-lg font-bold sm:text-4xl text-label">
        {titleCourses}
      </h2>
      {/* Texto descriptivo de la sección */}
      <p className="text-md sm:text-lg">{textCourses}</p>

      {/* Contenedor de tarjetas de cursos */}
      <div className="flex flex-col">
        <div className="flex flex-wrap justify-center items-start sm:justify-center">
          {/* Primera tarjeta de curso */}
          <Card
            titleCard="Introducción a la programación"
            imageQuery="software developer"
            imageAltCard="Developer"
            imageTitleCard="Imagen de Desarrollo"
            textCard="Acercate más en el mundo de la programación con nuestro curso totalmente gratis, dónde aprenderás a crear páginas web con Html, Css y JavaScript."
            btnCard="Más información"
          />

          {/* Segunda tarjeta de curso */}
          <Card
            titleCard="Razonamiento lógico matemático"
            imageQuery="mathematics low"
            imageAltCard="Matemáticas"
            imageTitleCard="Imagen de Matemáticas"
            textCard="Un curso para principiantes en matemáticas, para mejorar la lógica y pensamiento abstracto propio, aquí encontrarás soluciones de diferentes putnos de vista."
            btnCard="Más información"
          />

          {/* Tercera tarjeta de curso */}
          <Card
            titleCard="Aprende a crear juegos 2d"
            imageQuery="Games console"
            imageAltCard="Artista"
            imageTitleCard="Imagen de Arte"
            textCard="En este contenido lograrás crear tu primer video 2d con los recursos y materiales necesarios con Unity2D y te guiaremos para empezar en el mundo del desarrollo digital."
            btnCard="Más información"
          />
        </div>

        {/* Botón para ver todos los cursos */}
        <div className="flex justify-start">
          <a href="#" className="btn bg-btn-sec text-white hover:bg-btn-pri">
            Ver Todos los Cursos
          </a>
        </div>
      </div>
    </section>
  );
};

// Definición de PropTypes para el componente SectionCourses
SectionCourses.propTypes = {
  titleCourses: PropTypes.string,   // Título de la sección de cursos
  textCourses: PropTypes.string,    // Texto descriptivo de la sección de cursos
};

export default SectionCourses;
