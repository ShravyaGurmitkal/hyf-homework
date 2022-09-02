const productSearch = document.getElementById('searchInput');
let productsul = document.createElement('ul');
document.body.appendChild(productsul);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
      // Assuming dkr as default currency
    const currencyApi = `https://api.currencyapi.com/v3/latest?apikey=8oj1A2di6JFwCRRghtxD1W9zWV4WcA3xVHQN1o7M&currencies=${currency}&base_currency=DKK`;
    fetch(currencyApi)
      .then(response => response.json())
      .then(currencyData => {
        const productName = document.createElement('h3');
        const dkkPrice = document.createElement('h3');
        const currencyPrice = document.createElement('h3');
        const priceinCurrency = +(this.price * currencyData.data[currency].value).toFixed(3);
        productName.innerHTML = `Product: ${this.name}`;
        dkkPrice.innerHTML = `Price In DKK: ${this.price}`;
        currencyPrice.innerHTML = `Price In ${currency}: ${priceinCurrency}`;
        document.body.appendChild(productName);
        document.body.appendChild(dkkPrice);
        document.body.appendChild(currencyPrice);
      });
  }
}
  
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    // Implement functionality here
    if(!this.products.includes(product)){
      this.products.push(product);
    }
  }

  removeProduct(product) {
    // Implement functionality here
    if(this.products.includes(product)){
      const productIndex = this.products.indexOf(product);
      this.products.splice(productIndex,1);
    } else {
      console.log(`Product is not added/present in the products array`);
    }
  }

  searchProduct(productName) {
    // Implement functionality here
      const productsCopy = this.products.map(product => product);
      if(productName !== "") {
          this.products = this.products.filter(product => product.name.toLowerCase().includes(productName.toLowerCase()));
          productsul.innerHTML = "";
          this.renderProducts();
          this.products = productsCopy;
      } else {
          productsul.innerHTML = "";
          this.renderProducts();
      }
  }

  getTotal() {
    // Implement functionality here
      let totalPrice = 0;
      if(this.products.length !== 0) {
      for(const product of this.products) {
          totalPrice += product.price;
          }
      }
      return totalPrice;
  }

  renderProducts() {
    // Implement functionality here
    if(this.products.length !== 0) {
      this.products.forEach(product => {
      const productsli = document.createElement('li');
      productsli.innerHTML = `product: ${product.name} <br> Price: ${product.price}`
      productsul.appendChild(productsli);
          });
      }
      const totalDetails = document.getElementById('totalDetailsDiv');
      const totalProducts = document.getElementById('totalProductsh2');
      const totalPricedetails = document.getElementById('totalPriceh2');
      totalProducts.innerHTML = `No: of Products: ${this.products.length}`
      totalPricedetails.innerHTML = `Total Price : ${this.getTotal()}`;
  }

  getUser(user) {
      // Implement functionality here
      return fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
  
  }
}
  
const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const smartphone = new Product("smart-phone", 1500);
const laptop = new Product("laptop", 4000);
const bag = new Product("bag", 1000);
const table = new Product("table", 2000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(smartphone);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(bag);
shoppingCart.addProduct(table);
shoppingCart.removeProduct(laptop);

productSearch.addEventListener('input',() => {
    const productSearchValue = productSearch.value;
    shoppingCart.searchProduct(productSearchValue);
    console.log(productSearchValue);   
});

shoppingCart.getUser(7)
    .then(response => response.json())
    .then(data => {
        const userName = document.getElementById('userNameh2');
        if(data.username !== undefined){
            userName.innerHTML = `User Name: ${data.username}`;
            shoppingCart.renderProducts();
        } else{
            userName.innerHTML = `Please Specify The Correct User To Display The Details`
        }
    });

const plant = new Product("plant", 50);
plant.convertToCurrency('USD');