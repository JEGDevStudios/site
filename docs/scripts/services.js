document.addEventListener('DOMContentLoaded', () => {

    const cartButton = document.getElementById('carrito');
    const cart = document.getElementById('listCart');
    const closeCartButton = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const productCount = cartButton.querySelector('.count-products span');
    const cartTotal = document.getElementById('cart-total');

    const placeOrderButton = document.getElementById('place-order');
    const orderFormModal = document.getElementById('order-form-modal');
    const closeModalButton = document.getElementById('close-modal');
    const submitOrderButton = document.getElementById('submit-order');

    const clientNameInput = document.getElementById('client-name');
    const clientEmailInput = document.getElementById('client-email');
    const clientPhoneInput = document.getElementById('client-phone');

    // Cargar carrito desde localStorage al iniciar la página
    loadCartFromLocalStorage();

    cartButton.addEventListener('click', function() {
        document.getElementById('listCart').style.display = 'flex';
        document.getElementById('carrito').style.display = 'none';
        document.querySelector('.count-products').style.display = 'none';
    });

    closeCartButton.addEventListener('click', function() {
        document.getElementById('listCart').style.display = 'none';
        document.getElementById('carrito').style.display = 'flex';
        document.querySelector('.count-products').style.display = 'flex';
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            const product = event.target.closest('.list-element');
            const productName = product.querySelector('.tilte-product').textContent;
            const productPrice = product.getAttribute('data-price');

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - $${productPrice}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', () => {
                cartItem.remove();
                updateProductCount();
                updateCartTotal();
                saveCartToLocalStorage(); // Guardar el carrito actualizado
            });
            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);

            updateProductCount();
            updateCartTotal();
            saveCartToLocalStorage(); // Guardar el carrito actualizado
        });
    });

    function updateProductCount() {
        const itemCount = cartItems.children.length;
        productCount.textContent = itemCount;
    }

    function updateCartTotal() {
        let total = 0;
        document.querySelectorAll('#cart-items li').forEach(item => {
            const priceText = item.textContent.match(/\$(\d+)/);
            if (priceText) {
                total += parseInt(priceText[1], 10);
            }
        });
        cartTotal.textContent = total;
    }

    placeOrderButton.addEventListener('click', (event) => {
        event.preventDefault();
        orderFormModal.style.display = 'flex';
    });

    closeModalButton.addEventListener('click', () => {
        orderFormModal.style.display = 'none';
    });

    submitOrderButton.addEventListener('click', (event) => {
        event.preventDefault();

        const clientName = clientNameInput.value.trim();
        const clientEmail = clientEmailInput.value.trim();
        const clientPhone = clientPhoneInput.value.trim();

        if (!clientName || !clientEmail || !clientPhone) {
            alert("Por favor, completa todos los campos obligatorios.");
            return;
        }

        const cartItems = document.querySelectorAll('#cart-items li');
        const cartArray = Array.from(cartItems).map(item => {
            return {
                name: item.textContent.split(' - $')[0],
                price: item.textContent.match(/\$(\d+)/)[1]
            };
        });
        const totalAmount = document.getElementById('cart-total').textContent;

        saveOrderToDatabase(Date.now(), cartArray, totalAmount, clientName, clientEmail, clientPhone);

        const whatsappMessage = `Pedido número: ${Date.now()}\nNombre: ${clientName}\nCorreo: ${clientEmail}\nTeléfono: ${clientPhone}\nProductos:\n${cartArray.map(item => `${item.name} - $${item.price}`).join('\n')}\nTotal: $${totalAmount} US`;
        window.open(`https://api.whatsapp.com/send?phone=+525654320986&text=${encodeURIComponent(whatsappMessage)}`, '_blank');

        orderFormModal.style.display = 'none';

        clearCart(); // Limpiar el carrito después de enviar el pedido
    });

    function clearCart() {
        cartItems.innerHTML = ''; // Vacía el contenido del carrito
        updateProductCount(); // Actualiza el contador de productos
        updateCartTotal(); // Actualiza el total del carrito
        localStorage.removeItem('cart'); // Eliminar el carrito de localStorage
    }

    function saveCartToLocalStorage() {
        const cartData = [];
        document.querySelectorAll('#cart-items li').forEach(item => {
            const itemName = item.textContent.split(' - $')[0];
            const itemPrice = item.textContent.match(/\$(\d+)/)[1];
            cartData.push({ name: itemName, price: itemPrice });
        });
        localStorage.setItem('cart', JSON.stringify(cartData));
    }

    function loadCartFromLocalStorage() {
        const cartData = JSON.parse(localStorage.getItem('cart'));
        if (cartData) {
            cartData.forEach(item => {
                const cartItem = document.createElement('li');
                cartItem.textContent = `${item.name} - $${item.price}`;
                const removeButton = document.createElement('button');
                removeButton.textContent = 'X';
                removeButton.addEventListener('click', () => {
                    cartItem.remove();
                    updateProductCount();
                    updateCartTotal();
                    saveCartToLocalStorage(); // Guardar el carrito actualizado
                });
                cartItem.appendChild(removeButton);
                cartItems.appendChild(cartItem);
            });
            updateProductCount();
            updateCartTotal();
        }
    }

    function saveOrderToDatabase(orderNumber, cart, totalAmount, clientName, clientEmail, clientPhone) {
        const orderData = {
            orderNumber: orderNumber,
            cart: cart,
            totalAmount: totalAmount,
            clientName: clientName,
            clientEmail: clientEmail,
            clientPhone: clientPhone,
            date: new Date().toISOString()
        };

        fetch('http://localhost:3000/save-order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Pedido guardado:', data);
        })
        .catch(error => {
            console.error('Error al guardar el pedido:', error);
        });
    }
});