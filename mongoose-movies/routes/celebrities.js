const express = require('express');
const router = express.Router();
const Celebrity = require('../models/celebrity');

//SHOW ALL
router.get('/',(req,res,next)=>{
  Celebrity.find((err, result)=>{
    if(err){
      next(err); return;
    }
    res.render('celebrities/index', {
      celebrities : result
    });
  });
});

//show one details
router.get('/:id', (req,res,next)=>{
  const id = req.params.id;
  Celebrity.findById(id, (err,result)=>{
    if(err){
      next();return;
    }
    res.render('celebrities/show',{
      celebrity : result
    });
  });
});

//delete one
router.post('/:id/delete', (req,res,next)=>{
  const id = req.params.id;
  Celebrity.findByIdAndRemove(id, (err,result)=>{
    if(err){
      next();return;
    }
    res.redirect('/celebrities');
  });
});

//show form for new
router.get('/new', (req, res, next)=>{
  res.render('celebrities/new');
});

//create new
router.post('/', (req,res,next)=>{
  const newCeleb = new Celebrity({
      name: req.body.name,
      occupation: req.body.occupation,
      catchPhrase: req.body.catchPhrase
  });

  if(!newCeleb.name){
    return;
  }

  newCeleb.save(err=>{
    if(err){
      next(err); return;
    }
    res.redirect('/celebrities');
  });
});

//Show edit form
router.get('/:id/edit', (req,res,next)=>{
  const id = req.params.id;

  Celebrity.findById(id, (err,result)=>{
    if(err){
      next();return;
    }
    res.render('celebrities/edit',{
      celebrity: result
    });
  });
});

router.post('/:id', (req,res,next)=>{
  const id = req.params.id;
  const updatedCeleb = {
    name : req.body.name,
    occupation: req.body.occupation,
    catchPhrase: req.body.catchPhrase
  };
  Celebrity.findByIdAndUpdate(id, updatedCeleb, (err)=>{
    if(err){
      next();return;
    }

    res.redirect('/celebrities/'+id);
  });

});
module.exports = router;
