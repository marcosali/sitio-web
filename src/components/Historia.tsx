import { FaComment, FaHeart } from "react-icons/fa"; // Iconos de comentarios y "me gusta"
import profileImage from "../assets/marco.png"; // Imagen de perfil 1
import postImage1 from "../assets/antonio.png"; // Imagen de la publicación 1
import postImage2 from "../assets/developer.png"; // Imagen de la publicación 2
import postImage3 from "../assets/developer.png"; // Imagen de la publicación 3

// Definir la interfaz de las props
interface SocialPostProps {
    profileImage: string;
    username: string;
    date: string;
    text: string;
    postImage?: string; // Es opcional, ya que no todas las publicaciones tienen imagen
}

const SocialPost: React.FC<SocialPostProps> = ({
    profileImage,
    username,
    date,
    text,
    postImage
}) => {
    return (
        <div className="bg-blue-50 max-w-3xl mx-auto p-6 mt-8 rounded-lg hover:opacity-90 hover:shadow-xl transition-all duration-300 ease-in-out">
            {/* Encabezado de la publicación */}
            <div className="flex items-center space-x-4 mb-4">
                {/* Imagen de perfil */}
                <img
                    src={profileImage}
                    alt={`${username}'s profile`}
                    className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                    {/* Nombre de usuario */}
                    <h3 className="text-xl font-semibold text-gray-800">{username}</h3>
                    {/* Fecha de publicación */}
                    <p className="text-gray-500 text-sm">{date}</p>
                </div>
            </div>

            {/* Texto de la publicación */}
            <p className="text-gray-700 mb-4">{text}</p>

            {/* Imagen de la publicación */}
            {postImage && (
                <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img
                        src={postImage}
                        alt="Post content"
                        className="w-full h-full object-cover"
                    />
                </div>
            )}

            {/* Iconos de interacciones */}
            <div className="flex items-center space-x-6 text-gray-500">
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaComment className="text-xl" />
                </div>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <FaHeart 
                        className="text-xl transition-transform transform hover:scale-125 text-red-500" 
                    />
                </div>
            </div>
        </div>
    );
};

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex items-start justify-center p-6">
            <div className="w-full max-w-lg">
                {/* Primera publicación */}
                <SocialPost
                    profileImage={profileImage} // Imagen de perfil 1
                    username="Marco Antonio🌟"
                    date="23 Oct 1999"
                    text="Hola, soy Marco Antonio. Nací el 23 de octubre de 1999. Me encanta la música, jugar al fútbol y ver partidos de este hermoso deporte. Amo profundamente a mi familia y disfruto compartir momentos con ellos, ya sea en casa o en cualquier lugar. Para mí, esos instantes son los más valiosos y llenan mi vida de alegría."
                    postImage={postImage1} // Imagen de publicación 1
                />
                
                {/* Segunda publicación */}
                <SocialPost
                    profileImage={profileImage} // Imagen de perfil 2
                    username="Marco Antonio🌟"
                    date="21 Jan 2023"
                    text="Pronto compartiré mi proyecto. ¡Ha sido un viaje desafiante pero emocionante!"
                    postImage={postImage2} // Imagen de publicación 2
                />

                {/* Tercera publicación */}
                <SocialPost
                    profileImage={profileImage} // Imagen de perfil 3
                    username="Marco Antonio🌟"
                    date="22 Jan 2023"
                    text="Sharing my latest project soon, it's been a challenging but exciting journey!"
                    postImage={postImage3} // Imagen de publicación 3
                />
            </div>
        </div>
    );
};

export default App;
