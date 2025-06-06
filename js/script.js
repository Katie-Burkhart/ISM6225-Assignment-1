const shoes = [
    { id: 1, image: "img/1.png" },
    { id: 2, image: "img/2.png" },
    { id: 3, image: "img/3.png" },
    { id: 4, image: "img/4.png" },
];

const mainImage = document.querySelector('.shoe-image');
const icons = document.querySelectorAll('.icon');

function updateImage(shoeId) {
    const selectedShoe = shoes.find(shoe => shoe.id === shoeId);
    mainImage.src = selectedShoe.image;

    // Remove active class from all icons
    icons.forEach(icon => icon.classList.remove('active'));

    // Add active class to current icon
    document.querySelector(`[data-shoe="${shoeId}"]`).classList.add('active');
}

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const shoeId = parseInt(icon.getAttribute('data-shoe'));
        updateImage(shoeId);
    });
});

// Initial Load
updateImage(1);
