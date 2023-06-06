const express = require('express')
const app = express()
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const authRoute =require("./routes/auth");
const userRoute =require("./routes/user");
dotenv.config();
// process.env.VARIABLE_NAME

mongoose.connect(process.env.MONGU_URL).then(()=> console.log('db connected')).catch((err)=> {console.log.err});
app.use(express.json());
app.use("/api/",authRoute);
app.use("/api/users",userRoute);
// localhost:5001/api/users/id
app.listen(process.env.PORT || 5002, () => console.log(`Example app listening on port ${process.env.PORT}!`));
