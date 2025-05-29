
function mainfun(sub,callback){
    console.log("mainfunctiomn")

    setTimeout(()=>{
        console.log(`${sub}kam chal rha he`)
        callback()
    })
}

function secondfun(){
    console.log("kam ho gya")
}

mainfun("hindi",secondfun)