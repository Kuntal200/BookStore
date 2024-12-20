import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import contactRoute from "./route/contact.route.js"
import cors from "cors";
const app = express()
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT=process.env.PORT||4001;
const URI=process.env.MongoDBURI;
//connecting to database
try {
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    });
    console.log("connected to MongoDB DataBase");
    
} catch (error) {
    console.log("Error",error);
    
}

app.use("/book",bookRoute);
app.use("/user",userRoute);
app.post('/contact', contactRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})