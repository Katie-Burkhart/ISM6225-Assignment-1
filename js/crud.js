let products = [
  { id: 1, name: "Hestia", price: 1500, image: "img/1.png" },
  { id: 2, name: "Amphitrite", price: 950, image: "img/2.png" },
  { id: 3, name: "Artemis", price: 1125, image: "img/3.png" },
  { id: 4, name: "Urania", price: 1250, image: "img/4.png" }
];

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  products.forEach(product => {
    const item = document.createElement("div");
    item.innerHTML = `
      <img src="${product.image}" width="100">
      <strong>${product.name}</strong> - $${product.price}
      <button onclick="editProduct(${product.id})">Edit</button>
      <button onclick="deleteProduct(${product.id})">Delete</button>
    `;
    list.appendChild(item);
  });
}

document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.getElementById("productId").value;
  const name = document.getElementById("productName").value;
  const price = parseFloat(document.getElementById("productPrice").value);
  let image = document.getElementById("productImage").value.trim();
    if (!image.startsWith("img/")) {
      image = "img/" + image;
    }


  if (id) {
    const index = products.findIndex(p => p.id == id);
    products[index] = { id: parseInt(id), name, price, image };
  } else {
    const newId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    products.push({ id: newId, name, price, image });
  }

  document.getElementById("productForm").reset();
  renderProducts();
});

function editProduct(id) {
  const product = products.find(p => p.id === id);
  document.getElementById("productId").value = product.id;
  document.getElementById("productName").value = product.name;
  document.getElementById("productPrice").value = product.price;
  document.getElementById("productImage").value = product.image.replace(/^img\//, "");
}

function deleteProduct(id) {
  if (confirm("Delete this product?")) {
    products = products.filter(p => p.id !== id);
    renderProducts();
  }
}

renderProducts();


