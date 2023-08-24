let primeNumber = (n) => {
    for (let i = 2; i < n; i++){
        if (n % i == 0)
            return false;
    }
    return n>1;
  }
  
  let A = [3,4,6,9,71,-9,-1,1,23,5];
  console.log(A.filter(primeNumber));
  