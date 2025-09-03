import { getAllAlbums } from "./fetch.js";

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data.slice(0, 10)));
}

getTodos();


async function logAllAlbums(){
  const data = await getAllAlbums();

   console.log("Album", data.slice(0, 10));
   
}

logAllAlbums();

const albums = await getAllAlbums()


function displayAlbums(){

  let contentElem = document.getElementById("content");
  contentElem.innerHTML = albums.slice(0, 15).map(album => {
    return `<li class="album">
    ${album.title}
    </li>`
  })

}


displayAlbums()