const express = require('express')
const Instagram = require('instagram-web-api')
const app = express()
const PORT = process.env.PORT || 8080

const instagramLoginFunction = ()=>{
  console.log("insta login func")
  const client = new Instagram({
    username: process.env.INSTA_USERNAME,
    password: process.env.INSTA_PASSWORD
  })

  const instagramPictureFunction = async ()=>{
    await client
      .getPhotosByUsername({username: process.env.INSTA_USERNAME}).then((res)=>{
        console.log(res)
      })
  }
}
instagramLoginFunction()
app.get('/',(req,res)=>{
  res.send("app running")
})
app.listen(PORT,()=>{
  console.log("app running on PORT 8080")
})