import PropTypes from 'prop-types';

function CardProduct ({ title, text, price, moneda, imageUrl}) {
    return (
        <li className="card d-block w-100">
            <img src={imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <p className='card-text'>{price}<span> {moneda}</span></p>
                <a className="btn btn-dark">
                Add +
                </a>
            </div>
        </li>

    );
}

// Validación de props
CardProduct.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    moneda: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
};

export default CardProduct;