document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('carrito');
    const cart = document.getElementById('listCart');
    const closeCartButton = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const productCount = cartButton.querySelector('.count-products span');
    const cartTotal = document.getElementById('cart-total');
    const placeOrderButton = document.getElementById('place-order'); // Asegúrate de que este id sea correcto

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
            const productName = product.querySelector('.tilte-product').textContent; // Cambié 'h1' por '.tilte-product'
            const productPrice = product.getAttribute('data-price');

            const cartItem = document.createElement('li');
            cartItem.textContent = `${productName} - $${productPrice}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'X';
            removeButton.addEventListener('click', () => {
                cartItem.remove();
                updateProductCount();
                updateCartTotal();
            });
            cartItem.appendChild(removeButton);
            cartItems.appendChild(cartItem);

            updateProductCount();
            updateCartTotal();
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

    placeOrderButton.addEventListener('click', () => {
        const orderNumber = Date.now();  // Número de pedido basado en la marca de tiempo actual
        const cartArray = Array.from(cartItems.children).map(item => {
            return {
                name: item.textContent.split(' - $')[0],
                price: item.textContent.match(/\$(\d+)/)[1]
            };
        });
        const totalAmount = cartTotal.textContent;

        // Guardar pedido en la base de datos
        saveOrderToDatabase(orderNumber, cartArray, totalAmount);

        // Redirigir a WhatsApp
        const whatsappMessage = `Pedido número: ${orderNumber}\nProductos:\n${cartArray.map(item => `${item.name} - $${item.price}`).join('\n')}\nTotal: $${totalAmount} US`;
        window.open(`https://api.whatsapp.com/send?phone=+525654320986&text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    });

    function saveOrderToDatabase(orderNumber, cart, totalAmount) {
        const orderData = {
            orderNumber: orderNumber,
            cart: cart,
            totalAmount: totalAmount,
            date: new Date().toISOString()
        };

        console.log('Guardando pedido en la base de datos:', orderData);

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
