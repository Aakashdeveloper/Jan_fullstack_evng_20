var express = require('express');
var router = express.Router();
var bodyPaser = require('body-parser');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');


router.use(bodyPaser.urlencoded({extended:true}));
router.use(bodyPaser.json());

var User = require('./User');

router.post('/register',(req,res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password,8 );
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        role:req.body.role?req.body.role:'user'
    },(err,user)=>{
        if(err) throw err;
        res.status(200).send('Succesfully registerd')
    })
})

router.post('/login', (req,res) => {
    User.findOne({email:req.body.email}, (err,user) => {
        if(err) return res.status(500).send({auth:false,token:'error in server'})
        if(!user) return res.status(404).send({auth:false,token:'Not user found'})
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid) return res.status(401).send({auth:false,token:'Wrong password'});
        var token = jwt.sign({id:user._id}, config.secert, {expiresIn:86400});
        res.status(404).send({auth:true,token:token})
    })
});

router.get('/userinfo',(req,res) => {
    var token = req.headers['x-access-token'];
    if(!token) return res.status(401).send({auth:false,token:'Not token found'})
    jwt.verify(token, config.secert, (err,decoded) => {
        if(err) return res.status(505).send({auth:false,token:'Token is not valid'})
        User.findById(decoded.id,{password:0},(err,user)=>{
            res.status(202).send(user)
        })
    })
})

router.get('/users',(req,res) => {
    User.find({},(err,data)=>{
        res.send(data)
    })
})


module.exports=router;
