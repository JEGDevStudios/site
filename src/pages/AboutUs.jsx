import ButtonsSocial from '@/components/ButtonsSocial';

function AboutUs () {
    return (
        <>
            <section className='d-flex flex-column bg-black justify-content-center aling-items-center w-100  p-xl-5 p-3 mt-5'>
                <h1 className='text-white'>Sobre Nosotros</h1>
                <p className='text-white'>Transformando ideas en experiencias digitales inolvidables</p>
            </section>
            <section className='d-flex flex-column w-100 p-xl-5 p-3'>
                <article className="d-flex flex-column w-100 p-0 m-0">
                    <h2>Nuestra Historia</h2>
                    <p>
                    JEG Dev Studios nació de la pasión por la tecnología y la creatividad.
                    Fundada por Jhonatan Espinal García en 2024, la misión es transformar
                    ideas en experiencias digitales inolvidables. Estamos en nuestros
                    humildes comienzos, creciendo y evolucionado, con el proposito de
                    convertirnos en un equipo de desarrolladores y diseñadores dedicados a
                    ofrecer soluciones innovadoras en el desarrollo de videojuegos,
                    páginas web, aplicaciones de escritorio y móviles.
                    </p>
                </article>
                <article className="d-flex flex-column w-100 p-0 m-0">
                    <h2>Misión y Visión</h2>
                    <p>
                    <strong>Misión:</strong> En JEG Dev Studios, nuestra misión es
                    impulsar la innovación tecnológica creando productos digitales que
                    superen las expectativas de nuestros clientes. Nos esforzamos por
                    ofrecer calidad, creatividad y un servicio excepcional en cada
                    proyecto.
                    </p>
                    <p>
                    <strong>Visión:</strong> Nuestra visión es ser reconocidos como
                    líderes en el sector del desarrollo digital, proporcionando soluciones
                    integrales y creativas que ayuden a nuestros clientes a alcanzar sus
                    objetivos y a destacar en un mercado competitivo.
                    </p>
                </article>
                <article className="d-flex flex-column w-100 p-0 m-0">
                    <h2>Nuestra Ideologia</h2>
                    <p>
                    <strong>JEG:</strong> Jumpstart Every Goal - Impulsa cada objetivo
                    </p>
                    <p>
                    Nuestro compromiso es impulsar y alcanzar cada meta tecnológica con
                    excelencia y creatividad. Con una amplia gama de servicios, desde
                    soluciones empresariales hasta entretenimiento interactivo, estamos
                    aquí para transformar tus ideas en realidades innovadoras.
                    </p>
                </article>
                <article className="d-flex flex-column w-100 p-0 m-0">
                    <h2>Nuestros Valores</h2>
                    <ul>
                        <li>
                            <strong>Innovación:</strong> Creemos en la capacidad de la
                            tecnología para cambiar el mundo. Estamos comprometidos a
                            mantenernos a la vanguardia de las tendencias y tecnologías
                            emergentes.
                        </li>
                        <li>
                            <strong>Calidad:</strong> La excelencia es nuestra norma. Nos
                            aseguramos de que cada producto que entregamos sea de la más alta
                            calidad.
                        </li>
                        <li>
                            <strong>Compromiso:</strong> Nos dedicamos a cumplir con las
                            necesidades y expectativas de nuestros clientes, trabajando juntos
                            para lograr sus metas.
                        </li>
                        <li>
                            <strong>Creatividad:</strong> Fomentamos un entorno donde las ideas
                            innovadoras pueden florecer y transformarse en soluciones efectivas.
                        </li>
                    </ul>
                </article>
                <article className="d-flex flex-column w-100 p-0 m-0">
                    <h2>Nuestro Equipo</h2>
                    <p>
                    En JEG Dev Studios, contamos con un equipo diverso y talentoso de
                    desarrolladores, diseñadores y estrategas, todos apasionados por la
                    tecnología y el desarrollo digital. Cada miembro del equipo aporta su
                    experiencia y habilidades únicas, trabajando en conjunto para crear
                    productos excepcionales.
                    </p>
                    <p>
                    <strong>Jhonatan Espinal García</strong> - Fundador, CEO y
                    Desarrollador
                    <br />
                    Con una visión clara y una pasión por la tecnología, Jhonatan lidera
                    JEG Dev Studios con dedicación y creatividad. Su experiencia en
                    desarrollo de software y su enfoque en la innovación son la base de
                    nuestro éxito.
                    </p>
                </article>
                <article className="d-flex flex-column w-100 p-0 m-0">
                    <h2>Nuestros Servicios</h2>
                    <ul>
                        <li>
                            <strong>Desarrollo Web:</strong> Diseñamos y desarrollamos sitios
                            web responsivos y funcionales que destacan en el entorno digital.
                        </li>
                        <li>
                            <strong>Aplicaciones de Escritorio:</strong> Desarrollamos
                            aplicaciones de escritorio personalizadas que mejoran la
                            productividad y eficiencia de nuestros clientes.
                        </li>
                        <li>
                            <strong>Aplicaciones Móviles:</strong> Creamos aplicaciones móviles
                            intuitivas y funcionales para Android e iOS, diseñadas para ofrecer
                            una excelente experiencia de usuario y satisfacer las necesidades de
                            nuestros clientes.
                        </li>
                        <li>
                            <strong>Desarrollo de Videojuegos:</strong> Creamos experiencias de
                            juego envolventes para diversas plataformas, desde móviles hasta
                            consolas.
                        </li>
                    </ul>
                </article>
                <article className="d-flex flex-column w-100 p-0 m-0">
                    <h2>Contáctanos</h2>
                    <p>
                        ¿Listo para llevar tu proyecto al siguiente nivel? Ponte en contacto con nosotros hoy mismo.
                    </p>
                    <p>
                        <strong>
                            Teléfono:
                        </strong>
                        +52 5654320986
                        <br />
                        <strong>
                            Correo Electrónico:
                        </strong>
                        jegdevstudios@outlook.com
                    </p>
                    <p>
                        Síguenos en nuestras redes sociales para estar al tanto de nuestras últimas novedades y proyectos:
                    </p>
                    <div className='d-flex justify-content-left aling-items-center gap-4'>
                        <ButtonsSocial
                            tamaño = {{width: "4rem"}}
                        />
                    </div>
                </article>
            </section>
        </>
    );
};

export default AboutUs;