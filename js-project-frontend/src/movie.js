//The constructor method is a special method of a class for creating and initializing an object of that class.
  //this. = the attributes for movie. 
  //:title, :director, :summary, :review, :rating

class Movie { 
  constructor(movie){
    this.id = movie.id;
    this.title = movie.title;
    this.director = movie.director;
    this.summary = movie.summary;
    this.review = movie. rating;

  }

 // have to have a moive form(new) 
  // static methods cant not be call from an object it can only be call from class itself,usually is used when you want to 
  //do some something common for all objects so for

  static newMovieFrom(user_id){
    let body = document.getElementById('container');
    console.log(form)
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

      body.insertAdjacentHTML('beforend', form)
      Movie.postMovie(user_id)

  }



}
