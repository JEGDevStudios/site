import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg align-items-center bg-black fixed-top w-100">
                <div className="container-fluid d-flex align-items-center">
                    {/* Logo y Nombre */}
                    <Link href="/" className="navbar-brand text-light d-flex justify-content-center align-items-center text-center text-light text-decoration-none p-0">
                        <Image
                            src="/img/logo/logoredondogris.webp"
                            alt="Logo"
                            width={40}
                            height={40}
                            className="d-inline-block align-text-top p-1"
                        />
                        <h1 className="m-0 p-0 text-center fs-5">JEG Dev Studios</h1>
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
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link href="/"  className="nav-link active text-light">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/services" className="nav-link active text-light">
                                    Servicios
                                </Link>
                            </li>
                            <li className="nav-item" style={{ display: 'none' }}>
                                <Link href="/proyects" className="nav-link disabled text-light">
                                    Proyectos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about" className="nav-link active text-light">
                                    Sobre Nosotros
                                </Link>
                            </li>
                            <li className="nav-item" style={{ display: 'none' }}>
                                <Link href="/blog" className="nav-link disabled text-light">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/contact" className="nav-link active text-light">
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