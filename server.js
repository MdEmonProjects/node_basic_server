const express = require('express')
const axios = require('axios');
const env = require('dotenv');
const app = express()
const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
  res.send("app running")
})

app.listen(PORT,()=>{
  console.log("app running on PORT 8080")
})