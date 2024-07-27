const AlertInfoCategory = () => {
    return (
      <div role="alert" className="alert my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div className="fle flex-colx">
          <h1>Categorias de dificultad</h1>
          <p>Nivel 1: Indica que la dificultad del curso es básica y no requiere de muchas herramientas para llevarse a cabo</p>
          <p>Nivel 2: Indica que la dificultad del curso es intermedia y requiere de un conocimiento previo en el área para ir avanzando</p>
          <p>Nivel 3: Indica que la dificultad del curso es avanzada y requiere de un conocimiento alto en el área para avanzar en todo lo referente a lo que se va a ver en el video</p>
        </div>
      </div>
    );
  };
  
  export default AlertInfoCategory;
  