import React, { useEffect, useState } from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import { AcmeLogo } from "../components/MarcoLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Verificar la preferencia guardada en localStorage
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        if (savedDarkMode) {
            setIsDarkMode(true);
            document.body.classList.add("dark"); // Aplica la clase 'dark' al <body>
        } else {
            setIsDarkMode(false);
            document.body.classList.remove("dark"); // Remueve la clase 'dark' del <body>
        }
    }, []);

    // Alternar modo oscuro
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode.toString()); // Guarda la preferencia
        if (newDarkMode) {
            document.body.classList.add("dark"); // Aplica la clase 'dark' al <body>
        } else {
            document.body.classList.remove("dark"); // Remueve la clase 'dark' del <body>
        }
    };

    return (
        <>
            {/* Header */}
            <Navbar
                className={`border-b ${isDarkMode
                    ? "bg-transparent border-gray-700"
                    : "bg-transparent border-gray-200"
                }`}
            >
                {/* Logo */}
                <NavbarContent>
                        <AcmeLogo />
                </NavbarContent>

                {/* Centro vacío (puedes agregar íconos si lo necesitas) */}
                <NavbarContent className="hidden sm:flex gap-6" justify="center" />

                {/* Iconos a la derecha */}
                <NavbarContent justify="end">
                    <NavbarItem>
                        <button
                            onClick={toggleDarkMode}
                            className={`flex items-center justify-center w-10 h-10 ${isDarkMode
                                ? "bg-gray-800 hover:bg-gray-700"
                                : "bg-gray-100 hover:bg-gray-200"
                            } rounded-full`}
                        >
                            <FontAwesomeIcon
                                icon={isDarkMode ? faSun : faMoon}
                                className={`${isDarkMode ? "text-yellow-300" : "text-gray-500"
                                    } w-5 h-5`}
                            />
                        </button>
                    </NavbarItem>
                </NavbarContent>
            </Navbar>

            {/* Imagen de fondo con altura 0 */}
            <div
                className="relative h-0 overflow-hidden transition-colors duration-300"
                style={{
                    backgroundImage: `url('https://your-image-url.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
        </>
    );
}
