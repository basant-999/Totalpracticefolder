   const Storemodel = require("../model/Storemodel")
   const StoreProdctmodel = require("../model/storeproduct")
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

      res.status(200).send({msg:"you are login",data:data._id})
   } catch (error) {
    console.log(error)
   }
  

}

 



 const Storeproduct=async(req,res)=>{
   console.log(req.files)
   console.log(req.body)
   const {name,price,description,StoreId} = req.body
   const imagePaths = req.files.map(file=>"productimages/"+file.filename)
   console.log(imagePaths)
   try {
       const product = await StoreProdctmodel.create({
           name:name,
           price:price,
           description:description,
           image:imagePaths,
            store_id:StoreId,
       })

       console.log(product);

       await Storemodel.findByIdAndUpdate(StoreId,{StoreProducts:product._id})

       res.send("bbbbbbbbbbbbbbbbbbbbb")
   } catch (error) {
      console.log(error)
   }
      //  res.send("bbbbbbbbbbbbbbbbbbbbb")

   
 }

  const Updatestoredata=async(req,res)=>{
   // console.log(req.params.id);
       try {
         const id= req.params.id
         const respo = await Storemodel.findOne({_id:id}).select("-StoreProducts -password")
         console.log(respo);
         res.send(respo);
       } catch (error) {
         
       }
      // res.send("okk");
  }

   const Finalstoreupdate=async(req,res)=>{
      try {
    console.log("BODY:", req.body);
    console.log("FILES:", req.files);

    const {
      _id,
      phone,
      city,
      state,
      pincode,
      category,
      description,
      email,
      address,
      storeName,
      ownerName,
    } = req.body;

    // ✅ Safe: only update StoreImg if file uploaded
    const updateData = {
      ownerName,
      storeName,
      address,
      email,
      phone,
      city,
      state,
      pincode,
      category,
      description,
    };

    if (req.files && req.files.length > 0) {
      updateData.StoreImg = "storeimages/" + req.files[0].filename; // ✅ with folder
    }

    await Storemodel.findByIdAndUpdate(_id, updateData);

    res.status(200).json({ message: "Store updated successfully" });
  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
   }

   const Getstoredata=async(req,res)=>{
      try {
         const respo = await Storemodel.find()
        //  console.log(respo)
         res.status(200).send(respo)
      } catch (error) {
        console.log(error)
      }

   }

   const GetStoreAllData=async(req,res)=>{
      const id = req.params.id;
      console.log(id);
      res.send("okk");
   }
 module.exports = {
    Storesignup,
    Storelogin,
    Storeproduct,
    Updatestoredata,
    Finalstoreupdate,
    Getstoredata,
    GetStoreAllData
 }