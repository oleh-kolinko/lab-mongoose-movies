const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lab-moviesDev');

const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
// const celebrities = [
//   {
//     name: 'Snoop Dogg',
//     occupation: 'Rapper',
//     catchPhrase: 'Fo shizzle'
//   },
//   {
//     name: 'Dwayne Johnson',
//     occupation: 'Actor',
//     catchPhrase: "The ROCK"
//   },
//   {
//     name: 'Donald Trump',
//     occupation: 'US President',
//     catchPhrase: "Let's build a wall"
//   },
// ];
//
//
// Celebrity.create(celebrities, (err,docs)=>{
//   if(err){
//     console.log('db error');
//     return;
//   }
//
//   docs.forEach( doc =>{
//     console.log(`name -> ${doc.name},   id -> ${doc._id}`);
//   });
//   mongoose.disconnect();
// });

const movies = [
  {
    name: 'X-Men Origins: Wolverine',
    genre: 'Action',
    plot: 'American superhero film based on the Marvel Comics fictional character Wolverine'
  },
  {
    name: 'Home alone 2',
    genre: 'Comedy',
    plot: "Kevin McCallisterloses track of his father at the airport, he mistakenly gets on a plane headed for New York City"
  },
  {
    name: 'Furious 7',
    genre: 'Action',
    plot: `After defeating international terrorist Owen Shaw, Dominic Toretto,
    Brian O'Conner and the rest of the crew have separated to return to more normal lives`
  },
];

Movie.create(movies, (err,docs)=>{
  if(err){
    next(err); return;
  }

  docs.forEach( doc =>{
    console.log(` name -> ${doc.name}, id -> ${doc._id}`);
  });
  mongoose.disconnect();
});
