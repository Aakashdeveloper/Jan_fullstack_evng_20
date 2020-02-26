var express = require('express');
var app = express();
var port = 9700;

var movies = [
    {
        "_id": "5ab12612f36d2879268f284a",
        "name": "Black Panther",
        "language": "ENGLISH",
        "rate": 4.5,
        "type": "Action Adventure Fantasy",
        "imageUrl": "https://image.ibb.co/f0hhZc/bp.jpg"
      },
      {
        "_id": "5ab12666f36d2879268f2902",
        "name": "Death Wish",
        "language": "ENGLISH",
        "type": "Action Crime Thriller",
        "rate": 3.2,
        "imageUrl": "https://image.ibb.co/gC9PfH/dw.jpg"
      },
      {
        "_id": "5ab12678f36d2879268f291d",
        "name": "Coco",
        "language": "ENGLISH",
        "type": "Adventure Animation Family",
        "rate": 5,
        "imageUrl": "https://image.ibb.co/dQwWSx/coco.jpg"
      }
]

var product=[
    
  {
    "_id": "5a05dacc734d1d68d42d31f3",
    "productId": 1,
    "productName": "Leaf Rake",
    "productCode": "GDN-0011",
    "releaseDate": "March 19, 2016",
    "description": "Leaf rake with 48-inch wooden handle.",
    "price": 19.95,
    "starRating": 3.5,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
  },
  {
    "_id": "5a05daec734d1d68d42d32ca",
    "productId": 2,
    "productName": "Garden Cart",
    "productCode": "GDN-0023",
    "releaseDate": "March 18, 2016",
    "description": "15 gallon capacity rolling garden cart",
    "price": 32.99,
    "starRating": 4.2,
    "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
  },
  {
    "_id": "5a05db08734d1d68d42d3300",
    "productId": 3,
    "productName": "Hammer",
    "productCode": "TBX-0048",
    "releaseDate": "May 21, 2016",
    "description": "Curved claw steel hammer",
    "price": 8.9,
    "starRating": 4.8,
    "imageUrl": "https://i.ibb.co/TrR7jkM/hammer.png"
  }
]


app.get('/',function(req,res){
    res.send("Welcome to Node")
});


app.get('/products',function(req,res){
    res.send(product)
});

app.get('/movies',function(req,res){
    res.send(movies)
});

app.listen(port,function(err){
    if(err) throw err;
    else{
        console.log(`Server is running on port ${port}`)
    }
})