
// function mainfun(sub,callback){
//     console.log("mainfunctiomn")

//     setTimeout(()=>{
//         console.log(`${sub}kam chal rha he`)
//         callback()
//     })
// }

// function secondfun(){
//     console.log("kam ho gya")
// }

// mainfun("hindi",secondfun)


// function mainfunc(){
//      setTimeout(()=>{
//        console.log("!!!!!!!!!")
//      },1000)
// }

//   mainfunc(function(result){
//      console.log(result)
//   })

 

function mainfun (sub,callback){
    setTimeout(()=>{
        console.log(`${sub}kam chal rha  h `)
        callback()
    })
}

function second(){
      console.log("kam ho gya ")
}

mainfun("hidni",second)