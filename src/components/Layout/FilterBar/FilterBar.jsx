// src/components/Layout/FilterBar.jsx
import React from "react";
import PropTypes from "prop-types";

const FilterBar = ({ filters, setFilters }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };  

  return (
    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mb-4">
      <input
        type="text"
        name="titulo"
        value={filters.titulo}
        onChange={handleInputChange}
        placeholder="Buscar por nombre"
        className="input input-bordered w-full md:w-1/3"
      />
      <input
        type="text"
        name="categoria"
        value={filters.categoria}
        onChange={handleInputChange}
        placeholder="Buscar por categoría"
        className="input input-bordered w-full md:w-1/3"
      />
      <input
        type="text"
        name="tags"
        value={filters.tags}
        onChange={handleInputChange}
        placeholder="Buscar por tags"
        className="input input-bordered w-full md:w-1/3"
      />
    </div>
  );
};

FilterBar.propTypes = {
  filters: PropTypes.shape({
    titulo: PropTypes.string,
    categoria: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  setFilters: PropTypes.func.isRequired,
};

export default FilterBar;
