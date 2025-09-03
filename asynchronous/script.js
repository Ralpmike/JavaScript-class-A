

console.log("Synchronous");

const y = 6;
const x = 5;
const z = y + x;

setTimeout(() => {
  console.log("Asynchronous");
}, 2000);

console.log(z);
// console.log("Asynchronous")

// let count = 0

// let timer = setInterval(() => {
//   count++
//   console.log(count)

//   if (count === 7) {
//     clearInterval(timer)
//   }

// }, 2000)

class MyConstructor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayInfo() {
    console.log(this.name, this.age);
  }
}

const user1 = new MyConstructor("John", 25);
const user2 = new MyConstructor("Jane", 30);
const user3 = new MyConstructor("Paul", 25);

// console.log('user1', user1);
// console.log('user2', user2);
// console.log('user3', user3);

function User(name, age) {
  this.name = name;
  this.age = age;
}

// const freshUser = new User("John", 25);

// console.log('freshUser', freshUser);
// const user1 = {
//   name: "John",
//   age: 25
// }

// const user2 = {
//   name: "Jane",
//   age: 30
// }

// const user3 = {
//   name: "paul",
//   age: 25
// }

//?Promises

let promise = new Promise((resolve, reject) => {
  //? Producing code
  setTimeout(() => {
    reject("Promise rejected");
    console.log("Promise", promise);
  }, 4000);
});

console.log("pending", promise);

promise.then(
  //? `Consumer`
  (data) => {
    console.log(data);
  },
  (error) => {
    console.error(error);
  }
);

function orderPizza(name, callback) {
  console.log(`Ordering ${name} pizza`);
  setTimeout(() => {
    callback(name, deliverPizza);
  }, 3000);
}

function deliverPizza(name, callback) {
  console.log(`Delivering ${name} pizza`);
  setTimeout(() => {
    callback();
  }, 2000);
}

function callFriends() {
  console.log("Calling friends");
}

orderPizza("Pepperoni", () => {
  deliverPizza("Pepperoni", () => {
    callFriends();
  });
});

const BASE_URL = "https://fakeapi.net";
const body = document.querySelector("body");
const p = document.createElement("p");
p.textContent = "Loading.....";
body.append(p);

function getAllProducts() {
  setTimeout(() => {
    fetch(`https://fakeapi.net/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        let products = document.querySelector(".products");
        // const parse = JSON.parse(data);
        console.log(data);
        products.innerHTML = data.data
          .map(
            (product) => `<div class="products" >
          <div class="product" id=${product.id}>
    <h2>${product.brand}</h2>
    <p>${product.category}</p>
    <p>${product.description}</p>
    <div>
      <img src=${product.image} alt=${product.brand}>
    </div>
    <p>$${product.price}</p>
  </div>
          
          </div>`
          )
          .join(" ");
      })
      .catch((err) =>{
        console.log(err);
        let p = document.createElement("p")
        p.classList.add("error")  
        p.textContent = err
        body.append(p)
      } )
      .finally(() => {
        p.remove();
      });
  }, 3000);
}

getAllProducts("products");


// ? git clone https://github.com/Ralpmike/JavaScript-class-A.git

//? git pull origin master

//? ls

//? cd JavaScript-class-A

//? git pull