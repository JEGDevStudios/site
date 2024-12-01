import PropTypes from "prop-types";

function CardProduct({ dataPrice, title, text, price, moneda, imageUrl, onAdd }) {
  const handleAddToCart = () => {
    onAdd({ title, moneda, dataPrice});
  };

  return (
    <div className="card d-block w-100" data-price={dataPrice}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="d-flex flex-column">
          <p className="card-text">
            {price}
            <span> {moneda}</span>
          </p>
          <button
            className="btn btn-dark"
            onClick={handleAddToCart}
          >
            Añadir +
          </button>
        </div>
      </div>
    </div>
  );
}

// Validación de props
CardProduct.propTypes = {
  dataPrice: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  moneda: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default CardProduct;