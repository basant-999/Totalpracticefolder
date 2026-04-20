const userModel = require("../model/UserModel")
const bcript = require("bcryptjs")
const jwt = require("jsonwebtoken")
const log = require("../utils/logger")  
const UserLogin = async(req,res)=>{
    //    console.log(req.body)
    const{email,password} = req.body

    log(`LOGIN TRY - ${email}`)        // test logs ke liye th 
   
    try {
         const user = await userModel.findOne({email})
        if(!user){
             log(`LOGIN FAIL - user not found: ${email}`)    // test logs ke liye th 
            return res.status(400).send({msg:"invalid user"})
        }
        //   console.log("DB password:", user.Password);
        //   console.log("Entered password:", password); 

        const MatchPass = await bcript.compare(password,user.Password)

        // console.log("Match result:", MatchPass) 
        if(!MatchPass){
              log(`LOGIN FAIL - wrong password: ${email}`)
            return res.status(400).send({msg:"invalid password"})
        }
              log(`LOGIN SUCCESS - ${email}`)  // test logs ke liye th 
        // =================jwt token code =============
            const token = jwt.sign(
                {  id:user._id  },
                process.env.JWT_SECRET
            )
        // if(user.Password!== password){
        //     return res.status(400).send({msg:"invalid password"})
        // }
         
        return res.status(200).send({msg:"login success",token})
    } catch (error) {
        // console.log(error)
             log(`ERROR - login issue for ${email}: ${error.message}`)   // test logs ke liye th 
        return res.status(400).send({msg:"error@@@@@@@@@ "})
    }
}


module.exports={
    UserLogin
}
