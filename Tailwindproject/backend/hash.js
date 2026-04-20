
   const bcript = require("bcryptjs")

   bcript.hash("zzbkushwaha",10).then((hash)=>{
         console.log(hash)
   })