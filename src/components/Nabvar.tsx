import { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link para la navegación

const Navbar = () => {
    const [active, setActive] = useState<string>("Historia");

    const handleClick = (section: string) => { // Especificar tipo string
        setActive(section);
    };

    return (
        <div className="bg-blue-50 flex justify-center items-center p-2 mt-[-30px]">
            <div className="max-w-7xl mx-auto px-4 py-2">
                <div className="flex justify-center space-x-6 sm:space-x-8">
                    {["Historia", "Acerca de", "Educacion", "Inspiración"].map((section) => (
                        <Link
                            key={section}
                            to={`/${section === "Historia" ? "" : section === "Acerca de" ? "acerca-de" : section.toLowerCase()}`} // Ajusta la ruta para 'Acerca de'
                            className={`relative cursor-pointer text-sm sm:text-base ${
                                active === section
                                    ? "font-semibold text-red-800 border-b-4 border-magenta"
                                    : "text-gray-600 hover:text-gray-900"
                            } transition duration-300 ease-in-out`}
                            onClick={() => handleClick(section)}
                        >
                            <span>{section}</span>
                            {active === section && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-magenta transition-all duration-300"></div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
