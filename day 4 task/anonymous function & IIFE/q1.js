// Anonymous function

function findEvenNumbers(numbers){
    let evenNumbers = [];
    for(let number of numbers){
        if (number % 2!=0){
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}
let numbers = [2, 3, 5, 7, 8, 6,4]

console.log(findEvenNumbers(numbers));
    
// IIFE Function


(function findEvenNumbers(numbers) {
    let evenNumber=[];
    for(let number of numbers){
    if (number % 2 !=0){
        evenNumber.push(number);
    }
    return evenNumber;
}
})([1, 2, 3, 4, 5, 6]);
console.log(findEvenNumbers(numbers));


    