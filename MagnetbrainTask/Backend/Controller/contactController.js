const contactModel = require("../Model/ContactModel")
const Usercontact=async(req,res)=>{
    console.log(req.body)
    const {name,email,message} = req.body
    try {
        const response = await contactModel.create({
                name:name ,
                email:email,
                message:message,
        })
        res.status(200).send({msg:"suceessfully send message"})
    } catch (error) {
        res.status(400).send({msg:"server error"})
    }
 
}

module.exports={
    Usercontact
}