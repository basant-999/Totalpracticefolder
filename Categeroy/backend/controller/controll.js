const categorymodel =  require("../model/categoModel")
const subcategorymodel = require("../model/subcategory")
const promodel = require("../model/proModel")
const Addcategory=async(req,res)=>{
//    console.log(req.body)
const {category} = req.body
try {
    const respo = await categorymodel.create({
        category:category
    })

    res.status(200).send({msg:"add sucfuuly",respo})
} catch (error) {
    console.log(error)
}
   
}

const Getcategory=async(req,res)=>{
     try {
        const respo = await categorymodel.find()
        // console.log(respo)
        res.status(200).send(respo)
     } catch (error) {
        console.log(error)
     }
}

const Subcategory = async (req, res) => {
    const { category, subcategory } = req.body;

    try {
        if (!category) {
            return res.status(400).send({ msg: "select category" });
        }

        const gatecategory = await categorymodel.findById(category);
        // console.log(gatecategory);

        if (!gatecategory) {
            return res.status(400).send({ msg: "not found" });
        }

        await subcategorymodel.create({
            category: category,
            subcategory: subcategory,
            categoryId: gatecategory._id
        });

        res.status(200).send({ msg: "succfuly add" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ msg: "something went wrong" });
    }
};

const Getsubcategory=async(req,res)=>{
        try {
            const data = await subcategorymodel.find().populate("categoryId")
            // console.log(data)
            res.status(200).send(data)
        } catch (error) {
            console.log(error)
        }
}

 const Saveproduct=async(req,res)=>{
    // console.log(req.body)

 const { name, category,  price, subcategory, disp} = req.body
 try {
     const respo = await promodel.create({
                name: name,
                price:price,
                disp: disp,
                category: category,
                subcategory:subcategory
     })

         res.status(200).send({msg:"sucessfuly"})
 } catch (error) {
    console.log(error)
 }
 
  
 }


 const Displaydata=async(req,res)=>{
        try {
            const respo = await promodel.find()
            // console.log(respo)
            res.status(200).send(respo)
        } catch (error) {
            console.log(error)
        }
 }

module.exports={
    Addcategory,
    Getcategory,
    Subcategory,
    Getsubcategory,
    Saveproduct,
    Displaydata
}