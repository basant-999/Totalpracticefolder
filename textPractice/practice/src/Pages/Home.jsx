import React, { useState } from 'react'

const Home = () => {
    const [mydata,Setmydata] = useState({
        name:"",age:"", contact:""
    })

    const handleSubmit=(e)=>{
          let name = e.target.name
          let value = e.target.value
          Setmydata((val)=>({...val,[name]:value}))
          
    }
    const submit=(e)=>{
         e.preventDefault()
         console.log(mydata)
         Setmydata({name:"",age:"", contact:""})
    }
  return (
    <>
      <form action=" ">
        Enter name  <input type="text" onChange={handleSubmit} name='name' value={mydata.name}  /> <br />
        Enter age <input type="text"onChange={handleSubmit} name='age' value={mydata.age}   /> <br />
        Enter contact  <input type="text" onChange={handleSubmit} name='contact' value={mydata.contact}   /> <br />
        <button style={{ backgroundColor:"black", color:"white"}} onClick={submit}>submit</button>

      </form>
    </>
  )
}

export default Home