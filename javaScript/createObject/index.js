function submit(){
    let obj = {
        name:document.querySelector("#name").value,
        city:document.querySelector("#city").value,
        degree:document.querySelector("#degree").value
    }

    localStorage.setItem("data",JSON.stringify(obj))
}

let ma = JSON.parse(localStorage.getItem("data"))
console.log(ma)


 document.querySelector("#myname").innerHTML=ma.name
document.querySelector("#mycity").innerHTML=ma.city
document.querySelector("#mydegree").innerHTML=ma.degree

