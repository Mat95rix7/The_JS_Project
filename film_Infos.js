const apiKey = "c942a98b";
const detailsContainer = document.getElementById("details")

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search)
  console.log(params)
  const imdbID = params.get("imdbID")
  console.log(imdbID)

  if (imdbID) {
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        afficherDetailsFilm(data);
      })
      .catch(error => console.error("Erreur :", error));
  }
})
function afficherDetailsFilm(data) {
  const detailsHTML = `
    <section class="films_details">
      <article>
        <img src="${data.Poster}" alt="${data.Title} Poster">
      </article>
      <article>
        <h2>${data.Title}</h2>
        <p><strong>Type :</strong> ${data.Type}</p>
        <p><strong>Year :</strong> ${data.Year}</p>
        <p><strong>Runtime :</strong> ${data.Runtime}</p>
        <p><strong>Genre :</strong> ${data.Genre}</p>
        <p><strong>Director :</strong> ${data.Director}</p>
        <p><strong>Actors :</strong> ${data.Actors}</p>
        <p><strong>Plot :</strong> ${data.Plot}</p>
        <p><strong>Rating :</strong> ${data.imdbRating}</p>
        <p><strong>Box Office :</strong> ${data.BoxOffice}</p>
      </artcile>
  </section>    
  `
  detailsContainer.innerHTML = detailsHTML;
}
