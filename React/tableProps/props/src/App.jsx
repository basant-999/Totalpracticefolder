
import './App.css'
import student from './Data'
import Table from './Table'


function App() {
 const bk = student.map((key)=><Table
      name = {key.name}
      age= {key.age}
      mob={key.mob}
 />)

  return (
    <>
      {bk}
      
    </>
  )
}

export default App
