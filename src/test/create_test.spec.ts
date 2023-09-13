import assert from "assert";
import User from "../schema/user";
import "dotenv/config";
import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const MONGO_DB_URL = process.env.MONGO_DB_URL || "";
mongoose.connect(MONGO_DB_URL);

mongoose.connection
  .once("open", () => console.log("Connected!"))
  .on("error", (error: any) => {
    console.warn("Error : ", error);
  });

describe("Creating documents in MongoDB", () => {
  beforeEach((done) => {
    done();
    //drop table
    // mongoose.connection.collections.users.drop().then(() => {
    //   done();
    // });
  });
  it("Creates a New User", (done) => {
    const newUser = new User({ name: "Lee", age: 1 });
    newUser
      .save() // returns a promise after some time
      .then((res) => {
        console.log(res);
        //if the newUser is saved in db and it is not new
        assert(!newUser.isNew);
        done();
      })
      .catch((err) => {
        done(err); // Promise가 거부되면 done(err)를 호출하여 테스트 실패 처리
      });
  });
  it("Finds user with the name", (done) => {
    User.findOne({ name: "Lee" })
      .then((user: any) => {
        assert(user.name === "Lee");
        done();
      })
      .catch((err) => {
        done(err); // Promise가 거부되면 done(err)를 호출하여 테스트 실패 처리
      });
  });
});
