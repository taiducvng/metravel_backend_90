const jwt = require('jsonwebtoken');
const User = require("../models/User");
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log(authHeader)
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    console.log(token)
    console.log(process.env.JWT_SEC)
    jwt.verify(token, process.env.JWT_SEC, async (err, user) => {
      
      if (err) res.status(403).json('Invalid token')
      else{res.user = user;
      
        console.log(user)
        next();}
    })
  } else {
    return res.status(401).json('You are not authenticated');
  }
};

const verifyAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id) {
      next();
    } else {
      res.status(403).json('You are restricted from performing this')
    }
  });
};

module.exports = { verifyToken, verifyAndAuthorization };
