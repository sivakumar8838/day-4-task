// Anonymous function

let rorate=function(a,k){
    for(let i=0;i<k;i++){
        a.unshift( a.pop());  
        
    }
    console.log(a)
      }
    

let x=[1,2,3,4,5];
let k=3
rorate(x,k);

// IIFE Function

(function(){

    let a=[1,2,3,4,5];
    let k=4;
    for(let i=0;i<k;i++){
      a.unshift(a.pop());  
    }
    console.log(a);
    
})();