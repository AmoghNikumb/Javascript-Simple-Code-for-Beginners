const arrayFunction = (arr) =>{
    let total = 0;
    for(let number of arr){
        total=total+number; //sum of numbers in array
    }
    return total/arr.length; //average of numbers in array
};
let arr = [1,2,3,4,5,6];
console.log(arrayFunction(arr));