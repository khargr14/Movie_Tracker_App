document.addEventListener('DOMContentLoaded', () => {

    User.createUser();

})

class User {
    constructor(user)
    console.log('conss==>>', user)
    this.id = user.id;
    this.name = user.name;
    this.movies = user.movies;

}

// Creating a User fetch(Post request)
static creatUser(User) {
    let newUserFrom = document.getElementById('new-user-form')
    newUserForm.addEventListener('submit', function(e){
        e.preventDefault();
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: e.target.children[1].value
                }
            })
        })
            .then(res => {
                if(!res.ok) {
                    throw new Error();
                }
                return res.json();
            })
            .then (user => {
                let newUser = new User(user.data.attributes)
                console.log(user)
                newUser.displayUser();
            })
            .catch(error => {
                console.error('User class Error', error)
            })
        })
    }

    displayUser(){
        let body = document.getElementById('container');
        body.innerHTML = ''
        let div = document.createElement('div');
        div.setAttribute('class', 'user-greeting');
        let bc = document.getElementById('movies-continer')
        bc.classList.remove('hidden')
        let Greeting = document.createElement('p');
        Greeting.innerHTML = `<h1> ${this.name}!! What did you see this week?</h1>`
        div.appendChild(Greeting);
        body.appendChild(div);

        console.log( 'this movsss===>>', this.movies)

        this.movies.forEach((movie) => {
            let newMovie =new Movie(movie);
            newMovie.appendMovie();
        })
        Movie.newMovieForm(this.id)
    }
}