import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";
import { ObjectId } from "mongodb";

dotenv.config();

//“Express, use this middleware for incoming requests.”
const app = express(); //?“Add this middleware to my Express server.”
app.use(cors());//? Cross-Origin Resource Sharing
app.use(express.json()); //?allow Express to read JSON data.


const mongoClient = new MongoClient(process.env.MONGODB_URI);

async function startServer() {
  
  try {
    await mongoClient.connect();
    console.log("Connected to MongoDB");

    //Select the database
    const db =mongoClient.db(process.env.MONGODB_NAME);

    //Select the collection/ creating the collection if it doesn't exist
    const usersCollection = db.collection("curd-users");

    //home page will some this
    //*req -> coming from the client. Client → Server
    //*res -> going back to the client. Server → Client
    app.get("/",async(req,res)=>{
      res.send("Your crud Server is running!");
    })

    //* Lets get users
    //   [
    // { name: "Ismail" },
    // { name: "John" }
    //     ]
    app.get("/users",async(req,res)=>{
      const users = await usersCollection.find().toArray();
      res.json(users); //sends that array to the frontend.
    })

    //* Lets get a single user by ID(dynamic value)
    app.get("/users/:id",async(req,res)=>{
      // const users = await usersCollection.find().toArray();
      // res.json(users);
      try{
        const userID = req.params.id; //dynamic ID, JS string
        const user = await usersCollection.findOne(
          { _id: new ObjectId(userID) }
        );
        res.json(user); 
      }catch(error){
        console.error("Error fetching user:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
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

    //* Lets delete a user
    //? "/users/:id" => means the URL contains a dynamic ID.
    app.delete("/users/:id", async (req, res) => {
      try{
        const userID = req.params.id; //dynamic ID
        const result = await usersCollection.deleteOne(
          { _id: new ObjectId(userID) }
        );
        res.send(result);
      }catch(error){
        console.error("Error deleting user:", error);
      }

    })

    //* Lets update a user
    app.put("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const updatedUser = req.body;

    const result = await usersCollection.updateOne(
      {
        _id: new ObjectId(id),
      },
      {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      }
    );

    res.send(result);

  } catch (error) {
    console.error(error);

    res.status(500).send({
      message: "Failed to update user",
    });
  }
});


    app.listen(process.env.PORT,"0.0.0.0",()=>{
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    })

  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }


}

startServer();


