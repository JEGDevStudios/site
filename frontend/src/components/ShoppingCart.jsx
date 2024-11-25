import { useState } from "react";
import PropTypes from "prop-types";
{/*import imgIconClose from '@/assets/icons/icon-close.png';*/}
import imgIconCart from '@/assets/icons/carrito.png';
{/**/}

function ShoppingCart({ items, onRemove }) {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(true);
  };

  const closeCart = () => {
    setIsCartVisible(false);
  };

  return (
    <>
      {!isCartVisible && (
        <button className="position-fixed bottom-0 end-0 btn btn-light border border-2 rounded-circle z-3" id="carrito" style={{width: "4rem", height: "4rem"}} onClick={toggleCartVisibility}>
          <img
            className="img-fluid"
            src={imgIconCart}
            alt="carrito de compras"
          />
          <div className="count-products">
            {/*<span>{cartItems.length}</span>*/}
          </div>
        </button>
      )}
      <div className="flex-column aling-items-center position-fixed bottom-0 end-0 shopping-cart bg-light border border-2 rounded rounded-3 z-3" id="listCartShopping" style={{display: isCartVisible ? "flex" : "none", width: "18rem", height: "27rem"}}>
        <div className="d-flex w-100 gap-5 p-2 m-0 justify-content-center position-relative">
          <h2 className="text-center">Shopping Cart</h2>
          <button className="btn btn-dark text-light position-absolute top-0 end-0" onClick={closeCart}>X</button>
        </div>
        {items.length === 0 ? (
          <p className="text-center w-100 h-100">No hay productos en el carrito.</p>
        ) : (
          <ul className="d-flex flex-column aling-items-center justify-content-center w-100 h-100 ps-4 pe-4 overflow-auto">
            {items.map((item, index) => (
              <li className="d-flex justify-content-between aling-items-center gap-2 w-100" key={index}>
                <div className="d-flex flex-column">
                  <h5>{item.title}</h5>
                  <p>
                    Precio: {item.price} {item.moneda}
                  </p>
                </div>
                <button onClick={() => onRemove(index)} className="d-flex justify-content-center aling-items-center p-0 m-0 btn btn-danger rounded rounded-4" style={{width: "2rem", height: "2rem"}}>x</button>
              </li>
            ))}
          </ul>
        )}
        <div className="d-flex justify-content-between aling-items-center w-100 p-2 m-0 position-relative">
          <div className="d-flex justify-content-start aling-items-center">
            $0.00
          </div>
          <button className="btn btn-dark" >Realizar pedido</button>
        </div>
      </div>
    </>
  );
}

// Validación de props con PropTypes
ShoppingCart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      moneda: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired
};

export default ShoppingCart;