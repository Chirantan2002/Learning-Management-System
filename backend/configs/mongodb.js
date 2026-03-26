import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is not defined");
    }

    mongoose.connection.on("connected", () => {
      console.log("MongoDB Database is connected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("MongoDB error:", err.message);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });

    await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
  } catch (err) {
    console.log("Database connection failed", err);
    process.exit(1); // stops the app if DB fails
  }
};

export default connectDB;
