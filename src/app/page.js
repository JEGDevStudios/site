import Link from 'next/link';
import Image from 'next/image'; // Importar el componente Image
import CardServices from "../components/cardServices";
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué incluye el servicio de desarrollo web de JEG Dev Studios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Incluye la creación de sitios web modernos, funcionales y personalizados según tus necesidades, utilizando tecnologías avanzadas como HTML, CSS, JavaScript, React, Tailwind CSS, Astro, Node.js y Express.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Ofrecen sitios web responsivos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, todos nuestros paquetes incluyen diseño responsivo, adaptado a dispositivos móviles, tabletas y computadoras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tecnologías utilizan en el desarrollo web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utilizamos tecnologías modernas como React, Tailwind CSS, Astro, Node.js y Express para desarrollar sitios web rápidos, escalables y eficientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué diferencia hay entre sus paquetes de servicios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada paquete varía según el número de páginas, el nivel de personalización, integración de funcionalidades (como formularios avanzados, galerías multimedia, blog, SEO, etc.), y tecnologías aplicadas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tan rápido pueden entregar un sitio web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dependiendo del paquete elegido, el tiempo de entrega puede variar entre 1 a 4 semanas.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <section className="d-flex flex-md-row flex-column vh-100 p-0 m-0">
        <article className="d-flex flex-column justify-content-center aling-items-center w-100 h-100 p-4">
          <div className="d-flex text-center w-100">
            <h2 className="display-1 h1">
              Innovando en desarrollo web y videojuegos
            </h2>
          </div>
          <div className="d-flex aling-items-center justify-content-center w-100 gap-5">
            <Link
              className="btn btn-dark d-flex justify-content-center align-items-center p-3"
              href="/about"
              style={{ width: "12rem" }}
            >
              Conócenos
            </Link>

            <Link
              className="btn btn-dark d-flex justify-content-center align-items-center p-3"
              href="/services"
              style={{ width: "12rem" }}
            >
              Nuestros Servicios
            </Link>

            <Link
              className="btn btn-dark d-flex justify-content-center align-items-center p-3"
              href="/contact"
              style={{ width: "12rem" }}
            >
              Contacto
            </Link>
          </div>
        </article>
        <aside className="d-flex w-100 h-100 overflow-hidden">
          <Image
            className="d-flex w-100 img-fluid"
            src="/img/fondos/background.webp" // Ruta pública correcta
            alt="Computadora con código de programación" // Alt text más conciso
            style={{ height: "auto" }}
            width={1}
            height={1}
            priority // Considera marcar como priority si es la imagen principal (LCP)
          />
        </aside>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center w-100 p-5 m-0">
        <div className="d-flex justify-content-center w-100 p-0 m-0">
          <h1>Sobre lo que hacemos</h1>
        </div>
        <div className="d-flex text-center justify-content-center w-100 p-0 m-0">
          <p className="w-100">
            En JEG Dev Studios nos encargamos de traer a la realidad tus ideas
            mediante soluciones tecnologicas por eso nos dedicamos al desarrollo
            de sitios web, creacion de aplicaciones moviles y de escritorio
          </p>
        </div>
        <div className="d-flex justify-content-center text-center w-100">
          <h2>consulta mas de nuestros servicios aqui</h2>
        </div>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-center w-100 gap-5 p-0 m-0">
          <CardServices
            imageUrl="/img/img-services/Desarrollo-web-min.webp" // Ruta pública directa
            title="Desarrollo Web"
            url="/saber-mas/web-dev"
          />
          <CardServices
            imageUrl="/img/img-services/desarrollo-software-min.webp" // Ruta pública directa
            title="Desarrollo de software"
            url="/saber-mas/soft-dev"
          />
          <CardServices
            imageUrl="/img/img-services/desarrollo-movil-min.webp" // Ruta pública directa
            title="Desarrollo de aplicaciones"
            url="/saber-mas/app-dev"
          />
          <CardServices
            imageUrl="/img/img-services/desarrollo-videojuegos-min.webp" // Ruta pública directa
            title="Desarrollo de videojuegos"
            url="/saber-mas/games-dev"
          />
        </ul>
      </section>
      <section className="d-flex flex-column justify-content-center aling-items-center vh-100 text-center w-100 p-5 m-0">
        <h2>Obten una consulta gratuita</h2>
        <h3>te orientamos y te guiamos</h3>
        <h4>creamos un presupuesto para tu proyecto</h4>
        <div className="d-flex justify-content-center p-2">
          <Image
            className="img-fluid"
            style={{ width: "16rem" }}
            src="/img/logo/logoredondogris.webp"
            alt="logo de la empresa"
            width={256}
            height={256}
          />
        </div>
        <div className="d-flex justify-content-center w-100 pt-2 pb-2">
          <Link className="btn btn-dark" href="/contact">
            Consulta gratuita
          </Link>
        </div>
        <p>Accede aqui para obtener tu consulta gratuita</p>
      </section>
    </>
  );
}
