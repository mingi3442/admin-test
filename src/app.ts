import express, { Request, Response } from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import mongoose from "mongoose";
// import { UserModel } from "./schema";
import "dotenv/config";

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const passport = require("passport");

// const User = require("../schema/user");
const uri = process.env.MONGO_DB_URL || "";
const port = process.env.PORT || 8080;
const app = express();
mongoose
  .connect(uri)
  .then(() => {})
  .catch((e: any) => console.error(e));

// interface IUser extends mongoose.Document {
//   name: string;
//   email: string;
// }

// const UserSchema = new mongoose.Schema<IUser>({
//   name: { type: String, required: true },
//   email: { type: String, required: true },
// });

// const ItemSchema = new mongoose.Schema({
//   name: String,
// });
// export const Item = mongoose.model("Item", ItemSchema);

// const UserModel = mongoose.model<IUser>("User", UserSchema);
// 내장된 미들웨어를 사용하여 JSON 파싱
app.use(express.json());

// 내장된 미들웨어를 사용하여 URL 인코딩
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req: Request, res: Response) => {
  console.log("Hello World");
  res.send("Hello World");
});

// app.post("/item", async (req: Request, res: Response) => {
//   try {
//     const item = new Item(req.body);
//     const savedItem = await item.save();
//     res.status(201).send(savedItem);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// app.get("/item/:id", async (req: Request, res: Response) => {
//   try {
//     const item = await Item.findById(req.params.id);
//     if (item) {
//       res.status(200).send(item);
//     } else {
//       res.status(404).send({ message: "Item not found" });
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

// app.post("/user", async (req: Request, res: Response) => {
//   // 사용자 데이터 저장
//   const user = new UserModel({
//     name: "John Doe",
//     age: 25,
//   });

//   await user.save();
//   console.log("User saved!");
//   return res.status(200).send({ message: "User saved!" });
// });
// app.get("/user", async (req: Request, res: Response) => {
//   try {
//     const item = await UserModel.find();
//     if (item) {
//       res.status(200).send(item);
//     } else {
//       res.status(404).send({ message: "Item not found" });
//     }
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
import userRouter from "./routes/userRoute";
import bodyParser from "body-parser";
app.use("/user", userRouter);
app.listen(8080, async () => {
  try {
    // MongoDB 연결
    // await mongoose.connect("mongodb://127.0.0.1:27017/test", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
  } catch (error) {}
  console.log(`Example app listening on port ${port}`);
});

export default app;
