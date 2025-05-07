import { Link } from "react-router-dom";
import iconLogo from "@/assets/img//logo/logoredondogris.webp";
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
              Innovando en desarrollo web
            </h2>
            <h3 className="text-light">
              Creamos, diseñamos y levantamos tu proyecto
            </h3>
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
            imageUrl={imgDevWeb}
            title="Desarrollo Web"
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
      <section className="d-flex flex-column justify-content-center aling-items-center vh-100 text-center w-100 p-5 m-0">
        <h2>Obten una consulta gratuita</h2>
        <h3>te orientamos y te guiamos</h3>
        <h4>creamos un presupuesto para tu proyecto</h4>
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
        <p>Accede aqui para obtener tu consulta gratuita</p>
      </section>
    </>
  );
}

export default Dashboard;
