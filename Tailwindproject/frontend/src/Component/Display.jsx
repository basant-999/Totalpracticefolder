import React, { useState } from 'react'
import { IoHome } from "react-icons/io5";
import { IoWalletSharp } from "react-icons/io5";
import { FaTruckFast } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";
import { FaUserSecret } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiLogoBootstrap } from "react-icons/bi";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Base_url from '../Base_url';
import axios from 'axios';
import { useEffect } from 'react';
const Display = () => {
  const [openDropdown, setOpenDropdown] = useState([]);

  useEffect(() => {
  const token = localStorage.getItem("token")
  let api = `${Base_url}user/dashboard`
  axios.get(api, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then (res=>{
     console.log("desh respo",res.data)
  }).catch(err=>{
    console.log("error",err)
  })
  
}, [])

   const toggleDr =(label)=>{
        if(openDropdown.includes(label)){
             setOpenDropdown(openDropdown.filter((bk)=>bk!==label))
        }else{
          setOpenDropdown([...openDropdown,label])
        }
   }
  const sidebarItem = [
    {icon:<IoHome />,label:"dashboard"},
    {icon:<IoWalletSharp />,label:"wallet"},
    {icon:<FaTruckFast />,label:"vehicle",
      chidren:[
        {icon:<FaTruckFast />,label:"manahe vehicle"}
      ]
    },
    {icon:<FaAddressBook />,label:"booking",
      chidren:[
        {icon:<FaTruckFast />,label:"basant"},
         {icon:<FaTruckFast />,label:"kisan"},
          {icon:<FaTruckFast />,label:"raju"},
           {icon:<FaTruckFast />,label:"priya"}
      ]
    },
    {icon:<FaUserSecret />,label:"user",
      chidren:[
         {icon:<FaUser />,label:"amit"},
          {icon:<FaUser />,label:"ram"},
           {icon:<FaUser />,label:"udat"},
            {icon:<FaUser />,label:"atika"}
      ]
    }
  ]
  return (
    
    <>
   
<div className='w-[280px] bg-white rounded m-2 shadow-[0px_1px_4.5px_rgba(0,0,0,0.3)] h-screen flex flex-col'>
            {/*   logo section  */}
            <div className='flex  justify-between items-center p-4'>
                 <div className=' w-[50%]'>
                    <BiLogoBootstrap size={40} />
                  </div>
                <div className='flex text-3xl inter leading-[140%]    w-[50%] overflow-hidden'>
                    <div >basant</div>
                    <div className='truncate'>kurrrrrrrrrrr</div>
                </div>
            </div>
            
            {/* ========== under line border ===============   */}

            <div className=' h-0.5  mr-4 ml-4 bg-gradient-to-r from-red-700 via-yellow-300 to-green-500'></div>

          
            {/*  item section */}

<div className='flex-1 overflow-y-auto mt-4 scrollbar-hide'>
                <ul className=' flex flex-col   gap-5'>
                    {sidebarItem.map((item,i)=> (
                        <li>
                            <div >
                                  <div  className='flex items-center justify-between px-5 h-[45px]  bg-amber-300'
                                >
                                       <div className='flex items-center gap-5 group cursor-pointer'>
                                          <span className='text-[rgba(160,174,192,1)] group-hover:text-[rgba(43,53,177,1)]'>{item.icon}</span>
                                          <span className=' text-[rgba(160,174,192,1)] group-hover:text-[rgba(44,44,44,1)] ' >{item.label}</span>
                                       </div>

                                        <div  onClick={()=>(item.chidren?toggleDr(item.label):null)}>
                                            {
                                              item.chidren && 
                                              (openDropdown.includes(item.label)?(<FaChevronUp className='text-gray-700' />):(  <FaChevronDown  className='text-gray-700'/>))
                                            }
                                        </div>
                                  </div>
                                  {
                                    item.chidren && openDropdown.includes(item.label)&&
                                    (
                                      <ul>
                                        {
                                          item.chidren.map((sk)=>{
                                            return(
                                              <>
                                            <div className='flex items-center p-2 rounded  hover:text-white gap-5 px-5 hover:bg-[#2B35B1] text-[rgba(98,98,98,1)] text-[14px] leading-[150%] tracking-[0px]  '>
                                              <li className=''>{sk.icon}</li>
                                              <li className=''>{sk.label}</li>
                                            </div>
                                                </>
                                            )
                                          })
                                        }
                                      </ul>
                                    )
                                    
                                  }
                            </div>
                        </li>
                    ))
                       
                       }
                </ul>
            </div>

            {/* ==============last div =================== */}

           <div className='flex items-center gap-5 p-4 group  cursor-pointer bg-amber-400'>
            <IoSettingsSharp className='text-[rgba(160,174,192,1)] group-hover:text-[rgba(43,53,177,1)]'  />
            <span className=' text-[rgba(160,174,192,1)] group-hover:text-[rgba(44,44,44,1)]'>Setting</span>
          </div>

       </div>
       
    </>
  )
}

export default Display