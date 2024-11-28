import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCalendar, faCakeCandles } from "@fortawesome/free-solid-svg-icons";
import marcoImage from "../assets/marco.png";
import coverImage from "../assets/setup.jpeg";

const SocialProfile = () => {
    const [isDarkCover, setIsDarkCover] = useState(false);

    const toggleDarkCover = () => {
        setIsDarkCover(!isDarkCover);
    };

    return (
        <div className="bg-blue-50 flex justify-center items-center mt-[-1px]">
            <div className="rounded-lg w-full max-w-2xl overflow-hidden">
                {/* Foto de portada */}
                <div
                    className="relative h-64 cursor-pointer transition-all duration-300"
                    onClick={toggleDarkCover}
                    style={{
                        width: "100%",
                        height: "256px",
                    }}
                >
                    {/* Imagen de fondo */}
                    <div
                        style={{
                            backgroundImage: `url(${coverImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                        }}
                        className="absolute inset-0"
                    ></div>

                    {/* Superposición para modo oscuro */}
                    {isDarkCover && (
                        <div
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            }}
                            className="absolute inset-0 transition-all duration-300"
                        ></div>
                    )}
                </div>

                {/* Foto de perfil */}
                <div className=" -mt-16 flex justify-center">
                        <img
                            src={marcoImage}
                            alt="Perfil de Marco"
                            className="relative -mb-16 w-28 h-28 rounded-full border-4 shadow-lg"
                            style={{
                                width: "112px",
                                height: "112px",
                            }}
                        />
                </div>

                {/* Contenido del perfil */}
                <div className="mt-16 p-6 text-center ">
                    <h1 className="text-2xl font-bold text-black">
                        <span>MARCO ANTONIO SALINAS SOLIS</span>
                    </h1>
                    <p className="text-gray-600 mt-2">Desarrollador web</p>

                    {/* Iconos y fecha */}
                    <div className="mt-4 flex justify-center space-x-4 text-sm text-gray-500">
                        {/* Estado */}
                        <span className="flex items-center space-x-1">
                            <FontAwesomeIcon icon={faCircleCheck} className="text-gray-500" />
                            <span>Disponible</span>
                        </span>
                        {/* Fecha de unión */}
                        <span className="flex items-center space-x-1">
                            <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
                            <span>Unido en Nov 2023</span>
                        </span>
                        {/* Cumpleaños */}
                        <span className="flex items-center space-x-1">
                            <FontAwesomeIcon icon={faCakeCandles} className="text-gray-500" />
                            <span>Cumpleaños: 23 Octubre</span>
                        </span>
                    </div>

                    {/* Botón de interacción */}
                    <div className="mt-4">
                        <button className="bg-red-800 text-white py-2 px-6 rounded-full font-medium hover:bg-red-700 shadow-lg">
                            Seguir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialProfile;
