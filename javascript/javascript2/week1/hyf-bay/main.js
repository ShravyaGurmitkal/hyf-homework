console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    // your code here
    const productDetailsUl = document.querySelector('#productDetails');
    for(const product of products) {
        const productDetailsLi = document.createElement('li');
        productDetailsLi.innerHTML = `Title: ${product.name} <br> Price: ${product.price} <br> Rating: ${product.rating}`;
        productDetailsUl.appendChild(productDetailsLi);
    }
}
  
renderProducts(products);