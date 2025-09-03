export async function getAllAlbums() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/albums");
    console.log("res", res);

    if (res.ok) {
      const data = await res.json();
     return data
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

