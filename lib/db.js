import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the DATABASE_URL environment variable inside .env.local"
  );
}

export async function connectDB() {
  try {
    await mongoose.connect(String(process.env.MONGODB_URI));
  } catch (err) {
    console.log("Error connecting to MongoDB", err);
  }
}
