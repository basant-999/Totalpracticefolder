

import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [input,Setmyinput] = useState({
       task:"",tasktype:"",status:"unchenk"
  })
  const [getmydata,Setgetmydata] = useState([])
  const [editid,Seteditid] = useState()
    const handlesubmit=(e)=>{
           let name= e.target.name
           let value=e.target.value

           Setmyinput(val=>({...val,[name]:value}))
           console.log(input)
    }

      const finalSubmit=()=>{

          if(editid){
            axios.patch(`http://localhost:3000/student/${editid}`,input).then(()=>{
              alert("edit yoyr task")
              loaddata()

            })
          }else{
               const dublicate  =  getmydata.some((key)=>{
              return(
                  key.task == input.task && key.tasktype == input.tasktype
              )
           })

           if(dublicate){
               alert("alredu add")
               return
           }
           axios.post("http://localhost:3000/student",input).then(()=>{
              alert("addtask")
              loaddata()
              Setmyinput({task:""})
           })
          }
           
      }


      const loaddata=async()=>{
            const respo = await axios.get("http://localhost:3000/student")
            // console.log(respo.data)
            Setgetmydata(respo.data)
           
      }

      const deletetask=(id)=>{
            // console.log(id)
            axios.delete(`http://localhost:3000/student/${id}`).then(()=>{
              alert ("delete sucessfulltu")
              loaddata()
            })
      }

      const handlecheck=(id)=>{
          // console.log(id)
          const checkdata = getmydata.find(key=>key.id == id)
          // console.log(checkdata)
          const statuscheck = checkdata.status == "unchek"?"unchek":"check"
          axios.patch(`http://localhost:3000/student/${id}`,{statuscheck}).then(()=>{
             alert("status update")
             loaddata()
          })
          
      }

      const checktruefun=(id)=>{
                    const checkdata = getmydata.find(key => key.id === id);
          if (!checkdata) return;

          const statuscheck = "unchek"; // forcefully uncheck kar do

          axios.patch(`http://localhost:3000/student/${id}`, { statuscheck })
            .then(() => {
              alert("Status updated to unchek");
              loaddata();
            })
      }

      useEffect(()=>{
          loaddata()
      },[])


     const ans = getmydata.map((key) => {
  return (
    <div key={key.id} style={{
      border: '1px solid gray',
      padding: '8px',
      margin: '8px 0',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#f5f5f5'
    }}>
      <div>
         <input type="checkbox" onChange={()=>{checktruefun(key.id)}}/>
        <input type="checkbox" onChange={()=>handlecheck(key.id)} />
        <p style={{ margin: '4px 0', fontSize: '16px',textDecoration:key.statuscheck == "check" ? "line-through" :"none" }}>{key.task}</p>
        <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>Type: {key.tasktype || "N/A"}</p>
      </div>
      <button 
        onClick={() => deletetask(key.id)} 
        style={{
          background: '#e74c3c',
          color: '#fff',
          border: 'none',
          padding: '6px 10px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
                   <td><button onClick={()=>editdata(key.id)}>edit</button></td>
    </div>
  );
});

  const editdata=(id)=>{
        //  console.log(id)
        const toedit = getmydata.find(key=>key.id===id)
        // console.log(toedit)
        if(toedit){
            
          Setmyinput({
                 task:toedit.task,
                tasktype:toedit.tasktype,
                status:toedit.statuscheck
          })
          Seteditid(id)
        }
  }

   

  return (
    <>
      Input: <input type="text" name='task' value={input.task} onChange={handlesubmit} />
      <select name="tasktype" id="" onChange={handlesubmit}>
         <option disabled >select your work</option>
         <option value="js">js</option>
         <option value="html">html</option>
         <option value="react">react</option>

      </select>
      <button onClick={finalSubmit}>add</button>  <br />
       
      <br />
      <hr />
      <h3>Task List:</h3>
      {ans}
    </>
  )
}

export default App
