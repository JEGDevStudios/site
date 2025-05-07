import { useState } from "react";
import PropTypes from "prop-types";

function OrderForm({ onClose, onSubmit, orderNumber, items }) {
  const [name, setName] = useState("");
  const [paternalLastName, setPaternalLastName] = useState("");
  const [maternalLastName, setMaternalLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  
  const openWhatsApp = ({ orderNumber: ordNum, name: custName, email: custEmail, contact: custContact, items: orderItems }) => {
    console.log("Abriendo WhatsApp con estos datos:", {
      orderNumber: ordNum,
      name: custName,
      email: custEmail,
      contact: custContact,
      items: orderItems,
    });
    // Crear el mensaje predefinido para WhatsApp
    let message = `Pedido Nº ${ordNum}\n`;
    message += `Nombre: ${custName}\n`; // Considerar si se quiere nombre completo aquí
    message += `Correo: ${custEmail}\n`;
    message += `Contacto: ${custContact}\n\nProductos en el carrito:\n`;

    // Agregar los productos al mensaje
    orderItems.forEach((item) => {
      message += `${item.title} (Cantidad: 1, Precio: $${item.dataPrice} ${item.moneda})\n`;
    });

    // Codificar el mensaje para la URL de WhatsApp
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp de destino
    const phoneNumber = "+525654320986"; // Asegúrate que este es el número correcto

    // Construir la URL de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(url, "_blank");
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const orderPayload = {
      orderNumber,
      customerInfo: {
        firstName: name,
        paternalLastName,
        maternalLastName,
        email,
        contactNumber: contact,
      },
      orderItems: items.map(item => ({
        packageName: item.title,
        price: item.dataPrice,
        currency: item.moneda,
        quantity: 1, // Asumiendo cantidad 1 por cada ítem en el carrito
      })),
    };
    // Abrir WhatsApp antes de intentar enviar a la base de datos
    openWhatsApp({ orderNumber, name, email, contact, items });

    try {
      const response = await fetch('https://jegdevstudios.onrender.com/submit-db', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderPayload),
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
        setName("");
        setPaternalLastName("");
        setMaternalLastName("");
        setEmail("");
        setContact("");
        if (onSubmit) {
          onSubmit(orderPayload); // Notificar al padre sobre el envío exitoso
        }
        onClose(); // Cerrar el modal
      } else {
          alert('Error al generar su orden');
      }
    }
   // Missing closing brace for try block
    catch (error) {
      console.error('Error al enviar la orden:', error);
      alert('Ocurrió un error al procesar su pedido. Por favor, inténtelo de nuevo.');
    }
  };

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center" style={{ zIndex: 2 }}>
      <div className="bg-white p-4 rounded shadow-lg" style={{ width: '400px' }}>
        <h2 className="text-center mb-4">Formulario de Pedido</h2>
        <form onSubmit={handleFormSubmit}>
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
            <label htmlFor="paternalLastName" className="form-label">Apellido Paterno</label>
            <input
              type="text"
              className="form-control"
              id="paternalLastName"
              value={paternalLastName}
              onChange={(e) => setPaternalLastName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="maternalLastName" className="form-label">Apellido Materno</label>
            <input
              type="text"
              className="form-control"
              id="maternalLastName"
              value={maternalLastName}
              onChange={(e) => setMaternalLastName(e.target.value)}
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
