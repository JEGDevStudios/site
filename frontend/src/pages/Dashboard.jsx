import { Link } from "react-router-dom";
import iconLogo from "@/assets/img//logo/logoredondogris.webp";
import imgBackgraund from "@/assets/img/img/index/fondos/backgraund.webp";
import imgDevWeb from "@/assets/img/img/index/img-services/Desarrollo-web-min.webp";
import imgDevSoft from "@/assets/img/img/index/img-services/desarrollo-software-min.webp";
import imgDevMob from "@/assets/img/img/index/img-services/desarrollo-movil-min.webp";
import imgDevGame from "@/assets/img/img/index/img-services/desarrollo-videojuegos-min.webp";
import CardServices from "@/components/cardServices";

function Dashboard() {
  return (
    <>
      <section className="d-flex h-100 p-0 m-0">
        <article className="d-flex flex-column justify-content-center aling-items-center w-100">
          <div className="d-flex text-center w-100">
            <h1 className="display-1">
              Innovando en desarrollo web y videojuegos
            </h1>
          </div>
          <div className="d-flex aling-items-center justify-content-center w-100 gap-5">
            <Link className="btn btn-dark" to="/Aboutus">
              Conócenos
            </Link>

            <Link className="btn btn-dark" to="/Services">
              Nuestros Servicios
            </Link>

            <Link className="btn btn-dark" to="Contact">
              Contacto
            </Link>
          </div>
        </article>
        <aside className="w-100">
          <img
            className="img-fluid"
            src={imgBackgraund}
            alt="imagen de computadora con un programa para desarrolladores habierto con codigo de programacion"
          />
        </aside>
      </section>
      <section className="d-flex flex-column p-5 m-0">
        <div className="d-flex justify-content-center w-100">
            <h1>Sobre lo que hacemos</h1>
        </div>
        <div className="row text-center justify-content-center w-100">
            <p className="row w-100">En JEG Dev Studios nos encargamos de traer a la
            realidad tus ideas mediante soluciones tecnologicas por eso nos
            dedicamos al desarrollo de sitios web, creacion de aplicaciones
            moviles y de escritorio
            </p>
        </div>
        <div className="d-flex justify-content-center w-100">
            <h2>consulta mas de nuestros servicios aqui</h2>
        </div>
        <ul className="d-flex justify-content-center w-100 gap-5">
            <CardServices
                imageUrl={imgDevWeb}
                title="Desarrollo Web"
                url="/saber-mas/WebDev"
            />
            <CardServices
                imageUrl={imgDevSoft}
                title="Desarrollo de software"
                url="/saber-mas/SoftDev"
            />
            <CardServices
                imageUrl={imgDevMob}
                title="Desarrollo de aplicaciones"
                url="/saber-mas/AppDev"
            />
            <CardServices
                imageUrl={imgDevGame}
                title="Desarrollo de videojuegos"
                url="/saber-mas/GamesDev"
            />
        </ul>
      </section>
      <section className="d-flex flex-column justify-content-center aling-items-center text-center w-100 p-5 m-0">
        <h2>Obten una consulta gratuita</h2>
        <h3>te orientamos y te guiamos</h3>
        <h4>creamos un presupuesto para tu proyecto</h4>
        <div className="d-flex justify-content-center p-2">
            <img className="img-fluid"  style={{width: "16rem"}} src={iconLogo} alt="logo de la empresa"/>
        </div>
        <div className="d-flex justify-content-center w-100 pt-2 pb-2">
            <Link className="btn btn-dark"  to="/Contact">Consulta gratuita</Link>
        </div>
        <p>Accede aqui para obtener tu consulta gratuita</p>
      </section>
    </>
  );
}

export default Dashboard;