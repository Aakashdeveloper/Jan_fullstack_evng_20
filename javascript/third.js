firstname ="Ammy",
lastname="Steve"

var greet ={
    firstname:'John',
    lastname:'Eva',
    welcome: function(){
        return `hi ${this.firstname} ${this.lastname} welcome to class`
    }
}

//////

function calc(){
    this.sum= function(a,b){return a+b}
    this.sub= function(a,b){return a-b}

    a=10
    return a+a
}

var mycalc = new calc()
mycalc.sum(3,6)
9

/////
class calc {
    constructor(){
        this.sum= function(a,b){return a+b}
        this.sub= function(a,b){return a-b}
    }
}
