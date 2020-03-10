var express = require('express');
var moviesRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

/*var menu = [
    {name:'Home', Link:'/'},
    {name:'Movies', Link:'/movies'},
    {name:'Artists', Link:'/artists'}
]
*/

function route(menu){
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
            res.render('movies',{title:'Movies Page',moviedata:data,menu:menu})
          }
        })
      }
    })
  });
  
  moviesRouter.route('/details/:id')
  .get(function(req,res){
    //var id = req.params.id;
    var {id} = req.params
    mongodb.connect(url,(err,dc) => {
      if(err){
        res.status(501).send('Error while connecting')
      }else{
        const dbo = dc.db('classdatabase');
        dbo.collection('movies').findOne({_id:id},(err,data) => {
          if(err){
            res.status(502).send('Error while fetching')
          }else{
            res.render('moviedetails',{title:'Movies Page',moviedata:data,menu})
          }
        })
      }
    })
  });

  return moviesRouter
}


module.exports = route;