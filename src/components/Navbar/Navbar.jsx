import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Componente Navbar
 * 
 * Muestra una barra de navegación responsiva con logo, elementos de menú y opción de acceso.
 * 
 * @param {Object} props - Propiedades del componente Navbar.
 * @param {string} props.imageLogo - URL del logo a mostrar en la barra de navegación.
 * @param {string} props.imageAlt - Texto alternativo para el logo.
 * @param {Array} props.items - Lista de elementos de menú con href y label.
 * @param {string} props.hrefImg - URL a la que se dirige al hacer clic en el logo.
 */
export default function Navbar({ imageLogo, imageAlt, items, hrefImg }) {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para controlar la apertura/cierre del menú desplegable en dispositivos móviles

  // Función para alternar el estado del menú desplegable
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="flex justify-between items-center">
      {/* Sección izquierda del navbar */}
      <div className="flex justify-center items-center">
        {/* Logo visible en pantallas grandes */}
        <a
          className="hidden md:flex mx-24 my-7 lg:mx-36 justify-center items-center"
          href={hrefImg}
        >
          <img src={imageLogo} alt={imageAlt} className="w-32 lg:w-32" />
        </a>
        
        {/* Menú desplegable visible en dispositivos móviles */}
        <div className="dropdown md:hidden m-4">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white"
            onClick={toggleDropdown}
          >
            {/* Ícono de menú */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          {/* Menú desplegable mostrado si dropdownOpen es verdadero */}
          {dropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-[1] p- shadow bg-base-100 rounded-box w-52"
            >
              {items.map((item, index) => (
                <li key={index} className="">
                  {/* Elementos de menú del desplegable */}
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
              {/* Elemento adicional para acceder */}
              <li>
                <a
                  href="/login"
                  className="bg-primary border-none text-white p-4"
                >
                  Acceder
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Sección central del navbar (logo en dispositivos móviles) */}
      <div className="navbar-center">
        <a
          className="btn btn-ghost text-xl h-auto flex md:hidden m-4"
          href={hrefImg}
        >
          <img src={imageLogo} alt={imageAlt} className="w-24" />
        </a>
      </div>

      {/* Sección derecha del navbar (menú en pantallas grandes) */}
      <div className="hidden md:flex mx-24">
        <ul className="flex flex-nowrap items-center text-white text-md">
          {items.map((item, index) => (
            <li
              key={index}
              className="text-nowrap border-none hover:btn rounded-lg p-3.5"
            >
              {/* Elementos de menú en la barra de navegación */}
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          {/* Elemento adicional para acceder */}
          <li>
            <a
              href="/login"
              className="border-none text-white p-4 rounded-lg bg-primary hover:bg-slate-300 hover:text-primary"
            >
              Acceder
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// Definición de PropTypes para el componente Navbar
Navbar.propTypes = {
  imageLogo: PropTypes.string.isRequired, // URL del logo
  imageAlt: PropTypes.string.isRequired, // Texto alternativo para el logo
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired, // URL de los elementos de menú
      label: PropTypes.string.isRequired, // Etiqueta de los elementos de menú
    })
  ).isRequired,
  hrefImg: PropTypes.string.isRequired, // URL a la que se dirige al hacer clic en el logo
};
