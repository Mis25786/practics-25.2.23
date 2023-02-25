const KEY = "345007f9ab440e5b86cef51be6397df1";

fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`)
  .then((res) => {
    if (!res.ok) {
      throw new Error("error");
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    createCard(data.results);
  });

// fetch(`https://api.themoviedb.org/3/movie/505642/movie?api_key=${KEY}`)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("error");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     createCard(data.results);
//   });

const box = document.querySelector(".box");
box.addEventListener("click", onClick);

function createCard(arr) {
  const marcup = arr
    .map(({ id, title, poster_path }) => {
      return `<li data-id="${id}">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
        <p>${title}</p>
    </li>`;
    })
    .join("");

  box.insertAdjacentHTML("beforeend", marcup);
}

function onClick(e) {}
