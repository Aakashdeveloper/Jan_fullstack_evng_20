var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var superagent = require('superagent');
var request = require('request');
var port = 7800;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
    res.render('index')
})

app.get('/home',(req,res) => {
    const {query} = req;
    const {code} = query;
    if(!code){
        res.send({
            success:false,
            message:'Error on code'
        })
    }

    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'0c0b5b30456ca86a2703',
            client_secret:'f6417f55edda64f016c1695eb2d1fe2198f80358',
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            var acctoken = result.body.access_token
            const options ={
                url: 'https://api.github.com/user',
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':'token '+acctoken,
                    'User-Agent':'Puja'
                }
            };
            request(options,(err,response,body)=>{
                return res.send(body)
            })
        })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})