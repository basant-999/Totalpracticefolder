import React, { useContext } from 'react'
import Usercontext from './UserContext'
const Profile = ({name}) => {
    const {logout,user,log,setlog} = useContext(Usercontext)

    const toggleLogin =()=>{
        setlog(!log)
    } 
    // console.log(user)
  return (
    <>
      <h1>{name}</h1>
       <h1> greate {user.name}</h1> <br />
       
       <h2>role{user.role}</h2> <br />

       <h2>email{user.email}</h2>

       <button onClick={logout}>logout</button>

    //===================================================

    <h1>status{log? "open":"close"}</h1>
    <button onClick={toggleLogin}>{log? "logout":"login"}</button>

    </>
  )
}

export default Profile