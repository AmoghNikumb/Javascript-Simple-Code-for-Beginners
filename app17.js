let array =[1,2,3,4,5];
const square = array.map((array)=>array*array);
console.log(square);

const sum = array.reduce((acc,cnt)=>acc+cnt,0);
console.log(sum);

let avg = sum/array.length;
console.log(avg);