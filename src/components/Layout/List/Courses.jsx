// src/components/Courses.jsx
import React from "react";
import PropTypes from "prop-types";

const Courses = ({ courses }) => {
  return (
    <div className="flex flex-col flex-wrap sm:flex-row justify-around items-center sm:items-start ">
      {courses.map((course) => (
        <div
          key={course.id_cursos}
          className="card bg-base-100 w-72 mx-2 shadow-xl transition-shadow duration-300"
        >
          <figure>
            <img
              src={course.imagen}
              alt={course.imagen}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {course.titulo}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{course.descripcion}</p>
            <p className="badge badge-outline">{course.tags}</p>
            <p className="badge badge-outline">{course.categoria}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id_cursos: PropTypes.number.isRequired,
      imagen: PropTypes.string.isRequired,
      titulo: PropTypes.string.isRequired,
      descripcion: PropTypes.string.isRequired,
      tags: PropTypes.string,
      categoria: PropTypes.string,
    })
  ).isRequired,
};

export default Courses;
