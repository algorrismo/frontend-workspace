import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


const mongoClient = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
  
  try {
    await mongoClient.connect();
    console.log("Connected to MongoDB");

    const db =mongoClient.db(process.env.MONGODB_NAME);

    const usersCollection = db.collection("curd-users");

    app.get("/",async(req,res)=>{
      res.send("Your crud Server is running!");
    })

    //* Lets get users
    app.get("/users",async(req,res)=>{
      const users = await usersCollection.find().toArray();
      res.json(users);
    })

    //* Lets create a user
    app.post("/users", async (req, res) => {
      const user = req.body;

      const result = await usersCollection.insertOne(user);

      res.status(201).json({
        message: "User created",
        id: result.insertedId
      });
    });

    app.listen(process.env.PORT,"0.0.0.0",()=>{
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    })

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }


}

startServer();


