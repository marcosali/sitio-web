import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faGithub, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Example() {
    return (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
            {/* Fondo decorativo */}
            <div
                aria-hidden="true"
                className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
                    }}
                    className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#696969] to-[#000000] opacity-30"
                />
            </div>
            {/* Contenido principal */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <p className="text-sm/6 text-gray-100">Disponible para trabajar</p>
                <a
                    href="#"
                    className="flex-none rounded-full bg-blue-600 px-3.5 py-1 text-sm font-semibold text-gray-900 shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-100"
                >
                    LinkedIn <span aria-hidden="true">&rarr;</span>
                </a>
            </div>
            {/* Botón de cerrar */}
            <div className="flex flex-1 justify-end">
                <button type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
                    <span className="sr-only">Dismiss</span>
                </button>
            </div>
            {/* Íconos de redes sociales (ocultos en teléfonos) */}
            <div className="hidden sm:flex absolute top-2 right-2 space-x-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-gray-100 hover:text-pink-500 w-4 h-4" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className="text-gray-100 hover:text-blue-400 w-4 h-4" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-100 hover:text-gray-500 w-4 h-4" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} className="text-gray-100 hover:text-black w-4 h-4" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="text-gray-100 hover:text-blue-600 w-4 h-4" />
                </a>
            </div>
        </div>
    );
}
