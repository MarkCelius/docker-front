const FormThemes = () =>{
    const [videoSrc, setVideoSrc] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");
    const [category, setCategory] = useState("");
    const [imageSrc, setImageSrc] = useState(null);
  
    const categories = ["Nivel 1", "Nivel 2", "Nivel 3"]; // Lista de categorías
  
    const handleVideoUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setVideoSrc(URL.createObjectURL(file));
        // Subir el archivo al servidor aquí si es necesario
      }
    };
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setImageSrc(URL.createObjectURL(file));
        // Subir el archivo al servidor aquí si es necesario
      }
    };
  
    const handleAddLink = () => {
      if (newLink) {
        setLinks([...links, newLink]);
        setNewLink("");
      }
    };
  
    const handleRemoveLink = (index) => {
      setLinks(links.filter((_, i) => i !== index));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem("token");
  
      if (!token) {
        console.error("Token no encontrado en localStorage.");
        return;
      }
  
      const cursoData = {
        imagen: imageSrc, // URL de la imagen subida
        video: videoSrc, // URL del video subido
        titulo: title,
        descripcion: description,
        linkCurso: links.join(", "), // Unir links como una cadena
        tagsCurso: "", // Si tienes tags, puedes agregarlos aquí
        categoria: category,
      };
  
      console.log(cursoData);
  
      try {
        const response = await axios.post(
          "https://service-fastlearn.onrender.com/cursos/",
          cursoData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
  
        if (response.status === 201) {
          console.log("Curso creado exitosamente");
          // Limpiar formulario o redirigir al usuario aquí
        } else {
          console.error("Error al crear el curso:", response.statusText);
        }
      } catch (error) {
        console.error("Error en la conexión:", error);
        if (error.response) {
          // El servidor respondió con un código de estado fuera del rango 2xx
          console.error("Datos de error del servidor:", error.response.data);
        } else if (error.request) {
          // La solicitud se realizó pero no se recibió respuesta
          console.error("No se recibió respuesta del servidor:", error.request);
        } else {
          // Ocurrió un error al configurar la solicitud
          console.error("Error al configurar la solicitud:", error.message);
        }
      }
    };
    return(

    )
}