import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";

function CardServices({ imageUrl, title, url }) {
  return (
    <li className="card d-block" style={{ width: "18rem" }}>
      <Image
        src={imageUrl}
        className="card-img-top"
        alt="imagen de la tarjeta"
        width={292}
        height={292}
        style={{ height: 'auto' }}
      />
      <div className="card-body d-flex flex-column ">
        <h3 className="h5 card-title text-center">{title}</h3>
        <Link href={url} className="btn btn-dark">
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
