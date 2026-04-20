
const fs = require("fs")
const path = require("path")
const LogFilePath = path.join(__dirname,"../logs/app.log")
  
//      msg = argument receive karne wala variable (parameter)
const log =(msg)=>{
      const time =  new Date().toLocaleString()
        const finalMsg = `[${time}] ${msg}\n`
        // console.log(finalMsg)
        fs.appendFileSync(LogFilePath,finalMsg,"utf8")
}

module.exports=log