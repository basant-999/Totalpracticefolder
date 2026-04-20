import React, { useEffect, useState } from 'react'

const About = () => {
    const [msg, Setmsg] = useState("basant")
    const [count,Stcount] = useState(0)
    const [input,Setinput] = useState("")
    const[data,Setdata] = useState(0)
    const[data1,Setdata1] = useState(0)
    const[data2,Setdata2] = useState(0)
    const[data3,Setdata3] = useState(0)

    const handle=()=>{
          Setmsg("bk")
    }
    useEffect(()=>{
        console.log("kuch ho rha he ")
    },[data,data2])
  return (
    <>
       <div>{msg}</div>
       <button onClick={handle}>change</button>

       {/* ================================================= */}

       <button onClick={()=>{Stcount(count+1)}}>+</button> {count} <button onClick={()=>Stcount(count-1)}>-</button>

       {/* =================================================== */}

     <br />  Enter Name: <input type="text" onChange={(e)=>{Setinput(e.target.value)}} /> <br />
     <span>{input}</span>

     {/* ======================================================= */}

         <button onClick={()=>{Setdata(data+1)}}>add</button> <div>{data}</div>
    <br /> <button onClick={()=>{Setdata1(data1+1)}}>add1</button> <div>{data1}</div>
    <br /> <button onClick={()=>{Setdata2(data2+1)}}>add2</button> <div>{data2}</div>
    <br /> <button onClick={()=>{Setdata3(data3+1)}}>add3</button> <div>{data3}</div>

    </>
  )
}

export default About