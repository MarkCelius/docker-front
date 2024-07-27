import PropTypes from "prop-types";

// Props de breadcrumbs

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="breadcrumbs text-md mx-4">
      <ul>
        {/* Ciclo para crear elemento por cada breadcrumbs */}
        {items.map((item, index) => (
          <li key={index} className="">
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  // Props de los breadcrumbs
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Breadcrumbs;
