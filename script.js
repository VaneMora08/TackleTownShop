
// Carrito de compras 

let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentNode.querySelector('h3').innerText;
        cart.push(productName);
        updateCart();
        alert('Producto agregado con exito!');
    });
});

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = `(${cart.length})`;
}

function showCart() {
    const cartModal = document.querySelector('.cart');
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.textContent = product;
        cartItems.appendChild(cartItem);
    });
    cartModal.style.display = 'block';
}

function closeCart() {
    const cartModal = document.querySelector('.cart');
    cartModal.style.display = 'none';
}

function emptyCart() {
    cart = [];
    updateCart();
    closeCart();
}


// Formulario de contacto 
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    const name = document.getElementById('name').value.trim();
    if (name === '') {
        showErrorMessage('name-error', 'Por favor, ingresa tu nombre');
        isValid = false;
    } else {
        hideErrorMessage('name-error');
    }

   
    const email = document.getElementById('email').value.trim();
    if (!isValidEmail(email)) {
        showErrorMessage('email-error', 'Por favor, ingresa un email válido');
        isValid = false;
    } else {
        hideErrorMessage('email-error');
    }

    
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        showErrorMessage('message-error', 'Por favor, ingresa un mensaje');
        isValid = false;
    } else {
        hideErrorMessage('message-error');
    }


    if (isValid) {
        alert('Formulario enviado con éxito');
       
    }
});

function showErrorMessage(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
}

function hideErrorMessage(elementId) {
    const element = document.getElementById(elementId);
    element.textContent = '';
    element.style.display = 'none';
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
