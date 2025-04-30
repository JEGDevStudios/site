function Footer (){
    return (
        <footer className="d-flex flex-column justify-content-center aling-items-center bg-white text-black text-center w-100 p-3">
            <p className="d-flex justify-content-center w-100 m-0">&copy; {new Date().getFullYear()} JEG Dev Studios. Todos los derechos reservados.</p>
        </footer>
    );
}

export default Footer;