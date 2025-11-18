const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json())

const PORT = process.env.PORT || 6001

const users = [
    {id: 1, Name:"Rehena", department:"Computer Science and Engineering"},
    {id: 2, Name:"Mehena", department:"Computer Science and Engineering"},
    {id: 3, Name:"Nehena", department:"Computer Science and Engineering"},
    {id: 4, Name:"Oehena", department:"Computer Science and Engineering"},
    {id: 5, Name:"Pehena", department:"Computer Science and Engineering"}
]

app.get('/', (req, res)=>{
    res.send("Hello Web Browser")
})

app.get('/users', (req,res)=>{
    console.log(users)
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log(req.body);
    console.log("Post api called")

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})
app.listen(PORT, ()=>{
    console.log(`Server is running`)
})
