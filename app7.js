let odd = function(n){
    console.log(!(n%2==0));
}
let even = function(n){
    console.log((n%2==0));
}

function OddEveFactory(request){
    if(request=='odd'){
        let odd = function(n){
    console.log(!(n%2==0));
    }
    return odd;
    }

    if(request=='even'){
        let even = function(n){
    console.log((n%2==0));
    }
    return even;
    } 
    else{
        console.log("wrong request")
    }
}
let request = 'odd';