function fact(n){
    if(n===2){
        return 4;
    }
    return n*fact(n-1)
}

console.log(fact(4))