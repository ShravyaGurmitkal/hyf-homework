console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
  // your code here
  const productDetailsUl = document.querySelector('#productDetails');
  products.forEach(product => {
    let productDetailsLi = document.createElement('li');
    productDetailsLi.innerHTML = `Title: ${product.name} <br> Price: ${product.price} <br> Rating: ${product.rating}`;
    productDetailsUl.appendChild(productDetailsLi);
  });
}

renderProducts(products); // This should create the ul and the li's with the individual products details