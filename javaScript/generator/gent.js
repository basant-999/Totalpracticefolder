

function show (){
    let  str = "12336547899qwerttyuippjgssxvb@#$%"
     let store = "";


     for (let i=0; i<6;i++){
        let random = Math.random()
        // console.log(random)
        const restu = random*str.length
        // console.log(restu)

        let ans  = Math.floor(restu) 
        // console.log(ans)

        let  cha = str.charAt(ans)
        // console.log(cha)
        store = store+ cha
        console.log(store)
     }

      let bk = document.querySelector("#output")
      bk.innerHTML = store


}