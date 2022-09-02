console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    productsUl.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}
sortProducts('rating') //by default all products are sorted by top rating and displayed
renderProducts(products);

console.log(products)

// Searching for products
const searchProductsInput = document.getElementById('searchProductsMarkup');
searchProductsInput.addEventListener('input', function() {
    const searchProductsInputValue = searchProductsInput.value.trim();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchProductsInputValue.toLowerCase()));
    (filteredProducts.length > 0)? renderProducts(filteredProducts) : productsUl.innerHTML = `<li>Product Unavailable</li>`
})

//Filter products based on max price
const searchByPriceRange = document.getElementById('priceRangeMarkup');
searchByPriceRange.addEventListener('input',function() {
    const priceRangeValue = searchByPriceRange.value;
    const filteredByPrice = products.filter(product => product.price <= priceRangeValue);
    (filteredByPrice.length > 0)? renderProducts(filteredByPrice) : productsUl.innerHTML = `<li>No products in this range</li>`;
});

//Sort the products
const sortProductsInput = document.getElementById('sortProductsMarkup');
let sortByValue;
sortProductsInput.addEventListener('change', function() {
    const sortProductsInputValue = sortProductsInput.options[sortProductsInput.selectedIndex].value;
    sortProducts(sortProductsInputValue);
    renderProducts(products);
});

function sortProducts(sortProductsInputValue) {
    console.log(sortProductsInputValue);
    if(sortProductsInputValue === 'cheap') {
        products.sort((firstItem, secondItem) => firstItem.price - secondItem.price);
    } else if(sortProductsInputValue === 'name') {
        products.sort(function(firstItem, secondItem) {
            if (firstItem.name > secondItem.name) {
                return 1;
            }
            if (firstItem.name < secondItem.name) {
                return -1;
            }
            return 0;
        });
    } else if(sortProductsInputValue === 'expensive') {
        products.sort((firstItem, secondItem) => secondItem.price - firstItem.price);
    } else {
        products.sort((firstItem, secondItem) => secondItem.rating - firstItem.rating);
    }
}

//shopping cart
const totalPrice = products.reduce((totalSum, product) => totalSum + product.price, 0);
const totalPriceMarkupValue = document.getElementById('totalPriceMarkup');
totalPriceMarkupValue.innerHTML += totalPrice;