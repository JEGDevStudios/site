import { useState } from 'react';
import ButtonsSocial from '@/components/ButtonsSocial';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://jegdevstudios.onrender.com/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Correo enviado con éxito');
                setFormData({
                    name: '',
                    email: '',
                    type: '',
                    message: '',
                });
            } else {
                alert('Error al enviar el correo');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al enviar el correo');
        }
    };

    return (
        <section className="d-flex flex-md-row flex-column-reverse justify-content-center align-items-center w-100 vh-100 p-xl-5 p-3 gap-5">
            <article className="d-flex flex-column justify-content-center align-items-center text-center w-100 h-100">
                <h2>Formulario de Contacto</h2>
                <form className='d-flex flex-column justify-content-center aling-items-center text-center bg-light border border-dark rounded gap-4 p-4' id="contactForm" onSubmit={handleSubmit} style={{width: "24rem"}}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Nombre completo"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="type">Tipo de Consulta</label>
                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Selecciona un tipo</option>
                        <option value="services">Servicios</option>
                        <option value="support">Soporte</option>
                        <option value="general">General</option>
                    </select>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Escriba su mensaje..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button className='btn btn-dark' type="submit">Enviar</button>
                </form>
            </article>
            <aside className='d-flex flex-column justify-content-center align-items-center w-100 h-100 gap-4'>
                <div className="text-center">
                    <h2>Contáctanos por redes sociales</h2>
                </div>
                <div className="d-flex justify-content-center align-items-center gap-4">
                        <ButtonsSocial
                            tamaño = {{width: "7rem"}}
                        />
                </div>
            </aside>
        </section>
    );
}

export default Contact;
