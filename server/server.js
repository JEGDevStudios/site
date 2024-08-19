const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Ruta para manejar el envío del formulario
app.post('/send-email', async (req, res) => {
    const { name, email, type, message } = req.body;

    // Configuración del transporte de nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    // Contenido del correo
    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Nueva consulta de: ${type}`,
        text: `Tipo de Consulta: ${type}\nNombre del solicitante: ${name}\nCorreo de contacto: ${email}\nMensaje:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send('Correo enviado con éxito');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al enviar el correo');
    }
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
