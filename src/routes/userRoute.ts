import { Request, Response, Router } from "express";
import User from "../schema/user";
const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (users) {
      res.status(200).send(users);
    } else {
      res.status(404).send({ message: "Item not found" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.post("/create", async (req: Request, res: Response) => {
  const { name, age } = req.body;
  console.log(name, age);
  const user = new User({
    name,
    age,
  });

  await user.save();
  console.log("User saved!");
  return res.status(200).send({ message: "User saved!" });
});

export default userRouter;
