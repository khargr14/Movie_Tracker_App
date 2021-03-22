// document.addEventListener('DOMContentLoaded', () => { 

//     User.createUser(); 
    
// })

document.addEventListener('DOMContentLoaded', function() { 

    User.createUser(); 
    
})


class User {
    constructor(user) {
        console.log('conss==>>', user)
        for (const key in user) {
            this[key] = user[key];
        }

        /*this.id = user.id;
        this.name = user.name;
        this.movies = user.movies;*/
     
    }
// Creating a movie fetch(Post request)
    static createUser(user) {
        console.log(user)
        const newUserForm = document.getElementById('new-user-form')
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
                    if (!res.ok) {
                        throw new Error(); // Will take you to the `catch` below --ADD NOTE
                    }
                    return res.json();
                })
                .then(user => {
                    const newUser = new User(user.data ? user.data.attributes : user)
                    console.log(user)
                    newUser.displayUser();
                })
                .catch(error => {
                   console.error('User class Error', error)
            
                })
            })
    }

    displayUser() {
        const body = document.getElementById('container');
        body.innerHTML = ''
        const div = document.createElement('div');
        div.setAttribute('class', 'user-greeting');
        const moviesContainer = document.getElementById('movies-container')
        moviesContainer.classList.remove('hidden')
        const Greeting = document.createElement('p');
        Greeting.innerHTML = `<h1>Hey ${this.name}! What did you see this week?</h1>`
        div.appendChild(Greeting);
        body.appendChild(div);

        console.log('this movss==>>', this.movies)
       
        this.movies?.forEach((movie) => {
                const newMovie = new Movie(movie);
                newMovie.appendMovie();
            })
    

        Movie.newMovieForm(this.id)
    }

}
