import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import itemRoute from "./routes/item.js"
import usersRoute from "./routes/users.js"

const app = express();
dotenv.config();

const connect = async () => {
  try { 
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB.');
  } catch (error) { 
    throw error;
  }
};


mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected.")
});

//middlewares
app.use("/api/auth", authRoute)
app.use("/api/item", itemRoute)
app.use("/api/user", usersRoute)

app.listen(8800, () => {
  connect();
  console.log("Connected to backend.");
});






// import express from "express"
// import dotenv from "dotenv"
// import mongoose from "mongoose"
// const app = express()
// dotenv.config()


// const connect = async ()=>{

// try { 
//     await mongoose.connect('process.env.MONGO')
//     console.log('Connected to mongoDB.')
// } catch (error) { 
//     throw error
// }

// };


// app.listen(8800, ()=>{
//     connect()
//     console.log("Connected to backend.")
// })