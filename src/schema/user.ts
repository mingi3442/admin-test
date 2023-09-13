import mongoose, { Model } from "mongoose";

const Schema = mongoose.Schema;

interface IUser extends mongoose.Document {
  name: string;
  age: number;
}
const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
  },
  age: Number,
});

// it represents the entire collection of User data
// const UserModel = mongoose.model<IUser>("User", UserSchema);
// module.exports = UserModel;
const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default User;
