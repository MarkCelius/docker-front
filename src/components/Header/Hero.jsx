import PropTypes from "prop-types";

// Props de la sección Hero

const Hero = ({
  titleHero,
  textHero,
  btn1Hero,
  btn2Hero,
  btn1Href,
  btn2Href,
}) => {
  return (
    <section className="flex flex-col my-36 mx-2 p-8 backdrop-blur-sm bg-black/70 rounded-lg shadow-lg md:shadow-none lg:backdrop-filter-none lg:bg-black/0 sm:m-20 xl:m-20 2xl:m-40">
      <h1 className="text-white text-lg font-bold w-full sm:text-4xl mb-4">
        {titleHero}
      </h1>
      <p className="text-white text-md w-full sm:text-lg md:w-3/6 2xl:w-4/5 mb-6">
        {textHero}
      </p>
      <div className="flex space-x-4">
        <a
          href={btn1Href}
          className="btn bg-btn-pri border-none text-secondary"
        >
          {btn1Hero}
        </a>
        <a
          href={btn2Href}
          className="btn bg-btn-sec border-none text-white hover:text-secondary"
        >
          {btn2Hero}
        </a>
      </div>
    </section>
  );
};

// Definición de PropTypes para el componente Hero
Hero.propTypes = {
  // Props para la sección Hero
  titleHero: PropTypes.string.isRequired,
  textHero: PropTypes.string.isRequired,
  btn1Hero: PropTypes.string.isRequired,
  btn2Hero: PropTypes.string.isRequired,
  btn1Href: PropTypes.string.isRequired,
  btn2Href: PropTypes.string.isRequired,
};

export default Hero;
