const Inspiracion = () => {
  const comentarios = [
    {
      nombre: "MiduDev",
      fecha: "23 Feb 2021",
      mensaje: "You blow my mind.",
      avatar: "https://avatars.githubusercontent.com/u/1561955?v=4",
      url: "https://github.com/midudev",
    },
    {
      nombre: "MauroDev",
      fecha: "18 Feb 2021",
      mensaje: "You blow my mind",
      avatar: "https://mouredev.com/wp-content/uploads/2018/11/brais_moure_dinahosting_760x570.jpg",
      url: "https://github.com/mouredev",
    },
    {
      nombre: "Jhey Tompkins",
      fecha: "8 Jan 2021",
      mensaje: "You blow my mind",
      avatar: "https://jhey.dev/media/image/enhanced/desk-shot-750x500.avif",
      url: "https://jhey.dev/",
    },
  ];

  return (
    <div className="p-6 bg-blue-50 ">
      <div className="max-w-2xl mx-auto space-y-6 ">
        {comentarios.map((comentario, index) => (
          <a
            key={index}
            href={comentario.url}  // Agregado el enlace para cada comentario
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-4 p-4 rounded-lg shadow-sm cursor-pointer transition-all duration-200 
              hover:shadow-md  hover:"
          >
            {/* Avatar */}
            <img
              src={comentario.avatar}
              alt={`Avatar de ${comentario.nombre}`}
              className="w-12 h-12 rounded-full flex-shrink-0"
            />
            {/* Contenido del comentario */}
              <h3 className="font-semibold text-black dark:text-white">{comentario.nombre}</h3>
              <span className="text-gray-600 text-sm dark:text-gray-400">• {comentario.fecha}</span>
              <p className="mt-1 text-gray-500 dark:text-gray-300">{comentario.mensaje}</p>
            {/* Ícono de enlace */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
              />
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Inspiracion;
