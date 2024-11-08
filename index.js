require('dotenv').config()

const express = require('express')

const app = express()

const port = 1000

app.get('/',(req,res)=>{
    res.send("Made By Kittu")

})
app.get('/login',(req,res)=>{
    res.send("<h1>Customer is Waiting For Login</h1>")
})
app.listen(process.env.PORT,()=>{
    console.log(`server is up and running on ${port}`)
})