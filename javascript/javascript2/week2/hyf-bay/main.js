console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(products);

function renderProducts(products) {
    makeProductsUlClear();
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

sortAscending('name')// by default all products will display in ascending order of names
renderProducts(products);

//adding event for product search
const searchProductsInput = document.querySelector('#searchProductsMarkup');
searchProductsInput.addEventListener('input',function() {
    const inputSearchValue = searchProductsInput.value.trim();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(inputSearchValue.toLowerCase()));
    (filteredProducts.length > 0)? renderProducts(filteredProducts) : productsUl.innerHTML = `<li>Product Unavailable</li>`;
});

//adding event for product search by maximum price
const searchByPriceRange = document.querySelector('#priceRangeMarkup');
searchByPriceRange.addEventListener('input',function() {
    const priceRangeValue = searchByPriceRange.value;
    const filteredByPrice = products.filter(product => product.price <= priceRangeValue);
    (filteredByPrice.length > 0)? renderProducts(filteredByPrice) : productsUl.innerHTML = `<li>No products in this range</li>`;
});


//Sort the products
const sortProductsInput = document.querySelector('#sortProductsMarkup');
let sortValue;
sortProductsInput.addEventListener('change', function() {
    const sortProductsValue = sortProductsInput.options[sortProductsInput.selectedIndex].value;
    (sortProductsValue === 'expensive' || sortProductsValue === 'cheap')? sortValue = 'price' : sortValue = sortProductsValue;
    (sortProductsValue === 'name' || sortProductsValue === 'cheap')? sortAscending(sortValue) : sortDescending(sortValue) ;
    renderProducts(products);
});

function sortAscending(sortValue) {
    if (sortValue === 'price') {
        products.sort((firstItem, secondItem) => firstItem[sortValue] - secondItem[sortValue]) 
    } else {
        products.sort(function(firstItem, secondItem) {
            if (firstItem[sortValue] > secondItem[sortValue]) {
                return 1;
            }
            if (firstItem[sortValue] < secondItem[sortValue]) {
                return -1;
            }
            return 0;
        });
    }
}

function sortDescending(sortValue) {
    products.sort((firstItem, secondItem) => secondItem[sortValue] - firstItem[sortValue]);
}

//function to make productsUl list clear
function makeProductsUlClear() {
    productsUl.innerHTML = '';
}

//adding event to clear all filters and display all products
const clearButton = document.querySelector('#clearButtonMarkup')
clearButton.addEventListener('click', function() {
    searchProductsInput.value = '';
    sortProductsInput.value = '';
    searchByPriceRange.value = '';
    document.getElementById('inputPriceMarkup').value = 0;
    renderProducts(products);
});