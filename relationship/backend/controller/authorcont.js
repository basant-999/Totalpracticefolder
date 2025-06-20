 const authormodel = require("../model/authormodel")
const Authormodel  = require("../model/authormodel")
const bookmodel = require("../model/bookmodel")

const Inserdata=async(req,res)=>{
     console.log(req.body)
    const {name, city, email} = req.body
    try {
        const respo = await Authormodel.create({
                 name:name,
                 city:city,
                 email:email,
        })
        res.status(200).send({msg:"sucessful",respo})
    } catch (error) {
        console.log(error)
    }
   
}

const Authorshow=async(req,res)=>{
     try {
        const respo = await Authormodel.find()
        res.status(200).send(respo)
     } catch (error) {
        console.log(error)
     }
}

const Addbook=async(req,res)=>{
     const { bookname, bookprice, id }=req.body;
     await bookmodel.create({
        bookname:bookname,
        bookprice:bookprice,
        authorid:id
     })
     res.send("1111111111")
}

const Bookdata=async(req,res)=>{
    const data = await bookmodel.find().populate("authorid");
    res.send(data);
}

const Authordata=async(req,res)=>{
    const {autherId}=req.body;
    console.log(req.body);
    const data = await bookmodel.find({authorid:autherId})
    console.log(data);
    res.send(data);
    // res.send("okk");
}

module.exports={
    Inserdata,
    Authorshow,
    Addbook,
    Bookdata,
    Authordata
}