"use strict";
import { getProducts } from "./script.js";
const productsElem = document.querySelector(".products");
const cartElem = document.querySelector(".cart");
// const addProductElem = document.getElementById("add_product");

let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let allProducts = [];

console.log("cartItems", cartItems);

productsElem.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  console.log("button", button);
  if(!button) return
  if (button) {
    addToCart(e.target.dataset.id, button);
    
    getCartItems();
  }
});

function getCartItems() {
  cartElem.innerHTML = "";
  
  cartItems.forEach((element) => {
    cartElem.insertAdjacentHTML(
      "beforeend",
      `
      <div class="cart-item">
      <p>${element.name}</p>
      <p>${element.price}</p>
      </div>
      `
    );
  });
}

getCartItems();

function addToCart(id, btn) {
  const product = allProducts.find((product) => product.id === id);
  const isItemInCart = cartItems.find((item) => item.id === product.id);
  if (isItemInCart) {
    return;
  }
  cartItems.push({ ...product, quantity: 1 });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log("cartItems", cartItems);
  btn.outerHTML = `<button class="item_quantity" data-id=${
    product.id
  } data-name=${product.name}><span>-</span>  ${
    product?.quantity || 1
  } <span>+</span></button>`;
 
}

function displayProducts() {
  productsElem.innerHTML = "";

  allProducts.forEach((product) => {
    const isProductInCart = cartItems.find((item) => item.id === product.id);
    productsElem.innerHTML += `
     <div class="product" id=${product.id}>
   <picture>
  <source media="(min-width: 1024px)" srcset=${product.image.desktop}>
  <source media="(min-width: 790px)" srcset=${product.image.tablet}>
  <img src=${product.image.mobile}>
</picture>
   ${
     !isProductInCart
       ? `<button class="add_to_cart" data-id=${product.id} data-name=${product.name}>Add to Cart</button>`
       : `<button class="item_quantity" data-id=${product.id} data-name=${product.name}><span>-</span>  ${product?.quantity || 1} <span>+</span></button>`
   }
    <p>${product.category}</p>
    <p>${product.name}</p>
    <p>${product.price}</p>
  </div>`;
  });
}

// getProducts().then((products) => {
//   console.log("products", products);
//   displayProducts(products);
// })

function productButtonSwitch() {
  return;
}

async function addproducts() {
  try {
    await fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        category: "men's clothing",
        price: 109.95,
        image: {
          mobile: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          tablet: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          desktop: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
      }),
    });
  } catch (error) {
    console.error(error);
  }
}

async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:5000/products");

    // console.log("response", response);

    if (!response.ok) {
      throw new Error("No data");
    }

    const data = await response.json();
    // console.log("data", data);
    allProducts = data;
    displayProducts();
   
  } catch (error) {
    console.error(error);
  }
}

getAllProducts();

// deletProductFromCart(itemId){


// }

async function deleteProduct() {
  try {
    await fetch(`http://localhost:5000/products/bd44`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log("error", error);
  }
}

// addProductElem.addEventListener("click", deleteProduct);
