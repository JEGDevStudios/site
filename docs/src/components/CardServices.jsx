import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardServices({ imageUrl, title, url }) {
  return (
    <li className="card d-block" style={{ Width: "18rem" }}>
      <img src={imageUrl} className="card-img-top" alt="imagen de la tarjeta" />
      <div className="card-body d-flex flex-column ">
        <h3 className="h5 card-title text-center">{title}</h3>
        <Link to={url} className="btn btn-dark">
          ver más
        </Link>
      </div>
    </li>
  );
}

// Validación de props
CardServices.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CardServices;
