import "@/styles/services.css";
import imgIconCart from '@/assets/icons/carrito.png';
import imgIconClose from '@/assets/icons/icon-close.png';
import imgProduct1 from '@/assets/img/img/services/img-products/dev-web/pack-1/imagen-muestra-de-pagina-web.webp'
import imgProduct2 from '@/assets/img/img/services/img-products/dev-web/pack-2/imagen-muestra-de-pagina-web.webp'
import imgProduct3 from '@/assets/img/img/services/img-products/dev-web/pack-3/imagen-muestra-de-pagina-web.webp'
import imgProduct4 from '@/assets/img/img/services/img-products/dev-web/pack-4/imagen-muestra-de-pagina-web.webp'
import imgProduct5 from '@/assets/img/img/services/img-products/dev-web/pack-5/imagen-muestra-de-pagina-web.webp'
import CardProduct from "../components/cardProduct";

function Services () {
return (
    <>
      <button className="container-icon" id="carrito">
        <img
          className="icon-cart"
          src={imgIconCart}
          alt="carrito de compras"
        />
        <div className="count-products">
          <span>0</span>
        </div>
      </button>
      <div className="container-cart-products" id="listCart">
        <div className="container-title">
          <h1>Tu carrito</h1>
          <button className="icon-close" id="close-cart">
            <img src={imgIconClose} alt="carrito de compras" />
          </button>
        </div>
        <ul className="cart-list" id="cart-items" />
        <div className="total-cart-products">
          <p>
            Total: <span id="cart-total">0</span> US
          </p>
          <button id="place-order">Realizar Pedido</button>
        </div>
      </div>
      <div id="order-form-modal" style={{ display: "none" }}>
        <div className="modal-content">
          <h3>Datos del Contratante</h3>
          <label htmlFor="client-name">Nombre:</label>
          <input type="text" id="client-name" required="" />
          <label htmlFor="client-email">Correo Electrónico:</label>
          <input type="email" id="client-email" required="" />
          <label htmlFor="client-phone">Número de Contacto:</label>
          <input type="tel" id="client-phone" required="" />
          <button id="submit-order">Enviar Pedido</button>
          <button id="close-modal">Cancelar</button>
        </div>
      </div>
      <section className="d-flex flex-column w-100 p-5" style={{height: "100dvh"}}>
        <div className="d-flex justify-content-center">
          <h1 className="display-1">Desarrollo de sitios web</h1>
        </div>
        <div className="d-flex justify-content-start h-100 gap-5">
          <article className="d-flex text-start flex-column w-100">
            <h2 className="">Paquetes de diseño web</h2>
            <p>
              Creamos y desarrollamos tu página web desde cero para que te
              inicies en el mundo del comercio digital. Desde una landing page
              hasta un e-commerce, diseñamos y construimos tu portafolio web,
              sitio para negocios, tiendas en línea, blogs y mucho más.
              Ofrecemos soluciones personalizadas que se adaptan a tus
              necesidades específicas, garantizando una presencia en línea
              efectiva y profesional.
            </p>
            <h2 className="">Lenguajes, frameworks y bibliotecas normalmente utilizados</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Boostrap</li>
            </ul>
          </article>
          <aside className="d-flex justify-content-center align-items-center flex-column w-100">
            <div id="carouselExampleRide" className="carousel slide border border-dark rounded rounded-4" style={{ width: "25rem"}} data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CardProduct
                    title="Paquete 1: Inicio Digital"
                    text="Este paquete es ideal para pequeñas empresas o emprendedores que buscan una presencia en línea sencilla y efectiva. Incluye una página única con diseño responsivo y funcionalidades básicas para comenzar en el mundo digital."
                    price="$300 - $600"
                    moneda="US"
                    imageUrl={imgProduct1}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 2: Presencia Esencial"
                    text="Diseñado para negocios que necesitan un sitio web más completo, este paquete incluye hasta 3 páginas con un diseño profesional y responsivo. Perfecto para empresas que desean mostrar su información básica y servicios."
                    price="$600 - $900"
                    moneda="US"
                    imageUrl={imgProduct2}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 3: Impacto Avanzado"
                    text="Para empresas que buscan destacarse, este paquete ofrece hasta 5 páginas con un diseño altamente personalizable, animaciones CSS y una galería de imágenes. Es ideal para quienes desean una presencia web más robusta y dinámica."
                    price="$1000 - $1500"
                    moneda="US"
                    imageUrl={imgProduct3}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 4: Solución Profesional"
                    text="Este paquete está pensado para negocios establecidos que necesitan una solución web completa y profesional. Incluye hasta 10 páginas con funcionalidades avanzadas como formularios personalizados y optimización SEO."
                    price="$2000 - $3000"
                    moneda="US"
                    imageUrl={imgProduct4}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 5: Experiencia Premium"
                    text="El paquete más completo, diseñado para grandes empresas o proyectos ambiciosos. Ofrece páginas ilimitadas, diseño totalmente a medida, integraciones avanzadas y una experiencia de usuario excepcional."
                    price="$4000 - $6000"
                    moneda="US"
                    imageUrl={imgProduct5}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </aside>
        </div>
      </section>
      <section className="d-none flex-column h-100 pt-5">{/*en d-none ya que esta en desarrollo*/}
        <div className="d-flex justify-content-start h-100">
          <h1 className="display-1">Desarrollo de Aplicaciones para Windows</h1>
        </div>
        <div className="d-flex justify-content-start h-100 p-5 gap-5">
          <div className="d-flex justify-content-center align-items-center flex-column w-100">
            <div id="carouselExampleRide" className="carousel slide" style={{ width: "25rem"}} data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CardProduct
                    title="Paquete 1: Inicio Digital"
                    text="Este paquete es ideal para pequeñas empresas o emprendedores que buscan una presencia en línea sencilla y efectiva. Incluye una página única con diseño responsivo y funcionalidades básicas para comenzar en el mundo digital."
                    price="$300 - $600"
                    moneda="US"
                    imageUrl={imgProduct1}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 2: Presencia Esencial"
                    text="Diseñado para negocios que necesitan un sitio web más completo, este paquete incluye hasta 3 páginas con un diseño profesional y responsivo. Perfecto para empresas que desean mostrar su información básica y servicios."
                    price="$600 - $900"
                    moneda="US"
                    imageUrl={imgProduct2}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 3: Impacto Avanzado"
                    text="Para empresas que buscan destacarse, este paquete ofrece hasta 5 páginas con un diseño altamente personalizable, animaciones CSS y una galería de imágenes. Es ideal para quienes desean una presencia web más robusta y dinámica."
                    price="$1000 - $1500"
                    moneda="US"
                    imageUrl={imgProduct3}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 4: Solución Profesional"
                    text="Este paquete está pensado para negocios establecidos que necesitan una solución web completa y profesional. Incluye hasta 10 páginas con funcionalidades avanzadas como formularios personalizados y optimización SEO."
                    price="$2000 - $3000"
                    moneda="US"
                    imageUrl={imgProduct4}
                  />
                </div>
                <div className="carousel-item">
                  <CardProduct
                    title="Paquete 5: Experiencia Premium"
                    text="El paquete más completo, diseñado para grandes empresas o proyectos ambiciosos. Ofrece páginas ilimitadas, diseño totalmente a medida, integraciones avanzadas y una experiencia de usuario excepcional."
                    price="$4000 - $6000"
                    moneda="US"
                    imageUrl={imgProduct5}
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="d-flex text-start flex-column w-100">
            <h2 className="">Paquetes de diseño web</h2>
            <p>
            Desarrollamos y diseñamos tu aplicación para Windows
            desde cero para cubrir tus necesidades digitales. 
            Desde herramientas sencillas hasta aplicaciones 
            completas, creamos soluciones a medida para gestionar 
            inventarios, optimizar flujos de trabajo, mejorar la
             productividad y mucho más. Ofrecemos aplicaciones
              personalizadas que se adaptan perfectamente a tus
               requerimientos, garantizando funcionalidad,
                eficiencia y una experiencia de usuario profesional 
                y efectiva.
            </p>
            <h2 className="">Lenguajes, frameworks y bibliotecas normalmente utilizados</h2>
            <ul>
              <li>C</li>
              <li>C++</li>
              <li>C#</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
