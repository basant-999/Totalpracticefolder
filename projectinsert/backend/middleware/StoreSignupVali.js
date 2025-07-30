const joi = require("joi")

const StoresignupValidation = joi.object({
    
       ownerName:joi.string().min(3).required(),
      storeName:joi.string().min(5).required(),
       address:joi.string().min(5).required(),
       password:joi.string().min(4).max(10).required(),
       email:joi.string().email().required()
})

module.exports={
    StoresignupValidation
}