let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let min = array.reduce((min, el) => {
    return (min < el) ? min : el;
});

console.log(min); 
