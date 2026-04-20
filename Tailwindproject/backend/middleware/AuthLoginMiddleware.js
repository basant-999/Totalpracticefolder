const jwt = require("jsonwebtoken");
const log = require("../utils/logger")
const authMiddelware = (req, res, next) => {
              log("MIDDLEWARE HIT");    // log bnnaane ke liye  
    const token = req.headers.authorization;
          
              log("NO TOKEN PROVIDED");  // log bnnaane ke liye  
    if (!token) {
        return res.status(400).send({ msg: "no token" });
    }

    try {
        // Bearer token ko split karke extract karna
        const finaltoken = token.split(" ")[1];
        
        // Verify karna (try block handle karega agar verify fail hua toh)
        const decoded = jwt.verify(finaltoken, process.env.JWT_SECRET);

           log(`TOKEN VERIFIED - userId: ${decoded.id}`)     // log bnnaane ke liye  
        req.user = decoded;
        next();
    } catch (error) {
         log(`INVALID TOKEN - ${error.message}`)          // log bnnaane ke liye

        // Agar token invalid ya expire hai toh server crash nahi hoga, ye error jayega
        return res.status(401).send({ msg: "Invalid or Expired Token" });
    }
};

module.exports = authMiddelware;
