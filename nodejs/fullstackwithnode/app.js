var express = require('express');
var app = express();
var port = 9700;

var menu = [
    {name:'Home', Link:'/'},
    {name:'Movies', Link:'/movies'},
    {name:'Artists', Link:'/artists'}
]

var moviesRouter = require('./src/routes/moviesRoute')(menu);
var productRouter = require('./src/routes/productRoutes');

app.use(express.static(__dirname+'/public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');


app.get('/',function(req,res){
    //res.send("Welcome to Node")
    res.render('index',{title:'Home Page',menu:menu})
});

app.use('/movies', moviesRouter);
app.use('/product',productRouter);


app.listen(port,function(err){
    if(err) throw err;
    else{
        console.log(`Server is running on port ${port}`)
    }
})
