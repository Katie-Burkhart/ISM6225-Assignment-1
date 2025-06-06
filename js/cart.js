const cart = [];
const cartSidebar = document.querySelector('.cart-sidebar');
const cartItemsList = document.querySelector('.cart-items');
const totalElement = document.getElementById('total');

// Add to cart functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price)
        };
        cart.push(product);
        updateCartDisplay();
        cartSidebar.classList.add('active');
    });
});

// Update cart display
function updateCartDisplay () {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button onclick="removeFromCart(${index})">&times;</button>
        `;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalElement.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

// Toggle cart visibility
document.querySelector('.close-cart').addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});