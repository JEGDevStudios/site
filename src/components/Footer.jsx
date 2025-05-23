function Footer (){
    return (
        <footer className="d-flex flex-column justify-content-center aling-items-center bg-white text-black text-center w-100 p-3">
            <div className="d-flex flex-column justify-content-center aling-items-center text-center w-100 p-0 m-0">
                <h2>Siguenos</h2>
                <div class="d-flex flex-wrap justify-content-center align-items-center w-100 p-0 m-0 gap-3">
                    <a class="d-flex text-black" href="https://www.facebook.com/JEGDevStudios" target="_blank" rel="noopener noreferrer" title="Enlace a página de facebook" aria-label="Enlace a página de facebook" tabIndex={0}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path></svg>
                    </a>
                    <a class="d-flex text-black" href="https://instagram.com/jegdevstudios/" target="_blank" rel="noopener noreferrer" title="Enlace a página deInstagram" aria-label="Enlace a página de Instagram" tabIndex={0}>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M16.5 7.5l0 .01"></path></svg>
                    </a>
                    <a class="url-social text-black d-none" href="#">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>
                    </a>
                    <a class="url-social text-black d-none" href="#">
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-youtube"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-12a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-9 6v6a1 1 0 0 0 1.514 .857l5 -3a1 1 0 0 0 0 -1.714l-5 -3a1 1 0 0 0 -1.514 .857z"></path></svg>
                    </a>
                </div>
            </div>
            <p className="d-flex justify-content-center w-100 m-0">&copy; {new Date().getFullYear()} JEG Dev Studios. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;