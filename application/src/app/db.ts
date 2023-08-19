import mongoose, { ConnectOptions } from "mongoose";

export default async function dbConnection() {
  const uri: string =
    process.env.MONGODB_URI || "mongodb://localhost:27017/intergalactic-db";
  let dbConnection: any;

  if (!dbConnection) {
    dbConnection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
  }
}
