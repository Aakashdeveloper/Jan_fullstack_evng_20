var express = require('express');
var moviesRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";


moviesRouter.route('/')
.get(function(req,res){
  mongodb.connect(url,(err,dc) => {
    if(err){
      res.status(501).send('Error while connecting')
    }else{
      const dbo = dc.db('classdatabase');
      dbo.collection('movies').find({}).toArray((err,data) => {
        if(err){
          res.status(502).send('Error while fetching')
        }else{
          res.render('movies',{title:'Movies Page',moviedata:data})
        }
      })
    }
  })
});

moviesRouter.route('/details')
.get(function(req,res){
  res.send("movies details")
});

module.exports = moviesRouter;