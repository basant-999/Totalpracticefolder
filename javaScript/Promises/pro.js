// function data(val){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             if(val){
//               resolve("bhai tera kaam kr diya")
//             }else{
//                 reject("sory yrr bro")
//             }
         
//         })
//     })
// }
// data(true).then((msg)=>{
//       console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// })

//=======================without para meter

function greet(){
    return new Promise((kishan,basant)=>{
        const data = Math.random()>0.5
        console.log(data);
        if(data){
            kishan("right ressolve")
        }
        else{
            basant("wrong reject")
        }
    })
}
greet().then((msg)=>{
    console.log(msg,"then block")
}).catch((err)=>{
    console.log(err,"error block")
})