import React, { useEffect, useState } from 'react'
import axios from "axios"
import { HiArchiveBoxXMark } from "react-icons/hi2";

const App = () => {
    const [input,Setmyinput] = useState({
        name:"", tasktype:"",status:"uncheck"
    })
     const [getmydata,Setgetmydata] = useState([])
    
     const handlesubmit=(e)=>{
           let name = e.target.name
           let value = e.target.value
            Setmyinput(val=>({...val,[name]:value}))
            console.log(input)
     }

       const finalsubmit=()=>{
            // duplicate insert n ho
            const dupli = getmydata.some((item)=>{
                 return(
                   
                    item.name===input.name && item.tasktype===input.tasktype
                  
                 )
            })
             if(dupli){
              alert("alredy added")
              return;
             }

            console.log(input)
            Setmyinput(
              {
                name:"", tasktype:""
              }
            )

              axios.post("http://localhost:3000/student",input).then(()=>{
                alert("succesful insert")
                getdata()
              })
               
       }
       const handleCheck=(ID)=>{
            console.log(ID)
            const checkData = getmydata.find(key=>key.id == ID);
            console.log(checkData);
            const changeStatus = checkData.status === "uncheck" ? "uncheck" : "check"

            axios.patch(`http://localhost:3000/student/${ID}`,{status:changeStatus}).then(
              ()=>{
                // alert("status updated!!")
                getdata()
              }
            )
       }

        const getdata=async()=>{
            const res = await axios.get("http://localhost:3000/student")
            console.log(res.data)
            Setgetmydata(res.data)

        }

          const mydelete=(id)=>{
              axios.delete(`http://localhost:3000/student/${id}`).then(()=>{
                 alert("deleted successfully")
                 getdata()
              })
          }

        useEffect(()=>{
               getdata()
        },[])


        const ans = getmydata.map((key)=>{
            return(
              <>
                <tr>
                  <td><input type="checkbox" name="" id="" onChange={()=>{handleCheck(key.id)}} /></td>
                    <td style={{textDecoration:key.status == "check" ? "line-through" :"none"}}> {key.name} </td>
                    <td style={{textDecoration:key.status == "check" ? "line-through" :"none"}}>  {key.tasktype}</td>
                    <td><HiArchiveBoxXMark onClick={()=>mydelete(key.id)} /></td>
                </tr>
                
              </>
            )
        })
      
  return (
       <>
           input <input type="text" name='name' value={input.name}  onChange={handlesubmit} />
           <select name="tasktype" id="" value={input.tasktype}  onChange={handlesubmit}>
              <option >select</option>
              <option value="work">work</option>
              <option value="urgent">urgent</option>
              <option value="important">importtant</option>
           </select>

           <button onClick={finalsubmit} > submit</button> <br />

              
                 <table border={"1px solid grey"} >
                    <thead>
                        <tr>
                          <th>compalte</th>
                            <th>task</th>
                            <th>tasktype</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                      <tbody>
                            {ans}
                      </tbody>
                 </table>
       </>

   
  )
}

export default App