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
