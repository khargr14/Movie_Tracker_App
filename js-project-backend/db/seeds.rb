# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
movies = Movie.create([ 
    { title: 'We Can Be Heroes', summary: 'When alien invaders capture Earth’s superheroes, their kids must learn to work together to save their parents — and the planet', director: 'YaYa Gosselin', review: 'This we an ok movie', rating: '3 ', user_id: 1 }, 
    { title: 'Spenser Confidential', summary: 'Spenser, an ex-cop and ex-con, teams up with aspiring fighter Hawk to uncover a sinister conspiracy tied to the deaths of two Boston police officers.',
              director: 'Mark Wahlberg', review: 'This is a great action movie', rating: '4', user_id: 1},
    { title:  'Outside the Wire', summary: 'In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack.',
              director: 'Damson Idris', review: ' This movie kept me on my toes', rating: '5', user_id: 1 },
    { title:  'The Secret Life of Pets 2', summary: 'On a farm outside New York, Max aims to boost his confidence while in the city, Snowball attempts to rescue a tiger cub and Gidget pretends to be a cat.',
              director: 'Kevin Hart', review: 'This is a cute movie for kids', rating: '3', user_id: 2},
    { title: 'Good Burger', summary: 'Working at a neighborhood fast-food joint, two teens try to save the restaurant when a giant burger franchise fires up the competition.',
              director: 'Kel Mitchell', review: 'This movie is good to watch to kill time', rating: '2', user_id: 2},
    { title: 'Cloudy with a Chance of Meatballs 2', summary: 'Inventor Flint Lockwood battles mutant food beasts created by his notorious machine, including shrimpanzees, tacodiles and jellyfish sandwiches',
                director: 'Bill Hader', review: 'Great family movie', rating: '3', user_id: 2}
      
    
    ])


    