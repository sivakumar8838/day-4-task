let iarray =(a) => {
    var x =0;
    for(a of a){
        x=x+a;
    }
    return x;
}

let array = [1,34,76,8];
let ans = [iarray(array)];
console.log(ans);