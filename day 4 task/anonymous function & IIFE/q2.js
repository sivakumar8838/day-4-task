// Anonymous function


let i=function (a) {
    
     for (var i=0; i<a.length; i++){
a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);

     }
     console.log(a);
   
    }
    let array=['i', 'am', 'siva'];
    i(array)

    // IIFE Function

    let a = ['i', 'am', 'siva'];
    (function (a) {
    
      for (var i=0; i<a.length; i++){
     a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
 
      }
      console.log(a);
     })(a);
     
 
  