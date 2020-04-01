var express = require('express');
var app = express();
var cors = require('cors');
var db = require('./db');
var port = 5000;

app.use(cors());
var AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})