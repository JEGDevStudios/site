function filterOptions() {
    const input = document.getElementById('filterInput').value.toLowerCase();
    const select = document.getElementById('filterSelect').value.toLowerCase();
    const items = document.getElementsByClassName('filtered-item');

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const type = item.getAttribute('data-type').toLowerCase();
        const title = item.querySelector('.container-title h1').innerText.toLowerCase();
        const matchesInput = input === '' || title.includes(input);
        const matchesSelect = select === '' || type.includes(select);

        if (matchesInput && matchesSelect) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    }
}