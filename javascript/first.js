datatype
----------

String
Number
Boolean
null
undefined


"a", 'a', "4", '4','true',"true" => String
10,99.878, 8789798788, .98   => Number
true,false => Boolean

--------------------------
Es5 => Ecma Script 5
Es6 => Ecma Script 6
---------- 
es5
Assigment Declaration
var a = 10

var a; Declaration
a = 10 => assigment

var   => We can redeclare and reassign

es6
let  => We cannot redeclare but can reassign
const => We cannot redeclare and nor reassign

var a = 10
undefined
a
10
typeof(a)
"number"
var a = 10.98
undefined
typeof(a)
"number"
var a = "hi"
undefined
typeof(a)
"string"
var a = true
undefined
typeof(a)
"boolean"
a= "javascript"



///////// //
var a = ['a','b','c']
var b = [1,2,3]
var c = [true,false]
let city = ['a','b',1,2,true,3,'a']


var city = ['London','NewYork','Delhi']
for(i=0;i<city.length;i++){console.log(city[i])}


var city = ['London','NewYork','Delhi']
for (x in city ){
    console.log(city[x])
    console.log(x)
}

//Es6
(map, filter)

var city = ['London','NewYork','Delhi']
city.map((data) => {return data})


////
var a = [0,1,2,3,4]
a.map((data) => { return data*2})
[0, 2, 4, 6, 8]
a.filter((data) => { return data*2})
 [1, 2, 3, 4]


var age = [18,34,23,19,16]
age.filter((data) => { return data>18})
[34, 23, 19]
age.map((data) => { return data>18})
[false, true, true, true, false]


map is use to itterarte over th value
always return same length of input array

Filter only return those value for which
condition is true
not compulsory always return same length of input array
