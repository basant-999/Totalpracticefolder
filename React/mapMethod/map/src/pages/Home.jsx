import { useState } from "react"

// const bk = [
//     {
//         city:"bareli",
//         email:"bk@123",
//         password:1234
//     },
//     {
//         city:"bhopal",
//         email:"kk@123",
//         password:1234
//     },
//     {
//         city:"bareli",
//         email:"ssh@123",
//         password:1234
//     },
//     {
//         city:"bareli",
//         email:"serf@123",
//         password:1234
//     },

// ]

const Home = () => {
    const [bk,Setbk] = useState([
        {
            city:"bareli",
            email:"bk@123",
            password:1234
        },
        {
            city:"bhopal",
            email:"kk@123",
            password:1234
        },
        {
            city:"bareli",
            email:"ssh@123",
            password:1234
        },
        {
            city:"bareli",
            email:"serf@123",
            password:1234
        },
    
    ])

    const handlefu=(city)=>{
        const update = bk.filter(item=>item.city != city)
        Setbk(update)

    }
   

  return (
    <>

    <table>
            <thead>
                <tr>
                     <th>sn</th>
                    <th>city</th>
                    <th>email</th>
                    <th>password</th>
                    <th>delete</th>
                 </tr>
            </thead>
            <tbody>
              {bk.map((key,index)=>{
                return(
                    <>
                    <tr>
                        <td>{index+1}</td>
                    <td>{key.city}</td>
                    <td>{key.email}</td>
                    <td>{key.password}</td>
                    <td><button onClick={()=>{handlefu(key.city)}}>del</button></td>
                    </tr>
                    </>
                )
              })}
            </tbody>
    </table>
   
    </>
  )
}

export default Home
