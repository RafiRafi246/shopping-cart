 import './style.css';
// // @ts-check
// import "./style.css";

// async function getProducts() {
//     const res = await fetch('https://dummyjson.com/products');
//     const data = await res.json();
//     console.log(data.products);
//     return data.products;
// }

// function getProductsCards(product) {
//     const div = document.createElement('div');
//     div.innerHTML =
//         `<div class="card card-compact bg-base-100 shadow-xl relative">
//   <figure><img src="${product.thumbnail}" alt="Shoes" />
//   </figure>
//   <div class="absolute top-0 right-0 bg-primary text-white w-14 h-14 flex items-center justify-center text-center font-semibold rounded-tr-2xl rounded-bl-2xl">
//     ${product.discountPercentage} OFF</div>
//   <div class="card-body">
//     <h2 class="card-title">${product.title}</h2>
//     <p>${product.description}</p>
//     <p>$${product.price}</p>
//     <div class="card-actions justify-end">
//       <button class="btn btn-sm btn-primary">Add to Cart</button>
//     </div>
//   </div>
// </div>
//   `;
//     return div;
// }

// async function renderProducts() {
//     const products = await getProducts();
//     const productsDiv = document.querySelector(".products");

//     for (let i = 0; i < products.length; ++i) {
//         productsDiv.append(getProductsCards);
//     }
//     console.log(productsDiv);
// }
// renderProducts();