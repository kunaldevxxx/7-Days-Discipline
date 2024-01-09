//ek function uske andar return karo ek function ko return hone wala function parent function ka variable/data use karega 

function  abcd(){ //2
    var x=12;//3
    return function(){//4
        console.log(x);
    }
}
var a=abcd(); //1>5
a();