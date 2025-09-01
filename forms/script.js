// const data = document.querySelector("form");
// console.log(document.forms[0]);
// const firstName = document.forms[0].elements.firstName;

// firstName.addEventListener("blur", () => {
//   if (firstName.value === "") {
//     firstName.classList.add("invalid");
//     document.getElementById("errro").innerHTML = "First name is required";
//     document.getElementById("errro").classList.add("text-color");
//   }
// });

// firstName.addEventListener("focus", () => {
//   if (firstName.classList.contains("invalid")) {
//     firstName.classList.remove("invalid");
//     document.getElementById("errro").innerHTML = "";
//   }
// });
// document.forms[0].elements.firstName.onChange = validateFirstName;

// function validateFirstName() {
//   const firstName = document.forms[0].elements.firstName;
//   console.log(firstName.value);
// }

// console.log(document.forms[0]);

// document.forms[0].addEventListener("submit", (e) => {
//   // e.preventDefault();

//   console.log(e.target.firstName.value);
//   if (e.target.firstName.value === "") {
//     alert("First name is required");
//   }

//   console.log(e.target.lastName.value);
//   console.log(e.target.email.value);
//   console.log(e.target.password.value);
//   console.log(e.target.confirm.value);
//   console.log(e.target.phone.value);
//   console.log(e.target.terms.checked);

//   document.forms[0].reset();
// });

// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
// });

//? Form validation
console.log(document.forms[0].elements.firstName);
const form = document.forms[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = e.target.firstName.value;
  const lastName = e.target.lastName.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirm = e.target.confirm.value;
  const phone = e.target.phone.value;
  const terms = e.target.terms.checked;

  const userData = {
    firstName,
    lastName,
    email,
    password,
    confirm,
    phone,
    terms,
  };

  if (firstName === "") {
    e.target.firstName.classList.add("invalid");
    document.getElementById("error").innerHTML = "First name is required";
    document.getElementById("error").classList.add("text-color");
  } else {
    e.target.firstName.classList.remove("invalid");
    document.getElementById("error").innerHTML = "";
  }

  //? As the user is typing you validate
  form.elements.firstName.addEventListener("input", () => {
    form.elements.firstName.classList.remove("invalid");
    document.getElementById("error").innerHTML = "";

    if (form.elements.firstName.value === "") {
      form.elements.firstName.classList.add("invalid");
      document.getElementById("error").innerHTML = "First name is required";
      document.getElementById("error").classList.add("text-color");
    }
  });
  if (!validateEmail(email)) {
    alert("Email is not valid");
    return;
  }

  //? password Validation
  if (!validatePassword(password)) {
    alert("Password does not meet the requirements");
    return;
  }

  if (password !== confirm) {
    document.getElementById("passwordError").innerHTML =
      "Password does not match";
    e.target.confirm.classList.add("invalid");
    document.getElementById("passwordError").classList.add("text-color");
  } else {
    alert("Password match");
  }
  form.elements.confirm.addEventListener("input", () => {
    if (form.elements.password.value !== form.elements.confirm.value) {
      form.elements.confirm.classList.add("invalid");
      document.getElementById("passwordError").innerHTML =
        "Password does not match";
      document.getElementById("passwordError").classList.add("text-color");
    } else {
      form.elements.confirm.classList.remove("invalid");
      document.getElementById("passwordError").innerHTML = "";
    }

    if (form.elements.confirm.value === "") {
      form.elements.confirm.classList.add("invalid");
      document.getElementById("passwordError").innerHTML =
        "Password does not match";
      document.getElementById("error").classList.add("text-color");
    }
  });

  console.log(password, confirm);

  // form.reset();

  // resetFormFeilds(e);
});

//? form rest form
// function resetFormFeilds(e) {
//   e.target.firstName.value = "";
//   e.target.lastName.value = "";
//   e.target.email.value = "";
//   e.target.password.value = "";
//   e.target.confirm.value = "";
//   e.target.phone.value = "";
//   e.target.terms.checked = false;
// }

function validatePassword(password) {
  return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/.test(
    password
  );
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
