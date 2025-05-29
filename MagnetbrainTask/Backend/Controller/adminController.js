const Adminmodel = require("../Model/AdminModel")
const InsertModel = require("../Model/InsertModel")
const Insetmodel = require("../Model/InsertModel")
const Ordermodel = require("../Model/orderModel")
const AdminLogin=async(req,res)=>{
       const{ Password, Email } = req.body
       console.log(req.body)
      try {
         const mydata = await Adminmodel.findOne({Email:Email})
         console.log(mydata)
         if(!mydata){
            return res.status(404).send({msg:"invalid email"})
         }

         if(mydata.Password !=Password){
              return res.status(401).send({msg:"invalid password"})
         }
        
           res.status(200).send({msg:"sucessfully login",mydata})
      } catch (error) {
        // console.log(error)
        res.status(400).send({msg:"server error"})
      }
      
}

 const InsertData=async(req,res)=>{
        // console.log(req.body)
        // console.log(req.files)
        const   {name,price,brand} = req.body
        const imagePaths = req.files.map(file=>"/uploads/"+file.filename)

        try {
           const response = await Insetmodel.create({
                          name: name,
                          price: price,
                          brand: brand,
                          defaultImage:imagePaths[0],
                          image:imagePaths
           })
             res.status(200).send({msg:"upload suceessfully"})
        } catch (error) {
           console.log(error)
        }

        
 }

  const Dispaydata=async(req,res)=>{
    try {
       const mydata = await InsertModel.find()
      //  console.log(mydata)
      res.status(200).send(mydata)
    } catch (error) {
      console.log(error)
    }
  }

  const Displaypayment=async(req,res)=>{
    try {
       const respo =   await Ordermodel.find()
       res.send(respo)
    } catch (error) {
       console.log(error)
    }
  }

module.exports={
    AdminLogin,
    InsertData,
    Dispaydata,
    Displaypayment
}