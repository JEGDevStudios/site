import { useState } from "react";
import PropTypes from "prop-types";

function OrderForm({ onClose, onSubmit, orderNumber, items }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      orderNumber,
      name,
      email,
      contact,
      items,
    };

    // Enviar los datos al backend
    await onSubmit(orderData);

    // Luego abrir WhatsApp
    openWhatsApp(orderData);

    // Cerrar el formulario
    onClose();
  };

  const openWhatsApp = ({ orderNumber, name, email, contact, items }) => {
    // Crear el mensaje predefinido para WhatsApp
    let message = `Pedido Nº ${orderNumber}\n`;
    message += `Nombre: ${name}\n`;
    message += `Correo: ${email}\n`;
    message += `Contacto: ${contact}\n\nProductos en el carrito:\n`;

    // Agregar los productos al mensaje
    items.forEach((item) => {
      message += `${item.title} (Cantidad: ${item.moneda}, Precio: $${item.price})\n`;
    });

    // Codificar el mensaje para la URL de WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp de destino
    const phoneNumber = "+525654320986";

    // Construir la URL de WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center" style={{ zIndex: 2 }}>
      <div className="bg-white p-4 rounded shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Formulario de Pedido</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="orderNumber" className="form-label">Número de Orden</label>
            <input
              type="text"
              className="form-control"
              id="orderNumber"
              value={orderNumber}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Número de Contacto</label>
            <input
              type="tel"
              className="form-control"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Enviar Pedido
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

OrderForm.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      moneda: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  orderNumber: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default OrderForm;
