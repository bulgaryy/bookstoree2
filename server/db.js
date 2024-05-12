import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const Connection = async () => {
    mongoose
  .connect('mongodb+srv://paulgaryoca:Paulgary1412@mern-estate.gs6hsyz.mongodb.net/mern-estate?retryWrites=true&w=majority&appName=mern-estate')
  
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.log(err);
  });
}
Connection()
