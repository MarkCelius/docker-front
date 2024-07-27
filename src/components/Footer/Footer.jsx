import PropTypes from "prop-types";

// Props del footer
const Footer = ({
  services,
  company,
  legal,
  companyName,
  companyDescription,
}) => {
  return (
    <footer className="my-5">
      {/* Primera sección del pie de página */}
      <footer className="footer bg-base-200 text-base-content p-10">
        <nav>
          {/* Ciclo para crear un elemento por cada item del objeto de servicios */}
          <h6 className="footer-title">{services.title}</h6>
          {/* Muestra los enlaces de servicios */}
          {services.links.map((link, index) => (
            <a key={index} href={link.href} className="link link-hover">
              {link.text}
            </a>
          ))}
        </nav>
        <nav>
          {/* Ciclo para crear un elemento por cada item del objeto de compañia */}
          <h6 className="footer-title">{company.title}</h6>
          {/* Muestra los enlaces de la seccion compañía */}
          {company.links.map((link, index) => (
            <a key={index} href={link.href} className="link link-hover">
              {link.text}
            </a>
          ))}
        </nav>
        <nav>
          {/* Ciclo para crear un elemento por cada item del objeto de legal */}
          <h6 className="footer-title">{legal.title}</h6>
          {/* Muestra los enlaces de la seccion legales */}
          {legal.links.map((link, index) => (
            <a key={index} href={link.href} className="link link-hover">
              {link.text}
            </a>
          ))}
        </nav>
      </footer>

      {/* Derechos reservados y logo de FastLearn con el nombre y la descripción */}
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="grid-flow-col items-center">
          {/* Muestra el logo de la seccion compañía */}
          <img
            src="/img/logo/logo.webp"
            alt="Logo"
            title="Logo FastLearn"
            className="w-36"
          />
          <p>
            {companyName}
            <br />
            {companyDescription}
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end"></nav>
      </footer>
    </footer>
  );
};

// Crear props para el footer
Footer.propTypes = {
  // Objeto de servicios
  services: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  // Objeto de compañia
  company: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  // Objeto legal
  legal: PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  // Propiedad para el nombre de la compañía
  companyName: PropTypes.string.isRequired,
  // Propiedad para la descripción de la compañía
  companyDescription: PropTypes.string.isRequired,
};

export default Footer;
