// Sample product data (you'd fetch this from a database in a real scenario)
const products = [
    { id: 1, type:"Original", price:2.49, glazing:"Keep Original", packSize: 1},
    { id: 2, type:"Apple", price:3.49, glazing:"Keep Original", packSize: 1},
    { id: 3, type:"Raisin", price:2.99, glazing:"Keep Original", packSize: 1},
    { id: 4, type:"Walnut", price:3.49, glazing:"Keep Original", packSize: 1},
    { id: 5, type:"Double-Chocolate", price:3.99, glazing:"Keep Original", packSize: 1},
    { id: 6, type:"Strawberry", price:3.99, glazing:"Keep Original", packSize: 1},
];

const glazings = [
    { option:"Keep Original", adaption: 0},
    { option:"Sugar Milk", adaption: 0},
    { option:"Vanilla Milk", adaption: 0.5},
    { option:"Double Chocolate", adaption: 1.5},
];

const pack_size = [
    { option:"1", adaption: 1},
    { option:"3", adaption: 3},
    { option:"6", adaption: 5},
    { option:"12", adaption: 10},
];

// Initialize cart state
const cart = [];

// Function to render products on the page
function renderProducts() {
    const productsContainer = document.querySelectorAll('.row');
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < 3; j++){
            const productElement = document.createElement('div');
            productElement.setAttribute("id", `${products[i*3 + j].id}`);
            productElement.classList.add('product');
            productElement.innerHTML = `
            <img src="../assets/products/${products[i*3 + j].type.toLowerCase()}-cinnamon-roll.jpg" alt="Product 1">
            <h2>${products[i*3 + j].type} Cinnamon Roll</h2>
            <div class = "desc">
                <div class = "left-sec">
                <p>Glazing:</p>
                </div>

                <div class = "right-sec">
                <select class="dropdown">
                </select>
                </div>
            </div>

            <div class = "desc">
                <div class = "left-sec">
                <p>Pack size:</p>
                </div>

                <ul class="right-sec">
                </ul>

            </div>

            <div class = "add-to-cart">
                <div class = "left-sec">
                <p>$${products[i*3 + j].price}</p>
                </div>

                <div class = "right-sec">
                <button>Add to Cart</button>
                </div>
            </div>
            `;
            productsContainer[i].appendChild(productElement);

            // Create Drop Down List
            const glazingOption = document.querySelectorAll('.dropdown');
            glazings.forEach(each => {
                const each_glazing = document.createElement('option');
                each_glazing.value = each.option;
                each_glazing.textContent = `${each.option}`;
                glazingOption[i*3 + j].appendChild(each_glazing);
            });

            
            // Create size option
            const packSizeOption = document.querySelectorAll('ul.right-sec');
            pack_size.forEach(each => {
                const each_size = document.createElement('li');
                const each_size_input = document.createElement('input');
                const each_size_label = document.createElement('label');
                if (each.option == 1){
                    // each_size_input
                    each_size_input.checked = true;
                }
                each_size_input.setAttribute('type', 'radio');
                each_size_input.setAttribute('name', `set-${products[i*3 + j].type}`);
                each_size_input.setAttribute('value', `${each.adaption}`);
                each_size_input.setAttribute('id', `radio-${products[i*3 + j].type}-${each.option}`);
                each_size_label.setAttribute('for', `radio-${products[i*3 + j].type}-${each.option}`);  
                each_size_label.textContent = `${each.option}`;
                each_size.appendChild(each_size_input);
                each_size.appendChild(each_size_label);
                packSizeOption[i*3 + j].appendChild(each_size);
            });

            packSizeOption[i*3 + j].addEventListener("change", function(event) {
                // Get the selected option's value
                const selectedOption = event.target.value;
                products[i*3 + j].packSize = parseFloat(selectedOption);
                
                updatePrice(i*3 + j, products[i*3 + j]);
            });
            
            glazingOption[i*3 + j].addEventListener("change", function() {
                // Get the selected option's value
                const selectedOption = glazingOption[i*3 + j].value;
                products[i*3 + j].glazing = selectedOption;
                
                updatePrice(i*3 + j, products[i*3 + j]);
            });

            const addToCartButtons = document.querySelectorAll('.add-to-cart > .right-sec > button');
            addToCartButtons[i*3 + j].addEventListener('click', function () {
                let glazingAdaption = glazingOptionCalculator(products[i*3 + j].glazing);
                let currentPrice = ((products[i*3 + j].price + glazingAdaption)*products[i*3 + j].packSize).toFixed(2);
                  // Update the cart summary and show the popup
                //   updateCartSummary();
                showPopup(products[i*3 + j], currentPrice);
                cart.push({ price:currentPrice });
                updateCartInfo()
                });
            };    
    };
};


function glazingOptionCalculator(option) {
    let adaption = 0;
    
    glazings.forEach(each => {
        if(option == each.option) {
            adaption = each.adaption;
        }
    });
    return adaption;
}

function packSizeOptionCalculator(adaption) {
    let option = 0;
    
    pack_size.forEach(each => {
        if(adaption == each.adaption) {
            option = each.option;
        }
    });
    return option;
}

function updateCartInfo(){
    const cartInfo = document.querySelectorAll('.summary');
    let total = 0;
    cart.forEach(item =>{
        total += parseFloat(item.price);
    });
    cartInfo[0].textContent = `${cart.length} items`;
    cartInfo[1].textContent = `Total: $${total}`;
}

function updatePrice(index, this_product) {
    const priceContainer = document.querySelectorAll('.add-to-cart > .left-sec > p');
    // Update the result container to reflect the selected option
    glazingAdaption = glazingOptionCalculator(this_product.glazing);
    priceContainer[index].textContent = "$" + ((this_product.price + glazingAdaption)*this_product.packSize).toFixed(2);
}

// Function to show a popup for 3 seconds
function showPopup(product, currentPrice) {
    const cartButton = document.getElementById('pop-up');
    const textCart = document.querySelectorAll('#pop-up > p');
    textCart[1].textContent = `${product.type} cinnamon roll`;
    textCart[2].textContent = `${product.glazing}`;
    textCart[3].textContent = `Pack of ${packSizeOptionCalculator(product.packSize)}`;
    textCart[4].textContent = `Price: ${currentPrice}`;
    cartButton.style.display = 'block';
  
    setTimeout(() => {
        cartButton.style.display = 'none';
    }, 3000);
  }

// Initialize the product list
renderProducts();
