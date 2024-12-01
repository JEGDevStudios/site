import { useState } from "react";
import PropTypes from "prop-types";

function OrderForm({ onClose, orderNumber, items }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  
  const [orderData, setOrderData] = useState({
    orderNumber,
    name,
    email,
    contact,
    items,
  });

  const submitDB = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://jegdevstudios.onrender.com/submit-db', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
      });

      if (response.ok) {
          alert('Se ha generado su orden exitosamente');
          setOrderData({
            orderNumber: '',
            name: '',
            email: '',
            contact: '',
            items: '',
          });
      } else {
          alert('Error al generar su orden');
      }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al generar su orden');
    }
  };

  const openWhatsApp = ({ orderNumber, name, email, contact, items }) => {
    console.log("Abriendo WhatsApp con estos datos:", {
      orderNumber,
      name,
      email,
      contact,
      items,
    });
    // Crear el mensaje predefinido para WhatsApp
    let message = `Pedido Nº ${orderNumber}\n`;
    message += `Nombre: ${name}\n`;
    message += `Correo: ${email}\n`;
    message += `Contacto: ${contact}\n\nProductos en el carrito:\n`;

    // Agregar los productos al mensaje
    items.forEach((item) => {
      message += `${item.title} (Cantidad: ${item.moneda}, Precio: $${item.dataPrice})\n`;
    });

    // Codificar el mensaje para la URL de WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp de destino
    const phoneNumber = "+525654320986";

    // Construir la URL de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center" style={{ zIndex: 2 }}>
      <div className="bg-white p-4 rounded shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Formulario de Pedido</h2>
        <form >
          <div className="mb-3">
            <label htmlFor="orderNumber" className="form-label">Número de Orden</label>
            <input
              type="text"
              className="form-control"
              id="orderNumber"
              placeholder="Cargando..."
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
            <button type="onSubmit" className="btn btn-primary" onClick={() => {openWhatsApp(); submitDB();}}>
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
      title: PropTypes.string,
      moneda: PropTypes.string,
      dataPrice: PropTypes.number,
    })
  ).isRequired,
  orderNumber: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default OrderForm;
