document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', (event) => {
            const value = formatString(event.target.value);
            const items = document.querySelectorAll('.container');
            items.forEach(item => {
                if (formatString(item.textContent).indexOf(value) !== -1) {
                    item.style.display = 'flex';

                } else {
                    item.style.display = 'none';

                }
            });
        });
    } else {
        console.error("Elemento #search não encontrado");
    }
});

function formatString(value) {
    return value.toLowerCase().trim();
}

 let num = document.querySelector('#num')