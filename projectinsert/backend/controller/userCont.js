const Usermdel = require("../model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const Usersignup=async(req,res)=>{
    // console.log(req.body)
    const{username,address,email,password} = req.body
    try {
         const salt = await bcrypt.genSalt(5)
        //  console.log(salt)
        const hashpassword = await bcrypt.hash(password,salt)
        // console.log(hashpassword)

        const respo = await Usermdel.create({
                    username: username,
                    address: address,
                    email: email,
                    password: hashpassword
                })
                res.status(200).send({msg:"sucfuuly login"})
            } catch (error) {
                console.log("server error")
            }
        
        }

const Userlogin=async(req,res)=>{
    // console.log(req.body)
  const { email, password } = req.body
  try {
     const user = await Usermdel.findOne({email}).select("+password")
    //  console.log(user)
     if(!user){
        return res.status(400).send({msg:"invalid email"})
     }

     const matchpassword = await bcrypt.compare(password,user.password)
    //  console.log(matchpassword)
     if(!matchpassword){
         return res.status(400).send({msg:"invalid password"})
     }

      const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})

     return res.status(200).send({msg:"sucess login",token,email:user.email,username:user.username})
  } catch (error) {
    res.status(400).send({ msg:"server error"})
    
  }
   
}

module.exports= {
    Usersignup,
    Userlogin
}