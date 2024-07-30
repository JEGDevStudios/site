document.getElementById('carrito').addEventListener('click', function() {
    document.getElementById('listCart').style.display = 'flex';
    document.getElementById('carrito').style.display = 'none';
    document.querySelector('.count-products').style.display = 'none';
});

document.querySelector('.icon-close').addEventListener('click', function() {
    document.getElementById('listCart').style.display = 'none';
    document.getElementById('carrito').style.display = 'block';
    document.querySelector('.count-products').style.display = 'block';
});

// Agregar productos al carrito
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function() {
            let productDescription = this.closest('.description-product');
            let title = productDescription.querySelector('.title-product').innerText;
            let priceText = productDescription.querySelector('.price').innerText;
            let price = parseFloat(priceText.replace(/[^0-9.-]+/g, "").split('-')[0]);

            let cartProducts = document.querySelector('.cart-products');
            let productHTML = `
                <div class="info-product">
                    <p>${title}</p>
                    <span>${priceText}</span>
                    <button class="icon-delete">
                        <img src="../recources/icons/icon-close.png" alt="Eliminar producto">
                    </button>
                </div>
            `;

            cartProducts.insertAdjacentHTML('beforeend', productHTML);

            updateTotal();

            // Agregar funcionalidad de eliminación
            let deleteButtons = cartProducts.querySelectorAll('.icon-delete');
            deleteButtons.forEach(deleteButton => {
                deleteButton.addEventListener('click', function() {
                    this.closest('.info-product').remove();
                    updateTotal();
                });
            });
        });
    });

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-products .info-product span').forEach(priceElement => {
            let priceText = priceElement.innerText;
            let price = parseFloat(priceText.replace(/[^0-9.-]+/g, "").split('-')[0]);
            total += price;
        });
        document.getElementById('cart-total').innerText = total;
    }

    document.getElementById('carrito').addEventListener('click', function() {
        document.getElementById('listCart').style.display = 'flex';
        document.getElementById('carrito').style.display = 'none';
        document.querySelector('.count-products').style.display = 'none';
    });

    document.querySelector('.icon-close').addEventListener('click', function() {
        document.getElementById('listCart').style.display = 'none';
        document.getElementById('carrito').style.display = 'block';
        document.querySelector('.count-products').style.display = 'block';
    });
});