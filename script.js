const apiKey = "c942a98b"
function filmSearch(){
  const searchInput = document.getElementById("searchInput").value.trim()
  if (searchInput === "") {
    alert("Veuillez entrer un titre de film.")
    return
  }
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(searchInput)}`
    fetch(url)
      .then(response => response.json())
      .then(data =>{
        afficherResultats(data.Search)
      })     
      .catch(error=>console.log(error))
}

function afficherResultats(films) {
  const filmListElement = document.getElementById("filmList")
  filmListElement.innerHTML = ""

  if (films && films.length > 0) {
    films.forEach(film => {
      // const listItem = document.createElement("article")
      // listItem.textContent = film.Title
      const movieElement = document.createElement("article")
              
      const titleElement = document.createElement("h2")
      titleElement.innerText = film.Title      
      const imageElement = document.createElement("img")
      imageElement.src = film.Poster
      const btnElement = document.createElement("button")
      btnElement.innerText = "Voir plus"
        
      movieElement.appendChild(titleElement)
      movieElement.appendChild(imageElement)
      movieElement.appendChild(btnElement)

      btnElement.addEventListener("click", () => {
        afficherDetails(film.imdbID)
      });
      filmListElement.appendChild(movieElement);
    });
  } else {
    filmListElement.textContent = "Aucun résultat trouvé."
  }
}

function afficherDetails(imdbID) {
  window.location.href = `film_Infos.html?imdbID=${imdbID}`
}
