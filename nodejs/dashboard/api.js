const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const mongoUrl = "mongodb://localhost:27017";
const cors = require('cors');

let db;
let col_name="marchmongo"
app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/',(req,res) => {
    db.collection(col_name).find({}).toArray((err,result) => {
        if(err){
            throw err
        }else{
            res.setHeader('Access-Control-Allow-Origin', '*')
            res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
            res.send(result)
        }
    })
});

app.post('/adduser',(req,res) => {
    var data={
        "_id":req.body.id,
        "name":req.body.name,
        "class":req.body.class
    }

    db.collection(col_name)
        .insert(data,(err,result) => {
            if(err){
                res.status(402).send('error in inserting')
            }else{
                res.status(200).send('Data Inserted')
            }
        })
});


app.delete('/deleteUser',(req,res) => {
    db.collection(col_name).findOneAndDelete({
        "_id":req.body.id
    },(err,result) => {
        if(err){
            res.status(402).send('error in inserting')
        }else{
            res.status(200).send('Data deleted')
        }
    })
});

app.put('/updateuser',(req,res) => {
    db.collection(col_name)
        .findOneAndUpdate({"_id":req.body.id},{
            $set:{
                "_id":req.body.id,
                "name":req.body.name,
                "class":req.body.class
            }
        },(err,result) => {
            if(err){
                res.status(402).send('error in inserting')
            }else{
                res.status(200).send('Data updated')
            }
        })
})


MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Errorr while connecting')
    db = client.db('classpractice');

    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})

