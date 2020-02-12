var fs = require('fs');

//Write
fs.writeFile('mytext.txt', 'Hi From NodeJs',function(){
    console.log('Data written')
})

fs.readFile('mytext.txt','utf-8', function(err,data){
    console.log(data)
})


fs.readFile('db.json','utf-8', function(err,data){
    console.log(data)
})