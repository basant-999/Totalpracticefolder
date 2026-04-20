// function fact(n){
//     if(n===2){
//         return 4;
//     }
//     return n*fact(n-1)
// }

// console.log(fact(4))


function factorial (n){
      if(n===0){
         return 1 
      }else{
         return n* factorial(n-1)
      }
}

console.log(factorial(5))