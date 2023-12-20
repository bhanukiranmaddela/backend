import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
import { router } from "./routes/user-router.js";
import { blogRouter } from "./routes/blog-route.js";
console.log("OKKKKKKKKKKK");

const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const uri =
  "mongodb+srv://abc:Test%40123@cluster0.lyeolog.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(
    "mongodb+srv://maddelabhanukiran:Test%40123@cluster0.lyeolog.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected "))
  .then(() => app.listen(5000, () => console.log("listening..")))
  .catch((err) => console.log(err, "LLLLLL"));
//Test@123--pwd for mongoDB
