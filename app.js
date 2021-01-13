const express = require("express")

const app = express()

app.get("/" , (req,res) => {
    res.send("Hello World")
})

app.get("/user/:name", (req,res) =>{
    let a = req.params.name;
    res.send(`Hello ${a}`) 
})

app.listen(4000)