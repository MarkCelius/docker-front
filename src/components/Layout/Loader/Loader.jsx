// Crear loader para cargar información
const Loader = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-100">
            <span className="loading loading-spinner loading-lg my-7"></span>
            <h2 className="text-sm sm:text-md md:text-lg lg:text-lg">Cargando Información</h2>
        </div>
    )
}

export default Loader