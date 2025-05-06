import { Link } from 'react-router-dom';
import iconLogo from '../assets/img/logo/logoredondogris.webp';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg align-items-center bg-black fixed-top w-100">
                <div className="container-fluid d-flex align-items-center">
                    {/* Logo y Nombre */}
                    <Link to="/" aria-current="page" className="navbar-brand text-light d-flex justify-content-center align-items-center text-center p-0">
                        <img
                            src={iconLogo}
                            alt="Logo"
                            width={40}
                            height={40}
                            className="d-inline-block align-text-top p-1"
                            loading="lazy"
                        />
                        <h1 className='m-0 p-0 text-center fs-5'>JEG Dev Studios</h1>
                    </Link>

                    {/* Botón Hamburguesa para móviles */}
                    <button
                        className="navbar-toggler bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    {/* Menú */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto"> {/* Clave: ms-auto alinea a la derecha */}
                            <li className="nav-item ">
                                <Link to="/" className="nav-link active text-light" aria-current="page">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link active text-light">
                                    Servicios
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/proyects" className="nav-link disabled text-light" style={{ display: 'none' }}>
                                    Proyectos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active text-light">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li className="nav-item" style={{ display: 'none' }}>
                                <Link to="/blog" className="nav-link disabled text-light">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link active text-light">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
