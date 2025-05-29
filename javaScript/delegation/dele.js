
document.getElementById("fruit").addEventListener("click",function(e){
    if(e.target.tagName == "LI"){
        console.log(e.target.textContent)
    }

})