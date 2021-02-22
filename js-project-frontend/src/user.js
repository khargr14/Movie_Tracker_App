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
