const jwt = require("jsonwebtoken");

const config = require('../config/jwt');

// Verify a JWT token
function verifyToken (req, res, next)  {
  //token:any;
 let token =
    req.body.token || req.query.token || req.headers["authorization"];
  console.log(req.body)
  console.log(req.query.token )

  console.log(token.replace("Bearer ",""))
//TODO: uncomment it.
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token.replace("Bearer ",""), config.secret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;

