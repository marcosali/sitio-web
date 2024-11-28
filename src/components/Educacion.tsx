import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaPhp } from 'react-icons/fa'; // Importar íconos
import { SiAngular } from 'react-icons/si'; // Icono adicional para Angular
import ReactCourseImage from "../assets/file.png"; // Importar la imagen desde la carpeta

// Definir los tipos de tecnologías
interface Technology {
    icon: JSX.Element;
    name: string;
}

// Definir los tipos de estudios
interface Study {
    name: string;
    description: string;
    date: string;
    image?: string; // Imagen opcional
    icon?: JSX.Element; // Icono opcional para los estudios
}

const TechnologyList = ({ technologies }: { technologies: Technology[] }) => {
    return (
        <div className="bg-blue-50 max-w-3xl mx-auto p-6 mt-8 rounded-lg">
            {/* Título de Tecnologías */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tecnologías</h2>

            {/* Lista de tecnologías organizada en cuadrícula */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center space-y-2 mb-4">
                        <span className="text-4xl">{tech.icon}</span>
                        <span className="text-gray-700">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StudyList = ({ studies }: { studies: Study[] }) => {
    return (
        <div className="bg-blue-50 max-w-3xl mx-auto p-6 mt-8 rounded-lg">
            {/* Título de Estudios */}
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Estudios y Formación</h2>

            {/* Lista de estudios */}
            <div className="space-y-4">
                {studies.map((study, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <span className="text-3xl">{study.icon}</span>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">{study.name}</h3>
                            <p className="text-gray-700">{study.description}</p>

                            {/* Fecha como badge estilo botón, más pequeño */}
                            <span className="inline-block bg-red-300 text-gray-800 px-3 py-0.5 rounded-full text-xs font-medium mt-2">
                                {study.date}
                            </span>

                            {/* Mostrar imagen solo si existe */}
                            {study.image && (
                                <div className="mt-4">
                                    <img
                                        src={study.image}
                                        alt={study.name}
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const App = () => {
    // Tecnologías con sus iconos
    const technologies: Technology[] = [
        { icon: <FaHtml5 className="text-orange-600" />, name: 'HTML' },
        { icon: <FaCss3Alt className="text-blue-600" />, name: 'CSS' },
        { icon: <FaJs className="text-yellow-600" />, name: 'JavaScript' },
        { icon: <FaReact className="text-blue-500" />, name: 'React' },
        { icon: <FaNodeJs className="text-green-600" />, name: 'Node.js' },
        { icon: <FaPython className="text-blue-400" />, name: 'Python' }, // Python
        { icon: <FaPhp className="text-indigo-500" />, name: 'PHP' }, // PHP
        { icon: <SiAngular className="text-red-500" />, name: 'Angular' } // Angular
    ];

    // Estudios y certificaciones con fecha, y solo un estudio tiene imagen
    const studies: Study[] = [
        {
            name: 'Técnico profesional en sistemas',
            description: 'Estudio enfocado en fundamentos de hardware, software y redes.',
            date: '2020 - Finalizado 🌟'
        },
        {
            name: 'Análisis y desarrollo de software',
            description: 'Aprendo a crear sitios web interactivos y analizar bases de datos.',
            date: '2022 - 2025/26'
        },
        {
            name: 'Ingeniería en sistemas',
            description: 'Dominio y creación de procesos tecnológicos, así como liderazgo y planificación estratégica.',
            date: '2022'
        },
        {
            name: 'React de cero a experto',
            description: 'Desarrollo de interfaces de usuario interactivas con React y gestión de estados con Redux.',
            date: '2024 - Finalizado 🌟',
            image: ReactCourseImage // Usar la imagen importada
        },
    ];

    return (
        <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
            <div className="w-full max-w-lg">
                {/* Sección de Tecnologías */}
                <TechnologyList technologies={technologies} />

                {/* Sección de Estudios */}
                <StudyList studies={studies} />
            </div>
        </div>
    );
};

export default App;
