import { useState, useEffect } from "react";
import "@/index.css";
import ShoppingCart from "@/components/ShoppingCart";
import CardProduct from "@/components/CardProduct";
import OrderForm from "@/components/OrderForm";
import imgProduct1 from '@/assets/img/img/services/img-products/dev-web/pack-1/imagen-muestra-de-pagina-web.webp';
import imgProduct2 from '@/assets/img/img/services/img-products/dev-web/pack-2/imagen-muestra-de-pagina-web.webp';
import imgProduct3 from '@/assets/img/img/services/img-products/dev-web/pack-3/imagen-muestra-de-pagina-web.webp';
import imgProduct4 from '@/assets/img/img/services/img-products/dev-web/pack-4/imagen-muestra-de-pagina-web.webp';
import imgProduct5 from '@/assets/img/img/services/img-products/dev-web/pack-5/imagen-muestra-de-pagina-web.webp';

function Services () {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = ({ title, moneda, dataPrice}) => {
    console.log("Producto agregado:");
    console.log("Titulo:", title);
    console.log("Moneda:", moneda);
    console.log("Precio:", parseFloat(dataPrice));
    setCartItems((prevItems) => [...prevItems, { title, moneda, dataPrice: parseFloat(dataPrice)}]);
  };

  const handleRemoveProduct = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };
  const [orderNumber, setOrderNumber] = useState("");
  
  const [isFormVisible, setIsFormVisible] = useState(false);

  const openOrderForm = () => {
    setIsFormVisible(true);
  };

  const closeOrderForm = () => {
    setIsFormVisible(false);
  };

  const handleSunmitOrder = (orderData) => {
    console.log("Pedido enviado:", orderData);
  };

  return (
    <>
      {isFormVisible && (
        <OrderForm
          onClose={closeOrderForm}
          onSibmit={handleSunmitOrder}
          orderNumber={orderNumber}
        />
      )}
      <ShoppingCart
        items={cartItems} 
        onRemove={handleRemoveProduct}
        onOpenOrderForm={openOrderForm}
        setOrderNumber={setOrderNumber}
      />
      <section className="d-flex flex-column w-100 p-5 overflow-x-auto">
        <div className="d-flex justify-content-center pt-5">
          <h1 className="display-1">Desarrollo de sitios web</h1>
        </div>
        <div className="d-flex flex-md-row flex-column justify-content-start h-100 gap-5">
          <article className="d-flex text-start flex-column w-100">
            <h2>Paquetes de diseño web</h2>
            <p>
              Creamos y desarrollamos tu página web desde cero para que te
              inicies en el mundo del comercio digital. Desde una landing page
              hasta un e-commerce, diseñamos y construimos tu portafolio web,
              sitio para negocios, tiendas en línea, blogs y mucho más.
              Ofrecemos soluciones personalizadas que se adaptan a tus
              necesidades específicas, garantizando una presencia en línea
              efectiva y profesional.
            </p>
            <h2>Lenguajes, frameworks y bibliotecas normalmente utilizados</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Boostrap</li>
            </ul>
          </article>
          <aside className="d-flex justify-content-center align-items-center flex-column w-100">
            <div id="carouselExampleRide" className="carousel slide" style={{ width: "25rem"}} data-bs-ride="true">
              <ul className="carousel-inner list-unstyled">
                <li className="carousel-item active">
                  <CardProduct
                    dataPrice={300}
                    title="Paquete 1: Inicio Digital"
                    text="Este paquete es ideal para pequeñas empresas o emprendedores que buscan una presencia en línea sencilla y efectiva. Incluye una página única con diseño responsivo y funcionalidades básicas para comenzar en el mundo digital."
                    price="$300 - $600"
                    moneda="USD"
                    imageUrl={imgProduct1}
                    onAdd={handleAddToCart}
                  />
                </li>
                <li className="carousel-item">
                  <CardProduct
                    dataPrice={600}
                    title="Paquete 2: Presencia Esencial"
                    text="Diseñado para negocios que necesitan un sitio web más completo, este paquete incluye hasta 3 páginas con un diseño profesional y responsivo. Perfecto para empresas que desean mostrar su información básica y servicios."
                    price="$600 - $900"
                    moneda="USD"
                    imageUrl={imgProduct2}
                    onAdd={handleAddToCart}
                  />
                </li>
                <li className="carousel-item">
                  <CardProduct
                    dataPrice={1000}
                    title="Paquete 3: Impacto Avanzado"
                    text="Para empresas que buscan destacarse, este paquete ofrece hasta 5 páginas con un diseño altamente personalizable, animaciones CSS y una galería de imágenes. Es ideal para quienes desean una presencia web más robusta y dinámica."
                    price="$1000 - $1500"
                    moneda="USD"
                    imageUrl={imgProduct3}
                    onAdd={handleAddToCart}
                  />
                </li>
                <li className="carousel-item">
                  <CardProduct
                    dataPrice={2000}
                    title="Paquete 4: Solución Profesional"
                    text="Este paquete está pensado para negocios establecidos que necesitan una solución web completa y profesional. Incluye hasta 10 páginas con funcionalidades avanzadas como formularios personalizados y optimización SEO."
                    price="$2000 - $3000"
                    moneda="USD"
                    imageUrl={imgProduct4}
                    onAdd={handleAddToCart}
                  />
                </li>
                <li className="carousel-item">
                  <CardProduct
                    dataPrice={4000}
                    title="Paquete 5: Experiencia Premium"
                    text="El paquete más completo, diseñado para grandes empresas o proyectos ambiciosos. Ofrece páginas ilimitadas, diseño totalmente a medida, integraciones avanzadas y una experiencia de usuario excepcional."
                    price="$4000 - $6000"
                    moneda="USD"
                    imageUrl={imgProduct5}
                    onAdd={handleAddToCart}
                  />
                </li>
              </ul>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon bg-dark rounded" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleRide"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon bg-dark rounded" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Services;
