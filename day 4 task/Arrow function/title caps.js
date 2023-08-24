let i= (a) => {
    
    for (var i=0; i<a.length; i++){
a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);

    }
    console.log(a);
  
   }
   let array=['i', 'am', 'siva'];
   i(array)