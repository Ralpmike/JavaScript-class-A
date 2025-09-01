// // // const h1 = document.querySelector(".main__title");
// // const h1 = document.getElementById("title");
// // console.log(h1.innerHTML);

// // const subTitle = document.getElementsByClassName("sub__title");

// // const tagName = document.getElementsByTagName("li");
// // console.log("tagName", tagName);

// // console.log("subtile", subTitle[0]);

// // const selectSingle = document.querySelector(".sub__title");

// // console.log("selectSingle", selectSingle);

// // const selectAll = document.querySelectorAll(".sub__title");
// // console.log("selectAll", selectAll);

// // const pTag = document.querySelector("p");

// // console.log(pTag.setAttribute("id", "remove_title"));

// // const h1Att = document.querySelector(".main__title");
// // console.log("pTag", pTag);
// // console.log(h1Att.getAttribute("class"));

// // h1Att.setAttribute("data-samson", "Hi-samson");
// // console.log("h1Att", h1Att);

// // const h1Att2 = document.querySelector("[data-samson]");
// // console.log("h1Att2", h1Att2);

// // //?How to remove attributes using removeAttribute
// // h1Att.removeAttribute("data-samson");

// // console.log("h1Att", h1Att);

// //?How to style an element using the style property

// const button = document.querySelector("[type='button']");
// console.log("button", button);

// ///?ClassList
// const h1class = document.querySelector(".main__title");

// // console.log("h1class", h1class.classList.contains("main"));

// button.classList.add("btn");

// button.classList.remove("btn");

// button.addEventListener("click", () => {
//   button.classList.toggle("btn");
// });

const togglerBtn = document.querySelector(".toggler");
const h1 = document.querySelector("h1");

togglerBtn.addEventListener("click", () => {
  const navBar = document.querySelector(".nav__bar");
  togglerBtn.classList.toggle("change");
  if (togglerBtn.classList.contains("change")) {
    navBar.classList.add("active");
  } else {
    navBar.classList.remove("active");
  }
  console.log("navBar", navBar);
});

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    h1.style.color = "green";
    return resolve(() => "Promise fufilled");
  }, 3000);
})
  .then((res) => res.data)
  .then((data) => console.log(data));
