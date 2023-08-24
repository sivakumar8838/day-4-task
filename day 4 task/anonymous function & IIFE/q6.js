// Anonymous function

median=function(a,b){
  let c=a.concat(b);
let sk=c.sort((a,b)=>(a-b))
let n=sk.length/2;
 console.log(c[n]+c[n-1])
}

let a=[2,3,4,57,];
let b=[7,8,66,1];

median(a,b);

// IIFE function

a1=[1,2,37,4,5];
a2=[36,7,80,];

(function(a,b){
  let c=a.concat(b);
let sk=c.sort((a,b)=>(a-b))
let n=sk.length/2;
 console.log(c[n]+c[n-1])
})(a1,a2);