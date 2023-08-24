// IIFE Function 

let i =[1,34,76,8];
(function(a){
    let i =[];
    var x =0
    for(a of a){
        x=x+a;
    }
    i.push(x);
    console.log(i);
})(i);


// Anonymous function

let iarray =
function(a){
    var x =0;
    for(a of a){
        x=x+a;
    }
    return x;
}

let array = [1,34,76,8];
let ans = [iarray(array)];
console.log(ans);