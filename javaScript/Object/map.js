
let obj = [
    {
        "id":1,
        "img":"https://images.pexels.com/photos/28435070/pexels-photo-28435070/free-photo-of-ancient-rock-tombs-in-dalyan-turkiye.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name":"basant",
        "course":"MERN",
        "mobno":1236547890,
    },
    {   
        "id":2,
        "img":"https://images.pexels.com/photos/28184438/pexels-photo-28184438/free-photo-of-a-person-standing-in-the-grass-with-the-ocean-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name":"kisan",
        "course":"phython",
        "mobno":901254687,
    },
    {
        "id":3,
        "img":"https://images.pexels.com/photos/26898886/pexels-photo-26898886/free-photo-of-people-sitting-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "name":"ram",
        "course":"java",
        "mobno":901254687,
    }

];


let select = document.querySelector("#output")
select.innerHTML = obj.map((e)=>`
      <tr>
    <td>${e.id}</td>
     <tr><img width="100" src="${e.img}"><tr/>
    <td>${e.course}</td>
    <td>${e.name}</td>
    <td>${e.mobno}</td>
      </tr>

`).join(" ")
