import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Practice = () => {
     const [myinput ,Setmyinput] = useState({
         task:"", tasktype:""
     })

     const [getmydata,Setgetmydata] = useState([])
     const [editid,Seteditdata] = useState()

     const handlesubmit=(e)=>{
          let name =  e.target.name 
          let value = e.target.value

          Setmyinput((val)=>({...val,[name]:value}))
          console.log(myinput)
     }


    const finalsubmit = () => {
  if (editid) {
    // ✅ Update existing record
    axios.patch(`http://localhost:3000/student/${editid}`, myinput).then(() => {
      alert("Task updated successfully!");
      Seteditdata(""); // reset edit id
      Setmyinput({ task: "", tasktype: "" }); // reset input
      loaddata();
    });
  } else {
    // ✅ Check duplicate before adding new
    const duplicate = getmydata.some(
      (key) => key.task === myinput.task && key.tasktype === myinput.tasktype
    );

    if (duplicate) {
      alert("Task already added!");
      return;
    }

    // ✅ Add new record (missing in your code)
    axios.post("http://localhost:3000/student", myinput).then(() => {
      alert("Task added successfully!");
      Setmyinput({ task: "", tasktype: "" });
      loaddata();
    });
  }
};

     const taskdelete=(id)=>{
          console.log(id)
          axios.delete(`http://localhost:3000/student/${id}`).then(()=>{
               alert("delete succc!!!!!!!11111")
               loaddata()
          })
     }


     const editdata=(id)=>{
           console.log(id)
           const toedit = getmydata.find(key=>key.id===id)
           console.log(toedit)

           if(toedit){
             Setmyinput({
                 task:toedit.task ,
                 tasktype:toedit.tasktype 
             })
             Seteditdata(id)
           }

     }

     const loaddata=async()=>{
          const respo = await axios.get("http://localhost:3000/student")
          console.log(respo.data)
          Setgetmydata(respo.data)

     }


     useEffect(()=>{
           loaddata()  
     },[])


      const ans=getmydata.map((key)=>{
           return(
            <>
              <span>{key.task}</span>
              <span>{key.tasktype}</span>
              <button onClick={()=>{taskdelete(key.id)}}> delete </button>
              <button onClick={()=>{editdata(key.id)}}>edit</button>
            </>
           )
      })


  return (
   <>
     Enter task <input type='text' name='task' value={myinput.task} onChange={handlesubmit}  /> 
     <select name="tasktype" id="" value={myinput.tasktype} onChange={handlesubmit}  >
          <option value="html">html</option>
          <option value="css">css</option>
          <option value="react">react</option>

     </select>

     <button onClick={finalsubmit} style={{backgroundColor:"black", color:"white", border:"1px"}}>add</button>

     <p>
        {ans}

     </p>
   </>
  )
}

export default Practice