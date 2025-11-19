const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const PORT = process.env.PORT || 6001



// app.use(cors());
// app.use(express.json())

app.use(express.json());
app.use(cors())


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

    const database = client.db("newsData")
    const newsCollection = database.collection("news")


    app.get('/newsAdd', async(req,res)=>{
        const newsRes =  newsCollection.find()
        const result = await newsRes.toArray()
        res.send(result)
    })

    app.post('/newsAdd', async(req, res)=>{
        const news =  req.body 
        console.log("Add News", news)
        const resultNews = await newsCollection.insertOne(news)
        res.send(resultNews)
        
    })

  

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get('/', (req, res)=>{
    res.send("Hello server")
})


app.listen(PORT, ()=>{
    console.log(`Server is running`)
})
