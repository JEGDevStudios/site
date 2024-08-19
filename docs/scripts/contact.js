document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formData = {
        name: this.name.value,
        email: this.email.value,
        type: this.type.value,
        message: this.message.value
    };
    
    try {
        const response = await fetch('https://jegdevstudios.onrender.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            alert('Correo enviado con éxito');
            this.reset(); // Reinicia el formulario después de enviarlo
        } else {
            alert('Error al enviar el correo');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar el correo');
    }
});