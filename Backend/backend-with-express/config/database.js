import mongoose from "mongoose";
const db = async () => {
  try {
    const databaseresponse = await mongoose.connect(
      "mongodb://localhost:27017/backend-with-express",
    );
    console.log("db is connected Successfully.....!");
  } catch (error) {
    console.log(error);
  }
};
export default db;
