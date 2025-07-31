
const products = [
  { name: "Foldable Phone Screen Protectors", description: "Ultra-thin & flexible protection" },
  { name: "Modular Magnetic Phone Cases", description: "MagSafe compatible detachable case system" }
];
const grid = document.getElementById("productGrid");
function displayProducts(list) {
  grid.innerHTML = list.map(p => `
    <div class="product-card">
      <h3>${p.name}</h3>
      <p>${p.description}</p>
    </div>
  `).join('');
}
function filterProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
  displayProducts(filtered);
}
displayProducts(products);
