function Footer (){
    return (
        <footer className="d-flex flex-column justify-content-center aling-items-center bg-white text-black text-center w-100 p-3">
            <div className="d-flex flex-column justify-content-center aling-items-center text-center w-100 p-0 m-0">
                <h2>Siguenos</h2>
                <div class="d-flex flex-wrap justify-content-center align-items-center w-100 p-0 mb-3 gap-3">
                    <a class="d-flex fs-1 text-decoration-none text-black icon-facebook __icons-color" href="https://www.facebook.com/JEGDevStudios" target="_blank" rel="noopener noreferrer" title="Enlace a página de facebook" aria-label="Enlace a página de facebook" tabIndex={0}></a>

                    <a class="d-flex fs-1 text-decoration-none text-black icon-instagram __icons-color" href="https://instagram.com/jegdevstudios/" target="_blank" rel="noopener noreferrer" title="Enlace a página deInstagram" aria-label="Enlace a página de Instagram" tabIndex={0}>
                    </a>

                    <a class="d-flex fs-1 text-decoration-none text-black icon-linkedin-no-bg __icons-color" href="https://linkedin.com/company/jegdevstudios"></a>

                    <a class="d-flex fs-1 text-decoration-none text-black icon-github __icons-color" href="https://github.com/JEGDevStudios"></a>
                </div>
            </div>
            <p className="d-flex justify-content-center w-100">&copy; {new Date().getFullYear()} JEG Dev Studios. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;