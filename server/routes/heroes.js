var express = require('express');
var router = express.Router();
var Hero = require('../models/hero');

//Retrieve Heroes

router.get('/', function (req, res){
  Hero.find({}, function(err, heroes) {
    if(err) {
      res.sendStatus(500);
      return;
    }
    res.send(heroes)
  })
})

//Create Heroes

router.post('/', function (req, res) {
  console.log('POST', req.body);
  var hero = Hero(req.body);
  hero.save(function (err) {
    if(err) {
      res.sendStatus(500);
      return;
    }
    res.sendStatus(201);
  });
});

//Delete Heroes

router.delete('/:id', function (req, res) {
  var id = req.params.id;
  Hero.findByIdAndRemove(id, function(err) {
    if(err) {
      res.sendStatus(500);
      return;
    }

    res.sendStatus(204);
  });
});

module.exports = router;
