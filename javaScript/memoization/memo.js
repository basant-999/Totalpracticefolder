// function add(a,b){
//     return a+b;
// }

// const x =add(4+5,2)
// console.log(x)


// ==============

function memoiz (fn){
    const cache = {};

    return function (...arg){
        const key = arg.join("+");

        if(cache[key]){
            console.log("cache mila" ,key);
            return cache[key]
        }

        console.log("new calcute",key)
        const result = fn(...arg)
        cache[key] =result
         return result
    }
}

function add(a,b){
    console.log("adding")
    return a+b
}

const fastadd = memoiz(add)

console.log(fastadd(5,8))
console.log(fastadd(5,8))


