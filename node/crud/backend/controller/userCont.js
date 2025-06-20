
const userModel = require("../model/usermodel")


const Insert=async(req,res)=>{
   const  { name, email, city } = req.body
    try {
        // console.log(req.body)
        // res.send("IIIIIIIIIIIIIIIIIIII")
        const respo = await userModel.create({
                name:name,
                email:email,
                city:city
        })

        res.status(200).send({msg:"sucfully insert",respo})
        
    } catch (error) {
        res.status(400).send({msg:"server error"})
    }
}


const Display=async(req,res)=>{
    try {
        const respo = await userModel.find()
         console.log(respo)
         res.status(200).send(respo)
    } catch (error) {
        res.status(400).send(error)
    }
}

const Delete=async(req,res)=>{
//    console.log(req.query)
const{ workid} = req.query
try {
    const respo = await userModel.findByIdAndDelete(workid)
    res.status(200).send({msg:"delete success"})
} catch (error) {
    console.log(error)
}
 
}

const Editshow=async(req,res)=>{
//   console.log(req.body)
//   res.send("eeeeee")

const {workid} = req.body
try {
    const respo = await userModel.findById(workid)
    console.log(respo)
    res.send(respo)
} catch (error) {
    console.log(error)
}
}

const Editsave=async(req,res)=>{
    // console.log(req.body)
    const {_id} = req.body
    // console.log(_id)
   
    try {
            await userModel.findByIdAndUpdate(_id,req.body)
            res.send({msg:"save suceesfully"})
    } catch (error) {
        console.log(error)
    }
}

const Search=async(req,res)=>{
//   console.log(req.body)
const {name}= req.body
try {
    const respo = await userModel.find({name:name})
    res.send(respo)
} catch (error) {
    console.log(error)
}
  
}
module.exports={
    Insert,
    Display,
    Delete,
    Editshow,
    Editsave,
    Search
}