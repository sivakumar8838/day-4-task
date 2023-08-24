// Anonymous function

let i = ["a", "b", "b", "c", "c", "a", "d", "d", "d"];
          
function a(i) {
    
    return i.filter((item,

        index) => i.indexOf(item) === index);
}
console.log(a(i));

// IIFE Function

let n = ["a", "b", "b", "c", "c", "a", "d", "d", "d"];
          
(function a(n) {
    
    return i.filter((item,

        index) => i.indexOf(item) === index);
})(n);
console.log(a(n));
