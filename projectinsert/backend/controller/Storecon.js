   const Storemodel = require("../model/Storemodel")

 const Storesignup=async(req,res)=>{
    //    console.log(req.body)
    const { ownerName, storeName, address,password,email}  = req.body

    try {
        const respo = await Storemodel.create({
                ownerName:ownerName,
                storeName:storeName,
                address:address,
                password:password,
                email:email
        })

        res.status(200).send({msg:"add your store"})
    } catch (error) {
        console.log(error)
    }
      
 }

const Storelogin=async(req,res)=>{
    // console.log(req.body)
   const { email, password } = req.body

   try {
      const data = await Storemodel.findOne({email:email})
      console.log(data)
      if(!data){
        return res.status(400).send({msg:"invalid email"})
      }
      if(data.password !==password){
         return res.status(400).send({msg:"invalid password"})
      }

      res.status(200).send({msg:"you are login"})
   } catch (error) {
    console.log(error)
   }
  

}

 module.exports = {
    Storesignup,
    Storelogin
 }