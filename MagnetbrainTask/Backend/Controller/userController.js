  const bcrypt = require("bcryptjs")
  const jwt = require("jsonwebtoken")
  const Usermodel = require("../Model/userModel")
const userModel = require("../Model/userModel")



  const Signup=async(req,res)=>{
      console.log(req.body)
      const{ name,city,email,password} = req.body
      try {
         const salt = await bcrypt.genSalt(5)
         const hashpassword = await bcrypt.hash(password,salt)
        //  console.log(hashpassword)
        //  console.log(salt)
          await Usermodel.create({
                name:name,
                city:city,
                email: email,
                password:hashpassword
          })
          res.status(200).send({msg:"suceesfuly register"})
      } catch (error) {
         res.status(400).send({msg:"server error"})
      }
         
  }


const Userlogin=async(req,res)=>{
    //  console.log(req.body)
   const { email, password } = req.body
   try {
         const user = await Usermodel.findOne({email})
         if(!user){
           return res.status(400).send({msg:"invalid user"})
         }

          const matchpassword = await bcrypt.compare(password,user.password)
          if(!matchpassword){
           return  res.status(400).send({msg:"invalid password"})
          }

          const token = jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"1d"})

        return  res.status(200).send({msg:"suceesfully login",user,token})

   } catch (error) {
      res.status(400).send({msg:"server error"})
   }
  
}
const CartItems=async(req,res)=>{
    const {CartId,UserId} = req.body;
    try { 
          // const udata = await userModel.findOne({_id:UserId});
          // console.log(udata);
          const data = await userModel.findOneAndUpdate({_id:UserId},{$push:{cartItem:{productId:CartId}}})
          // console.log(data)
          // console.log("Added")
          res.send("okk");
    } catch (error) {
      console.log(error)
    }

    
}

const userAuthentication=async(req,res)=>{
      //  console.log(req.body)
      // console.log(req.headers)
      const{authorization} = req.headers
      const token = authorization.split(" ")[1]
      // console.log(token)
      try {
        const decodeToken = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(decodeToken)
        const user = await userModel.findById(decodeToken.id).select("-password")
        // console.log(user)
        res.status(200).send(user)
      } catch (error) {
        res.status(400).send(error)
      }
       
}

module.exports={
    Userlogin,
    Signup,
    CartItems,
    userAuthentication
}