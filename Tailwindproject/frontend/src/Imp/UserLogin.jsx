import React, { useState } from 'react'
import Images from './ImagesObject'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import LoginSlider from './LoginSlider';
import Base_url from '../Base_url';
import axios from 'axios'
import{useNavigate} from 'react-router-dom'
const UserLogin = () => {

     const navigate = useNavigate()
     const [showPassword,setShowPassword] = useState(false)
     const [password,setPassword] = useState('')
     const [email,setEmail] = useState('')

     const finalsubmit=async(e)=>{
            e.preventDefault()
            console.log("emai",email)
            console.log("password",password)

            let api = `${Base_url}user/userlogin`

            try {
                  const respose = await axios.post(api,{email:email,password})
                  console.log(respose.data.msg)
                  console.log(respose.data.token)

                

                    if (respose.data.msg === "login success") {
                         localStorage.setItem("token",respose.data.token)
                    alert("Login successful");
                    console.log("Navigating to dashboard...");
                  navigate("/dashboard")
                    } else {
                    alert(respose.data.msg);
                    }

                    
            } catch (error) {
                 alert(error.response.data.msg)
            }
            
            
     }
  return (
   <> 
       
         
         {/*===============  */}
        <div className=" w-full flex h-screen  ">
           <div  className="w-1/2">
                 <LoginSlider/>
           </div>
             <div className="w-1/2 flex justify-center items-center bg-gray-400">
           <div  className="bg-white rounded-2xl shadow-md w-full max-w-md p-8">
            <div className=' flex flex-col  text-2xl font-semibold text-center  mb-6 items-center'>
                 <img src={Images.eicherlogo} alt="eicher" className='h-10' />
                 <h1 className="text-2xl font-semibold mt-4">log in</h1>
            </div>
            <form  className="space-y-4">
                <div>
                    <label className='text-sm font-medium mb-1' >Email or Pnone Number</label>
                    <input type="text" name="" id="" placeholder='enter your email or  phone number'
                    className='px-3 py-2 border rounded w-full outline-none focus:ring focus:border-blue-500'
                    required value={email} onChange={(e)=>(setEmail(e.target.value))}
                     />
                </div>
                 <div>
                    <label className='text-sm font-medium mb-1'>Password</label>
                         <div className='relative'>
                         <input type={showPassword?"text":"password"}  name="" id="" placeholder='enter your password'
                         className='px-3 py-2  border rounded w-full outline-none focus:ring focus:border-blue-500'
                         required value={password} onChange={(e)=> setPassword(e.target.value)}
                         />
                         <span onClick={()=>(setShowPassword(!showPassword))}
                          className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500'> 
                             {showPassword?<FaEyeSlash/>:<FaEye /> }
                         </span>
                         </div>
                </div>
                <div className='flex justify-between items-center text-sm'>
                     <label className='flex items-center gap-2' >
                         <input type="checkbox" />
                         Remember me
                     </label>
                     <button   className="text-blue-600 hover:underline">
                          Forgot Password
                     </button>
                </div>

                 <button
                    
                    onClick={finalsubmit}
                    className="w-full text-white py-2 rounded font-semibold shadow hover:opacity-90 transition"
                    style={{
                         backgroundImage: 'linear-gradient(to right, #2B35B1, #3AA4FF)',
                    }}
                    >
                    Log in
                 </button>

                 <div className="flex items-center my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="mx-2 text-sm text-gray-500">or</span>
              <hr className="flex-1 border-gray-300" />
            </div>
             <button
              type="button"
              className="w-full border border-blue-500 text-blue-600 py-2 rounded flex items-center justify-center gap-2 hover:bg-blue-50 transition"
            >
              <img src={Images.googlelogo} alt="Google Icon" className="h-5" />
              Sign in with Google
            </button>
            </form>
            
            
           </div>

           </div>
       </div>
   </>
  )
}

export default UserLogin