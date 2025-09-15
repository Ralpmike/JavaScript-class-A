const countryElem = document.querySelector(".country");

const renderCountry = function (data) {
  const html = `
      <article class="country">
            <img class="country__img" src=${data.flag}
    }/>
            <div class="country__data">
              <h3 class="country__name">${data.name}</h3>
              <h4 class="country__region">${data.region}</h4>
              <p class="country__row"><span>👫</span>${(
                data.population / 1000000
              ).toFixed(2)}</p>
              <p class="country__row"><span>🗣️</span>${
                data.languages[0].name
              }</p>
              <p class="country__row"><span>💰</span>(${
                data.currencies[0].symbol
              }) ${data.currencies[0].name}</p>
              
            </div>
          </article>
    `;

  countryElem.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

async function whereAmI(lat, lng) {
  try {
    const res = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );

    console.log("res", res);

    if (!res.ok) {
      throw new Error(`Problem with geocoding: ${res.status}`);
    }

    const data = await res.json();
    console.log("data", data);

    console.log(`You are in ${data.city}, ${data.countryName}`);

    const countryRespoinse = await fetch(
      `https://restcountries.com/v2/name/${data.countryName}`
    );

    if (!countryRespoinse.ok) {
      throw new Error(`Problem Fetching data: ${countryRespoinse.status}`);
    }

    const countryData = await countryRespoinse.json();
    console.log("countryData", countryData);
    renderCountry(countryData[0]);
  } catch (error) {
    console.log(error.message);
  }
}

whereAmI(34, 101);

console.log("whereAmI");

const headers = new Headers();
headers.append(
  "X-CSCAPI-KEY",
  "cHdMWTFaMzhhVlYzWTh5UmhaMHY1ZU8yRXVIbzZnV28xWkZMVGlFYQ=="
);

const requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

fetch("https://api.countrystatecity.in/v1/countries/ng", requestOptions)
  .then((res) => res.json())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
