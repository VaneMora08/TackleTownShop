let carrito = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.querySelector('h3').innerText;
        carrito.push(productName);
        actualizarCarrito();
        alert('Producto añadido al carrito');
    });
});

function actualizarCarrito() {
    const contadorCarrito = document.getElementById('cart-count');
    contadorCarrito.innerText = `(${carrito.length})`;
}

function mostrarCarrito() {
    const carritoModal = document.querySelector('.cart');
    const listaCarrito = document.getElementById('cart-items');
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = producto;
        listaCarrito.appendChild(itemCarrito);
    });
    carritoModal.style.display = 'block';
}

function cerrarCarrito() {
    const carritoModal = document.querySelector('.cart');
    carritoModal.style.display = 'none';
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
    cerrarCarrito();
}
