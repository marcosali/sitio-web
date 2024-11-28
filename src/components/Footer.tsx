import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faGithub, faTiktok, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    // Obtener el año actual
    const currentYear = new Date().getFullYear();

    return (
        <div style={{ textAlign: 'center', padding: '20px' }} className='bg-blue-50'>
            {/* Iconos de redes sociales */}
            <div className="flex justify-center items-center space-x-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className="text-gray-600 hover:text-pink-500 w-6 h-6" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} className="text-gray-600 hover:text-blue-400 w-6 h-6" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="text-gray-600 hover:text-gray-500 w-6 h-6" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTiktok} className="text-gray-600 hover:text-black w-6 h-6" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className="text-gray-600 hover:text-blue-600 w-6 h-6" />
                </a>
            </div>

            {/* Texto de copyright con año dinámico */}
            <p className="mt-4 text-gray-600 text-sm">© {currentYear} Marco A. Salinas.</p>
        </div>
    );
};

export default Footer;
