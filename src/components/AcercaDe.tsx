import postImageTop from "../assets/escritorio.jpeg"; // Imagen para la parte superior
import postImageBottom from "../assets/musica.jpeg"; // Imagen para la parte inferior

// Definir el tipo de las props para PhotoPost
interface PhotoPostProps {
    title: string;
    topText: string;
    bottomText: string;
    bottomTitle?: string;
    bottomText2?: string;
    postImageTop?: string;
    postImageBottom?: string;
}

const PhotoPost: React.FC<PhotoPostProps> = ({
    title,
    topText,
    bottomText,
    bottomTitle,
    bottomText2,
    postImageTop,
    postImageBottom
}) => {
    return (
        <div className="bg-blue-50 max-w-3xl mx-auto p-6 mt-8 rounded-lg">
            {/* Título superior */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>

            {/* Texto superior */}
            <p className="text-gray-700 mb-4">{topText}</p>

            {/* Imagen superior */}
            {postImageTop && (
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img
                        src={postImageTop}
                        alt="Workspace"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Texto inferior */}
            <p className="text-gray-700 mt-4">{bottomText}</p>

            {/* Título inferior */}
            {bottomTitle && <h3 className="text-2xl font-bold text-gray-800 mb-4">{bottomTitle}</h3>}

            {/* Texto inferior adicional */}
            {bottomText2 && <p className="text-gray-700 mt-2">{bottomText2}</p>}

            {/* Imagen inferior */}
            {postImageBottom && (
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img
                        src={postImageBottom}
                        alt="Music"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex items-start justify-center p-6">
            <div className="w-full max-w-lg">
                {/* Foto única con título, texto arriba y abajo */}
                <PhotoPost
                    title="Marco A. Salinas."
                    topText="Hola, soy Marco Antonio Salinas, un apasionado técnico en sistemas y desarrollador web con más de 2 años de experiencia en el campo de la tecnología."
                    bottomText="Desde mis primeros días explorando el mundo de la informática, he estado fascinado por cómo la tecnología puede transformar la forma en que vivimos, trabajamos y nos comunicamos. Comencé mi carrera obteniendo una formación sólida en sistemas informáticos, donde adquirí un profundo conocimiento en hardware, software y redes. Mi curiosidad y deseo de aprender me llevaron a especializarme en el desarrollo web, donde descubrí mi verdadera pasión."
                    bottomTitle="Mi pasión por la música."
                    bottomText2="Mi pasión por la música y la guitarra ha sido una parte importante de mi vida. La música me permite expresarme y me brinda un sentido de calma y creatividad. Disfruto tanto de tocar la guitarra como de aprender nuevas canciones, lo que me ayuda a desconectar y encontrar nuevas formas de inspiración."
                    postImageTop={postImageTop} // Pasar la imagen superior como prop
                    postImageBottom={postImageBottom} // Pasar la imagen inferior como prop
                />
            </div>
        </div>
    );
};

export default App;
