const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');


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






const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.kc1wnzy.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});




async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get('/', (req, res)=>{
    res.send("Hello Web Browser")
})

app.get('/users', (req,res)=>{
    
    res.send(users)
})

app.post('/users', (req, res)=>{
    console.log(req.body);
    console.log("Post api called")
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
});


app.listen(PORT, ()=>{
    console.log(`Server is running`)
})
