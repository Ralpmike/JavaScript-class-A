"use strict";
import {getProducts} from "./script.js";
const productsElem = document.querySelector(".products");
const cartElem = document.querySelector(".cart");
// const addProductElem = document.getElementById("add_product");


let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let allProducts = []

console.log('cartItems', cartItems);

productsElem.addEventListener("click", e => {
  const {localName} = e.target
  if(localName === "button"){
    addToCart(e.target.dataset.id)
    getCartItems()
  }
})

function getCartItems() {
  cartElem.innerHTML = "";

  cartItems.forEach(element => {
    cartElem.insertAdjacentHTML("beforeend", `
      <div class="cart-item">
      <p>${element.name}</p>
      <p>${element.price}</p>
      </div>
    `);
})
}

 getCartItems();

function addToCart(id) {
  const product = allProducts.find(product => product.id === id);
  const isItemInCart = cartItems.find(item => item.id === id);
  if(isItemInCart) return
  cartItems.push(product);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  console.log("cartItems", cartItems);
}

 function displayProducts(allproducts) {

  
  const products = allproducts.map((product) => {
    return `
     <div class="product" id=${product.id}>
   <picture>
  <source media="(min-width: 1024px)" srcset=${product.image.desktop}>
  <source media="(min-width: 790px)" srcset=${product.image.tablet}>
  <img src=${product.image.mobile}>
</picture>
    <button data-id=${product.id} data-name=${product.name}>Add to Cart</button>
    <p>${product.category}</p>
    <p>${product.name}</p>
    <p>${product.price}</p>
  </div>`;
  });

  // console.log('products', products);
  

  productsElem.innerHTML = products.join("");

  // productsElem.insertAdjacentHTML("afterbegin", prdoucts); //prdoucts;
}

// getProducts().then((products) => { 
//   console.log("products", products);
//   displayProducts(products); 
// })



async function addproducts(){
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
          mobile:
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          tablet:
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          desktop:
            "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
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
    allProducts = data
    displayProducts(data);


    return data;
  } catch (error) {
    console.error(error);
  }
}

getAllProducts();




async function deleteProduct(){
 try {
   await fetch(`http://localhost:5000/products/bd44`, {
     method: "DELETE",
     headers: {
       "Content-Type": "application/json",
     },
   });
  
 } catch (error) {
console.log('error', error);

 }
}

// addProductElem.addEventListener("click", deleteProduct);