// Agregar productos al carrito
document.addEventListener('DOMContentLoaded', () => {
    const cartButton = document.getElementById('carrito');
    const cart = document.getElementById('listCart');
    const closeCartButton = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const productCount = cartButton.querySelector('.count-products span');
    const cartTotal = document.getElementById('cart-total');

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
            const productName = product.querySelector('h1').textContent;
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
});