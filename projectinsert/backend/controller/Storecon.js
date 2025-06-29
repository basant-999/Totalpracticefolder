   const Storemodel = require("../model/Storemodel")
   const Storeinsert = require("../model/Storeinsert")
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

 const Insertstore=async(req,res)=>{
      console.log(req.files,"file")
      console.log(req.body,"body")
      const{storename,location,variety} = req.body
      const imagePaths = req.files.map(file => "storeimages/" + file.filename);
      console.log(imagePaths);
      try {
             const result = await  Storeinsert.create({
                   storename:storename,
                  location:location,
                  variety:variety,
                  defaultimage:imagePaths[0],
                  image:imagePaths
           })

           res.status(200).send({msg:"create strore",result})
      } catch (error) {
         console.log(error)
      }
    
 }


 const Getstoredata=async(req,res)=>{
      try {
         const respo = await Storeinsert.find()
         // console.log(respo)
         res.status(200).send(respo)
      } catch (error) {
         console.log(error)
      }
 }

 const Storeproduct=async(req,res)=>{
   console.log(req.files)
   console.log(req.body)
   res.send("bbbbbbbbbbbbbbbbbbbbb")

 }

 module.exports = {
    Storesignup,
    Storelogin,
    Insertstore,
    Getstoredata,
    Storeproduct
 }