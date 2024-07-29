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
