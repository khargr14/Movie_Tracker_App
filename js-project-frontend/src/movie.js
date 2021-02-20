const endPoint = "http://localhost:3000/api/v1/movies";

document.addEventListener('DOMContentLoaded', function() {
  console.log('dom content')  
  getMov()
  //eventListen()
})

function eventListen() {
  console.log('eventlisten')
  const createMovieForm = document.getElementById('create-movie-form')

  createMovieForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log('hit')
    createButtonSubmit(e)
  })
}

function getMov(){
  console.log('getmov')
    fetch(endPoint)
    .then(response => response.json())
    .then(mov => {
      //  console.log(movies)\
      
      mov.data.forEach(movie  => {
        console.log(movie)
        const movieEnhancement = `
          <div data-id=${movie.title}>
          <h1>${movie.attributes.title}</h1>
          <h3>${movie.attributes.director}</h3>
            <h2>${movie.attributes.summary}</h2>
            <h4>${movie.attributes.review}</h4>
            <p>${movie.attributes.rating}</p>
            
          
          </div>
          <br><br>`;

        document.querySelector('#movie-container').innerHTML += movieEnhancement
      })
      eventListen()
    })
}

function createButtonSubmit(e) {
  e.preventDefault()
  console.log(e);
}






//const titleInput = document.querySelector('#input-titlte').value

//:title, :director, :summary, :review, :rating -->

