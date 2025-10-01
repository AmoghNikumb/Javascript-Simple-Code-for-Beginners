//maximum element of array
let arr = [1,2,3,5,6,7,9,6,4,2];
let max = -1;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
}
console.log(max);