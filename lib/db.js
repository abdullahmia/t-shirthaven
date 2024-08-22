// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error(
//     "Please define the DATABASE_URL environment variable inside .env.local"
//   );
// }

// export async function connectDB() {
//   try {
//     await mongoose.connect(String(process.env.MONGODB_URI), {
//       socketTimeoutMS: 900000,
//       connectTimeoutMS: 900000,
//       waitQueueTimeoutMS: 900000,
//     });
//   } catch (err) {
//     console.log("Error connecting to MongoDB", err);
//   }
// }

import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then((mongoose) => {
        return mongoose;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export const secureQuery = async (fn) => {
  return await fn();
};

export default connectDB;
