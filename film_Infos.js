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
        <p><strong>Année :</strong> ${data.Year}</p>
        <p><strong>Genre :</strong> ${data.Genre}</p>
        <p><strong>Réalisateurs :</strong> ${data.Director}</p>
        <p><strong>Acteurs :</strong> ${data.Actors}</p>
        <p><strong>Synopsis :</strong> ${data.Plot}</p>
      </artcile>
  </section>    
  `
  detailsContainer.innerHTML = detailsHTML;
}
