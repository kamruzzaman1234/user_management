const express = require("express");
const app = express();

const PORT = process.env.PORT || 6001

const users = [
    {id: 1, Name:"Rehena", department:"Computer Science and Engineering"},
    {id: 1, Name:"Rehena", department:"Computer Science and Engineering"},
    {id: 1, Name:"Rehena", department:"Computer Science and Engineering"},
    {id: 1, Name:"Rehena", department:"Computer Science and Engineering"},
    {id: 1, Name:"Rehena", department:"Computer Science and Engineering"}
]

app.get('/', (req, res)=>{
    res.send("Hello Web Browser")
})

app.get('/users', (req,res)=>{
    res.send(users)
})

app.listen(PORT, ()=>{
    console.log(`Server is running`)
})
