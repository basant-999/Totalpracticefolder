function data(val){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(val){
                resolve("bhai tera kaam kr diya")
            }else{
                reject("sory yrr bro")
            }
         
        })
    })
}
data(true).then((msg)=>{
      console.log(msg)
}).catch((err)=>{
    console.log(err)
})

//=======================without para meter

function greet(){
    return new Promise((resolve,reject)=>{
        const data = Math.random()>0.5
        if(data){
            resolve("right")
        }
        else{
            reject("wrong")
        }
    })
}
greet().then((msg)=>{
    console.log(msg)
}).catch((err)=>{
    console.log(err)
})