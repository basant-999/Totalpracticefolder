const bk =[
    {
        "image":"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg",
        "name":"watch",
        "brand":"rolex",
        "price":"200"
    },
      {
        "image":"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/99486859-0ff3-46b4-949b-2d16af2ad421/custom-nike-dunk-high-by-you-shoes.png",
        "name":"shoes",
        "brand":"nike",
        "price":"400"
    },
      {
        "image":"https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.jpg?s=612x612&w=0&k=20&c=3gwUtbgJcRcjB3U60IpRhGNYFSNVYK6QfgrlhVVgK9w=",
        "name":"sunclass",
        "brand":"lancecart",
        "price":"600"
    }
]
const cartitems=[];
const addcar=(key)=>{
    const item = JSON.parse(key);
    const checkitem = cartitems.find(key=>key.name == item.name);
    // console.log(checkitem);
    if(!checkitem){
        cartitems.push(item);
    }
    else{
        // checkitem.qty +=1;
        alert("already add")
    }
    console.log(cartitems);
    refCart();
    return;
}
const increment=(name)=>{
    console.log(name);
    const checkitem = cartitems.find(key=>key.name == name);
    if(checkitem){
        checkitem.qty +=1;
        refCart();
    }
}
const decrement=(name)=>{
    console.log(name);
    const checkitem = cartitems.find(key=>key.name == name);
    if(checkitem){
        if(checkitem.qty > 1){
            checkitem.qty -=1;
            refCart();
            return;
        } 
        alert(" Quantity not less then 1")
    }
}

const refCart=()=>{
    let tableDiv = document.querySelector("#tableData")
    let qtyIntoPrice =0;
    tableDiv.innerHTML = cartitems.map((key)=>{
        qtyIntoPrice = key.qty * key.price 
        return `
    <tr>
        <td><img src="${key.image}" height="50"></td>
        <td>${key.name}</td>
        <td><button onclick="increment('${key.name}')">+</button>${key.qty}<button onclick="decrement('${key.name}')">-</button></td>
        <td>${key.price}</td>
        <td>${qtyIntoPrice}</td>
    </tr>
    `;})
}



let selectdiv = document.querySelector("#orkuchh")
// console.log(selectdiv)

 selectdiv.innerHTML = bk.map((key)=>
     `<div>
        <img src="${key.image}" height="50px">
        <h2>${key.name}</h2>
        <p>${key.brand}</p>
        <p>${key.price}</p>
        <button onclick='addcar(\`${JSON.stringify({...key,qty:1})}\`)'>aadtocar</button>
    </div>`
).join(" ")

// console.log(bk)