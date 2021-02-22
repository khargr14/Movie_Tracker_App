//The constructor method is a special method of a class for creating and initializing an object of that class.
  //this. = the attributes for movie. 
  //:title, :director, :summary, :review, :rating

  class Movie { 
    constructor(movie){
      this.id = movie.id;
      this.title = movie.title;
      this.director = movie.director;
      this.summary = movie.summary;
      this.review = movie. review;
      this.rating = movie.rating; 
  
    }
  
   // have to have a moive form(new) 
    // static methods cant not be call from an object it can only be call from class itself,usually is used when you want to 
    //do some something common for all objects so for
  
    static newMovieFrom(user_id){
      let body = document.getElementById('container');
      let form = 
       `<form id="new-movie-form">
        <label>Movie Title:</label>
        <input type="text" id="movie-title" placeholder:"Title">
        <label>Director:</label>
        <input type="text" id="movie-director" placeholder:"Director">
        <label>Summary:</label>
        <input type="text" id="movie-summary" placeholder:"Summary">
        <label>Review:</label>
        <input type="text" id="movie-review" placeholder:"Review">
        <label>What do you think about this Movie? 1-5:</label>
        <input type="text" id="movie-rating">
        </form>` 
  
        body.insertAdjacentHTML('beforeend', form)
        Movie.postMovie(user_id)
  
    }
  
  
  
   // Creating a movie fetch(Post request)
  
  static postMovie(user_id) {
    let newForm = document.getElementById('new-movie-form')
    newForm.addEventListerner('submit', function(e){
      e.preventDefault()
      fetch('http://localhost:3000/api/v1/movies',{
        method: 'POST',
        headers: {
            'Content-Type' : 'applicaiton/json',
            'Accept' : 'applicaiton/json'
        },
        body: JSON.stringify({
          movie: {
              title: e.target.childern[1].vaule,
              director: e.target.children[2].vaule,
              summary: e.target.children[5].vaule,
              review: e.target.children[7].vaule,
              rating: e.target.children[9].vaule,
              user_id :user_id
          }
        })
  
      })
      .then(res =>{
        if(!res.ok){
          throw new Error();
      }
      return res.json();
  
      })
      .then(json =>{
          let newMovie = new Movie(json);
          console.log(newMovie)
          newMovie.appendMovie()
      })
      .catch(error =>{
        console.error('Movie Class Error', error)
      })
    })
  
  }

  appendMovie() {
      let bc = document.getElementsByClassName('movies-container')
      let p = document.createElement('p')
      p.setAttribute('data-id', this.id)
      p.innerHTML = `Title: ${this.title}</br>
                     Director:${this.director}</br>
                     Summary:${this.summary}</br>
                     review:${this.review}</br>
                     Rating:${this.rating}</br>`
      let deleteButton = `button type="button" id="${this.id}">X</button>`
      p.insertAdjacentHTML('beforeend', deleteButton)
      bc[0].appendChild(p)
      let button = (document.getElementById(`${this.id}`)
      this.deleteMovie(button)                  
  }

  deleteMovie(button) {
    button.addEventListerner('click', function(e){
      e.preventDefault()
      fetch(`http://localhost:3000/api/v1/movies/${e.target.parentNode.dataset.id}`,{
        method: 'DELETE'
      })
      e.target.parentElement.remove();
    })
  }
}