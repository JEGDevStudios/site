import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function CardServices({ imageUrl, title, url }) {
  return (
    <li className="card d-block p-0" style={{ width: "18rem" }}>
      <div style={{ width: "100%", aspectRatio: "1 / 1", overflow: "hidden" }}>
        <img
          src={imageUrl}
          className="card-img-top"
          alt="imagen de la tarjeta"
          loading="lazy"
          width={1024}
          height={1024}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
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
