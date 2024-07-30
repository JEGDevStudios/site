document.getElementById('btn-menu').addEventListener('click', function() {
    var navContainer = document.getElementById('nav-container');
    if (navContainer.style.display === 'none' || navContainer.style.display === '') {
        navContainer.style.display = 'flex';
    } else {
        navContainer.style.display = 'none';
    }
});