// "use strict"

async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:5000/products");

    console.log("response", response);

    if (!response.ok) {
      throw new Error("No data");
    }

    const data = await response.json();

    console.log("data", data);

    return data;
  } catch (error) {
    console.error(error);
  }
}

getAllProducts();
