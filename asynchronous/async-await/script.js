import { getAllAlbums } from "./fetch.js";

function getTodos() {
  fetch("https://jsonplaceholder.typicode.com/posts/100", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}




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



//? Make a Post request

function addPost(){
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      body: "Aaron, Abasifreke, Fidelis",
      id: 101,
      title: "Aaron, Abasifreke, Fidelis",
      userId: 1,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}



addPost()

getTodos();