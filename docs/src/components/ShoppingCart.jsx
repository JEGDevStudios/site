import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import imgIconCart from "@/assets/icons/carrito.png";

function ShoppingCart({ items, onRemove, onOpenOrderForm, setOrderNumber }) {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = items.reduce((sum, item) => {
      const price = parseFloat(item.dataPrice);
      if (!isNaN(price)) {
        return sum + price;
      }
      return sum;
    }, 0);
    setTotalPrice(total.toFixed(2));
  }, [items]);

  const toggleCartVisibility = () => {
    setIsCartVisible(true);
  };

  const closeCart = () => {
    setIsCartVisible(false);
  };

  const createNumberOrder = async () => {
    try {
      const response = await fetch(
        "https://jegdevstudios.onrender.com/generate-order-number"
      );

      const data = await response.json();

      if (response.ok) {
        setOrderNumber(data.orderNumber);
      } else {
        alert("Hubo un error al generar el número de orden");
      }
    } catch (error) {
      console.error(error);
      alert("Hubo un error al solicitar el número de orden.");
    }
  };

  return (
    <>
      {!isCartVisible && (
        <button
          className="position-fixed bottom-0 end-0 btn btn-light border border-2 rounded-circle z-3"
          id="carrito"
          style={{ width: "4rem", height: "4rem" }}
          onClick={toggleCartVisibility}
        >
          <img
            className="img-fluid"
            src={imgIconCart}
            alt="carrito de compras"
          />
        </button>
      )}
      <div
        className="flex-column align-items-center position-fixed bottom-0 end-0 shopping-cart bg-light border border-2 rounded rounded-3 z-3"
        id="listCartShopping"
        style={{
          display: isCartVisible ? "flex" : "none",
          width: "18rem",
          height: "27rem",
        }}
      >
        <div className="d-flex w-100 gap-5 p-2 m-0 justify-content-center position-relative">
          <h2 className="text-center">Shopping Cart</h2>
          <button
            className="btn btn-dark text-light position-absolute top-0 end-0"
            onClick={closeCart}
          >
            X
          </button>
        </div>
        {items.length === 0 ? (
          <p className="text-center w-100 h-100">
            No hay productos en el carrito.
          </p>
        ) : (
          <ul className="d-flex flex-column align-items-center justify-content-start w-100 h-100 ps-4 pe-4 overflow-auto">
            {items.map((item, index) => (
              <li
                className="d-flex justify-content-between align-items-center gap-2 w-100"
                key={index}
              >
                <div className="d-flex flex-column">
                  <h5>{item.title}</h5>
                  <p>
                    Precio:{" "}
                    {item.dataPrice !== null &&
                    item.dataPrice !== undefined &&
                    item.dataPrice !== ""
                      ? new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(item.dataPrice)
                      : "Precio no disponible"}
                  </p>
                </div>
                <button
                  onClick={() => onRemove(index)}
                  className="d-flex justify-content-center align-items-center p-0 m-0 btn btn-danger rounded rounded-4"
                  style={{ width: "2rem", height: "2rem" }}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="d-flex justify-content-between align-items-center w-100 p-2 m-0 position-relative">
          <div className="d-flex justify-content-start align-items-center">
            Total: ${totalPrice}
          </div>
          <button
            className="btn btn-dark"
            onClick={() => {
              closeCart(); // Cerrar el carrito
              createNumberOrder(); // Crear número de orden
              onOpenOrderForm(); // Abrir el formulario
            }}
          >
            Realizar pedido
          </button>
        </div>
      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      moneda: PropTypes.string,
      dataPrice: PropTypes.number,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
  onOpenOrderForm: PropTypes.func.isRequired,
  setOrderNumber: PropTypes.func.isRequired,
};

export default ShoppingCart;
