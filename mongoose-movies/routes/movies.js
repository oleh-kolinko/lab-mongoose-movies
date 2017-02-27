const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');

//show ALL
router.get('/',(req,res,next)=>{
  Movie.find((err,result)=>{
    if(err){
      next(err);return;
    }

    res.render('movies/index',{
      movies: result
    });
  });
});

//show details
router.get('/:id',(req,res,next)=>{
  const id = req.params.id;

  Movie.findById(id,(err,result)=>{
    if(err){
      next();return;
    }

    res.render('movies/show',{
      movie: result
    });
  });
});
router.post('/:id/delete',(req,res,next)=>{
  const id = req.params.id;
  Movie.findByIdAndRemove(id, (err,result)=>{
    if(err){
      next(); return;
    }
    res.redirect('/movies');
  });
});

//show form for new movie
router.get('/new', (req,res,next)=>{
  res.render('movies/new');
});

//Create new
router.post('/', (req, res, next)=>{
  const newMovie = new Movie({
    name: req.body.name,
    genre: req.body.genre,
    plot: req.body.plot
  });

  if(!newMovie.name){
    return;
  }

  newMovie.save(err=>{
    if(err){
      next(); return;
    }
    res.redirect('/movies');
  });
});

//show edit form
router.get('/:id/edit', (req,res,next)=>{
  const id = req.params.id;
  Movie.findById(id,(err,result)=>{
    if(err){
      next(); return;
    }

    res.render('movies/edit',{
      movie: result
    });
  });
});

//submit edit form
router.post('/:id', (req,res,next)=>{
    const id = req.params.id;

    const updatedMovie = {
      name: req.body.name,
      genre: req.body.genre,
      plot: req.body.plot
    };

    Movie.findByIdAndUpdate(id, updatedMovie, (err, result)=>{
      if(err){
        next(); return;
      }

      res.redirect('/movies/'+id);
    });
});

module.exports = router;
