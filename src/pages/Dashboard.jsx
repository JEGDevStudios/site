import { Link } from "react-router-dom";
import iconLogo from "@/assets/img/logo/logo-bg-transparent.webp";
import imgDevWeb from "@/assets/img/img/index/img-services/Desarrollo-web-min.webp";
import imgDevSoft from "@/assets/img/img/index/img-services/desarrollo-software-min.webp";
import imgDevMob from "@/assets/img/img/index/img-services/desarrollo-movil-min.webp";
import imgDevGame from "@/assets/img/img/index/img-services/desarrollo-videojuegos-min.webp";
import CardServices from "@/components/cardServices";

function Dashboard() {
  return (
    <>
      <section
        className="d-flex flex-md-row flex-column vh-100 p-0 m-0 __imageBackground"
      >
        <article className="d-flex flex-column justify-content-center aling-items-center bg-transparent w-100 h-100 gap-5 p-4">
          <div className="d-flex flex-column bg-transparent aling-items-center justify-content-start w-100">
            <h2 className="display-1 h1 text-light text-shadow">
              Impulsamos tu presencia digital con tecnología innovadora
            </h2>
            <p className="fs-1 text-light text-shadow">
              En JEG Dev Studios transformamos ideas en soluciones digitales efectivas. <br /> Diseñamos y desarrollamos sitios web.
            </p>
          </div>
          <div className="d-flex bg-transparent aling-items-center justify-content-start w-100 gap-5">
            <Link
              className="btn btn-light d-flex justify-content-center align-items-center p-3"
              to="/services"
              style={{ width: "10rem" }}
            >
              Ver Nuestros Servicios
            </Link>

            <Link
              className="btn btn-light d-flex justify-content-center align-items-center p-3"
              to="/contact"
              style={{ width: "10rem" }}
            >
              Solicita una consulta
            </Link>
          </div>
        </article>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center w-100 p-5 m-0">
        <div className="d-flex justify-content-center w-100 p-0 m-0">
          <h2>Sobre lo que hacemos</h2>
        </div>
        <div className="d-flex flex-column text-center justify-content-center w-100 p-0 m-0">
          <h2>Transformamos ideas en experiencias digitales</h2>
          <p>En <strong>JEG Dev Studios</strong> convertimos tus ideas en proyectos reales. Nuestro equipo desarrolla soluciones digitales personalizadas que incluyen <strong>sitios web profesionales</strong>, <strong>aplicaciones móviles</strong>, <strong>software de escritorio</strong> y <strong>videojuegos</strong>.</p>

          <p className="w-100">
            En JEG Dev Studios nos encargamos de traer a la realidad tus ideas
            mediante soluciones tecnologicas por eso nos dedicamos al desarrollo
            de sitios web, creacion de aplicaciones moviles y de escritorio
          </p>
        </div>
        <div className="d-flex justify-content-center text-center w-100">
          <h2>consulta mas sobre nuestros servicios aquí</h2>
        </div>
        <ul className="row row-cols-1 row-cols-sm-3 row-cols-md-5 justify-content-center align-items-center w-100 gap-5 p-0 m-0">
          <CardServices
            imageUrl={imgDevWeb}
            title="Desarrollo de sitios web"
            url="/saber-mas/web-dev"
          />
          <CardServices
            imageUrl={imgDevSoft}
            title="Desarrollo de software"
            url="/saber-mas/soft-dev"
          />
          <CardServices
            imageUrl={imgDevMob}
            title="Desarrollo de aplicaciones"
            url="/saber-mas/app-dev"
          />
          <CardServices
            imageUrl={imgDevGame}
            title="Desarrollo de videojuegos"
            url="/saber-mas/games-dev"
          />
        </ul>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center vh-100 text-center w-100 p-5 m-0">
        <h2>¿Por qué elegirnos?</h2>
        <ul className="d-flex flex-wrap justify-content-center align-items-center w-100 gap-2 p-0 m-0">
          <li><p className="fs-2">🏆 +10 años de experiencia combinada</p></li>
          <li><p className="fs-2">💡 Soluciones personalizadas a tu negocio</p></li>
          <li><p className="fs-2">🤝 Acompañamiento y soporte</p></li>
          <li><p className="fs-2">📱 Diseño 100% adaptado a móviles</p></li>
        </ul>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center vh-100 text-center w-100 p-5 m-0">
        <h2>¿Tienes un proyecto? Hablemos</h2>
        <p>Te ofrecemos una <strong>consulta gratuita</strong> donde analizamos tu idea y te damos una guía clara con presupuesto incluido.</p>
        <div className="d-flex justify-content-center p-2">
          <img
            className="img-fluid"
            style={{ width: "16rem" }}
            src={iconLogo}
            alt="logo de la empresa"
            loading="lazy"
          />
        </div>
        <div className="d-flex justify-content-center w-100 pt-2 pb-2">
          <Link className="btn btn-dark" to="/contact">
            Consulta gratuita
          </Link>
        </div>
        <p>Solicita tu consulta gratis ahora</p>
      </section>
    </>
  );
}

export default Dashboard;
