import logo from '../assets/marco.png';

export const AcmeLogo = () => (
    <div className="relative inline-block">
        {/* Imagen del logo */}
        <img 
            src={logo} 
            alt="Acme Logo" 
            width="40" 
            className="rounded-full border-2 border-red-800"
        />
        {/* Punto indicador */}
        <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 rounded-full"></span>
    </div>
);
