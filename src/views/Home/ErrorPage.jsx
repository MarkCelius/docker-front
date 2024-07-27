import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Error - Page Not Found</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            404 - Página no encontrada
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            La página que estás visitando parece que no existe.
          </p>
          <a href="/" className="text-primary font-medium underline">
            Ir a Inicio
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
