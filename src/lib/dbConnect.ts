import mongoose from "mongoose";

interface ConnectionObject {
  isConnected? : number;
}

const connection : ConnectionObject = {};

export default async function dbConnect(): Promise<void> {
  if(connection.isConnected) {
    console.log("Already Connected to Database");
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI  || '', {})
    connection.isConnected = db.connections[0].readyState;

  } catch (error) {
    console.log("Error Connecting to Database",error);
    process.exit(1);
  }
}