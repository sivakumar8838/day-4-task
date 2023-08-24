// Anonymous function

let palindromes=function(arr){
    let as=[];
    let sk=[];
  for(let i=0;i<arr.length;i++){
    as.push(arr[i].split('').reverse().join(''));
 
  }
  for(let i=0;i<arr.length;i++){
    for(let n=0;n<as.length;n++){
       if(arr[i]===as[n]){
          sk.push((arr[i]));
       }
    }
  }
  return sk;
 }
 
 let a = ['12321', 'siva', '1234', 'mom'];
 let x=(palindromes(a));
 console.log(x);

 // IIFE function
 
 let a2 = ['12321', 'siva', '1234', 'mom'];
 (function(arr){
    let as=[];
    let sk=[];
  for(let i=0;i<arr.length;i++){
    as.push(arr[i].split('').reverse().join(''));
 
  }
  for(let i=0;i<arr.length;i++){
    for(let n=0;n<as.length;n++){
       if(arr[i]===as[n]){
          sk.push((arr[i]));
       }
    }
  }
  console.log(sk);
 })(a2);
 

