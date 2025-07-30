

const ValidationStore=(schema)=>{
    return (req,res,next)=>{
        const {error} = schema.validate(req.body);
        if(error){
            console.log(error.details[0].message);
            return res.send({msg : error.details[0].message})
        }
        next();
    }
}

module.exports = ValidationStore