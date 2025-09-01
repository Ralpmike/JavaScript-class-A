// "use strict";

// const h1 = document.querySelector("#title");
// console.log(h1);

// let button = document.getElementById("btn");

// console.log("button", button);

// // function clickMe() {
// //   alert("clicked hurray! 😁");
// // }

// // button.onclick = clickMe;
// // button.onclick = function clickMe() {
// //   alert("clicked hurray! 😁");
// // };

// // function clickMe() {
// //   alert("clicked hurray! 😁");
// // }

// //? addEventListener

// let container = document.getElementById("container");

// container.addEventListener("click", function (event) {
//   console.log("eventObject", event);
//   console.log("this", this);
//   alert("Div hurray! 😁");
// });

// button.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("ButtoneventObject", e.type);
//   alert("Keydown, hurray! 😁");
// });

// //?event bubbling

const togglerBtn = document.querySelector(".navbar__toggler");

togglerBtn.addEventListener("click", function () {
  const header = document.querySelector(".header_container");
  const navBar = document.querySelector(".nav__bar");

  header.classList.toggle("active");
  if (header.classList.contains("active")) {
    navBar.classList.add("change");
  } else {
    navBar.classList.remove("change");
  }
});
